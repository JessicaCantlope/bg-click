jQuery(document).ready(function($) {

	$("a.thumb").click(function(e) { // When you click on a thumbnail...
		$("html").addClass("clicked"); // ...add "clicked" to html's classes...
		var newbg = $(this).attr("href");
		$("html.clicked").css({
			"background" : '#222 url(' + newbg + ')', // ...then set the source of that thumbnail's link as html's background!
			"background-attachment" : "fixed",
			"background-size" : "cover"
		});
		$("div.overlay").css({
			"display" : "block" // Also, show the overlay that darkens the BG
		});
		e.preventDefault(); // Prevents the link from activating; will not interfere with, say, lightboxes
	});
	
});