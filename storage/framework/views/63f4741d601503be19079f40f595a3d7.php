
<html>

<head>
    <title>Login</title>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" href="css/register_style.css">
</head>

<body>

    <div class="register-container">
        <img src="/img/a.jpg" alt="Logo" id="logo">
        <h2>LogIn</h2>

        <form action="register_process.php" method="POST">
            <input id="email" type="text" name="email" placeholder="Email" required><br>
            <input id="password" type="password" name="password" placeholder="Password" required><br>
            <input type="hidden" id="loginMethod" value="EMAIL">
 <div class="checklist">
                <input type="checkbox" id="remember" name="remember" value="1">
                <label for="remember">Remember me</label><br>
            </div>
        </form>
                        <div id="responseMessage" class="response-message"></div>


                    <button type="submit" id="loginButton">LOGIN</button>

    </div>

    <script>
        // Use jQuery.noConflict() to avoid conflicts with other libraries
        jQuery.noConflict();
        // Use jQuery instead of $ after this point
        jQuery(document).ready(function($) {
            // Get the API_URL from the Blade template
            var apiUrl = "<?php echo e(env('API_URL')); ?>/api/public/login";
            console.log("apiurl",apiUrl)

            $('#loginButton').click(function() {
                var formData = {
                    loginMethod: $('#loginMethod').val(),
                    email: $('#email').val(),
                    password: $('#password').val(),
                    remember: $('#remember').is(':checked') ? 1 : 0  // Convert checkbox state to 1 or 0
                };

                console.log("formData", formData);
                
                $.ajax({
                    url: apiUrl,
                    type: 'POST',
                    data: formData,
                    success: function(response) {

                        console.log("abcd")
                    
                       if(response.message != "Successfully Logged In!"){
                        $('#responseMessage').removeClass('success-message').addClass('error-message').html('<p>Error: ' + response.error + '</p>');
                        // window.location("/landing_page")

                       }else{
    
                        let userType = response.data.userType
                        let redirect_url = "";

                        if(userType === "LANDLORD"){
                            redirect_url = "/landing_page"
                        }
                        else if(userType === "WEB_MASTER"){
                            redirect_url = "/admin_create_account"
                        }
                        else if(userType === "WARDEN") {
                            redirect_url = "/warden_page"
                        }
                        else if(userType === "STUDENT"){
                            redirect_url = "/students_page"
                        } 

                          let successMessage = '<p>' + response.message + '</p><br><a href="' + redirect_url + '">Okay</a>';
                $('#responseMessage').removeClass('error-message').addClass('success-message').html(successMessage);
                       }
                        $('#email').val('');
                        $('#password').val('');
                    }
                });
            });
        
        });
    </script>

</body>

</html>
<?php /**PATH C:\xampp\htdocs\AccomoGuide\resources\views/login.blade.php ENDPATH**/ ?>