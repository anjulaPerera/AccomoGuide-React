<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<link rel="stylesheet" href="/css/welcome.css">
	<?php echo $__env->make('components.navbar', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
</head>
<body>
	<div class="hero">
		<video autoplay loop muted plays-inline class="back-video">
			<source src="/img/NSBM.mp4" type="video/mp4">
		</video>

		<div class="content">
			<h1>AccomoGuide</h1>
			<a href="register">Get Start</a>
			<a href="landlord_registration">Landlord</a>
		</div>
	</div>
</body>
</html><?php /**PATH C:\Users\User\Desktop\nsbm_acc\resources\views/welcome.blade.php ENDPATH**/ ?>