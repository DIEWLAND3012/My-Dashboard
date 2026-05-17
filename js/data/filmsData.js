/* ==========================================================================
   MY DASHBOARD - FILMSDATA.JS (CENTRAL FILM PORTFOLIO DATABASE)
   ========================================================================== */

const filmsData = [
    {
        id: "lan-sang",
        year: "2023",
        title: "LAN SANG",
        slogan: '"A Journey Back to Nature"',
        description: 'Escape the hustle and bustle of the big city and rediscover the magic of Lan Sang National Park. From childhood dreams to adult sanctuaries, this hidden gem in Tak, Thailand, offers more than just a waterfall. It is a portal to peace, self-discovery, and a deeper bond with the wild.',
        director: 'Directed by Vasin Kaewmoragot',
        sceneImg: 'images/films/lan-sang/scene.jpg',
        watchUrl: 'https://www.youtube.com/watch?v=placeholder1'
    },
    {
        id: "cinematic-city",
        year: "2024",
        title: "NEON PULSE",
        slogan: '"Lost in the Cybernetic Echoes"',
        description: 'A striking structural exploration of Bangkok\'s nightscape through the lens of modern street cinematography. Capturing the beautiful contrast between high-speed neon signs and traditional local street alleys, this short film redefines visual rhythm and ambient storytelling.',
        director: 'Directed by Vasin Kaewmoragot',
        sceneImg: 'images/films/neon-pulse/scene.jpg',
        watchUrl: 'https://www.youtube.com/watch?v=placeholder2'
    },
    {
        id: "the-last-frame",
        year: "2025",
        title: "MONOCHROME",
        slogan: '"Shades of Silence and Time"',
        description: 'Shot exclusively on 16mm black and white analog film stock, Monochrome dives into the deep textures of portrait framing and architectural shadows. An artistic statement exploring isolation, human resilience, and the stillness of forgotten local spaces.',
        director: 'Directed by Vasin Kaewmoragot',
        sceneImg: 'images/films/monochrome/scene.jpg',
        watchUrl: 'https://www.youtube.com/watch?v=placeholder3'
    }
];

// Attach to window object for global component coordination
window.filmsData = filmsData;
