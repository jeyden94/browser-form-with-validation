import "./styles.css";

// eslint-disable-next-line no-undef
if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

//-- Set Variables to Access Form, Input Divs and Error Message Divs --//
const form = document.querySelector("form")

const email = document.getElementById("email")
const emailError = document.getElementById("email-error")


//-- Add Regular Expression Variables for Each Input --//
const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
//-- Dynamically Update Input Validity and Generate Error Messages --//
const isValidInput = (input, regExp) => {
  const validity = input.value.length !== 0 && regExp.test(input.value);
  return validity;
};

const setInputClass = (inputDiv, validityStatus) => {
  inputDiv.className = validityStatus ? "valid" : "invalid";
};

const updateError = (thisInput, thisError, thisValidityStatus) => {
  if (thisValidityStatus) {
    thisError.textContent = "";
    thisError.removeAttribute("class");
  } else {
    if (thisInput === email) {
      thisError.textContent = "I expect an email, darling!";
      thisError.setAttribute("class", "active");
    }
  }
};

const handleInput = (inputValue, errorMessage, inputRegExp) => {
  const validity = isValidInput(inputValue, inputRegExp);
  setInputClass(inputValue, validity);
  updateError(inputValue, errorMessage, validity);
};


//-- Form-Level Event Handler That Considers All Inputs --//
const handleSubmit = (event) => {
  event.preventDefault();

  const emailValidity = isValidInput(email, emailRegExp);
  setInputClass(email, emailValidity);
  updateError(email, emailError, emailValidity);
};

//-- Initialize Each Input's Validity --//
const emailValidity = isValidInput(email, emailRegExp);
setInputClass(email, emailValidity);

//-- Add Event Listeners for Each Input --//
email.addEventListener("input", () => handleInput(email, emailError, emailRegExp));

form.addEventListener("submit", handleSubmit);