// JavaScript for form submission (optional)
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents the form from submitting the traditional way
    alert('Your message has been sent!');
    document.getElementById('contact-form').reset(); // Reset the form after submission
});
