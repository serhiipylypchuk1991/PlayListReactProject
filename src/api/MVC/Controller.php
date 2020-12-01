<?php
		include "View.php"; //Подключаем файл View.php

		class Controller extends View{

			public function start_track_list_controller(){

				if($_SERVER['REQUEST_METHOD'] == 'POST'){

					//Без этой строки $_POST приходил пустым
					$rest_json = file_get_contents("php://input");
					$_POST = json_decode($rest_json, true);

					if($_POST){
						$parameters = $_POST;
							//Определение заголовков ответа
							//header("Access-Control-Allow-Origin:*");
							//header("Content-type: application/json");
							//echo json_encode($parameters);

						  echo $this -> show_track_list($parameters);

					}
				}


			}

		}
?>
