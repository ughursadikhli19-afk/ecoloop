const container = document.querySelector('.container');
let loading = true;
if (loading) {
    container.innerHTML = `<i class="bi bi-asterisk asterisk"></i>`;
setTimeout(() => {
    container.innerHTML = `<h1>Hello, World!</h1>`;
    loading = false;
}, 3000);
}

const openMenu = document.querySelector(".open-menu");
openMenu.addEventListener("click", () => {
const menu = document.querySelector(".menu");
menu.classList.toggle("show-menu");
});

const toggleTheme = document.querySelector(".toggle-theme");
toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
document.body.classList.toggle("dark-mode");
});