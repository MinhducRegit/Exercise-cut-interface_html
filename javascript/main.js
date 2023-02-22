


let tabMenu = document.querySelector(".container-left-icon-menu");
let tabBar = document.querySelector(".container-info");
let wraper = document.querySelector("#wraper"); 
let coating = document.querySelector(".coating");
function showTabBar () {
  tabBar.classList.add("open");
  coating.classList.add("open");

}
function stopPropagation(event) {
  event.stopPropagation()
}
function hideTabBar () {
  tabBar.classList.remove("open");
  coating.classList.remove("open");
}

tabMenu.addEventListener("click", showTabBar);

coating.addEventListener("click", hideTabBar);

tabBar.addEventListener("click" , stopPropagation );

// hide header on scroll down show on scroll 

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  tabBar.classList.remove("open");
  coating.classList.remove("open");
let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("#header").style.top = "0";
  } else {
    document.querySelector("#header").style.top = "-122px"; 
  }
  prevScrollpos = currentScrollPos;
}
