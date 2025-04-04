//Wishlist and Add to Cart Js
document.addEventListener("DOMContentLoaded", function() {
    let wishlistButtons = document.querySelectorAll(".wishlist-btn");

    wishlistButtons.forEach(button => {
        button.addEventListener("click", function() {
            this.classList.toggle("active"); // Toggle active class
        });
    });
});

//Slider Controls
function slideLeft(id) {
    const slider = document.getElementById(id);
    slider.scrollBy({
        left: -300,
        behavior: 'smooth'
    });
}

function slideRight(id) {
    const slider = document.getElementById(id);
    slider.scrollBy({
        left: 300,
        behavior: 'smooth'
    });
}

//Customer Works Submission Form Validation
document.getElementById('artworkForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    clearErrors();

    let valid = true;

    // Validate Name
    let name = document.getElementById('fname');
    if (name.value.trim() === "") {
        valid = false;
        showError(name, "Name is required.");
    }

    // Validate Email
    let email = document.getElementById('email');
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email.value)) {
        valid = false;
        showError(email, "Please enter a valid email.");
    }

    // Validate Phone
    let phone = document.getElementById('phone');
    let phonePattern = /^\(\d{3}\)\d{3}-\d{4}$/;
    if (!phonePattern.test(phone.value)) {
        valid = false;
        showError(phone, "Phone number format should be (868)123-4567.");
    }

    // Validate Artwork File
    let artworkFile = document.getElementById('artworkFile');
    if (!artworkFile.files.length) {
        valid = false;
        showError(artworkFile, "Please upload your artwork.");
    }

    // Validate Description
    let description = document.getElementById('description');
    if (description.value.trim() === "") {
        valid = false;
        showError(description, "Please describe your artwork.");
    }

    // If form is valid, submit it
    if (valid) {
        alert("Form submitted successfully!");
        this.submit(); // Submit the form if valid
    }
});

// Function to display error messages
function showError(input, message) {
    const error = document.createElement('p');
    error.textContent = message;
    error.classList.add('error-message');
    input.insertAdjacentElement('afterend', error);
    input.classList.add('error');
}

// Function to clear any previous error messages
function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    const errorFields = document.querySelectorAll('.error');

    errorMessages.forEach(message => message.remove());
    errorFields.forEach(field => field.classList.remove('error'));
}


//Contact Us Form Validation
document.getElementById('customerWorksForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Clear any previous error messages
    clearErrors();

    // Validate the fields
    let valid = true;

    // Validate Name
    let name = document.getElementById('name');
    if (name.value.trim() === "") {
        valid = false;
        showError(name, "Name is required.");
    }

    // Validate Email
    let email = document.getElementById('email');
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email.value)) {
        valid = false;
        showError(email, "Please enter a valid email.");
    }

    // Validate Phone
    let phone = document.getElementById('phone');
    let phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone.value)) {
        valid = false;
        showError(phone, "Please enter a valid 10-digit phone number.");
    }

    // Validate Message
    let message = document.getElementById('message');
    if (message.value.trim() === "") {
        valid = false;
        showError(message, "Message cannot be empty.");
    }

    // If all fields are valid, submit the form
    if (valid) {
        alert("Form submitted successfully!");
        // You can submit the form here if using Ajax or reset the form if needed
        // this.submit();  // Uncomment if you want to submit after validation
    }
});

// Function to display an error message
function showError(input, message) {
    const error = document.createElement('p');
    error.textContent = message;
    error.classList.add('error-message');
    input.insertAdjacentElement('afterend', error);
    input.classList.add('error');
}

// Function to clear any previous error messages
function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    const errorFields = document.querySelectorAll('.error');

    errorMessages.forEach(message => message.remove());
    errorFields.forEach(field => field.classList.remove('error'));
}
