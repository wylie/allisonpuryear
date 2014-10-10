// $(function() {
	
	// var func = function(pg) {
	// 	// get the element where we put the stuff
	// 	var stuff = document.getElementById('content');
	// 	// remove array commas
	// 	var pgInfo = pages[pg].join(' ');
	// 	// add the stuff to the page
	// 	stuff.innerHTML = pgInfo;
	// }
	
	// // load the home page stuff			
	// func('welcome');

	// // get the clicked on element
	// $('.nav-item-link').on('click', function() {
	// 	// get the data attribute
	// 	var pg = $(this).data('name');
	// 	// pass data attr and pass to function
	// 	func(pg);
	// 	$(this).parent('.nav-item').addClass('active').siblings('.nav-item').removeClass('active');
	// 	window.location.hash = pg;
	// });

	// $('.nav-item-link').on('click', function() {
	// 	var clicked = $(this).data('name');
	// 	if(clicked === 'welcome'){
	// 		$('html').removeClass('interior').addClass('welcome');
	// 	} else {
	// 		$('html').removeClass('welcome').addClass('interior');
	// 	}
	// });
	
	
// });


window.onload = init;

function init() {
	var submitBtn = document.getElementById('submit');	
	submitBtn.onclick = sendEmail;
}

function sendEmail() {
	var theForm = document.forms.myForm;
	var name = theForm.elements.userName.value;
	var email = theForm.elements.userEmail.value;

	var emailVal = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if( emailVal.test(email) ) {
		var request = new XMLHttpRequest();
		request.open('GET', 'sendEmail.php?name=' + name + '&email=' + email);
		request.setRequestHeader("Content-Type","text/plain;charset=UTF-8");
		request.send();
	} else {
		alert('Please enter a valid email address');
	}
	
	return false;
}