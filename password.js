// Handle password reset form submission
document.getElementById('forgot-password-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get the input values
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Check if passwords match
    if (newPassword === confirmPassword) {
        // Simulate a password reset (in reality, you'd send data to a server here)
        alert('Password reset successfully! You can now log in with your new password.');
        
        // Optionally, redirect to the login page after successful reset
        window.location.href = 'Login.html';
    } else {
        // Show error message if passwords don't match
        alert('Passwords do not match. Please try again.');
    }
});
