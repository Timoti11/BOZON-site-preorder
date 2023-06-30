// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}
// function to toggle between light and dark theme
function toggleTheme() {
    if (document.getElementById('switch').checked){
        setTheme('theme-dark');
   } else {
    setTheme('theme-light');
   }
}
// Immediately invoked function to set the theme on initial load
(function () {
    if (document.getElementById('switch').checked){
       setTheme('theme-dark');
   } else {
       setTheme('theme-light');
   }
})();