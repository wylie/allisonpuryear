$(function() {
	// start the page off right
	$('.pg-wrapper').load('pages.html #welcome');
	// on click load the other pages
	$(document).on('click', '.nav-item-link', function() {

		$(this).parent('.nav-item').addClass('active').siblings('.nav-item').removeClass('active');

		var pgName = $(this).data('name');

		// load the bit for the page
		$('.pg-wrapper').load('pages.html #' + pgName);

		// add/remove class for the small logo 
		$('html').removeClass('welcome').addClass('interior');
		if(pgName === 'welcome') {
			$('html').addClass('welcome');
		}
	});
});