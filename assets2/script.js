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

// const bg = document.getElementById('about1');
// window.addEventListener('scroll',function(){
// 	bg.style.backgroundSize = 120 - +window.pageYOffset/55+'%';
// 	bg.style.opacity = 1 - +window.pageYOffset/8000+'';
// })


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

	if($('#picture').attr('src') == 'img/4883637.png')
		$('#picture').attr('src', 'img/night-mode-2-475098.png');
	else
		$('#picture').attr('src', 'img/4883637.png');

	// $('#picture').attr('src', 'img/4883637.png');

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
	// document.querySelectorAll('.infohead').forEach((result) =>{
	// 	result.classList.toggle('invert');
	// })
	document.querySelectorAll('.infohead').forEach((result) =>{
		result.classList.toggle('invert');
	})
	document.querySelectorAll('.hiring').forEach((result) =>{
		result.classList.toggle('invert');
	})
	document.querySelectorAll('.hiring1').forEach((result) =>{
		result.classList.toggle('invert');
	})
	document.querySelectorAll('.tech1').forEach((result) =>{
		result.classList.toggle('invert');
	})
	document.querySelectorAll('.testimg').forEach((result) =>{
		result.classList.toggle('invert');
	})
	document.querySelectorAll('.items').forEach((result) =>{
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









// mail








function sendmail(){

	var name = $('#Name').val();
	var email = $('#Sender').val();
	var contact = $('#Contact').val();
	var file = event.srcElement.files[0];
	var reader = new FileReader();
	reader.readAsBinaryString(file);
	reader.onload = function () {
       var dataUri = "data:" + file.type + ";base64," + btoa(reader.result);
       Email.send({
		  	SecureToken:"fbf31702-bb7f-4a4e-9c1c-4ccf17ee777f",
			To: 'senjaliyajugal@gmail.com',
			From: "senjaliyajugal@gmail.com",
            Subject : "New message on contact from "+name,
            Body : 'Name: '+name+'<br>Email: '+email+'<br>Contact: '+contact+'<br>Sending file:' + file.name,
            Attachments : [
           	{
          		name : file.name,
          		data : dataUri
          	}]
        }).then(
			message => {
				if(message=='OK'){
					alert('Your mail has been send. Thank you for connecting.');
					window.location.href = "index.html";
				}
				else{
					console.error (message);
					alert('There is error at sending message. ')
				}
			}
       );
	};
    reader.onerror = function() {
       console.log('there are some problems');
    };





	// var name = $('#Name').val();
	// var email = $('#Sender').val();
	// var contact = $('#Contact').val();
	// var myFile = $('#myFile').val();
	// // var model = $('#Model').val();
	// // var address = $('#Address').val();
	
	// var Body='Name: '+name+'<br>Email: '+email+'<br>Contact: '+contact+'<br>Resume: '+myFile;
	
	// Email.send({
	// 	// Host : "smtp.gmail.com",
	// 	// Username : "",
	// 	// Password : "",
	// SecureToken:"fbf31702-bb7f-4a4e-9c1c-4ccf17ee777f",
	// To: 'senjaliyajugal@gmail.com',
	// From: "senjaliyajugal@gmail.com",
	// 	Subject: "New message on contact from "+name,
	// 	Body: Body
	// }).then(
	// 	message =>{
	// 		if(message=='OK'){
	// 			alert('Your mail has been send. Thank you for connecting.');
	// 			window.location.href = "index.html";
	// 		}
	// 		else{
	// 			console.error (message);
	// 			alert('There is error at sending message. ')
	// 		}
	// 	}
	// );
}