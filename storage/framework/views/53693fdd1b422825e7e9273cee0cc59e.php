<!DOCTYPE html>
<html lang="en">
<head>
    <title>Register</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    <link rel="stylesheet" href="css/register_style.css">
</head>

<body>

    <div class="register-container">
        <img src="/img/a.jpg" alt="Logo" id="logo">
        <h2>Landlord Registration</h2>

        <form id="signupForm">
       
            <input id="name" type="text" name="username" placeholder="Username" required><br>
            <input id="email" type="text" name="email" placeholder="Email" required><br>
            <input id="password" type="password" name="password" placeholder="Password" required><br>
            <br>
            <button type="button" id="signupButton" name="submit">Register</button>
         
        </form>

                <div id="responseMessage" class="response-message"></div>


        <div class="login-button">
            
                <p>Alredy have an account</p>
                <button type="submit">
                    <a href="login">LogIn</a>
                </button>
            </form>
        </div>
        
    </div>
    <script>
        // Use jQuery.noConflict() to avoid conflicts with other libraries
        jQuery.noConflict();
        // Use jQuery instead of $ after this point
        jQuery(document).ready(function($) {
            // Get the API_URL from the Blade template
            var apiUrl = "<?php echo e(env('API_URL')); ?>/api/public/signup/landlord";
            console.log("apiurl",apiUrl)

            $('#signupButton').click(function() {
                var formData = {
                    name: $('#name').val(),
                    email: $('#email').val(),
                    password: $('#password').val(),
                };

                console.log("formData", formData);
                
                $.ajax({
                    url: apiUrl,
                    type: 'POST',
                    data: formData,
                    success: function(response) {
                    
                       if(response.message != "User Registered!"){
                        $('#responseMessage').removeClass('success-message').addClass('error-message').html('<p>Error: ' + response.error + '</p>');

                       }else{
                         $('#responseMessage').removeClass('error-message').addClass('success-message').html('<p>' + response.message + '</p>');
                       }
                        // Clear the form fields
                        $('#name').val('');
                        $('#email').val('');
                        $('#password').val('');
                    }
                });
            });
        });
    </script>
</body>
</html><?php /**PATH C:\xampp\htdocs\AccomoGuide\resources\views/landlord_registration.blade.php ENDPATH**/ ?>