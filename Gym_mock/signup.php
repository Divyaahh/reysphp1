<?php
require('db.php');
INSERT INTO `users`(`UserID`, `Username`, `Password`, `FirstName`, `LastName`, `Email`, `PhoneNumber`, `TrainingMethod`) VALUES ('[value-1]','[value-2]','[value-3]','[value-4]','[value-5]','[value-6]','[value-7]','[value-8]')

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Check if fields are empty
    if (empty($_POST['username']) || empty($_POST['email']) || empty($_POST['password'])) {
        echo "All fields are required. Please fill in all fields.";
    } else {
        $username = $_POST['username'];
        $password = $_POST['password'];
        $email = $_POST['email'];

        // Sanitize inputs to prevent SQL injection
        $username = mysqli_real_escape_string($connection, $username);
        $email = mysqli_real_escape_string($connection, $email);
        $password = mysqli_real_escape_string($connection, $password);
        
        // Encrypt password
        $md5password = md5($password);

        // Insert query
        $query = "INSERT INTO `users` (username, email, password) VALUES ('$username', '$email', '$md5password')";
        
        // Execute the query
        $result = mysqli_query($connection, $query);

        if ($result) {
            echo "User has been created.";
        } else {
            echo "There was a problem, try again.";
        }
    }
}
?>
