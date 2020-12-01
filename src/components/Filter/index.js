import React from 'react';//Подключаем React библиотеку

import Performer from './Options/Performer.js';//Подключаем компонент фильтра Performer 
import Genre from './Options/Genre.js';//Подключаем компонент фильтра Genre 
import Year from './Options/Year.js';//Подключаем компонент фильтра Year

import './style.css';//Подключаем стили

class Filter extends React.Component{

	//Метод отображения информации
    render(){
		
		const play_list = this.props.db_data;
		
        return(
			<div className = "col-sm">
			
				<h2>Фильтр</h2>
					
				<form className = "filter" autoComplete = "off">
				
					<label><b>Исполнитель</b></label>
					<Performer 
						play_list_arr = {play_list}
						change_option_handler = {this.props.performerSelect}
					/>
					
					<label><b>Жанр</b></label>
					<Genre 
						play_list_arr = {play_list}
						change_option_handler = {this.props.genreSelect}
					/>
					
					<label><b>Год</b></label>
					<Year 
						play_list_arr = {play_list}
						change_option_handler = {this.props.yearSelect}
					/>
					<br/>
					
				</form>
				
			</div>
        );
    }
	
}

//export default - дает возможность использовать компонент Filter в других файлах
export default Filter;