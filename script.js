document.addEventListener("DOMContentLoaded", function() {
    let wishlistButtons = document.querySelectorAll(".wishlist-btn");

    wishlistButtons.forEach(button => {
        button.addEventListener("click", function() {
            this.classList.toggle("active"); // Toggle active class
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        let isValid = true;

        // Remove previous error messages
        document.querySelectorAll(".error-message").forEach(el => el.remove());

        // Get form fields
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const phone = document.getElementById("phone");
        const message = document.getElementById("message");

        // Validate Name
        if (name.value.trim() === "") {
            showError(name, "Name is required.");
            isValid = false;
        }

        // Validate Email
        if (email.value.trim() === "") {
            showError(email, "Email is required.");
            isValid = false;
        } else if (!validateEmail(email.value)) {
            showError(email, "Please enter a valid email.");
            isValid = false;
        }

        // Validate Phone (exactly 7 digits)
        if (phone.value.trim() === "") {
            showError(phone, "Phone number is required.");
            isValid = false;
        } else if (!/^\d{7}$/.test(phone.value.trim())) {
            showError(phone, "Phone number must be exactly 7 digits.");
            isValid = false;
        }

        // Validate Message
        if (message.value.trim() === "") {
            showError(message, "Message cannot be empty.");
            isValid = false;
        }

        // Prevent form submission
        if (!isValid) {
            event.preventDefault();
        }
    });

    // Show error message
    function showError(input, message) {
        const error = document.createElement("p");
        error.classList.add("error-message");
        error.style.color = "red";
        error.style.fontSize = "12px";
        error.textContent = message;
        input.parentNode.appendChild(error);
    }

    // Email validation function
    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});

