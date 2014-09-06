$(document).ready(function(){
	$('div.triplePhotoBox').on('click', 'a', function(obj){
		obj.preventDefault();
		obj.stopPropagation();
	    $('a').removeClass('selected');
	    $('a').css('background-position', '0 0');
	    $(this).addClass('selected');
	    $(this).css('background-position', '0 -200px');
	    $('.descriptionBox').css('display', 'block');
	    if($(this).attr('id') == "harry"){
	    	$('.descriptionBox').html("<p>The only one who actually does any work.</p>");
	    	$('#H').addClass('backFrontColorSwap');
	    	$('#A').removeClass('backFrontColorSwap');
	    	$('#E').removeClass('backFrontColorSwap');
	    }
	    else if($(this).attr('id') == "alex"){
	    	$('.descriptionBox').html("<p>A helper.</p>");
	    	$('#A').addClass('backFrontColorSwap');
	    	$('#H').removeClass('backFrontColorSwap');
	    	$('#E').removeClass('backFrontColorSwap');
	    }
	    else if($(this).attr('id') == "eric"){
	    	$('.descriptionBox').html("<p>Another helper.</p>");
	    	$('#E').addClass('backFrontColorSwap');
	    	$('#A').removeClass('backFrontColorSwap');
	    	$('#H').removeClass('backFrontColorSwap');
	    }
	});
});