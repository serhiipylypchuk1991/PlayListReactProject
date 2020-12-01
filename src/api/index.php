<?php

include "MVC/Controller.php"; //Подключаем файл Controller.php

$trackList = new Controller(); //Создаем объект класса Controller
$trackList -> start_track_list_controller(); //Запускаем функцию, которая подтягивает информацию из базы

?>