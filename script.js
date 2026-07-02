document.addEventListener('DOMContentLoaded', () => {
    // Select all navigation links within the main navigation
    const navLinks = document.querySelectorAll('.main-nav ul li a');
    // Select all content sections that need to be shown/hidden
    const contentSections = document.querySelectorAll('.content-section');

    /**
     * Hides all content sections by setting their display style to 'none'.
     */
    const hideAllSections = () => {
        contentSections.forEach(section => {
            section.style.display = 'none';
        });
    };

    /**
     * Shows a specific content section by setting its display style to 'block'.
     * @param {string} sectionId - The ID of the section to show (e.g., 'home-section').
     */
    const showSection = (sectionId) => {
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.style.display = 'block';
            // Optional: Scroll to the top of the section for better UX
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            console.error(`Section with ID '${sectionId}' not found.`);
        }
    };

    // Add click event listeners to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default anchor link behavior (page reload/jump)

            // Get the target section ID from the href attribute.
            // Example: href="#home" becomes "home-section"
            const targetId = link.getAttribute('href').substring(1) + '-section';

            hideAllSections(); // First, hide all existing sections
            showSection(targetId); // Then, show the section corresponding to the clicked link
        });
    });

    // Initial load: Show the "Home" section by default when the page first loads.
    // This ensures content is visible immediately.
    showSection('home-section');
});
