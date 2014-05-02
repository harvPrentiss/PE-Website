<?php 

	$email = $_POST['email'];
	$subject = $_POST['subject'];
	$content = $_POST['message'];
	$content = wordwrap($content, 70);
	mail('prentisselectricllc@gmail.com', $subject, $content, "From: $email\n");

?>