<?php
    include "Model.php"; //Подключаем файл Model.php

    class View extends Model{
    	protected function show_track_list($parameters){
    		return $this -> get_track_list($parameters); //Получаем массив данных от модели и передаем клиенту
    	}
    }
?>
