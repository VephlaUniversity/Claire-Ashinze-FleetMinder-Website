// Ham Menu Blue //
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
