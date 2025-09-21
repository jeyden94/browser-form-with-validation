import "./styles.css";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

const form = document.querySelector("form");
const email = document.getElementById("mail");
const error = document.getElementById("error");

// Regular expression for email validation as per HTML specification
const emailRegExp = /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d-]+(?:\.[a-z\d-]+)*$/i;

// Check if the email is valid


// Update email input class based on validity


// Update error message and visibility


// Handle input event to update email validity


// Handle form submission to show error if email is invalid


// Now we can rebuild our validation constraint
// Because we do not rely on CSS pseudo-class, we have to
// explicitly set the valid/invalid class on our email field


// This defines what happens when the user types in the field

// This defines what happens when the user tries to submit the data
