<?php

    $host = "localhost";
    $user = "root";
    $password = "root";
    $db = "colors";

    $link = mysqli_connect($host, $user, $password, $db);

    mysqli_set_charset($link, "utf8"); 

?>
