<?php
    require_once "connect.php";

    if(isset($_GET["categoryName"])){
        $name = $_GET["categoryName"];
        $query = "INSERT INTO colortable SET name='$name'";
        mysqli_query($link, $query);
    }

    header('Location: http://s1.localhost/colors/index.php');
?>
