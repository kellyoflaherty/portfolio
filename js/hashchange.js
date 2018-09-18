$(window).on('hashchange', function () {
	//$(function() {
	
	var newHash = window.location;

	if ("onhashchange" in window) {
		//no alert
		console.log("The browser supports the hashchange event!");
	}

	$(".galleryNav").delegate("a", "click", function() {
		//window.location.hash=$(this).attr('href').match(/(^.*)\./)[1]
		window.location.hash = $(this).attr("href");
		return false;
	});
	


	function locationHashChanged() {

		newHash = window.location.hash.substring(1);
		console.log("newHash is " + newHash);
        
        if (newHash) {
			
			// if newHash is the same as current location, simply reload, no animation (same page)
				console.log("hash function run");
			
			$("#pageWrapper").fadeOut(200, function() {
				$("#pageWrapper").hide().load( newHash + " #pageWrapper > *", function () {
					$("#pageWrapper").fadeIn(200);
				});
				
				$(".navLinks a").removeClass("current");
				$(".navLinks a[href='"+newHash+"']").addClass("current");
				
			});	
				
			//console.log(newHash +" #pageWrapper");
		
        };
   
	}

	window.onhashchange = locationHashChanged;

}).trigger('hashchange');

