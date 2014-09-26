$(function() {
	
	var func = function(pg) {
		// get the element where we put the stuff
		var stuff = document.getElementById('content');
		// remove array commas
		var pgInfo = pages[pg].join(' ');
		// add the stuff to the page
		stuff.innerHTML = pgInfo;
	}
	
	// load the home page stuff			
	func('welcome');

	// get the clicked on element
	$('.nav-item-link').on('click', function() {
		// get the data attribute
		var pg = $(this).data('name');
		// pass data attr and pass to function
		func(pg);
		$(this).parent('.nav-item').addClass('active').siblings('.nav-item').removeClass('active');
		window.location.hash = pg;
	});

	$('.nav-item-link').on('click', function() {
		var clicked = $(this).data('name');
		if(clicked === 'welcome'){
			$('html').removeClass('interior').addClass('welcome');
		} else {
			$('html').removeClass('welcome').addClass('interior');
		}
	});
	
	
});