// login.js


function displayMessage(message, color) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
    messageElement.style.color = color;
}

function validateUser(email, password) {
    // Test email and password
    const testEmail = 'user@example.com';
    const testPassword = 'password123';

    // Validate email and password
    if (email === testEmail && password === testPassword) {
        displayMessage('Login successful!');
    } else if (email === testEmail && password !== testPassword) {
        displayMessage('Password is incorrect.');
    } else if (email !== testEmail && password === testPassword) {
        displayMessage('Email is incorrect.');
    } else {
        displayMessage('Both Email and password are incorrect.');
    }
} 

function registerUser() {
    // Retrieve input values from the form
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
} 

function redirect () {
    window.location.href = "home-screen.html";
}