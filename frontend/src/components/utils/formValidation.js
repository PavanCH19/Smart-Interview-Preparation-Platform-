// formValidation.js

export const validateForm = (formData, isRegister) => {
    const errors = {};

    // Username/email validation
    if (!formData.username.trim()) {
        errors.username = "Username or Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.username) && formData.username.includes('@')) {
        errors.username = "Enter a valid email address.";
    }

    // Password validation
    if (!formData.password) {
        errors.password = "Password is required.";
    } else if (formData.password.length < 6) {
        errors.password = "Password must be at least 6 characters.";
    }

    // Confirm password validation (only in register mode)
    if (isRegister) {
        if (!formData.confirmPassword) {
            errors.confirmPassword = "Please confirm your password.";
        } else if (formData.password !== formData.confirmPassword) {
            errors.confirmPassword = "Passwords do not match.";
        }
    }

    return errors;
};
