var interval = 2000;
var random_display = 0;
var imageDir = "Images/";


var imageNum = 0;

function imageItem(image_location){
	this.image_item = new Image();
	this.image_item.src = image_location;
}

var imageArray = new Array();
imageArray[imageNum++] = new imageItem(imageDir + "01.png");
imageArray[imageNum++] = new imageItem(imageDir + "02.png");
imageArray[imageNum++] = new imageItem(imageDir + "03.png");
imageArray[imageNum++] = new imageItem(imageDir + "04.png");
imageArray[imageNum++] = new imageItem(imageDir + "05.png");
imageArray[imageNum++] = new imageItem(imageDir + "06.png");

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
		imageNum = (imageNum + 1) % totalImages;
	}

	var new_image = get_ImageItemLocation(imageArray[imageNum]);
	return(new_image);
}

function getPrevImage(){
	imageNum = (imageNum-1 % totalImages);
	var new_image = get_ImageItemLocation(imageArray[imageNum]);
	return new_image;
}

function prevImage(place){
	var new_image = getPrevImage();
	document.getElementById(place).src = new_image;
}

function switchImage(place){
	var new_image = getNextImage();
	console.log(place);
	document.getElementById(place).src = new_image;
	var recur_call = "switchImage('"+place+"')";
	timerId = setTimeout(recur_call, interval);
}