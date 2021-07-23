var menuContainer = document.querySelector(".menu-container");
var nav = document.querySelector("nav");
var menu = document.querySelector(".menu");

menuContainer.onclick = function() {
    if(nav.classList.contains("open")) {
        nav.classList.remove("open");
        menu.classList.remove("opened");
    } else {
        nav.classList.add("open");
        menu.classList.add("opened");
    }
}