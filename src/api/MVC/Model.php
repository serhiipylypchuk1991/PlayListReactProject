<?php
		include "ConnectDB.php"; //Подключаем файл ConnectDB.php

		class Model extends ConnectDB{

			//Формирует масси данных из базы
			private function create_answer($result){
				//Создаем массив, куда будем сохранять информацию из базы, и отправлять клиенту
				$track_list_arr = [];

				//Получаем количество рядов, соответствующих запросу
				$row_count = $result -> rowCount();

				//Формируем массив данных $track_list_arr, информацией из базы
				for($i = 0; $i < $row_count; $i++){

					//Получаем очередной ряд из базы
					$row = $result -> fetch(PDO::FETCH_ASSOC);//Альтернативный метод

					//Информацию из полученного ряда отправляем в массив
					$track_list_arr[$i] = [
						"id" => $row["id"],
						"performer" => $row["performer"],
						"track" => $row["track"],
						"genre" => $row["genre"],
						"year" => $row["year"]
					];
				}

				//Возвращаем заполненый информацией из базы массив
				return $track_list_arr;

			}

			//Возвращает запрос в базу с учетом фильтра
			private function createQuery($parameters){

				if($parameters){

					if($parameters["performer"] && $parameters["genre"] && $parameters["year"]){

						return "SELECT * FROM tracks_list WHERE performer = '".$parameters["performer"]."' && genre = '".$parameters["genre"]."' && year =".$parameters["year"];

					}else if($parameters["performer"] && $parameters["genre"]){

						return "SELECT * FROM tracks_list WHERE performer = '".$parameters["performer"]."' && genre = '".$parameters["genre"]."'";

					}else if($parameters["performer"] && $parameters["year"]){

						return "SELECT * FROM tracks_list WHERE performer = '".$parameters["performer"]."' && year = ".$parameters["year"];

					}else if($parameters["performer"]){

						return "SELECT * FROM tracks_list WHERE performer = '".$parameters["performer"]."'";

					}else if($parameters["genre"] && $parameters["year"]){

						return "SELECT * FROM tracks_list WHERE genre = '".$parameters["genre"]."' && year = ".$parameters["year"];

					}else if($parameters["genre"]){

						return "SELECT * FROM tracks_list WHERE genre = '".$parameters["genre"]."'";

					}else if($parameters["year"]){

						return "SELECT * FROM tracks_list WHERE year = ".$parameters["year"];

					}else{

						return "SELECT * FROM tracks_list";
					}

				}else{
					return "select * from tracks_list";
				}
			}

			//Возвращает массив информации из базы
		    protected function get_track_list($parameters){

				//Формируем запрос к базе
				$query = $this -> createQuery($parameters);

				//Создаем соединение
				$db_link = $this -> conectDB();

				//Делаем запрос в базу
		        $result = $db_link -> query($query);

				if($result){
					//Получаем массив данных из базы
					$play_list_arr = $this -> create_answer($result);

					//Определение заголовков ответа
					header("Access-Control-Allow-Origin:*");
					header("Content-type: application/json");

					if($play_list_arr){
						return json_encode($play_list_arr);//Возвращаем наш массив в формате json
					}else{
						return json_encode(array());//Возвращаем наш массив в формате json
					}

					// очищаем результат
					$result -> free_result();
				}

				//Закрывает соединение
				$db_link -> close();
		    }
		}
?>
