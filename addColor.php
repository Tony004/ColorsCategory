<?php
    require_once "connect.php";

    if(isset($_GET["catName"])){
        $name = $_GET["newColorName"];
        $catName = $_GET["catName"];

        //По имени категории, куда мы добавляем цвет, узнаем id этой категории
        $query = "SELECT id FROM colortable WHERE name='$catName'";
        $result = mysqli_query($link, $query);
        for($id = []; $row = mysqli_fetch_assoc($result); $id[] = $row);

        $color_id = $id[0]["id"];

        // И присуждаем нашему новому цвету id этой категории
        $query = "INSERT INTO colors SET name='$name', color_id='$color_id'";

        mysqli_query($link, $query);

        echo "Цвет добавлен";
    }
?>
