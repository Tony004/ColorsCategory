<?php
    require_once "connect.php";

    // Удаление категории
    if(isset($_GET["name"])){
        $name = $_GET["name"];
        $query = "DELETE FROM colorTable WHERE name='$name'";
        mysqli_query($link, $query);
        echo "Категория удалена";
    }

    // Удаление цвета
    if(isset($_GET["colorName"])){
        $colorName = $_GET["colorName"];
        $query = "DELETE FROM colors WHERE name='$colorName'";
        mysqli_query($link, $query);
        echo "Цвет удален";
    }
?>
