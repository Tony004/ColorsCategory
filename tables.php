<?php

        $query1 = "SELECT * FROM colortable";
        $query2 = "SELECT * FROM colors";

        $result1 = mysqli_query($link, $query1);
        $result2 = mysqli_query($link, $query2);

        for($colorCategory = []; $row = mysqli_fetch_assoc($result1); $colorCategory[] = $row);
        for($colors = []; $row = mysqli_fetch_assoc($result2); $colors[] = $row);

?>
