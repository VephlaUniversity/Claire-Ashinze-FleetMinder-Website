// Header Ham
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

// Toggle dropdown content
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

function toggleMenu() {
  var navbar = document.getElementById("navbar");
  var hero = document.getElementById("hero");
  if (navbar.style.display === "block") {
    navbar.style.display = "none";
    hero.style.marginTop = "0";
  } else {
    navbar.style.display = "block";
    hero.style.marginTop = navbar.clientHeight + "px";
  }
}
