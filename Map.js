var map = L.map("map").setView([51.505, -0.09], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

// Initialize markers for vehicles and houses
var vehicleMarker = L.marker([51.505, -0.09], {
  icon: L.divIcon({
    className: "vehicle-icon car",
    iconSize: [30, 30],
  }),
}).addTo(map);

var motorcycleMarker = L.marker([51.51, -0.1], {
  icon: L.divIcon({
    className: "vehicle-icon motorcycle",
    iconSize: [30, 30],
  }),
}).addTo(map);

var houseMarker = L.marker([51.505, -0.1], {
  icon: L.divIcon({
    className: "house-icon house",
    iconSize: [30, 30],
  }),
}).addTo(map);

// Function to update the vehicle's position
function updateVehiclePositions() {
  // For the updated coordinates from a server
  var carLatLng = [51.51 + Math.random() * 0.1, -0.09 + Math.random() * 0.1];
  var motorcycleLatLng = [
    51.505 + Math.random() * 0.1,
    -0.1 + Math.random() * 0.1,
  ];
  var houseLatLng = [51.505 + Math.random() * 0.1, -0.1 + Math.random() * 0.1];

  // Update marker positions
  vehicleMarker.setLatLng(carLatLng);
  motorcycleMarker.setLatLng(motorcycleLatLng);
  houseMarker.setLatLng(houseLatLng);

  // I'm calling the function again after a delay
  setTimeout(updateVehiclePositions, 3000);
}

// Vehicle's position update
updateVehiclePositions();

// To search for a location
function searchLocation() {
  var searchTerm = document.getElementById("searchInput").value;

  fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${searchTerm}`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data && data.length > 0) {
        var latlng = [data[0].lat, data[0].lon];
        map.setView(latlng, 13);
        L.marker(latlng).addTo(map).bindPopup(searchTerm).openPopup();
      } else {
        alert("Location not found");
      }
    })
    .catch((error) => {
      console.error("Error fetching location:", error);
    });
}

//Header

/* Dropdown Toggle */
function toggleDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside */
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
