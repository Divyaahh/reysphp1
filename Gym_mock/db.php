<?php

    $connection = mysqli_connect("localhost","root","","gym_site"); 

    if (mysqli_connect_errno()) {
        echo "failed to connect to MySQL:" .mysqli_connect_error() ."Please try again";

    }
    else{
        echo "connected to the server successfully";
    }