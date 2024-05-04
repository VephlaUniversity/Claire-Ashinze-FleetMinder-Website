// Initialize the map
var map = L.map("map").setView([6.5244, 3.3792], 12); // Lagos, Nigeria

// Add the Tile Layer (OpenStreetMap)
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

// Create custom icons for different vehicles
var carIcon = L.icon({
  iconUrl: "https://i.postimg.cc/W4ZbDccR/Car-Top-View.png", // Replace with the actual path to your car icon
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

var motorcycleIcon = L.icon({
  iconUrl: "https://i.postimg.cc/gJPc8tGx/Quad-Bike.png", // Replace with the actual path to your motorcycle icon
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

var shipIcon = L.icon({
  iconUrl: "https://i.postimg.cc/vBYfwwBs/ship_1212305.png", // Replace with the actual path to your ship icon
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

var cargoIcon = L.icon({
  iconUrl: "https://i.postimg.cc/FRTc9CdJ/boat-with-containers-75931.png", // Replace with the actual path to your cargo icon
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

var truckIcon = L.icon({
  iconUrl: "https://i.postimg.cc/vB03Rjqj/delivery-truck-324279.png", // Replace with the actual path to your truck icon
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

// Create markers for different vehicles with custom icons
var carMarker = L.marker([6.7, 4.3242], { icon: carIcon })
  .addTo(map)
  .bindPopup("Car")
  .openPopup();
var motorcycleMarker = L.marker([7.2, 3.35], { icon: motorcycleIcon })
  .addTo(map)
  .bindPopup("Motorcycle")
  .openPopup();
var carMarker = L.marker([6.47, 3.3242], { icon: carIcon })
  .addTo(map)
  .bindPopup("Car")
  .openPopup();
var shipMarker = L.marker([6.49, 3.55], { icon: shipIcon })
  .addTo(map)
  .bindPopup("Ship")
  .openPopup();
var cargoMarker = L.marker([6.52, 4.15], { icon: cargoIcon })
  .addTo(map)
  .bindPopup("Cargo")
  .openPopup();

var motorcycleMarker = L.marker([6.58, 3.25], { icon: motorcycleIcon })
  .addTo(map)
  .bindPopup("Motorcycle")
  .openPopup();
var truckMarker = L.marker([6.5, 3.1], { icon: truckIcon })
  .addTo(map)
  .bindPopup("Truck")
  .openPopup();

var carMarker = L.marker([6.7943, 3.7792], { icon: carIcon })
  .addTo(map)
  .bindPopup("Car")
  .openPopup();

// Function to prompt user for location access
function enableLocationView() {
  if (navigator.geolocation) {
    var userPermission = window.confirm(
      "Allow this website to access your location?"
    );
    if (userPermission) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          var userLatLng = [
            position.coords.latitude,
            position.coords.longitude,
          ];
          var userMarker = L.marker(userLatLng)
            .addTo(map)
            .bindPopup("Your Location")
            .openPopup();
          map.setView(userLatLng, 15);
        },
        function (error) {
          console.error("Error getting user location:", error.message);
        }
      );
    } else {
      alert(
        "Location access denied. You can still explore the map without your current location."
      );
    }
  } else {
    alert("Geolocation is not supported by your browser.");
  }
}

// Prompt the user for location view
enableLocationView();

//<a> tag

// Create custom icons for different vehicles
var carIcon = L.icon({
  iconUrl: "https://i.postimg.cc/vB03Rjqj/delivery-truck-324279.png", // Replace with the actual path to your car icon
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

var carIcon = L.icon({
  iconUrl: "https://i.postimg.cc/vB03Rjqj/delivery-truck-324279.png", // Replace with the actual path to your car icon
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

// Function to add marker
function addMarker(coords, icon) {
  L.marker(coords, { icon: icon }).addTo(map);
}

// Track link click event
var trackLinks = document.querySelectorAll(".track-link");
trackLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    var lat = parseFloat(this.getAttribute("data-lat"));
    var lng = parseFloat(this.getAttribute("data-lng"));
    var coords = [lat, lng];
    // Clear existing markers
    map.setView(coords, 10);
    addMarker(coords, carIcon); // Assuming all vehicles are represented by car icon for simplicity
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
