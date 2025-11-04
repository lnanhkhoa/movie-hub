// ============================================
// Movie Hub - Authentication JavaScript
// ============================================

// ============================================
// Utility Functions
// ============================================

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Password validation
function validatePassword(password) {
    return {
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        number: /[0-9]/.test(password),
        special: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    };
}

// Calculate password strength
function calculatePasswordStrength(password) {
    const validation = validatePassword(password);
    const score = Object.values(validation).filter(Boolean).length;

    if (score <= 1) return 'weak';
    if (score <= 2) return 'medium';
    return 'strong';
}

// Show error message
function showError(inputId, message) {
    const input = document.getElementById(inputId);
    const errorElement = document.getElementById(inputId + 'Error');

    if (input) {
        input.classList.add('error');
        input.classList.remove('success');
    }

    if (errorElement) {
        errorElement.textContent = message;
    }
}

// Clear error message
function clearError(inputId) {
    const input = document.getElementById(inputId);
    const errorElement = document.getElementById(inputId + 'Error');

    if (input) {
        input.classList.remove('error');
    }

    if (errorElement) {
        errorElement.textContent = '';
    }
}

// Show success state
function showSuccess(inputId) {
    const input = document.getElementById(inputId);
    if (input) {
        input.classList.remove('error');
        input.classList.add('success');
    }
}

// Show toast notification
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    if (!toast) return;

    const toastMessage = toast.querySelector('.toast-message');
    if (toastMessage) {
        toastMessage.textContent = message;
    }

    toast.classList.remove('error');
    if (type === 'error') {
        toast.classList.add('error');
    }

    toast.style.display = 'flex';

    setTimeout(() => {
        toast.style.display = 'none';
    }, 5000);
}

// Set button loading state
function setButtonLoading(buttonId, isLoading) {
    const button = document.getElementById(buttonId);
    if (!button) return;

    const btnText = button.querySelector('.btn-text');
    const btnLoader = button.querySelector('.btn-loader');

    if (isLoading) {
        button.disabled = true;
        if (btnText) btnText.style.display = 'none';
        if (btnLoader) btnLoader.style.display = 'flex';
    } else {
        button.disabled = false;
        if (btnText) btnText.style.display = 'inline';
        if (btnLoader) btnLoader.style.display = 'none';
    }
}

// ============================================
// Password Toggle Functionality
// ============================================
const togglePasswordButtons = document.querySelectorAll('.toggle-password');

togglePasswordButtons.forEach(button => {
    button.addEventListener('click', () => {
        const wrapper = button.closest('.password-input-wrapper');
        const input = wrapper.querySelector('.form-input');
        const eyeIcon = button.querySelector('.eye-icon');
        const eyeSlashIcon = button.querySelector('.eye-slash-icon');

        if (input.type === 'password') {
            input.type = 'text';
            eyeIcon.style.display = 'none';
            eyeSlashIcon.style.display = 'block';
            button.setAttribute('aria-label', 'Hide password');
        } else {
            input.type = 'password';
            eyeIcon.style.display = 'block';
            eyeSlashIcon.style.display = 'none';
            button.setAttribute('aria-label', 'Show password');
        }
    });
});

// ============================================
// Login Form Validation
// ============================================
const loginForm = document.getElementById('loginForm');

if (loginForm) {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    // Email validation on blur
    if (emailInput) {
        emailInput.addEventListener('blur', () => {
            const email = emailInput.value.trim();

            if (!email) {
                showError('email', 'Email is required');
            } else if (!isValidEmail(email)) {
                showError('email', 'Please enter a valid email address');
            } else {
                clearError('email');
                showSuccess('email');
            }
        });

        emailInput.addEventListener('input', () => {
            if (emailInput.classList.contains('error')) {
                clearError('email');
            }
        });
    }

    // Password validation on blur
    if (passwordInput) {
        passwordInput.addEventListener('blur', () => {
            const password = passwordInput.value;

            if (!password) {
                showError('password', 'Password is required');
            } else {
                clearError('password');
            }
        });

        passwordInput.addEventListener('input', () => {
            if (passwordInput.classList.contains('error')) {
                clearError('password');
            }
        });
    }

    // Form submission
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value;
        let isValid = true;

        // Validate email
        if (!email) {
            showError('email', 'Email is required');
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError('email', 'Please enter a valid email address');
            isValid = false;
        } else {
            clearError('email');
        }

        // Validate password
        if (!password) {
            showError('password', 'Password is required');
            isValid = false;
        } else {
            clearError('password');
        }

        if (!isValid) return;

        // Simulate login API call
        setButtonLoading('submitBtn', true);

        setTimeout(() => {
            setButtonLoading('submitBtn', false);

            // For demo: randomly succeed or fail
            const success = Math.random() > 0.3;

            if (success) {
                console.log('Login successful!');
                window.location.href = 'index.html';
            } else {
                const errorBanner = document.getElementById('errorBanner');
                if (errorBanner) {
                    errorBanner.style.display = 'flex';
                }
                showError('email', '');
                showError('password', '');
            }
        }, 1500);
    });
}

// ============================================
// Sign Up Form Validation
// ============================================
const signupForm = document.getElementById('signupForm');

if (signupForm) {
    const fullNameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const acceptTermsCheckbox = document.getElementById('acceptTerms');

    // Full name validation
    if (fullNameInput) {
        fullNameInput.addEventListener('blur', () => {
            const name = fullNameInput.value.trim();

            if (!name) {
                showError('fullName', 'Full name is required');
            } else if (name.length < 2) {
                showError('fullName', 'Please enter your full name');
            } else {
                clearError('fullName');
                showSuccess('fullName');
            }
        });

        fullNameInput.addEventListener('input', () => {
            if (fullNameInput.classList.contains('error')) {
                clearError('fullName');
            }
        });
    }

    // Email validation
    if (emailInput) {
        emailInput.addEventListener('blur', () => {
            const email = emailInput.value.trim();

            if (!email) {
                showError('email', 'Email is required');
            } else if (!isValidEmail(email)) {
                showError('email', 'Please enter a valid email address');
            } else {
                clearError('email');
                showSuccess('email');
            }
        });

        emailInput.addEventListener('input', () => {
            if (emailInput.classList.contains('error')) {
                clearError('email');
            }
        });
    }

    // Password validation with strength indicator
    if (passwordInput) {
        const passwordStrength = document.getElementById('passwordStrength');
        const passwordRequirements = document.getElementById('passwordRequirements');

        passwordInput.addEventListener('focus', () => {
            if (passwordRequirements) {
                passwordRequirements.style.display = 'block';
            }
        });

        passwordInput.addEventListener('input', () => {
            const password = passwordInput.value;

            if (password.length > 0) {
                // Show strength indicator
                if (passwordStrength) {
                    passwordStrength.style.display = 'flex';
                    const strength = calculatePasswordStrength(password);
                    passwordStrength.className = 'password-strength ' + strength;

                    const strengthText = passwordStrength.querySelector('.strength-text');
                    if (strengthText) {
                        strengthText.textContent = strength.charAt(0).toUpperCase() + strength.slice(1);
                    }
                }

                // Update requirements
                if (passwordRequirements) {
                    const validation = validatePassword(password);

                    document.getElementById('reqLength').classList.toggle('valid', validation.length);
                    document.getElementById('reqUppercase').classList.toggle('valid', validation.uppercase);
                    document.getElementById('reqNumber').classList.toggle('valid', validation.number);
                    document.getElementById('reqSpecial').classList.toggle('valid', validation.special);
                }
            } else {
                if (passwordStrength) {
                    passwordStrength.style.display = 'none';
                }
            }

            // Clear error on input
            if (passwordInput.classList.contains('error')) {
                clearError('password');
            }
        });

        passwordInput.addEventListener('blur', () => {
            const password = passwordInput.value;

            if (!password) {
                showError('password', 'Password is required');
            } else {
                const validation = validatePassword(password);
                const allValid = Object.values(validation).every(Boolean);

                if (!allValid) {
                    showError('password', 'Password does not meet all requirements');
                } else {
                    clearError('password');
                    showSuccess('password');
                }
            }
        });
    }

    // Confirm password validation
    if (confirmPasswordInput && passwordInput) {
        confirmPasswordInput.addEventListener('blur', () => {
            const password = passwordInput.value;
            const confirmPassword = confirmPasswordInput.value;

            if (!confirmPassword) {
                showError('confirmPassword', 'Please confirm your password');
            } else if (password !== confirmPassword) {
                showError('confirmPassword', 'Passwords do not match');
            } else {
                clearError('confirmPassword');
                showSuccess('confirmPassword');
            }
        });

        confirmPasswordInput.addEventListener('input', () => {
            if (confirmPasswordInput.classList.contains('error')) {
                const password = passwordInput.value;
                const confirmPassword = confirmPasswordInput.value;

                if (password === confirmPassword) {
                    clearError('confirmPassword');
                    showSuccess('confirmPassword');
                }
            }
        });
    }

    // Form submission
    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const fullName = fullNameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        const termsAccepted = acceptTermsCheckbox.checked;
        let isValid = true;

        // Validate full name
        if (!fullName) {
            showError('fullName', 'Full name is required');
            isValid = false;
        } else if (fullName.length < 2) {
            showError('fullName', 'Please enter your full name');
            isValid = false;
        }

        // Validate email
        if (!email) {
            showError('email', 'Email is required');
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError('email', 'Please enter a valid email address');
            isValid = false;
        }

        // Validate password
        if (!password) {
            showError('password', 'Password is required');
            isValid = false;
        } else {
            const validation = validatePassword(password);
            const allValid = Object.values(validation).every(Boolean);

            if (!allValid) {
                showError('password', 'Password does not meet all requirements');
                isValid = false;
            }
        }

        // Validate confirm password
        if (!confirmPassword) {
            showError('confirmPassword', 'Please confirm your password');
            isValid = false;
        } else if (password !== confirmPassword) {
            showError('confirmPassword', 'Passwords do not match');
            isValid = false;
        }

        // Validate terms acceptance
        if (!termsAccepted) {
            showError('terms', 'You must accept the Terms of Service and Privacy Policy');
            isValid = false;
        } else {
            clearError('terms');
        }

        if (!isValid) return;

        // Simulate sign up API call
        setButtonLoading('submitBtn', true);

        setTimeout(() => {
            setButtonLoading('submitBtn', false);
            console.log('Sign up successful!');

            // Show success toast and redirect
            showToast('Account created successfully! Redirecting...');
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 2000);
        }, 1500);
    });
}

// ============================================
// Password Reset Multi-Step Flow
// ============================================
const resetRequestForm = document.getElementById('resetRequestForm');
const newPasswordForm = document.getElementById('newPasswordForm');

if (resetRequestForm) {
    const resetEmailInput = document.getElementById('resetEmail');

    // Email validation
    if (resetEmailInput) {
        resetEmailInput.addEventListener('blur', () => {
            const email = resetEmailInput.value.trim();

            if (!email) {
                showError('resetEmail', 'Email is required');
            } else if (!isValidEmail(email)) {
                showError('resetEmail', 'Please enter a valid email address');
            } else {
                clearError('resetEmail');
                showSuccess('resetEmail');
            }
        });

        resetEmailInput.addEventListener('input', () => {
            if (resetEmailInput.classList.contains('error')) {
                clearError('resetEmail');
            }
        });
    }

    // Form submission
    resetRequestForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = resetEmailInput.value.trim();
        let isValid = true;

        if (!email) {
            showError('resetEmail', 'Email is required');
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError('resetEmail', 'Please enter a valid email address');
            isValid = false;
        }

        if (!isValid) return;

        // Simulate API call
        setButtonLoading('sendResetBtn', true);

        setTimeout(() => {
            setButtonLoading('sendResetBtn', false);

            // Show step 2
            document.getElementById('step1').style.display = 'none';
            document.getElementById('step2').style.display = 'block';

            // Update email in confirmation
            const userEmailElement = document.getElementById('userEmail');
            if (userEmailElement) {
                userEmailElement.textContent = email;
            }

            // Show toast
            showToast('Reset link sent to your email!');
        }, 1500);
    });
}

// Resend email functionality
const resendBtn = document.getElementById('resendBtn');
if (resendBtn) {
    let countdownInterval;

    resendBtn.addEventListener('click', () => {
        setButtonLoading('resendBtn', true);

        setTimeout(() => {
            setButtonLoading('resendBtn', false);
            showToast('Reset link sent again!');

            // Start countdown
            resendBtn.disabled = true;
            const resendTimer = document.getElementById('resendTimer');
            const countdown = document.getElementById('countdown');

            if (resendTimer) resendTimer.style.display = 'block';

            let timeLeft = 60;
            countdownInterval = setInterval(() => {
                timeLeft--;
                if (countdown) countdown.textContent = timeLeft;

                if (timeLeft <= 0) {
                    clearInterval(countdownInterval);
                    resendBtn.disabled = false;
                    if (resendTimer) resendTimer.style.display = 'none';
                }
            }, 1000);
        }, 1000);
    });
}

// New password form (Step 3)
if (newPasswordForm) {
    const newPasswordInput = document.getElementById('newPassword');
    const confirmNewPasswordInput = document.getElementById('confirmNewPassword');

    // Password validation with strength indicator
    if (newPasswordInput) {
        const passwordStrength = document.getElementById('newPasswordStrength');

        newPasswordInput.addEventListener('input', () => {
            const password = newPasswordInput.value;

            if (password.length > 0 && passwordStrength) {
                passwordStrength.style.display = 'flex';
                const strength = calculatePasswordStrength(password);
                passwordStrength.className = 'password-strength ' + strength;

                const strengthText = passwordStrength.querySelector('.strength-text');
                if (strengthText) {
                    strengthText.textContent = strength.charAt(0).toUpperCase() + strength.slice(1);
                }
            } else if (passwordStrength) {
                passwordStrength.style.display = 'none';
            }

            if (newPasswordInput.classList.contains('error')) {
                clearError('newPassword');
            }
        });

        newPasswordInput.addEventListener('blur', () => {
            const password = newPasswordInput.value;

            if (!password) {
                showError('newPassword', 'Password is required');
            } else {
                const validation = validatePassword(password);
                const allValid = Object.values(validation).every(Boolean);

                if (!allValid) {
                    showError('newPassword', 'Password must be at least 8 characters with uppercase, number, and special character');
                } else {
                    clearError('newPassword');
                    showSuccess('newPassword');
                }
            }
        });
    }

    // Confirm password validation
    if (confirmNewPasswordInput && newPasswordInput) {
        confirmNewPasswordInput.addEventListener('blur', () => {
            const password = newPasswordInput.value;
            const confirmPassword = confirmNewPasswordInput.value;

            if (!confirmPassword) {
                showError('confirmNewPassword', 'Please confirm your password');
            } else if (password !== confirmPassword) {
                showError('confirmNewPassword', 'Passwords do not match');
            } else {
                clearError('confirmNewPassword');
                showSuccess('confirmNewPassword');
            }
        });

        confirmNewPasswordInput.addEventListener('input', () => {
            if (confirmNewPasswordInput.classList.contains('error')) {
                const password = newPasswordInput.value;
                const confirmPassword = confirmNewPasswordInput.value;

                if (password === confirmPassword) {
                    clearError('confirmNewPassword');
                    showSuccess('confirmNewPassword');
                }
            }
        });
    }

    // Form submission
    newPasswordForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const password = newPasswordInput.value;
        const confirmPassword = confirmNewPasswordInput.value;
        let isValid = true;

        if (!password) {
            showError('newPassword', 'Password is required');
            isValid = false;
        } else {
            const validation = validatePassword(password);
            const allValid = Object.values(validation).every(Boolean);

            if (!allValid) {
                showError('newPassword', 'Password must meet all requirements');
                isValid = false;
            }
        }

        if (!confirmPassword) {
            showError('confirmNewPassword', 'Please confirm your password');
            isValid = false;
        } else if (password !== confirmPassword) {
            showError('confirmNewPassword', 'Passwords do not match');
            isValid = false;
        }

        if (!isValid) return;

        // Simulate API call
        setButtonLoading('resetPasswordBtn', true);

        setTimeout(() => {
            setButtonLoading('resetPasswordBtn', false);

            // Show success step
            document.getElementById('step3').style.display = 'none';
            document.getElementById('step4').style.display = 'block';
        }, 1500);
    });
}

// ============================================
// Social Login Handlers
// ============================================
const socialButtons = document.querySelectorAll('.social-btn');

socialButtons.forEach(button => {
    button.addEventListener('click', () => {
        const provider = button.classList.contains('google-btn') ? 'Google' :
                        button.classList.contains('facebook-btn') ? 'Facebook' : 'Apple';

        console.log(`Social login with ${provider}`);

        // In production, this would open OAuth popup
        showToast(`Redirecting to ${provider} login...`);

        // Simulate OAuth flow
        setTimeout(() => {
            console.log(`${provider} authentication successful`);
            // window.location.href = 'index.html';
        }, 2000);
    });
});

// ============================================
// Demo: Show Step 3 for Testing
// ============================================
// Uncomment to test Step 3 of password reset directly:
// setTimeout(() => {
//     document.getElementById('step1')?.style.display = 'none';
//     document.getElementById('step2')?.style.display = 'none';
//     document.getElementById('step3')?.style.display = 'block';
// }, 100);

console.log('%c🔐 Authentication System', 'font-size: 18px; font-weight: bold; color: #E50914;');
console.log('%cForm validation and authentication logic loaded', 'font-size: 12px; color: #B3B3B3;');
