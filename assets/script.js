const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");
// const homecontent = document.querySelector(".homecontent");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
//   homecontent.style.display="none";
});

function myFunction2() {
	var x = document.getElementById("homecontent");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }



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

function myFunction() {
	var element = document.body;
	element.classList.toggle("dark-mode");
	document.querySelectorAll('.main').forEach((result) =>{
		result.classList.toggle('invert');
	})
 }






 $(document).ready(function(){
	document.getElementById("heart").onclick = function(){
	document.querySelector(".fa-gratipay").style.color = "#E74C3C";
	};
});
	






// about






//Movement Animation to happen
const card = document.querySelector(".card2");
const container2 = document.querySelector(".container4");
//Items
const title = document.querySelector(".title2");
const sneaker = document.querySelector(".sneaker2 img");
const purchase = document.querySelector(".purchase2");
const description = document.querySelector(".info2 h3");
const sizes = document.querySelector(".sizes2");

//Moving Animation Event
container2.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container2.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //Popout
  title.style.transform = "translateZ(150px)";
  sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
  description.style.transform = "translateZ(125px)";
  sizes.style.transform = "translateZ(100px)";
  purchase.style.transform = "translateZ(75px)";
});
//Animate Out
container2.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  title.style.transform = "translateZ(0px)";
  sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
});
