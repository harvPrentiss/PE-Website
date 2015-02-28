<!DOCTYPE>
<html>
	<head class="group">
		<link href='http://fonts.googleapis.com/css?family=Laila' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" href="Stylesheets/reset.css"/>
		<link rel="stylesheet" href="Stylesheets/global.css"/>
		<script src="Javascript/jquery-2.1.0.min.js"></script>
		<script src="Javascript/slideshow.js"></script>
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
				<img id="slideShow" src="" />

				<menu class="group">
					<button class="rw" >
						<div class="rev1"></div><div class="rev2"></div>
					</button>

					<button class="playBtn" >
						<div id = "play" class="pause"></div>
					</button>

					<button class="ff" >
						<div class="forward1"></div><div class="forward2"></div>
					</button>
				</menu>
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
