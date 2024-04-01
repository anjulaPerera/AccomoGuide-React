
<html>

<head>
    <title>Register</title>
    <link rel="stylesheet" href="css/register_style.css">
</head>

<body>

    <div class="register-container">
        <img src="/img/a.jpg" alt="Logo" id="logo">
        <h2>LogIn</h2>
        <form action="register_process.php" method="POST">
            <input type="text" name="username" placeholder="Username" required><br>
            <input type="password" name="password" placeholder="Password" required><br>
            <select name="role" required>
                <option value="">Select Role</option>
                <option value="landlord">Landlord</option>
                <option value="warden">Warden</option>
                <option value="student">Student</option>
                <option value="admin">Admin</option>
            </select><br>
        </form>

        <div class="login-button">
            <form action="/login" method="get">
                <button type="submit">LOGIN</button>
            </form>
        </div>
    </div>

</body>

</html>
<?php /**PATH C:\Users\User\Desktop\nsbm_acc\resources\views/register.blade.php ENDPATH**/ ?>