document.addEventListener("DOMContentLoaded", function () {
  var saveButton = document.querySelector(".btt");

  saveButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Validate form inputs
    var inputs = document.querySelectorAll(
      'input[type="text"], input[type="date"], select'
    );
    var isValid = true;

    inputs.forEach(function (input) {
      if (!input.value.trim()) {
        isValid = false;
        return;
      }
    });

    // If all inputs are filled, show success alert
    if (isValid) {
      var confirmation = confirm(
        "Congratulations your vehicle has been added! Please proceed to the main page"
      );
      if (confirmation) {
        window.location.href =
          "http://127.0.0.1:5500/Landing%20Page/Landing-page.html";
      }
    } else {
      // If any input is empty, show error alert
      var confirmation = confirm(
        "Please fill the required fields with asterisk or press 'Ok' to leave this page"
      );
      if (confirmation) {
        window.location.href = "http://127.0.0.1:5500/Dashboard/Dashboard.html";
      }
    }
  });
});

// Add-vehicle.js

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
