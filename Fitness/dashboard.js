document.addEventListener('DOMContentLoaded', function() {
    // Dashboard initialization
    initDashboard();
    
    // Handle responsive sidebar
    setupSidebar();
    
    // Setup navigation between sections
    setupNavigation();
    
    // Simulate chart data
    simulateCharts();
});

function initDashboard() {
    // Show welcome message or notifications
    console.log('Dashboard initialized');
    
    // Simulate loading states
    const contentArea = document.querySelector('.content-area');
    if (contentArea) {
        contentArea.style.opacity = '0.5';
        setTimeout(() => {
            contentArea.style.opacity = '1';
        }, 500);
    }
    
    // Update user data
    updateUserMetrics();
}

function setupSidebar() {
    // Toggle sidebar on mobile
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const mobileSidebarToggle = document.querySelector('.mobile-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.toggle('open');
        });
    }
    
    if (mobileSidebarToggle) {
        mobileSidebarToggle.addEventListener('click', function() {
            sidebar.classList.toggle('open');
        });
    }
    
    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(event) {
        if (window.innerWidth < 992 && 
            !sidebar.contains(event.target) && 
            !mobileSidebarToggle.contains(event.target)) {
            sidebar.classList.remove('open');
        }
    });
}

function setupNavigation() {
    // Handle menu item clicks to show different sections
    const menuItems = document.querySelectorAll('.menu-item');
    const pageTitle = document.querySelector('.page-title');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Update active class on menu items
            menuItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            
            // Update page title
            pageTitle.textContent = this.querySelector('span').textContent;
            
            // Show selected section
            const sectionId = this.getAttribute('data-section');
            const sections = document.querySelectorAll('.dashboard-section');
            
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            const activeSection = document.getElementById(sectionId + '-section');
            if (activeSection) {
                activeSection.classList.add('active');
            } else {
                // If section doesn't exist yet, show dashboard with message
                const dashboardSection = document.getElementById('dashboard-section');
                dashboardSection.classList.add('active');
                
                // Show a toast notification that the section is coming soon
                showToast(`${this.querySelector('span').textContent} section coming soon!`);
            }
            
            // Close sidebar on mobile after selection
            if (window.innerWidth < 992) {
                document.querySelector('.sidebar').classList.remove('open');
            }
        });
    });
}

function simulateCharts() {
    // This would normally use a charting library like Chart.js
    // For now, we'll just simulate with a placeholder
    const chartPlaceholder = document.querySelector('.chart-placeholder');
    if (chartPlaceholder) {
        chartPlaceholder.innerHTML = `
            <div style="width:100%; height:100%; display:flex; flex-direction:column; justify-content:center; align-items:center;">
                <div style="color:var(--secondary-color); margin-bottom:10px;">
                    <i class="ri-line-chart-line" style="font-size:3rem;"></i>
                </div>
                <div style="color:var(--text-light); text-align:center;">
                    <p>Fitness progress visualization</p>
                    <p style="font-size:0.8rem; margin-top:5px;">Weight, workouts, and body metrics over time</p>
                </div>
            </div>
        `;
    }
    
    // Setup chart filters
    const chartFilters = document.querySelectorAll('.chart-filter');
    chartFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            chartFilters.forEach(f => f.classList.remove('active'));
            this.classList.add('active');
            
            // This would normally update the chart data
            showToast(`Chart updated to show ${this.textContent} data`);
        });
    });
}

function updateUserMetrics() {
    // In a real app, this would fetch from an API
    // Simulate some random variations in the metrics
    
    // Weight card
    const weightChange = (Math.random() * 5 - 2.5).toFixed(1);
    const weightCard = document.querySelector('.dashboard-card:nth-child(1)');
    if (weightCard) {
        const comparison = weightCard.querySelector('.card-comparison');
        if (parseFloat(weightChange) < 0) {
            comparison.className = 'card-comparison card-decrease';
            comparison.innerHTML = `<i class="ri-arrow-down-line"></i> ${Math.abs(weightChange)} lbs this month`;
        } else {
            comparison.className = 'card-comparison card-increase';
            comparison.innerHTML = `<i class="ri-arrow-up-line"></i> ${weightChange} lbs this month`;
        }
    }
    
    // Calories card - random percentage between -5% and +25%
    const calorieChange = (Math.random() * 30 - 5).toFixed(0);
    const calorieCard = document.querySelector('.dashboard-card:nth-child(2)');
    if (calorieCard) {
        const comparison = calorieCard.querySelector('.card-comparison');
        if (parseFloat(calorieChange) < 0) {
            comparison.className = 'card-comparison card-decrease';
            comparison.innerHTML = `<i class="ri-arrow-down-line"></i> ${Math.abs(calorieChange)}% vs last week`;
        } else {
            comparison.className = 'card-comparison card-increase';
            comparison.innerHTML = `<i class="ri-arrow-up-line"></i> ${calorieChange}% vs last week`;
        }
    }
}

function showToast(message) {
    // Create toast element if it doesn't exist
    let toast = document.getElementById('dashboard-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'dashboard-toast';
        toast.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: var(--secondary-color);
            color: var(--white);
            padding: 12px 20px;
            border-radius: 4px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 1000;
            opacity: 0;
            transition: opacity 0.3s ease;
            font-size: 0.9rem;
        `;
        document.body.appendChild(toast);
    }
    
    // Set message and show
    toast.textContent = message;
    toast.style.opacity = '1';
    
    // Hide after delay
    setTimeout(() => {
        toast.style.opacity = '0';
    }, 3000);
} 