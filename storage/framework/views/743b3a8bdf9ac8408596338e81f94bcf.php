<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="css/student_style.css">
	<title>Accommodations</title>
<?php echo $__env->make('components.navbar', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
</head>
<body>
	<h1>Accommodations</h1>

	<ul class="adList">
		<li>
			<img src="https://via.placeholder.com/600x400.png?text=Advertisement+1" alt="Advertisement 1">
			<h3>Advertisement 1</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor purus vitae luctus dapibus. Sed venenatis enim quis dui placerat, vitae pretium urna interdum.</p>
			<button class="reserveButton" data-id="1">Reserve</button>
		</li>
		<li>
			<img src="https://via.placeholder.com/600x400.png?text=Advertisement+2" alt="Advertisement 2">
			<h3>Advertisement 2</h3>
			<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Donec vulputate scelerisque ipsum, vitae dapibus velit aliquam et. Sed auctor purus vitae luctus dapibus. Sed venenatis enim quis dui placerat, vitae pretium urna interdum.</p>
			<button class="reserveButton" data-id="2">Reserve</button>
		</li>
		<li>
			<img src="https://via.placeholder.com/600x400.png?text=Advertisement+3" alt="Advertisement 3">
			<h3>Advertisement 3</h3>
			<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Donec vulputate scelerisque ipsum, vitae dapibus velit aliquam et. Sed auctor purus vitae luctus dapibus. Sed venenatis enim quis dui placerat, vitae pretium urna interdum.</p>
			<button class="reserveButton" data-id="3">Reserve</button>
		</li>
        <li>
			<img src="https://via.placeholder.com/600x400.png?text=Advertisement+3" alt="Advertisement 3">
			<h3>Advertisement 3</h3>
			<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Donec vulputate scelerisque ipsum, vitae dapibus velit aliquam et. Sed auctor purus vitae luctus dapibus. Sed venenatis enim quis dui placerat, vitae pretium urna interdum.</p>
			<button class="reserveButton" data-id="3">Reserve</button>
		</li>
	</ul>

	<div class="mapContainer"></div>

	<div class="popup">
		<span class="close">&times;</span>
		<h3></h3>
		<p></p>
        
	</div>
<?php echo $__env->make('components.navbar', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<script src="js/student.js"></script>
	
</body>
</html>
<?php /**PATH C:\Users\User\Desktop\nsbm_acc\resources\views/home.blade.php ENDPATH**/ ?>