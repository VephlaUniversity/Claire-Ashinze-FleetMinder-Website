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
