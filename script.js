// script.js

window.onload = function() {
    console.log("Welcome to my website!");
};

// Function to toggle visibility of an element
function toggleVisibility(elementId) {
    const element = document.getElementById(elementId);
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

// Example of an alert when the button is clicked
function showAlert() {
    alert("Button clicked!");
}
