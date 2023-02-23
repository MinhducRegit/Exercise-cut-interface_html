


let tabIconMenu = document.querySelector(".container-left-icon-menu");
let tabIconClose = document.querySelector(".container-left-icon-close");
let tabMenu = document.querySelector(".container-info");
let coating = document.querySelector(".coating");

console.log(document.querySelector("#header"));
function showTabMenu () {
  tabMenu.classList.add("open");
  coating.classList.add("open");
  tabIconMenu.classList.add("hide");
  tabIconClose.classList.add("open");

}
function stopPropagation(event) {
  event.stopPropagation()
}
function hideTabMenu () {
  tabMenu.classList.remove("open");
  coating.classList.remove("open");
  tabIconMenu.classList.remove("hide");
  tabIconClose.classList.remove("open");
}

tabIconMenu.addEventListener("click", showTabMenu);

tabIconClose.addEventListener("click", hideTabMenu);
coating.addEventListener("click", hideTabMenu);

tabMenu.addEventListener("click" , stopPropagation );

// hide header on scroll down show on scroll 

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  tabMenu.classList.remove("open");
  coating.classList.remove("open");
  tabIconMenu.classList.remove("hide");
  tabIconClose.classList.remove("open");
let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("#header").style.top = "0";
  } else {
    document.querySelector("#header").style.top = "-122px"; 
  }
  prevScrollpos = currentScrollPos;
}
