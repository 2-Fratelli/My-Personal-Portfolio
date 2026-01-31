document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    let isValid = true;

    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();

    if (name === "") {
    document.getElementById("nameError").innerText = "Name is required.";
    isValid = false;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
    document.getElementById("emailError").innerText = "Enter a valid email address.";
    isValid = false;
    }

    if (isValid) {
    alert("Form submitted successfully!");
    document.getElementById("signupForm").reset(); // Reset form fields
    }
    });