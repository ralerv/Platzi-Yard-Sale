const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burguerMenuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

menuEmail.addEventListener("click",toggleDesktopMenu);
burguerMenuIcon.addEventListener("click",toggleMobileMenu)
menuCarritoIcon.addEventListener("click",toggleCarritoAside)

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu (){
    if(!aside.classList.contains("inactive")){toggleCarritoAside()}
    mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside (){
    if (!mobileMenu.classList.contains("inactive")) {toggleMobileMenu ()}
    aside.classList.toggle("inactive");
}