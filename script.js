var tabLinks = document.getElementsByClassName("tabLinks");
var tabContents = document.getElementsByClassName("tabContents");

function opentab(tabName) {
  for (let tabLink of tabLinks) {
    tabLink.classList.remove("activeLink");
  }
  for (let tabContent of tabContents) {
    tabContent.classList.remove("activeTab");
  }
  event.currentTarget.classList.add("activeLink");
  document.getElementById(tabName).classList.add("activeTab");
}

var sideMenu = document.getElementById("sideMenu");

function openMenu() {
  sideMenu.style.right = "0";
}
function closeMenu() {
  sideMenu.style.right = "-200px";
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwQAlADNHyk1UQ3nAUQy6qT5aYw8q79bcMBJobH0YgZKTvfd4rXT8uei9NecWdiePNBEQ/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 2000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
