<!DOCTYPE>
<html>
	<head class="group">
		<link href='http://fonts.googleapis.com/css?family=Laila' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" href="Stylesheets/reset.css"/>
		<link rel="stylesheet" href="Stylesheets/global.css"/>
		<script src="Javascript/jquery-2.1.0.min.js"></script>
		<script src="Javascript/emailer.js"></script>
	</head>

	<body>
			<header class="group">
				<div class="logoTag group">
					<a class="logo" href="index.php">Prentiss Electric</a>
					<div class="logoRightBox">
						<p class="tagline">PRENTISS ELECTRIC LLC<br> ELECTRICAL CONTRACTING<br>P.O. BOX 153<br> North Haven, CT 06473<br>
						P & F (203)234-2611</p>
					</div>
				</div>

				<nav class="nav">
					<ul>
						<li><a href="about.php" class="navListItem">About Us</a></li>
						<li><a href="contact.php" class="navListItem">Contact</a></li>
						<li><a href="" class="navListItem">Testimonials</a></li>
						<li><a href="photos.php" class="navListItem">Photos</a></li>
					</ul>
				</nav>
				<a href='https://www.facebook.com/pages/Prentiss-Electric-Llc/146810885479349' target="_blank" class='fbLink'><img src='Images/logo_facebook.png' /></a>
			</header>

			<div id="contentContainer" class="group">
				

				<div class="centerContainer" class="group">
					<h1>Contact Info</h1>
					<h2>Phone/Fax: (203)234-2611</h2>
					<a href='PEcoupon.pdf' target="_blank"><h2>Get a coupon!</h2></a>
					<div class="emailSection">
						<h2>Email Us</h2>
						<!-- put in PHP emailer -->
						<form action="#" method="POST">
							Subject: <input class='frmField' type="text" id="subject" placeholder="Subject" required><br><br>
							E-mail: <input class='frmField' type="text" id="email" placeholder="Your Email" required><br>
							<br>
							<textarea class='frmField' id="message" placeholder="Message..." rows="10" cols="50" required></textarea>
							<br>
							<input id="send" type="submit" value="Send" class="frmBtns">
							<input type="reset" value="Reset" class="frmBtns">
						</form>
					</div>
				</div>
			</div>

			<div id='visitCount'>
				<?php
					$datei = fopen("countlog.txt","r");
					$count = fgets($datei,1000);
					fclose($datei);
					echo "<p class='counter'>Visitors :    <span class='countNum'>".$count."</span></p>";
				?>
			</div>
	</body>
</html>