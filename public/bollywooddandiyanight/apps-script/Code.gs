// ==========================================
// CONFIGURATION
// ==========================================
const SPREADSHEET_ID = "YOUR_SPREADSHEET_ID_HERE";
const DRIVE_FOLDER_ID = "YOUR_DRIVE_FOLDER_ID_HERE";
const TICKET_PRICE = 249;
const EVENT_NAME = "Bollywood Dandiya Night - Season 2";

// ==========================================
// SETUP FUNCTION
// Run this ONCE from the Apps Script editor to initialize the sheet
// ==========================================
function setup() {
  try {
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getActiveSheet();
    const headers = [
      "Booking ID", 
      "Submission Timestamp", 
      "Name", 
      "WhatsApp Number", 
      "Number of People", 
      "Email", 
      "Delivery Address", 
      "Ticket Price", 
      "Total Amount", 
      "Payment Screenshot URL", 
      "Booking Status"
    ];
    
    // Check if headers already exist
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(headers);
      sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold").setBackground("#f3f3f3");
      // Freeze top row
      sheet.setFrozenRows(1);
    }
    
    Logger.log("Setup completed successfully!");
  } catch (e) {
    Logger.log("Error during setup: " + e.toString());
    throw new Error("Setup failed. Check Spreadsheet ID and permissions.");
  }
}

// ==========================================
// WEB APP POST HANDLER
// ==========================================
function doPost(e) {
  // CORS Response headers (if needed by client, though fetch usually handles it based on webapp settings)
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  };

  try {
    // Parse the incoming stringified JSON
    const data = JSON.parse(e.postData.contents);
    
    // 1. Validate required fields
    if (!data.name || !data.whatsapp || !data.quantity || !data.email || !data.address || !data.fileData) {
      return returnJSON({status: 'error', message: 'Missing required fields or payment screenshot.'});
    }
    
    // 2. Validate quantity
    const quantity = parseInt(data.quantity, 10);
    if (isNaN(quantity) || quantity < 1) {
      return returnJSON({status: 'error', message: 'Invalid quantity.'});
    }
    
    // 3. Calculate Total Server-Side
    const totalAmount = quantity * TICKET_PRICE;
    
    // 4. Validate MIME Type securely
    const validMimeTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!validMimeTypes.includes(data.mimeType)) {
      return returnJSON({status: 'error', message: 'Invalid file format. Only JPG, PNG, WEBP are allowed.'});
    }

    // 5. Generate Booking ID (Format: BDN-YYMMDD-XXXX)
    const dateObj = new Date();
    const dateStr = Utilities.formatDate(dateObj, Session.getScriptTimeZone(), "yyMMdd");
    const randomStr = Math.floor(1000 + Math.random() * 9000);
    const bookingId = `BDN-${dateStr}-${randomStr}`;
    
    // 6. Upload Image to Google Drive
    let fileUrl = "";
    try {
      const folder = DriveApp.getFolderById(DRIVE_FOLDER_ID);
      const fileBlob = Utilities.newBlob(Utilities.base64Decode(data.fileData), data.mimeType, `${bookingId}_${data.fileName}`);
      const uploadedFile = folder.createFile(fileBlob);
      // We don't make it public, we just store the URL so the owner can click it
      fileUrl = uploadedFile.getUrl();
    } catch (uploadError) {
      return returnJSON({status: 'error', message: 'Failed to upload payment screenshot. ' + uploadError.toString()});
    }
    
    // 7. Save to Google Sheets
    try {
      const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getActiveSheet();
      const timestamp = new Date();
      
      const rowData = [
        bookingId,
        timestamp,
        data.name,
        data.whatsapp,
        quantity,
        data.email,
        data.address,
        TICKET_PRICE,
        totalAmount,
        fileUrl,
        "Payment Verification Pending"
      ];
      
      sheet.appendRow(rowData);
    } catch (sheetError) {
      return returnJSON({status: 'error', message: 'Failed to record booking. ' + sheetError.toString()});
    }
    
    // 8. Return Success Response
    return returnJSON({
      status: 'success', 
      bookingId: bookingId,
      message: 'Booking submitted successfully.'
    });

  } catch (error) {
    return returnJSON({status: 'error', message: 'Server error: ' + error.toString()});
  }
}

// Helper for handling preflight OPTIONS requests if needed
function doOptions(e) {
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
}

function returnJSON(object) {
  return ContentService.createTextOutput(JSON.stringify(object))
    .setMimeType(ContentService.MimeType.JSON);
}
