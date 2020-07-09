// const slider = document.querySelector(".slider");

// function changeTheme(){

// }

// slider.addEventListener('click', changeTheme())

function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'blacktheme') {
        setTheme('whitetheme');
    } else {
        setTheme('blacktheme');
    }
}