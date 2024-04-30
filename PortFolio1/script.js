// Form submission and validation
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = form.querySelector("#name").value.trim();
        const email = form.querySelector("#email").value.trim();
        const message = form.querySelector("#message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        // You can add further processing here, such as sending the form data to a server
        // For this example, we'll simply log the form data to the console
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);

        // Reset form fields
        form.reset();
    });
});