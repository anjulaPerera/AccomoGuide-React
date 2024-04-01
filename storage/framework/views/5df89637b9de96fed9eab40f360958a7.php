<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Property</title>
    <link rel="stylesheet" href="css/landlord.css">
</head>
<body>
    <div class="container">
        <h1>Add Property</h1>
        <form action="add_property.php" method="post" enctype="multipart/form-data">
            <label for="title">Title:</label>
            <input type="text" id="title" name="title" required>
            <label for="description">Description:</label>
            <textarea id="description" name="description" rows="4" required></textarea>
            <label for="image">Upload Image:</label>
            <input type="file" id="image" name="image" accept="image/*" required>
            <label for="price">Price:</label>
            <input type="number" id="price" name="price" min="0" required>
            <button type="submit">Add Property</button>
        </form>
    </div>
</body>
</html>
<?php /**PATH C:\xampp\htdocs\AccomoGuide\resources\views/add_property.blade.php ENDPATH**/ ?>