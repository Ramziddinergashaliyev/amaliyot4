let backtop = document.querySelector(".backtop");
let header = document.querySelector(".header");
let body = document.querySelector("body");
let darkMode = document.querySelector(".header__nav__right__btns__dark-mode");
headerList = document.querySelector(".show-header__nav__right__list");
let hamburger = document.querySelector(".header__nav__right__btns__humburger")

window.addEventListener("scroll", function () {
  showBacTop();
  showHeaderShrink();
});

darkMode.addEventListener("click",function(){
  body.classList.toggle("dark")
})

hamburger.addEventListener("click",function () {
  headerList.classList.toggle(".show__header__nav__right__list")
})

function showBacTop() {
  if (scrollY > 200) {
    backtop.classList.add("show__bactop");
  } else {
    backtop.classList.remove("show__bactop");
  }
}

function showHeaderShrink() {
  console.log(2);
  if (scrollY > 0) {
    header.classList.add("show__header__shrink");
  } else {
    header.classList.remove("show__header__shrink");
  }
}








// let navBar = document.getElementById("header__nav__hamburger-btn");
// let navList = document.getElementById("header__nav-list");
// let bactop = document.querySelector("bactop");



// navBar.addEventListener("click", function () {
//   navList.classList.toggle("show-header__nav-list");
// });


// window.addEventListener("scroll", function () {
//   shrink();
// });

// let navbar = document.getElementById("navbar");


// let modeBtn = document.getElementById("mode-btn");

// modeBtn.addEventListener("click", function () {
//   if (document.body.className != "dark") {
//     this.firstElementChild.src = "imgs/light.svg";
//   } else {
//     this.firstElementChild.src = "imgs/dark.svg";
//   }
//   document.body.classList.toggle("dark");
// })
