// animation
$("#enterBtn").click(function() {
	//var x = document.getElementsByTagName("BODY")[0];
	//$(x).toggleClass('body-fade');
	
	// fade out elements, then remove from DOM
	// fade out #header
	$(".header").fadeOut("slow", "swing");
	// fade out #mainContent
	$("#mainContent").fadeOut("slow", "swing");
	
	
	
	$(".transform").toggleClass("transform-active");
	
	// flip arrow
	$(this).find($(".far")).removeClass("fa-arrow-alt-circle-right").addClass("fa-arrow-alt-circle-left");
	
  
});


// function to run javascript page load after button has been animated.
// Function from David Walsh: http://davidwalsh.name/css-animation-callback
// detects transition end event as each browser handles it differently
function whichTransitionEvent(){
  var t,
      el = document.createElement("fakeElement");

  var transitions = {
    "transition"      : "transitionend",
    "OTransition"     : "oTransitionEnd",
    "MozTransition"   : "transitionend",
    "WebkitTransition": "webkitTransitionEnd"
  }

  for (t in transitions){
    if (el.style[t] !== undefined){
      return transitions[t];
    }
  }
}

var transitionEvent = whichTransitionEvent();

$(".transform").click(function(){
	//var x = document.getElementsByTagName("BODY")[0];
 // $(this).addClass("animate");
  $(this).one(transitionEvent, function(event) {
    // Do something when the transition ends
	window.location.href="portfolio.html";

	//$(x).load( "portfolio.html" + "document.getElementsByTagName("+"BODY"+")[0]" );
  });
});