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


// const bg2 = document.getElementById('main2');
// window.addEventListener('scroll',function(){
// 	bg2.style.backgroundSize = 120 - +window.pageYOffset/12+'%';
// 	bg2.style.opacity = 1 - +window.pageYOffset/10+'';
// 	bg.style.fontSize = 2.8 + +window.pageYOffset/1+'rem';

// })




document.onkeypress = function(e) {
	e = e || window.event;

	if(e.keyCode == 13){
		document.documentElement.classList.toggle('dark-mode');

		document.querySelectorAll('.main').forEach((result) =>{
			result.classList.toggle('invert');
		})
	}
}