<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>AccomoGuide</title>
	<link rel="stylesheet" href="/css/welcome.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<?php echo $__env->make('components.navbar', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
</head>
<body>
	<div class="hero">
		<video autoplay loop muted plays-inline class="back-video">
			<source src="/img/NSBM1.mp4" type="video/mp4">
		</video>

		<div class="content">
			<h1>AccomoGuide</h1>
			<br>

			<h2>Find the Accommodation | List your Accommodation</h2>
			<br>
			
			<a href="login">Get Start</a>
			<a href="landlord_registration">Landlord</a>
		</div>
	</div>


</body>
</html><?php /**PATH C:\xampp\htdocs\AccomoGuide\resources\views/welcome.blade.php ENDPATH**/ ?>