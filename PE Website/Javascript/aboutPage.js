$(document).ready(function(){
	$('a').on('click', function(obj){
		obj.preventDefault();
		obj.stopPropagation();
	    $('a').removeClass('selected');
	    $(this).addClass('selected');
	    if($(this).attr('id') == "harry"){
	    	$('.descriptionBox').html("<p>The only one who actually does any work.</p>");
	    }
	    else if($(this).attr('id') == "alex"){
	    	$('.descriptionBox').html("<p>A tard who knows how to use pliers.</p>");
	    }
	    else if($(this).attr('id') == "eric"){
	    	$('.descriptionBox').html('<p>An even bigger tard.</p>');
	    }
	});
});