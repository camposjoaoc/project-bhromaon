// Select the hamburger button element
const hamburgerButton = document.querySelector("#hamburgerButton");

// Select the close button element
const closeButton = document.querySelector("#closeButton");

// Select the mobile menu element
const mobileMenu = document.querySelector("#mobileMenu");

// Check if the hamburger button and mobile menu exist
if (hamburgerButton && mobileMenu) {
    // Add a click event listener to the hamburger button
    hamburgerButton.addEventListener("click", function () {
        // Toggle the "flex" class to show or hide the mobile menu
        mobileMenu.classList.toggle("flex");
    });
}

// Check if the close button and mobile menu exist
if (closeButton && mobileMenu) {
    // Add a click event listener to the close button
    closeButton.addEventListener("click", function () {
        // Remove the "flex" class to hide the mobile menu
        mobileMenu.classList.remove("flex");
    });
}