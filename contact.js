document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const emailInput = document.getElementById('email');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = emailInput.value;
        const isValidEmail = validateEmail(email);

        if (isValidEmail) {
            alert("Your message has been submitted successfully!");
            form.reset(); // Reset the form after successful submission
        } else {
            alert("Failed to submit the message. Please enter a valid email.");
        }
    });

    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailPattern.test(email);
    }
});
