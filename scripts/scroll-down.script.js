// Get the scroll button element by its ID
const scrollButton = document.getElementById('scrollButton');

// Check if the scroll button element exists
if (scrollButton) {
    // Add a click event listener to the scroll button
    scrollButton.addEventListener('click', function () {
        // Get the target section element by its ID
        const targetSection = document.getElementById('target-section');

        // Check if the target section exists
        if (targetSection) {
            // Scroll to the target section smoothly
            targetSection.scrollIntoView({
                behavior: 'smooth', // Enable smooth scrolling effect
                block: 'start' // Align the section at the top of the viewport
            });
        } else {
            // Log an error if the target section is not found
            console.error('Target section not found.');
        }
    });
} else {
    // Log an error if the scroll button element is not found
    console.error('Scroll button not found.');
}
