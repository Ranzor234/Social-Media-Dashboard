// const slider = document.querySelector(".slider");

// function changeTheme(){

// }

// slider.addEventListener('click', changeTheme())

const slider = document.querySelector(".slider");

function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
  if (localStorage.getItem("theme") === "blacktheme") {
    setTheme("whitetheme");
  } else {
    setTheme("blacktheme");
  }
}

(function() {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-dark");
  } else {
    setTheme("theme-light");
  }
})();

slider.addEventListener("click", toggleTheme());
