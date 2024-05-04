function toggleDropdown(dropdownId) {
  var dropdown = document.getElementById(dropdownId);
  dropdown.classList.toggle("show");
}

// Close the dropdowns if the user clicks outside of them
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

// for all month options

document.addEventListener("DOMContentLoaded", function () {
  const monthOptions = document.querySelectorAll("#dropdown-month a");

  // Add click event listener to each month option
  monthOptions.forEach(function (monthOption) {
    monthOption.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default link behavior

      // Get the text content of the clicked month option
      const selectedMonth = this.textContent;

      // Update the text content of the selectedMonth element
      document.getElementById("selectedMonth").textContent = selectedMonth;
    });
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
