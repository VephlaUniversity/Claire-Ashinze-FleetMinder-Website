document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    if (validateForm()) {
      storeRegistrationDetails(); // Store registration details
      window.location.href = "http://127.0.0.1:5500/Profile/Profile.html"; // Redirect to specified URL
    } else {
      alert("Please fill in all fields."); // Alert if form fields are not filled
    }
  });

function validateForm() {
  // Check if all input fields are filled
  var inputs = document.querySelectorAll('input[type="text"]');
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value.trim() === "") {
      return false; // Return false if any field is empty
    }
  }
  return true; // Return true if all fields are filled
}

function storeRegistrationDetails() {
  // Store registration details in localStorage
  var registrationDetails = {
    fullname: document.getElementById("fname").value,
    phoneNumber: document.getElementById("phone").value,
    address: document.getElementById("add").value,
    password: document.getElementById("pass").value,
    companyName: document.getElementById("c-name").value,
    companyAddress: document.getElementById("c-add").value,
    companyRegNumber: document.getElementById("c-reg").value,
  };

  localStorage.setItem(
    "registrationDetails",
    JSON.stringify(registrationDetails)
  );
}

// Retrieve registration details (if needed)
// function retrieveRegistrationDetails() {
//     var storedDetails = localStorage.getItem('registrationDetails');
//     if (storedDetails) {
//         return JSON.parse(storedDetails);
//     }
//     return null;
// }

//Password
document.addEventListener("DOMContentLoaded", function () {
  const passwordInput = document.querySelector("#pass");
  const confirmPasswordInput = document.querySelector("#pass-w");

  // Function to toggle password visibility
  function togglePasswordVisibility(input) {
    if (input.type === "password") {
      input.type = "text";
    } else {
      input.type = "password";
    }
  }

  // Add event listeners to toggle visibility on input focus
  passwordInput.addEventListener("focus", function () {
    togglePasswordVisibility(passwordInput);
  });

  passwordInput.addEventListener("blur", function () {
    togglePasswordVisibility(passwordInput);
  });

  confirmPasswordInput.addEventListener("focus", function () {
    togglePasswordVisibility(confirmPasswordInput);
  });

  confirmPasswordInput.addEventListener("blur", function () {
    togglePasswordVisibility(confirmPasswordInput);
  });

  // Restrict input to only allow uppercase, lowercase, and certain symbols
  const allowedCharacters = /^[A-Za-z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/;

  passwordInput.addEventListener("input", function (event) {
    const inputValue = event.target.value;
    if (!allowedCharacters.test(inputValue)) {
      event.target.value = inputValue.slice(0, -1);
      alert(
        "Only uppercase, lowercase letters, and certain symbols are allowed!"
      );
    }
  });

  confirmPasswordInput.addEventListener("input", function (event) {
    const inputValue = event.target.value;
    if (!allowedCharacters.test(inputValue)) {
      event.target.value = inputValue.slice(0, -1);
      alert(
        "Only uppercase, lowercase letters, and certain symbols are allowed!"
      );
    }
  });
});

//Header

/* Dropdown Toggle */
function toggleDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

//Footer
document
  .getElementById("newsletterForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the email input value
    var email = document.getElementById("emailInput").value;

    // Check if the email is valid
    if (validateEmail(email)) {
      // Email is valid, show confirmation alert
      alert("Email confirmed: " + email);
    } else {
      // Email is not valid, show error alert
      alert("Please enter a valid email address.");
    }
  });

// Function to validate email
function validateEmail(email) {
  // Regular expression for basic email validation
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

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

//Header Ham//

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const headerContent = document.querySelector(".header-content");

  menuToggle.addEventListener("click", function () {
    headerContent.classList.toggle("show");
  });

  // Close the header content when clicking outside the menu
  document.addEventListener("click", function (event) {
    if (
      !menuToggle.contains(event.target) &&
      !headerContent.contains(event.target)
    ) {
      headerContent.classList.remove("show");
    }
  });
});

function myFunction(x) {
  x.classList.toggle("change");
}
