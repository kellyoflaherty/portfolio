// get all images from images folder //

function openModal() {
  document.getElementById('myModal').style.display = "block";
}
  
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

var thumbSlideIndex = 0;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("popSlides");
  var dots = document.getElementsByClassName("imgStyle");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  //captionText.innerHTML = dots[slideIndex-1].alt;
  //copyThumbs();
}


/* create thumbnails using same images from main slideshow */
function copyThumbs () {
	//var mainGallery = document.getElementsByClassName("row");
	var imgColumns = document.getElementsByClassName("column");
	var thumbs = document.getElementsByClassName("thumbnails");
	console.log("thumbs length" + thumbs.length);
	
	var addToGallery = document.getElementById("thumbnailRow");
	// delete any thumbnails already created
	//if (addToGallery.hasChildNodes) {
		//for (j = 0; j < addToGallery.childNodes.length; j++) {
		//	addToGallery.removeChild(addToGallery.childNodes[j]);
		//}
	//}
	
	while (addToGallery.firstChild) {
		addToGallery.removeChild(addToGallery.firstChild);
	}
	
	// add thumb navigation depending on length/4
	var navLength = Math.ceil(imgColumns.length/4);
	thumbNav (navLength);
	
	// make sure div is empty if thumbnails already there

	for (i = 0; i < thumbs.length; i++) {
		/* add to image gallery */ 
		/* append image to thumbDiv */	
		
		var thumbnailCreate = document.createElement ("div");
		thumbnailCreate.className = "thumbColumn";
		//thumbnailCreate.setAttribute("class", "column");
		// need to change onclick event so copyThumbs doesn't run when thumbs are clicked on
		/*var imgLink = imgColumns[i].getElementsByTagName("a");
		imgLink.removeAttribute("onclick");
		imgLink.setAttribute("onclick", "openModal();");
		imgLink.setAttribute("onclick", "currentSlide("+i+"1);");*/
		
		// create new a link to wrap image
		var imgLink = document.createElement("a");
		imgLink.className = "hover-shadow cursor";
		imgLink.setAttribute("onclick", "openModal(); currentSlide("+i+"+1);");
		// parent image to this
		// make new image element. copy in html of image item
		var newImage = document.createElement("IMG");
		// thumbs[i].src needs to be split to start with /image only
		newImage.src = decodeURI(thumbs[i].src);
		//newImage.width = "50%";
		//newImage.height = "50%";
		
		imgLink.appendChild(newImage);
		thumbnailCreate.appendChild(imgLink);
		
		
		//thumbnailCreate.innerHTML = imgColumns[i].innerHTML;
		
		/*if (addToGallery.childNodes[i] != null) {
			// thumbs already exist
			console.log("image not added");
			addToGallery.replaceChild(thumbnailCreate, addToGallery.childNodes[i]);
		
		}
		else {
			console.log("image added");
			// for each item , add to new div
			addToGallery.appendChild(thumbnailCreate);		
		}*/
		console.log("thumb loop");
		addToGallery.appendChild(thumbnailCreate);	
		
	}
	// add class to create thumbs out of loop
	
	for (k = 0; k < addToGallery.childNodes.length; k++) {
		addToGallery.childNodes[k].className = "thumbColumn";
		//console.log("class group");
	}

	// initially show thumbs at default 1
	showThumbs(thumbSlideIndex);
}

/* thumbnail row scroll */
//var thumbSlideIndex = 1;
//showThumbs(thumbSlideIndex);

function thumbNav (navLength) {
	// get div to put nav into
	var thumbRow = document.getElementById("thumbNav");
	
	// need to remove all preexisting nav dots
	// Removing all children from an element
	//var dotParent = thumbRow
	while (thumbRow.firstChild) {
		thumbRow.removeChild(thumbRow.firstChild);
	}
	
	
	for (i = 0; i < navLength; i++) {
		// create cirlce nav in html
		
		var navLinkCreate = document.createElement("a");
		navLinkCreate.className = "thumbProg";
		//navLinkCreate.onclick = showThumbs(+i+1);
		navLinkCreate.setAttribute("onclick", "showThumbs("+i+")");
		
		var navIconCreate = document.createElement("i");
		navIconCreate.className = "far fa-circle";
		
		// add icon to link as parent
		navLinkCreate.appendChild(navIconCreate);
		
		// add link to div parent
		thumbRow.appendChild(navLinkCreate);
		//thumbRow.replaceChild(thumbRow.childNodes[i]);
	}
	// add to main div as child
	//thumbRow.appendChild(thumbNavDiv);
	
	//<a class = "thumbProg" onclick = "showThumbs(1)"><i class="far fa-circle"></i></a>
}
/*
function plusThumbs(n) {
    showThumbs(thumbSlideIndex += n);
}*/


function showThumbs(n) {
    var i;
	var createdThumbs = document.getElementsByClassName("thumbColumn");
	
	console.log("n is" + n);
	
	// number used to see if it's first four images, second etc
	// divide number of images by four to get second index; match these
	
	// initially hides all thumbs
    for (i = 0; i < createdThumbs.length; i++) {
        createdThumbs[i].style.display = "none"; 
    }
	
	// if n = 1, show images 1-4 etc
	// check that images[i] is never null 
	
	var endOfImages = createdThumbs.length;
	
	var origImgIndex = Math.ceil((endOfImages - 4)*n);

	// if dot n = 1, start at image index 0
	// if dot n = 2, start at image index 4 (fifth image)
	// if n = 3, image index = 8
	
	// get amount of images, divide by four - becomes image index
	//var origImgIndex = Math.ceil(createdThumbs.length/4);
	

	
	/*for (j = 0; j <= 3; j++) {
		
		if (createdThumbs[j] != null) {
			console.log("loop run");
			// add image 
			//console.log("thumb index is " + parseInt(origImgIndex - j));
			createdThumbs[origImgIndex+j].style.display = "block";
			//createdThumbs[j].style.display = "block";
		}
		
	}*/
	
	// if n > 0
	// then start at n + 4 in image array, repeat x4
	// else show first four images
	if (n == 0) {
		
		for (j = 0; j <= 3; j++) {
		
			if (createdThumbs[j] != null) {
				console.log("loop run");
				createdThumbs[j].style.display = "block";
			}
		}
		
	}
	else {
		for (k = n+3; k <= n + 6; k++) {
			// show images starting at n + 4 
			if (createdThumbs[k] != null) {
				createdThumbs[k].style.display = "block";
			}
		}
	}
}

function loadContent (navPageURL) {
	// load content into main div upon nav click
	console.log("load function runnning");
	$( "#mainContent" ).load( "" + navPageURL + "#mainContent" );
	
	// change hash of url
	//location.hash(navPageURL);
}

function loadFilmContent (contentToLoad) {
	
	$( "#replaceContent" ).load( "gradfilmContent.html " + contentToLoad + " > *");
	console.log("loading film content" + "gradfilmContent.html " + contentToLoad + "");
}




