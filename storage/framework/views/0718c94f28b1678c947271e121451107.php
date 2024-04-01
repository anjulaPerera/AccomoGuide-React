<!DOCTYPE html>
<html>
    <head>
    <title>Web Master - Admin</title>
    <link rel="stylesheet" href="/css/admin.css"> 
    </head>
<body>


<div class="content">
			<h2>Create New Account</h2>
			<form action="">
				<label for="username">Username:</label>
				<input type="text" id="username" name="username">

				<label for="email">Email:</label>
				<input type="email" id="email" name="email">

				<label for="password">Password:</label>
				<input type="password" id="password" name="password">

				<label for="role">Role:</label>
				<select id="role" name="role">
					<option value="landlord">Landlord</option>
					<option value="warden">Warden</option>
					<option value="student">Student</option>
				</select>

				<button type="submit">Create Account</button>
			</form>
</div>

            <button class="post_artical" href="">Post New Article</button>

</body>
</html>
<?php /**PATH C:\Users\User\Desktop\nsbm_acc\resources\views/admin.blade.php ENDPATH**/ ?>