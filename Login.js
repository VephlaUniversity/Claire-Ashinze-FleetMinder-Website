document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.querySelector("#add");
  const passwordInput = document.querySelector("#password"); // Changed from #c-reg to #password

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

  // Validate email format
  emailInput.addEventListener("blur", function (event) {
    const inputValue = event.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputValue)) {
      alert("Please enter a valid email address!");
    }
  });
});

document
  .querySelector("#registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    var email = document.querySelector("#add").value.trim();
    var password = document.querySelector("#password").value.trim(); // Changed from #c-reg to #password

    if (email === "" || password === "") {
      alert("Please fill in all fields.");
    } else {
      // Store registration details
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);

      // Redirect to the profile page
      window.location.href = "http://127.0.0.1:5500/Profile/Profile.html";
    }
  });

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

//Dark Theme

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

//Header

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
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
