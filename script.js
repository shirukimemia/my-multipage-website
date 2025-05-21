// Image slider
const images = ["images/slide1.jpg", "images/slide2.jpg", "images/slide3.jpg"];
let index = 0;

function changeSlide() {
    const slider = document.getElementById("slider-image");
    if (slider) {
        index = (index + 1) % images.length;
        slider.src = images[index];
    }
}
setInterval(changeSlide, 3000); // change every 3 seconds

// Form validation
const form = document.getElementById("contact-form");
if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const feedback = document.getElementById("form-feedback");

        if (!name || !email || !message) {
            feedback.textContent = "All fields are required.";
            feedback.style.color = "red";
        } else if (!email.includes("@")) {
            feedback.textContent = "Please enter a valid email.";
            feedback.style.color = "red";
        } else {
            feedback.textContent = "Message sent successfully!";
            feedback.style.color = "green";
            form.reset();
        }
    });
}
