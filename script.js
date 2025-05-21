// ---------- Image Slider ----------
const images = [
    "images/slide1.jpeg",
    "images/slide2.jpeg",
    "images/slide3.jpeg"
];
let index = 0;

function changeSlide() {
    const slider = document.getElementById("slider-image");
    if (slider) {
        index = (index + 1) % images.length;
        slider.src = images[index];
    }
}

setInterval(changeSlide, 3000); // Change every 3 seconds


// ---------- Form Validation ----------
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();
            const feedback = document.getElementById("form-feedback");

            // Clear previous messages
            feedback.textContent = "";

            if (!name || !email || !message) {
                feedback.textContent = "All fields are required.";
                feedback.style.color = "red";
            } else if (!validateEmail(email)) {
                feedback.textContent = "Please enter a valid email address.";
                feedback.style.color = "red";
            } else {
                feedback.textContent = "Message sent successfully!";
                feedback.style.color = "green";
                form.reset();
            }
        });
    }

    function validateEmail(email) {
        // Basic email pattern check
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});
