var interval = 3500;
var random_display = 0;
var imageDir = "Images/";


var imageNum = 0;
var paused = false;

function imageItem(image_location){
	this.image_item = new Image();
	this.image_item.src = image_location;
}

var imageArray = new Array();
imageArray[imageNum++] = new imageItem(imageDir + "01Medium.jpg");
imageArray[imageNum++] = new imageItem(imageDir + "02Medium.jpg");
imageArray[imageNum++] = new imageItem(imageDir + "03Medium.jpg");
imageArray[imageNum++] = new imageItem(imageDir + "04Medium.jpg");
imageArray[imageNum++] = new imageItem(imageDir + "05Medium.jpg");

var totalImages = imageArray.length;



function get_ImageItemLocation(imageObj){
	return(imageObj.image_item.src);
}

function randNum(x,y){
	var range = y - x +1;
	return Math.floor(Math.random() * range) + x;
}

function getNextImage(){
	if(random_display){
		imageNum = randNum(0, totalImages-1);
	}
	else{
		imageNum++;
		if(imageNum > totalImages - 1){
			imageNum = 0;
		}
	}

	var new_image = get_ImageItemLocation(imageArray[imageNum]);
	return(new_image);
}

function getPrevImage(){
	if(imageNum - 1 < 0){
		imageNum = totalImages - 1;
	}
	else{
	imageNum = (imageNum-1 % totalImages);
	}
	var new_image = get_ImageItemLocation(imageArray[imageNum]);
	return new_image;
}

function prevImage(place){
	var new_image = getPrevImage();
	document.getElementById(place).src = new_image;
}

function switchImage(place){
	var new_image = getNextImage();
	document.getElementById(place).src = new_image;
	var recur_call = "switchImage('"+place+"')";
	timerID = setTimeout(recur_call, interval);
}

function play(place){
	if(paused){
		switchImage(place);
		paused = false;
	}
}

function pause(){
	clearTimeout(timerID);
	paused = true;
}