var interval = 3500;
var imageDir = "Images/";


var imageNum = 0;
var paused = false;
var timer;

var imageArray = new Array();
imageArray[imageNum++] = "01Medium.jpg";
imageArray[imageNum++] = "02Medium.jpg";
imageArray[imageNum++] = "03Medium.jpg";
imageArray[imageNum++] = "04Medium.jpg";
imageArray[imageNum++] = "05Medium.jpg";

imageNum = 0;

var totalImages = imageArray.length;

$(document).ready(function(){
	$('#slideShow').attr('src', imageDir + imageArray[imageNum]);
	startShow();

	$('.ff').on('click', function(){
		nextImage();
		clearInterval(timer);
		timer = setInterval(function(){nextImage()}, 3000);
	});

	$('.rw').on('click', function(){
		prevImage();
		clearInterval(timer);
		timer = setInterval(function(){nextImage()}, 3000);
	});

	$('.playBtn').on('click', function(){
		if(paused){
			startShow();
		}
		else{
			stopShow();
		}
	});

});

function startShow(){
	console.log("Starting");
	timer = setInterval(function(){nextImage()}, 3000);
	$('#play').addClass('pause');
	$('#play').removeClass('play');
	paused = false;
}

function stopShow(){
	clearInterval(timer);
	paused = true;
	$('#play').removeClass('pause');
	$('#play').addClass('play');
}

function nextImage(){
	imageNum++;
	if(imageNum > imageArray.length - 1){
		imageNum = 0;
	}
	$('#slideShow').attr('src', imageDir + imageArray[imageNum]);
}

function prevImage(){
	imageNum--;
	if(imageNum < 0){
		imageNum = imageArray.length - 1;
	}
	$('#slideShow').attr('src', imageDir + imageArray[imageNum]);	
}





