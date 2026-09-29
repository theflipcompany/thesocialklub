# Bollywood Dandiya Night - Season 2 | Booking Form

A fully responsive, multi-step ticket booking form integrated with Google Apps Script, Google Sheets, and Google Drive.

## Features
- Multi-step form with step-by-step validation.
- Responsive, premium Bollywood-themed design.
- Dynamic ticket price calculation.
- Payment screenshot upload with preview.
- Server-side validation and price calculation.
- Automated Google Drive uploads.
- Automated Google Sheets entry.

---

## Backend Setup (Google Apps Script)

### Step 1: Create Google Sheet & Drive Folder
1. Go to [Google Sheets](https://sheets.google.com) and create a new blank spreadsheet.
2. Note the **Spreadsheet ID** from the URL: `https://docs.google.com/spreadsheets/d/[SPREADSHEET_ID]/edit`
3. Go to [Google Drive](https://drive.google.com) and create a new folder (e.g., "Dandiya Night Payments").
4. Note the **Folder ID** from the URL: `https://drive.google.com/drive/folders/[FOLDER_ID]`

### Step 2: Create Apps Script Project
1. In your newly created Google Sheet, go to **Extensions > Apps Script**.
2. Delete any code in `Code.gs` and paste the contents of `apps-script/Code.gs`.
3. In the Apps Script editor, click on the **Project Settings** (gear icon) on the left.
4. Check **"Show 'appsscript.json' manifest file in editor"**.
5. Go back to the editor, open `appsscript.json`, and paste the contents of `apps-script/appsscript.json`.

### Step 3: Configure IDs
In `Code.gs`, replace the placeholder variables at the top with your actual IDs:
```javascript
const SPREADSHEET_ID = "YOUR_SPREADSHEET_ID_HERE";
const DRIVE_FOLDER_ID = "YOUR_DRIVE_FOLDER_ID_HERE";
```

### Step 4: Run Setup Function & Authorize
1. In the Apps Script editor toolbar, select the `setup` function from the dropdown.
2. Click **Run**.
3. A prompt will appear asking for permissions. Click **Review permissions**.
4. Choose your Google account.
5. You might see "Google hasn't verified this app". Click **Advanced**, then **Go to Untitled project (unsafe)**.
6. Click **Allow**.
7. Check your Google Sheet; the column headers should now be populated.

### Step 5: Deploy as Web App
1. In the Apps Script editor, click **Deploy > New deployment** in the top right.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Description: `Version 1`
4. Execute as: **Me**
5. Who has access: **Anyone**
6. Click **Deploy**.
7. Copy the **Web app URL**. It will look like `https://script.google.com/macros/s/.../exec`.

---

## Frontend Setup

### Step 1: Configure Frontend URL
1. Open `script.js` in this project folder.
2. Locate line 3: `const APPS_SCRIPT_URL = 'YOUR_WEB_APP_URL_HERE';`
3. Replace `'YOUR_WEB_APP_URL_HERE'` with the Web App URL you copied from Apps Script.

### Step 2: Add Payment Instructions
1. Open `index.html`.
2. Locate Step 6 (`<div class="step" id="step-6">`).
3. Find the `<!-- Organizer can add QR code or UPI ID here -->` comment.
4. Add your UPI ID, Bank Details, or an `<img>` tag with your Payment QR code.

### Step 3: Deployment to Website
1. Copy the entire `bollywooddandiyanight` folder.
2. Place this folder in the root directory of your website hosting (e.g., via cPanel, FTP, or Vercel/Netlify for `thesocialklub.online`).
3. Ensure the folder is named exactly `bollywooddandiyanight`.
4. The page will now be accessible at `https://thesocialklub.online/bollywooddandiyanight`.

---

## Testing the Form
1. Open `https://thesocialklub.online/bollywooddandiyanight` in your browser.
2. Click **Book Your Tickets**.
3. Fill out the steps with test data.
4. Upload a sample image on the payment step.
5. Click **Submit Booking**.
6. Wait for the success screen.
7. Verify that:
   - A new row is added to your Google Sheet.
   - The image is uploaded to your Google Drive folder.
   - The `Payment Screenshot URL` in the sheet links to the uploaded image.

## Troubleshooting
- **CORS/Network Errors during submission:** Ensure you deployed the Apps Script with "Execute as: Me" and "Who has access: Anyone". If you update the code, you MUST create a *New deployment* or *Manage deployments -> Edit -> New version*.
- **Image upload fails:** Ensure the Google Drive folder permissions allow the Apps Script owner to create files. 
- **Setup function fails:** Verify the SPREADSHEET_ID is exact (do not include the `/edit` part of the URL).
- **Duplicate Submissions:** The submit button is automatically disabled upon clicking and a loading screen appears to prevent double-clicks. Ensure you don't refresh the page while loading.
