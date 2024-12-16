// Function to check password strength
function checkPasswordStrength(password) {
    const strengthText = document.getElementById('password-strength-text');
    const strengthBar = document.querySelector('.password-strength-bar');
    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[\W_]/.test(password)) strength++;

    switch (strength) {
        case 0:
        case 1:
            strengthText.textContent = "Weak";
            strengthBar.style.width = "25%";
            strengthBar.style.backgroundColor = "red";
            break;
        case 2:
            strengthText.textContent = "Medium";
            strengthBar.style.width = "50%";
            strengthBar.style.backgroundColor = "orange";
            break;
        case 3:
            strengthText.textContent = "Strong";
            strengthBar.style.width = "75%";
            strengthBar.style.backgroundColor = "yellowgreen";
            break;
        case 4:
            strengthText.textContent = "Very Strong";
            strengthBar.style.width = "100%";
            strengthBar.style.backgroundColor = "green";
            break;
    }
}

// Function to open Homepage in a new tab
function openHomePage() {
    window.open('Homepage.html', '_blank');
}
