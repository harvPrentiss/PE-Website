<?php

include("pageCounter.php");

?>

<!DOCTYPE>
<html>
	<head class="group">
		<link href='http://fonts.googleapis.com/css?family=Laila' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" href="Stylesheets/reset.css"/>
		<link rel="stylesheet" href="Stylesheets/global.css"/>
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
				<p style='font-size:20pt;font-weight:bold;'>A full service electrical contracting company since 1986.</p>
				<p style='font-size:16pt;font-weight:bold;'>We do all types of work such as: </p>
				<ul class='workList'>
					<li class='workListItem'>Electric service upgrades and repairs.</li>
					<li class='workListItem'>Replace old fuse panels to circuit breaker panels.</li>
					<li class='workListItem'>Add new circuits as needed for new loads such as central AC, swimming pools or additions.</li>
					<li class='workListItem'>Rewire your new bathroom, kitchen or basement.</li>
					<li class='workListItem'>Home theater, cable TV and data/ computer outlets.</li>
					<li class='workListItem'>Camera systems for home or business, be alerted when someone arrives in your driveway.</li>
					<li class='workListItem'>Lighting and energy consultant.</li>
					<li class='workListItem'>LED, recessed , yard and motion lighting.</li>
					<li class='workListItem'>Parking lot lighting repair and LED conversion to save money.</li>
					<li class='workListItem'>On call service work for homes, business and apartment buildings.</li>
					<!-- To add new things to the list copy the following: <li class='workListItem'>Put your text here</li> 
					-->
				</ul>
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