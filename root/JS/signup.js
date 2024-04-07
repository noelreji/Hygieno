function checkPasswordStrength(password) {
    // Check for minimum length
    document.getElementById("lengthCheckbox").checked = password.length >= 8;
    
    // Check for presence of uppercase letter
    document.getElementById("uppercaseCheckbox").checked = /[A-Z]/.test(password);
    
    // Check for presence of lowercase letter
    document.getElementById("lowercaseCheckbox").checked = /[a-z]/.test(password);
    
    // Check for presence of number
    document.getElementById("numberCheckbox").checked = /\d/.test(password);
    
    // Check for presence of special character
    document.getElementById("specialCheckbox").checked = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password);
}