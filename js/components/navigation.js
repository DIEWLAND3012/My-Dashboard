/* ==========================================================================
   MY DASHBOARD - NAVIGATION.JS (SPA CORE & SIDEBAR INTERACTION)
   ========================================================================== */

class DashboardNavigation {
    constructor() {
        // Core elements
        self.navItems = document.querySelectorAll('.nav-item');
        self.pages = document.querySelectorAll('.page-section');
        self.indicator = document.getElementById('nav-indicator');
        self.progressBar = document.getElementById('spa-progress-bar');

        // Profile sub-navigation buttons
        self.viewProfileBtn = document.getElementById('btn-view-profile');
        self.backProfileBtn = document.getElementById('btn-back-profile');

        this.init();
    }

    init() {
        // Setup click listener for standard sidebar menu items
        self.navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                const targetPageId = item.getAttribute('data-target');
                this.navigateToPage(targetPageId, item);
            });
        });

        // Setup click listener for "VIEW FULL PROFILE" sub-navigation
        if (self.viewProfileBtn) {
            self.viewProfileBtn.addEventListener('click', () => {
                this.navigateToPage('full-profile-page', null);
            });
        }

        // Setup click listener for "Back" button in Full Profile view
        if (self.backProfileBtn) {
            self.backProfileBtn.addEventListener('click', () => {
                // Return to main profile page and sync back the sidebar selection
                const profileNavItem = document.querySelector('.nav-item[data-target="profile-page"]');
                this.navigateToPage('profile-page', profileNavItem);
            });
        }

        // Handle initial load calculation for indicator position and resizing
        window.addEventListener('load', () => this.updateIndicatorPosition());
        window.addEventListener('resize', () => this.updateIndicatorPosition());

        // Quick fallback if window load already passed
        setTimeout(() => this.updateIndicatorPosition(), 100);
    }

    /**
     * core SPA Page switching algorithm with progress bar triggers
     * @param {string} targetPageId - The ID of the target section
     * @param {HTMLElement|null} activeNavItem - The clicked navbar element (null for sub-pages)
     */
    navigateToPage(targetPageId, activeNavItem) {
        const targetPage = document.getElementById(targetPageId);
        if (!targetPage || targetPage.classList.contains('active')) return;

        // Step 1: Trigger Progress Bar (Loading State)
        if (self.progressBar) {
            self.progressBar.classList.remove('finish');
            self.progressBar.classList.add('loading');
        }

        // Simulate professional network latency/transition buffer (300ms)
        setTimeout(() => {
            // Step 2: Update Sidebar Active States (only if navigation was done via sidebar)
            if (activeNavItem) {
                self.navItems.forEach(item => item.classList.remove('active'));
                activeNavItem.classList.add('active');
                this.updateIndicatorPosition();
            } else {
                // If moving to a sub-page (like full-profile), unhighlight sidebar items
                if (targetPageId === 'full-profile-page') {
                    self.navItems.forEach(item => item.classList.remove('active'));
                    if (self.indicator) self.indicator.style.opacity = '0';
                }
            }

            // Step 3: Deactivate current active page and trigger fade-in animation on new page
            self.pages.forEach(page => {
                page.classList.remove('active');
            });

            targetPage.classList.add('active');

            // Step 4: Finish Progress Bar Animation
            if (self.progressBar) {
                self.progressBar.classList.remove('loading');
                self.progressBar.classList.add('finish');
            }

        }, 300);
    }

    /**
     * Dynamically positions and resizes the absolute background white highlight item
     */
    updateIndicatorPosition() {
        const activeItem = document.querySelector('.nav-item.active');
        if (!activeItem || !self.indicator) {
            if (self.indicator) self.indicator.style.opacity = '0';
            return;
        }

        // Calculate positions relative to parent element container
        const itemTop = activeItem.offsetTop;
        const itemHeight = activeItem.offsetHeight;

        // Apply styles gracefully using hardware-accelerated transforms
        self.indicator.style.opacity = '1';
        self.indicator.style.top = `${itemTop}px`;
        self.indicator.style.height = `${itemHeight}px`;
    }
}

// Expose to Global scope for main app orchestration
window.DashboardNavigation = DashboardNavigation;
