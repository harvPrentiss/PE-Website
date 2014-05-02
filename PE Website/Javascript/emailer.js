$(document).ready(function(){
	$('#send').on('click', function(e){
		e.preventDefault();
		e.stopPropagation();
		$.ajax({ url: 'emailer.php',
	         	data: {subject: $('#subject').val(), email: $('#email').val(), message: $('#message').val() },
	         	type: 'POST',
	         	beforeSend: function(){
	         			 $('.emailSection').append("<h1 class='notification waiting'>Sending...</h1>");
	         	},
	         	success: function(output) {
	         			$('.waiting').remove();
	                    $('.emailSection').append("<h1 class='notification good'>Your message was sent successfully!</h1>");
	                    $('#subject').val('');
	                    $('#message').val('');
	                    $('#email').val('');
	                  },
	            error: function(er){
	            	$('emailSection').append("<h1 class='notification bad'>There was an error sending your request.</h1>");
	            }
		});
	});

});
