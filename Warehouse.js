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

//Checkbox

document.addEventListener("DOMContentLoaded", function () {
  const headerCheckbox = document.querySelector(
    "th.amp input[type='checkbox']"
  );
  const checkboxes = document.querySelectorAll("tbody input[type='checkbox']");

  // Function to handle click event on the header checkbox
  function toggleCheckboxes() {
    checkboxes.forEach(function (checkbox) {
      checkbox.checked = headerCheckbox.checked;
    });
  }

  headerCheckbox.addEventListener("click", toggleCheckboxes);
});

// Function to handle pen Icon//

const undoStack = []; // Stack to store previous states for undo functionality

document.addEventListener("DOMContentLoaded", function () {
  const editLinks = document.querySelectorAll(".edit-link");

  editLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const cell = this.parentNode.previousElementSibling; // Get the cell to edit
      saveState(cell); // Save current state before editing
      editCell(cell); // Edit the adjacent cell
    });
  });

  function saveState(cell) {
    const span = cell.querySelector("span"); // Find the span within the cell
    const previousText = span ? span.innerText : cell.innerText; // Get current text
    undoStack.push({ cell, previousText }); // Save current state in the undo stack
  }

  function editCell(cell) {
    const checkbox = cell.querySelector('input[type="checkbox"]'); // Get the checkbox if present
    const span = cell.querySelector("span"); // Get the span within the cell
    const currentText = span ? span.innerText : cell.innerText; // Get current text

    const input = document.createElement("input"); // Create the input field
    input.type = "text";
    input.value = currentText; // Set the current text as input value
    input.className = "edit-input"; // Apply styles

    cell.innerHTML = ""; // Clear the cell content
    if (checkbox) {
      cell.appendChild(checkbox); // Keep the checkbox in place
    }
    cell.appendChild(input); // Add the input field

    input.focus(); // Set focus to the input
    input.select(); // Select all text for easy editing

    // Save the text on blur
    input.addEventListener("blur", function () {
      if (this.value.trim() === "") {
        revertState(cell, previousText); // Revert if the input is empty
      } else {
        saveNewText(cell, this.value, checkbox); // Save the new text
      }
    });

    // Save the text on pressing Enter
    input.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        if (this.value.trim() === "") {
          revertState(cell, previousText); // Revert if the input is empty
        } else {
          saveNewText(cell, this.value, checkbox); // Save the new text
        }
        input.blur(); // Trigger blur to finalize changes
      } else if (event.key === "ArrowRight" || "ArrowLeft") {
        handleArrowKeys(event, cell); // Handle arrow key navigation
      }
    });
  }

  function revertState(cell, previousText) {
    const span = document.createElement("span"); // Create a new span
    span.innerText = previousText; // Restore the original text
    cell.innerHTML = ""; // Clear the cell content
    if (cell.querySelector('input[type="checkbox"]')) {
      // Keep the checkbox in place
      cell.appendChild(cell.querySelector('input[type="checkbox"]'));
    }
    cell.appendChild(span); // Append the original text as a span
  }

  function saveNewText(cell, newText, checkbox) {
    const newSpan = document.createElement("span"); // Create a new span
    newSpan.innerText = newText; // Set the new text
    cell.innerHTML = ""; // Clear the cell content
    if (checkbox) {
      // Keep the checkbox in place
      cell.appendChild(checkbox);
    }
    cell.appendChild(newSpan); // Append the new span
  }

  function handleArrowKeys(event, currentCell) {
    const row = currentCell.parentNode; // Get the current row
    const cells = Array.from(row.children); // Get all cells in the row
    const currentIndex = cells.indexOf(currentCell); // Get current cell index

    if (event.key === "ArrowRight" && currentIndex < cells.length - 1) {
      editCell(cells[currentIndex + 1]); // Move to the next cell
    } else if (event.key === "ArrowLeft" && currentIndex > 0) {
      editCell(cells[currentIndex - 1]); // Move to the previous cell
    }
  }

  // Function to undo the last change
  function undoChange() {
    if (undoStack.length > 0) {
      // Ensure there's a previous state
      const lastState = undoStack.pop(); // Get the last saved state
      revertState(lastState.cell, lastState.previousText); // Revert to the previous text
    }
  }
});
