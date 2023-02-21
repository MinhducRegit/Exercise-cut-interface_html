


let tab_menu = document.querySelector(".icon_menu");
let tab_bar = document.querySelector(".info");
let wraper = document.querySelector("#wraper"); 
let coating = document.querySelector(".coating");
console.log(wraper);
function showTabBar () {
  tab_bar.classList.add("open");
  coating.classList.add("open");

}
function stopPropagation(event) {
  event.stopPropagation()
}
function hideTabBar () {
  tab_bar.classList.remove("open");
  coating.classList.remove("open");
}

tab_menu.addEventListener("click", showTabBar);

coating.addEventListener("click", hideTabBar);

tab_bar.addEventListener("click" , stopPropagation );

// hide header on scroll down show on scroll 

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  tab_bar.classList.remove("open");
  coating.classList.remove("open");
let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("#header").style.top = "0";
  } else {
    document.querySelector("#header").style.top = "-122px"; 
  }
  prevScrollpos = currentScrollPos;
}