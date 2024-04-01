<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create Account</title>
    <link rel="stylesheet" href="css/admin.css">
    <?php echo $__env->make('components.navbar', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
</head>
<body>
    <header>
        <h1>Create Account</h1>
    </header>
    <nav>
        <ul>
            <li><a href="admin_create_account">Create Account</a></li>
            <li><a href="share_article">Share Article</a></li>
        </ul>
    </nav>
    <div class="container">
        <form action="#" method="post">
            <label for="user_type">Select User Type:</label>
            <select id="user_type" name="user_type">
                <option value="landlord">Landlord</option>
                <option value="warden">Warden</option>
                <option value="student">Student</option>
            </select>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
            <button type="submit">Create Account</button>
        </form>
    </div>
</body>
</html>
<?php /**PATH C:\Users\User\Desktop\nsbm_acc\resources\views/admin_create_account.blade.php ENDPATH**/ ?>