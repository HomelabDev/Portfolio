let isInLightmode = false;
const buttonLightmode = document.querySelector("#lightmode_button");
const element = document.querySelector("body");

buttonLightmode.addEventListener("click", function(){
    element.classList.toggle("lightmode");
    buttonLightmode.classList.toggle("darkmode");
    isInLightmode = !isInLightmode;
    
    buttonLightmode.innerHTML = isInLightmode ? "Switch to Dark Mode" : "Switch to Light Mode";
});

//menu
var addBlur = document.querySelector("section")
var buttonMenu = document.querySelector("#menu_button");
var menu = document.querySelector("#menu");
var links = document.querySelector("#menuLink")

console.log(links)

buttonMenu.addEventListener("click", function(){

  menu.classList.toggle("visible");
  addBlur.classList.toggle("blur");
  links.classList.toggle("visible");
})
