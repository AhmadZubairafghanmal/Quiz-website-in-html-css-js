"use strict";
function gretting() {
  alert("Welcome To Our Website!");
}

// burger menu from small devices
const menuBtn = document.querySelector(".menu_btn");
const navbarLinks = document.querySelectorAll(".nav_link");
menuBtn.addEventListener("click", function () {
  navbarLinks.forEach(function (link) {
    link.classList.toggle("active");
  });
});
