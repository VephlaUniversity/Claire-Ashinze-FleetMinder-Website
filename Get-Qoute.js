const activePage = window.location.pathname;
const navLink = document.querySelector(".home");
if (navLink) {
  navLink.classList.add("active");
  navLink.style.color = "white";
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

// Function to validate email
function validateEmail(email) {
  // Regular expression for basic email validation
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

//Forms

document
  .getElementById("submitButton")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission

    // Check if all necessary inputs are filled
    var track = document.getElementById("track").value.trim();
    var fleetSize = document.getElementById("fleetSize").value.trim();
    var fleetSize2 = document.getElementById("fleetSize2").value.trim();
    var postalCode = document.getElementById("postalCode").value.trim();
    var otherInfo = document.getElementById("otherInfo").value.trim();

    if (
      track === "" ||
      fleetSize === "" ||
      fleetSize2 === "" ||
      postalCode === ""
    ) {
      alert("Please fill in all fields.");
      return;
    }

    // Generate the default quote
    var defaultQuote =
      "Thank you for your inquiry. Our team will contact you shortly with a personalized quote.";

    // Display the default quote in an alert
    alert(defaultQuote);
  });

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
