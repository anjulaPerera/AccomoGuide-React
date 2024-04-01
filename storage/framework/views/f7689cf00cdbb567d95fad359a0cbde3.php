<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <link rel="stylesheet" href="css/landing_page.css">
    <?php echo $__env->make('components.navbar', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
</head>
<body>
    <div class="content">
			<h1>Welcome to our website!</h1><br>
            <h3>Add your  information below to get started:</h3>
            <a href="add_property" class="btn">Add Property</a><br>
            <a href="student_requests" class="btn">Student Requests</a><br>
            <a href="property_management" class="btn">Property Management</a><br>
		</div>
</body>
</html>
<?php /**PATH C:\Users\User\Desktop\nsbm_acc\resources\views/landing_page.blade.php ENDPATH**/ ?>