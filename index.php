<?php
    require_once "connect.php";
    require_once "tables.php";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css">
    <title>Colors</title>
</head>
<body>

<!-- Главная категория Color -->
<div>
    <span id="main_cat">Colors</span>
    <!-- Добавление категории -->
    <button id="addCategory">+</button>

    <div id="sub_cat">
    <!-- Вывод подкатегорий Colors -->
    <?php
        foreach($colorCategory as $category){
    ?>
        <div class="sub_cat_div"><span class="colors"><?= $category["name"]; ?></span>
            <button class="removeCategory">-</button>
            <button class="addColor">+</button>
                <ul>
                <?php
                    foreach($colors as $color){
                        if($category["id"] == $color["color_id"]){
                ?>
                            <!-- Вывод цветов -->
                            <li><?= $color["name"]; ?></li>
                            <button class="removeColor">-</button>
                            <br>
                <?php
                        } //Конец if
                    } //Конец foreach colors
                ?>
                </ul>
        </div>
    <?php
        } //Конец foreach colorCategory
    ?>
    </div>
</div>
<p id="message"></p>
<p>Кликните на цвете для его изменения</p>
<p>Кликните на категории для сворачивания/разворачивания</p>

<script src="main.js" charset="utf-8"></script>
</body>
</html>
