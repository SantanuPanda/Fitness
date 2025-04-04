document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    
    // Add transition animation to signup link
    const signupLink = document.querySelector('.signup-link a');
    if (signupLink) {
        signupLink.addEventListener('click', function(e) {
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
    
    // Form submission handling
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get input values
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        
        // Simple validation
        if (username === '' || password === '') {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        // Show loading state
        const loginBtn = loginForm.querySelector('.login-btn');
        const originalBtnText = loginBtn.textContent;
        loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Logging in...';
        loginBtn.disabled = true;
        
        // Simulate API call with timeout
        setTimeout(() => {
            // This is where you would normally make an actual API call to your backend
            // For demo purposes, we're just simulating a successful login after a delay
            
            // Reset button state
            loginBtn.innerHTML = originalBtnText;
            loginBtn.disabled = false;
            
            // Show success message
            showNotification('Login successful! Redirecting...', 'success');
            
            // Simulate redirect to dashboard
            setTimeout(() => {
                // In a real app, you'd redirect to the dashboard or home page
                // window.location.href = 'dashboard.html';
                
                // For demo, just reset the form
                loginForm.reset();
            }, 1500);
        }, 2000);
    });
    
    // Social login buttons
    const socialButtons = document.querySelectorAll('.social-btn');
    socialButtons.forEach(button => {
        button.addEventListener('click', () => {
            const provider = button.classList.contains('google') ? 'Google' : 'Facebook';
            // Removed notification
        });
    });
    
    // Forgot password link
    const forgotPasswordLink = document.querySelector('.forgot-password');
    forgotPasswordLink.addEventListener('click', (e) => {
        e.preventDefault();
        // Removed notification
    });
    
    // Notification function
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
    
    // Add some input animations/effects
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