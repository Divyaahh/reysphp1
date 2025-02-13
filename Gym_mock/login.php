<?php
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $username = $_POST['username'];
        $password = $_POST['password'];
    }
    ?>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome Page</title>
        
    </head>
    <body>
   
        <div class="welcome-container">
            <h1>Welcome to your account, <?php echo htmlspecialchars($username); ?>!</h1>
            <h2>Your username is: <?php echo htmlspecialchars($username); ?></h2>
            <p>You have successfully logged into your account.</p>
        </div>
   
    </body>
    </html>
   
    <?php
       
    ?>
 
