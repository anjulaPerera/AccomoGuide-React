<html>

<head>
    <title>Register</title>
    <link rel="stylesheet" href="css/register_style.css">
</head>

<body>

    <div class="register-container">
        <img src="/img/a.jpg" alt="Logo" id="logo">
        <h2>Landlord Registration</h2>
        <form action="landing_page.php" method="POST">
            <input type="text" name="username" placeholder="Username" required><br>
            <input type="text" name="email" placeholder="Email" required><br>
            <input type="password" name="password" placeholder="Password" required><br>
            <br>
        </form>

        <div class="login-button">
            <form action="landing_page" method="get">
                <button type="submit">Register</button>
            </form>
        </div>
    </div>

</body>

</html>
<?php /**PATH C:\Users\User\Desktop\nsbm_acc\resources\views/landlord_registration.blade.php ENDPATH**/ ?>