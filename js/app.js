/* ==========================================================================
   MY DASHBOARD - APP.JS (MAIN APPLICATION ORCHESTRATOR & BOOTSTRAP)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    console.log('Initializing Vasin Portfolio Dashboard App...');

    // 1. Initialize Single Page Application Navigation Module
    if (window.DashboardNavigation) {
        window.appNavigation = new window.DashboardNavigation();
        console.log('SPA Navigation component initialized.');
    } else {
        console.error('Critical Error: DashboardNavigation component not loaded.');
    }

    // 2. Initialize Film Slider Component (Will be implemented in the next step)
    if (window.FilmSliderComponent) {
        window.appFilmSlider = new window.FilmSliderComponent();
        console.log('Film Slider component initialized.');
    } else {
        console.warn('Notice: FilmSliderComponent not found yet. It will run once filmSlider.js is created.');
    }

    // Global helper to manage global application state configurations if needed
    setupGlobalInteractions();
});

/**
 * Attaches global events or utility classes required for consistent rendering.
 */
function setupGlobalInteractions() {
    // Prevent default dragging behaviors on image components across all views for native app feeling
    document.querySelectorAll('img').forEach(image => {
        image.addEventListener('dragstart', (e) => e.preventDefault());
    });
}
