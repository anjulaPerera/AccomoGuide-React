<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Warden Page</title>
    <link rel="stylesheet" href="css/warden.css">
    <?php echo $__env->make('components.navbar', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
</head>
<body>
    <div class="container">
        <h1>Advertisements</h1>
        <div class="advertisements">
            <!-- Example advertisement card -->
            <div class="advertisement-card">
                <img src="img/1.jpg" alt="Property 1">
                <div class="details">
                    <h2>Property Title</h2>
                    <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>Price: 10000/month</p>
                    <div class="buttons">
                        <button class="approve-btn">Approve</button>
                        <button class="reject-btn">Reject</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Map Container -->
        <div id="map"></div>
    </div>

    <!-- Include Google Maps JavaScript API -->
    <script src="https://maps.googleapis.com/maps/api/js? key=YOUR_API_KEY&callback=initMap" async defer></script>
    <script>
        function initMap() {
            // Create a map centered at NSBM Green University
            var map = new google.maps.Map(document.getElementById("map"), {
                center: { lat: 6.8211, lng: 80.0409 },
                zoom: 12,
            });

            // Example marker for property location
            var marker = new google.maps.Marker({
                position: { lat: 6.8438, lng: 80.0033 },
                map: map,
                title: "Property Title",
            });
        }
    </script>
</body>
</html>
<?php /**PATH C:\xampp\htdocs\AccomoGuide\resources\views/warden_page.blade.php ENDPATH**/ ?>