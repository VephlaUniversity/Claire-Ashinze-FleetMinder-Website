document.addEventListener("DOMContentLoaded", function () {
  // Function to check if all fields are filled
  function validateForm() {
    var inputs = document.querySelectorAll(
      'input[type="text"], input[type="date"]'
    );
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value === "") {
        return false;
      }
    }
    return true;
  }

  // Function to handle Save button click
  function handleSaveButtonClick() {
    var isValid = validateForm();
    if (isValid) {
      // If all fields are filled, show congratulations alert
      alert(
        "Congratulations your vehicle has been added! Please proceed to the main page"
      );
      window.location.href =
        "index.html";
    } else {
      // If any field is empty, show alert to fill required fields or cancel
      var confirmResult = confirm(
        "Please fill the required fields or press cancel to leave this page"
      );
      if (confirmResult) {
        window.location.href = "Dashboard.html";
      }
    }
  }

  // Attach click event listener to the Save button
  var saveButton = document.querySelector('.btt button[type="submit"]');
  saveButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission
    handleSaveButtonClick();
  });
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
