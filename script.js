
// Find the button using its id
const button = document.getElementById("contactButton");

// Find the empty message paragraph using its id
const message = document.getElementById("message");

// Wait for the user to click the button
button.addEventListener("click", function () {

    // Show this message after clicking
    message.textContent = "Thank you for visiting my CV!";

});