$(function() {
	// statr the page off right
	$('.pg-wrapper').load('pages.html #welcome');
	// on click load the other pages
	$(document).on('click', '.nav-item-link', function() {
		var pgName = $(this).data('name');
		$('.pg-wrapper').load('pages.html #' + pgName);
	});
});