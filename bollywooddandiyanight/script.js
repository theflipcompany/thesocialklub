// Configuration
// TODO: Organizer needs to replace this URL with their deployed Apps Script Web App URL
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzGg4qLfL2KDFHAO5Q_iwg603JlKw6Dl5Y7DofDp0tORIs4xfRgKNNc6fT9ZT181GQ2/exec';
const TICKET_PRICE = 249;
const TOTAL_STEPS = 6;

let currentStep = 0;
let fileBase64 = null;
let fileMimeType = null;
let fileName = null;

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Prevent Enter key from submitting form prematurely
    document.getElementById('bookingForm').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    });
});

// Navigation
function nextStep(stepIndex) {
    if (stepIndex > currentStep) {
        document.getElementById(`step-${currentStep}`).classList.remove('active');
        document.getElementById(`step-${stepIndex}`).classList.add('active');
        currentStep = stepIndex;

        // Show/hide progress bar
        const progressContainer = document.getElementById('progress-container');
        if (currentStep > 0 && currentStep <= TOTAL_STEPS) {
            progressContainer.style.display = 'block';
            document.getElementById('current-step-num').textContent = currentStep;
            document.getElementById('progress-fill').style.width = `${(currentStep / TOTAL_STEPS) * 100}%`;
        } else {
            progressContainer.style.display = 'none';
        }
    }
}

function prevStep(stepIndex) {
    if (stepIndex < currentStep) {
        document.getElementById(`step-${currentStep}`).classList.remove('active');
        document.getElementById(`step-${stepIndex}`).classList.add('active');
        currentStep = stepIndex;

        // Update progress bar
        if (currentStep > 0) {
            document.getElementById('current-step-num').textContent = currentStep;
            document.getElementById('progress-fill').style.width = `${(currentStep / TOTAL_STEPS) * 100}%`;
        } else {
            document.getElementById('progress-container').style.display = 'none';
        }
    }
}

// Validation Logic
function validateAndNext(currentStepIndex) {
    let isValid = false;

    // Clear previous errors
    clearErrors();

    switch (currentStepIndex) {
        case 1:
            isValid = validateName();
            break;
        case 2:
            isValid = validateWhatsApp();
            break;
        case 3:
            isValid = validateQuantity();
            break;
        case 4:
            isValid = validateEmail();
            break;
        case 5:
            isValid = validateAddress();
            // Also update final total on payment screen
            if (isValid) {
                const qty = parseInt(document.getElementById('quantity').value) || 0;
                document.getElementById('final-total-amount').textContent = `₹${qty * TICKET_PRICE}`;
            }
            break;
    }

    if (isValid) {
        nextStep(currentStepIndex + 1);
    }
}

function clearErrors() {
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    document.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
}

function showError(inputId, message) {
    const input = document.getElementById(inputId);
    const errorSpan = document.getElementById(`${inputId}-error`);
    if (input) input.classList.add('input-error');
    if (errorSpan) errorSpan.textContent = message;
}

// Specific Validations
function validateName() {
    const name = document.getElementById('name').value.trim();
    if (!name) {
        showError('name', 'Name is required.');
        return false;
    }
    return true;
}

function validateWhatsApp() {
    let whatsapp = document.getElementById('whatsapp').value.trim();
    if (!whatsapp) {
        showError('whatsapp', 'WhatsApp number is required.');
        return false;
    }
    // Very basic Indian mobile validation (allow optional +91, followed by 10 digits)
    const phoneRegex = /^(?:\+91|91)?[6-9]\d{9}$/;

    // Remove spaces and dashes for checking
    const cleanNum = whatsapp.replace(/[\s-]/g, '');

    if (!phoneRegex.test(cleanNum)) {
        showError('whatsapp', 'Please enter a valid Indian mobile number.');
        return false;
    }

    // Normalize (optional)
    if (cleanNum.length === 10) {
        document.getElementById('whatsapp').value = '+91' + cleanNum;
    } else if (cleanNum.startsWith('91') && cleanNum.length === 12) {
        document.getElementById('whatsapp').value = '+' + cleanNum;
    }

    return true;
}

function validateQuantity() {
    const qtyInput = document.getElementById('quantity');
    const qty = parseInt(qtyInput.value);

    if (!qtyInput.value || isNaN(qty) || qty < 1) {
        showError('quantity', 'Please enter a valid number of people (minimum 1).');
        return false;
    }

    if (qtyInput.value.includes('.')) {
        showError('quantity', 'Whole numbers only please.');
        return false;
    }

    return true;
}

function validateEmail() {
    const email = document.getElementById('email').value.trim();
    if (!email) {
        showError('email', 'Email is required.');
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError('email', 'Please enter a valid email address.');
        return false;
    }

    return true;
}

function validateAddress() {
    const address = document.getElementById('address').value.trim();
    if (!address) {
        showError('address', 'Delivery address is required.');
        return false;
    }
    if (address.length < 10) {
        showError('address', 'Please provide a more complete address.');
        return false;
    }
    return true;
}

// Total Calculation
function calculateTotal() {
    const qtyInput = document.getElementById('quantity').value;
    const qty = parseInt(qtyInput) || 0;

    if (qty > 0) {
        const total = qty * TICKET_PRICE;
        document.getElementById('display-total-amount').textContent = `₹${total}`;
        document.getElementById('calculation-detail').textContent = `${qty} ${qty === 1 ? 'person' : 'people'} × ₹${TICKET_PRICE} = ₹${total}`;
    } else {
        document.getElementById('display-total-amount').textContent = `₹0`;
        document.getElementById('calculation-detail').textContent = '';
    }
}

// File Upload Logic
function handleFileUpload(event) {
    const file = event.target.files[0];
    const submitBtn = document.getElementById('submit-btn');
    const errorSpan = document.getElementById('file-error');

    errorSpan.textContent = '';

    if (!file) {
        removeFile();
        return;
    }

    // Validate type
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!validTypes.includes(file.type)) {
        errorSpan.textContent = 'Invalid file format. Please upload JPG, PNG, or WEBP.';
        removeFile();
        return;
    }

    // Validate size (e.g., max 5MB)
    if (file.size > 5 * 1024 * 1024) {
        errorSpan.textContent = 'File is too large. Maximum size is 5MB.';
        removeFile();
        return;
    }

    fileName = file.name;
    fileMimeType = file.type;

    // Preview
    const reader = new FileReader();
    reader.onload = function (e) {
        const base64Full = e.target.result;
        // Extract base64 data without prefix for Apps Script
        fileBase64 = base64Full.split(',')[1];

        document.getElementById('file-preview').src = base64Full;
        document.getElementById('file-name').textContent = fileName;

        document.getElementById('upload-area').style.display = 'none';
        document.getElementById('file-preview-container').style.display = 'block';

        submitBtn.disabled = false;
    };
    reader.readAsDataURL(file);
}

function removeFile() {
    document.getElementById('paymentScreenshot').value = '';
    fileBase64 = null;
    fileMimeType = null;
    fileName = null;

    document.getElementById('upload-area').style.display = 'flex';
    document.getElementById('file-preview-container').style.display = 'none';
    document.getElementById('file-preview').src = '';

    document.getElementById('submit-btn').disabled = true;
}

// Submission
function submitForm() {
    // Final check
    if (!fileBase64) {
        document.getElementById('file-error').textContent = 'Payment screenshot is mandatory.';
        return;
    }

    if (!validateName() || !validateWhatsApp() || !validateQuantity() || !validateEmail() || !validateAddress()) {
        alert("Please ensure all fields are filled correctly.");
        return;
    }

    if (APPS_SCRIPT_URL === 'YOUR_WEB_APP_URL_HERE') {
        alert("Configuration Error: Apps Script URL is not set. Please check the README and update script.js");
        return;
    }

    const submitBtn = document.getElementById('submit-btn');
    submitBtn.disabled = true;
    document.getElementById('loading-overlay').style.display = 'flex';

    const formData = {
        name: document.getElementById('name').value.trim(),
        whatsapp: document.getElementById('whatsapp').value.trim(),
        quantity: parseInt(document.getElementById('quantity').value),
        email: document.getElementById('email').value.trim(),
        address: document.getElementById('address').value.trim(),
        fileData: fileBase64,
        mimeType: fileMimeType,
        fileName: fileName
    };

    // Send to Apps Script Web App
    // We use POST with text/plain to avoid CORS preflight issues with Apps Script
    fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(formData)
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('loading-overlay').style.display = 'none';

            if (data.status === 'success') {
                showSuccessScreen(data);
            } else {
                alert(`Submission failed: ${data.message}`);
                submitBtn.disabled = false;
            }
        })
        .catch(error => {
            document.getElementById('loading-overlay').style.display = 'none';
            console.error('Error:', error);
            alert('An error occurred during submission. Please try again.');
            submitBtn.disabled = false;
        });
}

function showSuccessScreen(data) {
    document.getElementById('step-6').classList.remove('active');
    document.getElementById('progress-container').style.display = 'none';

    document.getElementById('step-success').classList.add('active');

    document.getElementById('success-booking-id').textContent = data.bookingId;
    document.getElementById('success-name').textContent = document.getElementById('name').value;
    document.getElementById('success-people').textContent = document.getElementById('quantity').value;
    document.getElementById('success-amount').textContent = `₹${document.getElementById('quantity').value * TICKET_PRICE}`;
}
