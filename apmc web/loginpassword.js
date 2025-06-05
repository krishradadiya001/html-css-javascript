function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Clear previous error message
    errorMessage.textContent = '';

    // Basic validation
    if (username.trim() === '' || password.trim() === '') {
        errorMessage.textContent = 'Both fields are required.';
        return false; // Prevent form submission
    }

    return true;
}