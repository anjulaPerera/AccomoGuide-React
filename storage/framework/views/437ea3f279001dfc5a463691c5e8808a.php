<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Share Article</title>
    <link rel="stylesheet" href="css/admin.css">
    <?php echo $__env->make('components.navbar', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
</head>
<body>
    <header>
        
    </header>
    <h1>Share Article</h1>
    <nav>
        <ul>
            <li><a href="admin_create_account">Create Account</a></li>
            <li><a href="share_article">Share Article</a></li>
        </ul>
    </nav>
    <div class="container">
        <form action="#" method="post">
            <label for="title">Title:</label>
            <input type="text" id="title" name="title" required>
            <label for="content">Content:</label>
            <textarea id="content" name="content" rows="6" required></textarea>
            <button type="submit">Share Article</button>
        </form>
    </div>
</body>
</html>
<?php /**PATH C:\xampp\htdocs\AccomoGuide\resources\views/share_article.blade.php ENDPATH**/ ?>