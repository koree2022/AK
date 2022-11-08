// Header nav 
let page = document.querySelector(".page");
let menu = document.querySelector(".menu-icon");
let nav = document.querySelector(".header .container .links ul");
let backbtn = document.querySelector(".page div.btn:first-child");
// menus shadow 
let effect = document.createElement("div");
effect.style.cssText = `
   position: fixed;
   top:0;
   left:0;
   height: 100%;
   width: 100%;
   background-color: black;
   z-index: 0;
   opacity: 70%;
   display: none;
`;
// Adding the shadow effect to the page 
page.appendChild(effect);
// Showing the menu 
menu.addEventListener("click", (e) => {
   nav.style.display = "block";
   effect.style.display = "block";
   menu.src = "/TempleteOne/images/icon-close-menu.svg";
   if (menu.classList.contains("close")) {
      nav.style.display = "none";
      menu.src = "/TempleteOne/images/icon-hamburger.svg";
      effect.style.display = "none";
   }
   menu.classList.toggle('close');
});
// Back this project button action
let backMenu = document.querySelector(".project-back");
backbtn.addEventListener("click", (e) => {
   effect.display = "block";
   backMenu.style.display = "block";
   effect.style.display = "block";
});
// Hide Back this project menu
let close = document.querySelector(".back-close");
close.addEventListener("click", (e) => {
   backMenu.style.display = "none";
   effect.style.display = "none";
});

document.addEventListener("click", (e) => {
   if (e.target.classList.contains("payed-back")) {
      console.log("correctTarget");
      e.target.lastChildElement.style.display = "flex";
   }
})
