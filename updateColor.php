<?php
    require_once "connect.php";

    $newColor = $_GET["newColorName"];
    $oldColor = $_GET["previousColorName"];

    $query = "UPDATE colors SET name='$newColor' WHERE name='$oldColor'";

    mysqli_query($link, $query);

    echo "Цвет изменен";
?>
