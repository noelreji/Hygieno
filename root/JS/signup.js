function checkPasswordStrength(password) {
    // Check for minimum length
    if (password.length < 8){
        alert("Password should have atleast 8 characters");
        return false;
    }
        
    
    // Check for presence of uppercase letter
    if (!/[A-Z]/.test(password)){
        alert("Password should have atleast one capital letter");
        return false;
    }
        
    
    // Check for presence of lowercase letter
    if (!/[a-z]/.test(password)){
        alert("Password should have atleast one small letter");
        return false;
    }
        
    
    // Check for presence of number
    if (!/\d/.test(password)){
        return false;
    }
        
    // Check for presence of special character
    if(!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password)){
        alert("Password should have atleast one special character")
        return false;
    }
    return true;
}
function validatePassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    if (!checkPasswordStrength(password)){
        return false;
    }
        
    if (password != confirmPassword) {
        alert("Passwords do not match!");
        return false;
    }
    return true;
}