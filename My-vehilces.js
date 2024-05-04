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

//Edit Button//

document.querySelectorAll(".ble").forEach((ble) => {
  let isEditMode = false;

  const editIcon = ble.querySelector(".edit-icon");
  const elements = ble.querySelectorAll("p");
  const vehicleImage = ble.querySelector(".vehicle-image");

  editIcon.addEventListener("click", function () {
    if (isEditMode) {
      elements.forEach((el) => {
        el.contentEditable = "false";
        el.classList.remove("edit-mode");
      });
      isEditMode = false;
    } else {
      elements.forEach((el) => {
        el.contentEditable = "true";
        el.classList.add("edit-mode");
      });

      vehicleImage.addEventListener("click", function () {
        if (isEditMode) {
          const newImageSrc = prompt("Enter new image URL:");

          if (newImageSrc !== null) {
            if (newImageSrc.trim() !== "") {
              vehicleImage.src = newImageSrc;
            } else {
              alert("You didn't enter a new image URL.");
            }
          }
        }
      });

      document.addEventListener("keydown", function (e) {
        if (e.key === "Tab") {
          e.preventDefault();
          const focusable = Array.from(elements);
          const index = focusable.indexOf(document.activeElement);
          const nextIndex = (index + 1) % focusable.length;
          focusable[nextIndex].focus();
        }
      });

      isEditMode = true;
    }
  });
});

//CheckBox//
