<?php

		abstract class ConnectDB{

			protected function conectDB(){
		        try{
		            $db_link = new PDO("mysql:host=localhost;dbname=play_list_project","root","serhii26");
		            return $db_link;
		        }catch (PDOException $Erro){
		            return $Erro -> getMessage();
		        }
		    }
		}

?>
