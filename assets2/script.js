// const hamburger_menu = document.querySelector(".hamburger-menu");
// const container = document.querySelector(".container");

// hamburger_menu.addEventListener("click", () => {
//   container.classList.toggle("active");
// });

AOS.init();


// navbar toggle

// function myFunction2() {
// 	var x = document.getElementById("homecontent");
// 	if (x.style.display === "none") {
// 	  x.style.display = "block";
// 	} else {
// 	  x.style.display = "none";
// 	}
//   }




// first slider animation

const bg = document.getElementById('about1');
window.addEventListener('scroll',function(){
	bg.style.backgroundSize = 120 - +window.pageYOffset/55+'%';
	bg.style.opacity = 1 - +window.pageYOffset/8000+'';
})


// const bg2 = document.getElementById('main2');
// window.addEventListener('scroll',function(){
// 	bg2.style.backgroundSize = 120 - +window.pageYOffset/12+'%';
// 	bg2.style.opacity = 1 - +window.pageYOffset/10+'';
// 	bg.style.fontSize = 2.8 + +window.pageYOffset/1+'rem';

// })




// document.onkeypress = function(e) {
// 	e = e || window.event;

// 	if(e.keyCode == 13){
// 		document.documentElement.classList.toggle('dark-mode');

// 		document.querySelectorAll('.main').forEach((result) =>{
// 			result.classList.toggle('invert');
// 		})
// 	}
// }



// Dark mode toggle



function myFunction() {
	var element = document.body;
	element.classList.toggle("dark-mode");
	document.querySelectorAll('.main').forEach((result) =>{
		result.classList.toggle('invert');
	})
	document.querySelectorAll('.about1').forEach((result) =>{
		result.classList.toggle('invert');
	})
	document.querySelectorAll('.about12').forEach((result) =>{
		result.classList.toggle('invert');
	})
	document.querySelectorAll('.hero-slider').forEach((result) =>{
		result.classList.toggle('invert');
	})
	document.querySelectorAll('.infohead').forEach((result) =>{
		result.classList.toggle('invert');
	})
 }






 $(document).ready(function(){
	document.getElementById("heart").onclick = function(){
	document.querySelector(".fa-gratipay").style.color = "#E74C3C";
	};
});
	






// about






// //Movement Animation to happen
// const card = document.querySelector(".card2");
// const container2 = document.querySelector(".container4");
// //Items
// const title = document.querySelector(".title2");
// const sneaker = document.querySelector(".sneaker2 img");
// const purchase = document.querySelector(".purchase2");
// const description = document.querySelector(".info2 h3");
// const sizes = document.querySelector(".sizes2");

// //Moving Animation Event
// container2.addEventListener("mousemove", (e) => {
//   let xAxis = (window.innerWidth / 2 - e.pageX) / 40;
//   let yAxis = (window.innerHeight / 2 - e.pageY) / 40;
//   card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
// });
// //Animate In
// container2.addEventListener("mouseenter", (e) => {
//   card.style.transition = "none";
//   //Popout
//   title.style.transform = "translateZ(50px)";
//   sneaker.style.transform = "translateZ(100px) rotateZ(-45deg)";
//   description.style.transform = "translateZ(25px)";
//   sizes.style.transform = "translateZ(100px)";
//   purchase.style.transform = "translateZ(75px)";
// });
// //Animate Out
// container2.addEventListener("mouseleave", (e) => {
//   card.style.transition = "all 0.5s ease";
//   card.style.transform = `rotateY(0deg) rotateX(0deg)`;
//   //Popback
//   title.style.transform = "translateZ(0px)";
//   sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
//   description.style.transform = "translateZ(0px)";
//   sizes.style.transform = "translateZ(0px)";
//   purchase.style.transform = "translateZ(0px)";
// });





// onscroll navbar


$(document).ready(function(){
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if (scroll > 70) {
		  $(".menu").css("background" , "rgba(0, 0, 0, 0.5)");
		  $(".menu").css("display" , "flex");
		  $(".moonicon").css("margin-left" , "900px");
		}
  
		else{
			$(".menu").css("background" , "");  	
			$(".menu").css("display" , "none");
			// $(".moonicon").css("margin-left" , "1200px");
		}
	})
  })








//   Cursor



const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})
