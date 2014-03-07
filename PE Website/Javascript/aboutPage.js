$(document).ready(function(){
	$('a').on('click', function(obj){
		obj.preventDefault();
		obj.stopPropagation();
	    $('a').removeClass('selected');
	    $(this).addClass('selected');
	});
});