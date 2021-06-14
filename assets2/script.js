
AOS.init();




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
	document.querySelectorAll('.infohead').forEach((result) =>{
		result.classList.toggle('invert');
	})
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
	document.querySelectorAll('.facts').forEach((result) =>{
		result.classList.toggle('invert');
	})
	document.querySelectorAll('.facts1').forEach((result) =>{
		result.classList.toggle('invert');
	})
	document.querySelectorAll('.ourtechimg').forEach((result) =>{
		if(result.style.border == '80px solid rgb(236, 236, 236)'){
			result.style.border = '80px solid rgb(43, 42, 42)'
		}

		else{
			result.style.border = '80px solid rgb(236, 236, 236)'
		}
	})
 }






 $(document).ready(function(){
	document.getElementById("heart").onclick = function(){
	document.querySelector(".fa-gratipay").style.color = "#E74C3C";
	};
});










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
}


function sendmail2(){
	var name = $('#Name').val();
	var email = $('#Sender').val();
	var contact = $('#Contact').val();
	var Meaasge = $('#Meaasge').val();
	// var myFile = $('#myFile').val();
	// var model = $('#Model').val();
	// var address = $('#Address').val();
	
	var Body='Name: '+name+'<br>Email: '+email+'<br>Contact: '+contact+'<br>Resume: '+Meaasge;
	
	Email.send({
		// Host : "smtp.gmail.com",
		// Username : "",
		// Password : "",
	SecureToken:"fbf31702-bb7f-4a4e-9c1c-4ccf17ee777f",
	To: 'senjaliyajugal@gmail.com',
	From: "senjaliyajugal@gmail.com",
		Subject: "New message on contact from "+name,
		Body: Body
	}).then(
		message =>{
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

}









// Navbar












const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');


	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active');
		

		navLinks.forEach((link, index) => {
			if(link.style.animation){
				link.style.animation = '';
			}
			else{
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
			}
		});

		burger.classList.toggle('toggle');
	});

}

navSlide();

