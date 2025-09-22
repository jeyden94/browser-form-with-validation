import "./styles.css";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

const form = document.querySelector("form")

const email = document.getElementById("email")
const emailError = document.getElementById("email-error")

const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const isValidInput = (input, regExp) => {
  const validity = input.value.length !== 0 && regExp.test(input.value);
  return validity;
};

const setInputClass = (input, isValid) => {
  input.className = isValid ? "valid" : "invalid";
};

const updateError = (input, error, isValid) => {
  if (isValid) {
    error.textContent = "";
    error.removeAttribute("class");
  } else {
    if (input === email) {
      error.textContent = "I expect an email, darling!";
      error.setAttribute("class", "active");
    }
  }
};

const handleInput = (input, error, regExp) => {
  const validity = isValidInput(input, regExp);
  setInputClass(input, validity);
  updateError(input, error, validity);
};

const handleSubmit = (event) => {
  event.preventDefault();

  const emailValidity = isValidInput(email, emailRegExp);
  setInputClass(email, emailValidity);
  updateError(email, emailError, emailValidity);
};

const emailValidity = isValidInput(email, emailRegExp);
setInputClass(email, emailValidity);


email.addEventListener("input", () => handleInput(email, emailError, emailRegExp));

form.addEventListener("submit", handleSubmit);