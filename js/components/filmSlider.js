/* ==========================================================================
   MY DASHBOARD - FILMSLIDER.JS (INFINITE LOOP & CINEMATIC TRANSITIONS)
   ========================================================================== */

class FilmSliderComponent {
    constructor() {
        // Retrieve global data loaded from filmsData.js
        this.films = window.filmsData || [];
        this.currentIndex = 0;
        this.isAnimating = false;

        // DOM Element Bindings
        this.prevBtn = document.getElementById('film-prev-btn');
        this.nextBtn = document.getElementById('film-next-btn');
        this.contentWrapper = document.querySelector('.film-content');

        // Text and Image Elements
        this.elYear = document.getElementById('film-year');
        this.elTitle = document.getElementById('film-title');
        this.elSlogan = document.getElementById('film-slogan');
        this.elDesc = document.getElementById('film-description');
        this.elDirector = document.getElementById('film-director');
        this.elImg = document.getElementById('film-scene-img');

        this.init();
    }

    init() {
        // Guard clause in case data is missing
        if (this.films.length === 0) {
            console.warn("FilmSlider: No data available to render.");
            return;
        }

        // Render the initial film without animation
        this.renderData(this.films[this.currentIndex]);

        // Attach Event Listeners
        if (this.prevBtn && this.nextBtn) {
            this.prevBtn.addEventListener('click', () => this.navigate(-1));
            this.nextBtn.addEventListener('click', () => this.navigate(1));
        }
    }

    /**
     * Handles navigation logic with infinite looping and prevents spam-clicking
     * @param {number} direction - (-1 for Previous, 1 for Next)
     */
    navigate(direction) {
        // Prevent clicking while an animation is currently running
        if (this.isAnimating) return;
        this.isAnimating = true;

        // Step 1: Trigger Exit Animation (via CSS)
        // Adding the 'changing' class triggers fadeOutLeft/fadeOutRight keyframes
        this.contentWrapper.classList.add('changing');

        // Step 2: Calculate next index using Modulo operator for a seamless Infinite Loop
        if (direction === 1) {
            this.currentIndex = (this.currentIndex + 1) % this.films.length;
        } else {
            this.currentIndex = (this.currentIndex - 1 + this.films.length) % this.films.length;
        }

        // Step 3: Wait for exit animation to finish (matches --transition-fast: 200ms)
        setTimeout(() => {
            // Swap out the data while elements are invisible
            this.renderData(this.films[this.currentIndex]);

            // Step 4: Remove exit class to trigger Entry Animation (fadeSlideLeft/Right)
            this.contentWrapper.classList.remove('changing');

            // Step 5: Unlock the slider after entry animation finishes (matches --transition-normal: 350ms)
            setTimeout(() => {
                this.isAnimating = false;
            }, 350);

        }, 200);
    }

    /**
     * Directly injects data into the DOM elements
     * @param {Object} film - The film data object containing title, description, etc.
     */
    renderData(film) {
        if (!film) return;
        this.elYear.textContent = film.year;
        this.elTitle.textContent = film.title;
        this.elSlogan.textContent = film.slogan;
        this.elDesc.textContent = film.description;
        this.elDirector.textContent = film.director;

        // Handle image source swapping
        this.elImg.src = film.sceneImg;
        this.elImg.alt = film.title + " Scene";
    }
}

// Expose the component globally so app.js can initialize it safely
window.FilmSliderComponent = FilmSliderComponent;
