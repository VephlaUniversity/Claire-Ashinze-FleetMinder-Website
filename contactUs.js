const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

//Header

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
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

//Inputs

function sendMessage() {
  var lastName = document.getElementById("last-name").value;
  var firstName = document.getElementById("first-name").value;
  var email = document.getElementById("business-email").value;
  var phoneNumber = document.getElementById("phone-number").value;

  if (
    lastName === "" ||
    firstName === "" ||
    email === "" ||
    phoneNumber === ""
  ) {
    alert("Please fill all necessary inputs");
    return;
  }

  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// contactUs.js

function toggleTheme() {
  const body = document.body;
  const toggleButton = document.getElementById("toggleThemeButton");
  body.classList.toggle("dark-theme");

  // Change button icon
  const isDarkTheme = body.classList.contains("dark-theme");
  toggleButton.innerHTML = isDarkTheme
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon fa-spin"></i>';
}
