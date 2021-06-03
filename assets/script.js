const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});


const bg = document.getElementById('main');
window.addEventListener('scroll',function(){
	bg.style.backgroundSize = 120 - +window.pageYOffset/12+'%';
	bg.style.opacity = 1 - +window.pageYOffset/700+'';
})