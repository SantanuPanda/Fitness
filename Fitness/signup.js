document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    const fullnameInput = document.getElementById('fullname');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const termsCheckbox = document.getElementById('terms');
    
    // Add transition animation to login link
    const loginLink = document.querySelector('.signup-link a');
    if (loginLink) {
        loginLink.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            
            // Add fade-out animation to body
            document.body.classList.add('fade-out');
            
            // Navigate after animation completes
            setTimeout(() => {
                window.location.href = href;
            }, 500);
        });
    }
    
    // Add password strength indicator
    const passwordField = document.querySelector('.input-group:nth-of-type(3)');
    const strengthIndicator = document.createElement('div');
    strengthIndicator.className = 'password-strength';
    strengthIndicator.innerHTML = `
        <span>Password strength: <span id="strength-text">None</span></span>
        <div class="strength-bar"><div id="strength-bar"></div></div>
    `;
    
    // Insert the strength indicator after the password input field instead of appending it
    passwordField.insertAdjacentElement('afterend', strengthIndicator);
    
    const strengthText = document.getElementById('strength-text');
    const strengthBar = document.getElementById('strength-bar');
    
    // Password strength checker
    passwordInput.addEventListener('input', () => {
        const password = passwordInput.value;
        let strength = 0;
        let feedback = '';
        
        if (password.length > 0) {
            // Length check
            if (password.length >= 8) strength += 1;
            
            // Character variety checks
            if (/[A-Z]/.test(password)) strength += 1;
            if (/[0-9]/.test(password)) strength += 1;
            if (/[^A-Za-z0-9]/.test(password)) strength += 1;
            
            // Determine feedback based on strength
            if (strength <= 2) {
                feedback = 'Weak';
                strengthBar.className = 'weak';
                strengthText.style.color = '#ff4d4d';
            } else if (strength === 3) {
                feedback = 'Medium';
                strengthBar.className = 'medium';
                strengthText.style.color = '#ffd633';
            } else {
                feedback = 'Strong';
                strengthBar.className = 'strong';
                strengthText.style.color = '#47d147';
            }
        } else {
            feedback = 'None';
            strengthBar.className = '';
        }
        
        strengthText.textContent = feedback;
    });
    
    // Confirm password validation
    confirmPasswordInput.addEventListener('input', () => {
        if (confirmPasswordInput.value === passwordInput.value) {
            confirmPasswordInput.style.borderColor = '#47d147';
        } else {
            confirmPasswordInput.style.borderColor = '#ff4d4d';
        }
    });
    
    // Form submission
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const fullname = fullnameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();
        
        // Validate form
        if (fullname === '' || email === '' || password === '' || confirmPassword === '') {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        if (password !== confirmPassword) {
            showNotification('Passwords do not match', 'error');
            return;
        }
        
        if (!termsCheckbox.checked) {
            showNotification('Please agree to the Terms & Conditions', 'error');
            return;
        }
        
        // Show loading state
        const signupBtn = signupForm.querySelector('.signup-btn');
        const originalBtnText = signupBtn.textContent;
        signupBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating Account...';
        signupBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            // Reset button state
            signupBtn.innerHTML = originalBtnText;
            signupBtn.disabled = false;
            
            // Show success message
            showNotification('Account created successfully! Redirecting to login...', 'success');
            
            // Redirect to login page after delay
            setTimeout(() => {
                // In a real app, you would redirect to login page
                // window.location.href = 'index.html';
                
                // For demo, just reset the form
                signupForm.reset();
                strengthText.textContent = 'None';
                strengthBar.className = '';
                confirmPasswordInput.style.borderColor = '';
            }, 2000);
        }, 2000);
    });
    
    // Social signup buttons
    const socialButtons = document.querySelectorAll('.social-btn');
    socialButtons.forEach(button => {
        button.addEventListener('click', () => {
            const provider = button.classList.contains('google') ? 'Google' : 'Facebook';
            // Removed notification
        });
    });
    
    // Notification function (reused from login page)
    function showNotification(message, type = 'info') {
        // Create notification element if it doesn't exist
        let notification = document.querySelector('.notification');
        if (!notification) {
            notification = document.createElement('div');
            notification.className = 'notification';
            document.body.appendChild(notification);
            
            // Add styles
            notification.style.position = 'fixed';
            notification.style.bottom = '20px';
            notification.style.right = '20px';
            notification.style.padding = '10px 20px';
            notification.style.borderRadius = '5px';
            notification.style.color = 'white';
            notification.style.fontWeight = '500';
            notification.style.opacity = '0';
            notification.style.transform = 'translateY(20px)';
            notification.style.transition = 'all 0.3s ease';
            notification.style.zIndex = '1000';
        }
        
        // Set color based on type
        if (type === 'error') {
            notification.style.backgroundColor = '#ff3860';
        } else if (type === 'success') {
            notification.style.backgroundColor = '#23d160';
        } else {
            notification.style.backgroundColor = '#209cee';
        }
        
        // Set message and show notification
        notification.textContent = message;
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
        
        // Hide notification after 3 seconds
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateY(20px)';
        }, 3000);
    }
    
    // Add input animations (reused from login page)
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.style.transform = 'translateY(-5px)';
            input.parentElement.style.transition = 'transform 0.3s ease';
        });
        
        input.addEventListener('blur', () => {
            input.parentElement.style.transform = 'translateY(0)';
        });
    });
}); 