// Get references to form elements
const fullName = document.getElementById("fname");
const email = document.getElementById("mail");
const phoneNumber = document.getElementById("number");
const address = document.getElementById("address");
const password = document.getElementById("pass");
const companyName = document.getElementById("cname");
const companyAddress = document.getElementById("caddress");
const regNumber = document.getElementById("reg");
const forms = document.querySelectorAll("form");

// Add event listeners to forms
forms.forEach((form) => {
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    if (validateForm(form)) {
      // Form is valid, you can submit it or perform further actions
      form.submit(); // Example: submit the form
    }
  });
});

// Function to validate a single input field
function validateInput(input, regex, errorMessage) {
  if (!regex.test(input.value.trim())) {
    displayErrorMessage(input, errorMessage);
    return false;
  }
  hideErrorMessage(input);
  return true;
}

// Function to validate the entire form
function validateForm(form) {
  let isValid = true;

  // Validation for full name
  isValid &= validateInput(
    fullName,
    /^[a-zA-Z\s]+$/,
    "Please enter a valid full name."
  );

  // Validation for email
  isValid &= validateInput(
    email,
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    "Please enter a valid email address."
  );

  // Validation for phone number
  isValid &= validateInput(
    phoneNumber,
    /^\+?\d{1,3}\s?\d{10}$/,
    "Please enter a valid phone number."
  );

  // Validation for address
  isValid &= validateInput(address, /^.{5,}$/, "Please enter a valid address.");

  // Validation for password
  isValid &= validateInput(
    password,
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
    "Password must be at least 8 characters long, contain at least one lowercase letter, one uppercase letter, and one number."
  );

  // Validation for company name
  isValid &= validateInput(
    companyName,
    /^[a-zA-Z\s]+$/,
    "Please enter a valid company name."
  );

  // Validation for company address
  isValid &= validateInput(
    companyAddress,
    /^.{5,}$/,
    "Please enter a valid company address."
  );

  // Validation for registration number
  isValid &= validateInput(
    regNumber,
    /^[a-zA-Z\d\s]+$/,
    "Please enter a valid registration number."
  );

  return isValid;
}

// Function to display error message
function displayErrorMessage(input, message) {
  const errorElement = document.createElement("div");
  errorElement.className = "error-message";
  errorElement.innerText = message;
  input.parentNode.appendChild(errorElement);
}

// Function to hide error message
function hideErrorMessage(input) {
  const errorMessage = input.parentNode.querySelector(".error-message");
  if (errorMessage) {
    errorMessage.remove();
  }
}

//Alert function
function viewProfileAlert() {
  // Displaying the alert box
  var confirmation = confirm("Do you want to view the landing page instead?");

  // If the user clicks "OK", they will view the profile
  if (confirmation) {
    window.location.href = "index.html";
  }
}

// Call the function when the page loads
window.onload = viewProfileAlert;

//Themes

function toggleTheme() {
  const body = document.body;
  const toggleButton = document.querySelector(".togg");
  body.classList.toggle("dark-theme");

  // Change button icon
  const isDarkTheme = body.classList.contains("dark-theme");
  toggleButton.innerHTML = isDarkTheme
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon fa-spin"></i>';
}

// Ham Menu //
function openNav() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    var x = document.getElementById("myLinks");
    var tab = document.getElementById("myTab");
    if (x.style.display === "none" || x.style.display === "") {
      x.style.display = "block";
      tab.classList.add("push-tab");
    } else {
      x.style.display = "none";
      tab.classList.remove("push-tab");
    }
  }
}

function closeNav() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    var x = document.getElementById("myLinks");
    var tab = document.getElementById("myTab");
    x.style.display = "none";
    tab.classList.remove("push-tab");
  }
}
