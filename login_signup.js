function validateInput() {
    let input = document.getElementById("userInput").value;
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let phonePattern = /^\+?\d{10,15}$/; // Supports phone numbers with optional country code

    if (emailPattern.test(input)) {
        document.getElementById("message").style.color = "green";
        document.getElementById("message").innerText = "Valid email address!";
    } else if (phonePattern.test(input)) {
        document.getElementById("message").style.color = "green";
        document.getElementById("message").innerText = "Valid phone number!";
    } else {
        document.getElementById("message").style.color = "red";
        document.getElementById("message").innerText = "Invalid input. Please enter a valid email or phone number.";
    }
}