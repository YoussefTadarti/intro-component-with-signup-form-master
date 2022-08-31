const FormSubmit = document.getElementById("form");
const FirstName = document.getElementById("f_name");
const LastName = document.getElementById("l_name");
const Email = document.getElementById("email");
const Password = document.getElementById("password");

function setErrorFunction(input, errorsMsg) {
  const errorMsg = input.parentElement.querySelector("small");
  input.parentElement.className = "form-group error";
  input.nextElementSibling.classList.remove("error-msg");
  errorMsg.innerText = errorsMsg;
  input.nextElementSibling.style.cssText =
    "display:block;color: red;float: right;padding: 0 0 12px 0;font-style: italic;";
}

function setSuccessFunction(input) {
  input.nextElementSibling.classList.add("error-msg");
  input.parentElement.className = "form-group success";
}

function isEmail(input) {
  let validEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return input.value.trim().match(validEmail);
}

//Check inputs data
function checkInputs() {
  const firstNameValue = FirstName.value.trim();
  const lastNameValue = LastName.value.trim();
  const emailValue = Email.value.trim();
  const passwordValue = Password.value.trim();
  if (firstNameValue === "") {
    setErrorFunction(FirstName, "First Name cannot be empty");
  } else if (firstNameValue.length < 2) {
    setErrorFunction(FirstName, "Minimum allowed line length is 2");
  } else {
    setSuccessFunction(FirstName);
  }

  if (lastNameValue === "") {
    setErrorFunction(LastName, "Last Name cannot be empty");
  } else if (lastNameValue.length < 2) {
    setErrorFunction(LastName, "Minimum allowed line length is 2");
  } else {
    setSuccessFunction(LastName);
  }

  if (emailValue === "") {
    setErrorFunction(Email, "Email Address cannot be empty");
  } else if (!isEmail(Email)) {
    setErrorFunction(Email, "Looks like this is not an email");
  } else {
    setSuccessFunction(Email);
  }

  if (passwordValue === "") {
    setErrorFunction(Password, "Password cannot be empty");
  } else if (passwordValue.length < 8) {
    setErrorFunction(Password, "Minimum allowed line length is 8");
  } else {
    setSuccessFunction(Password);
  }
}

FormSubmit.addEventListener("submit", function (event) {
  event.preventDefault();
  checkInputs();
});
