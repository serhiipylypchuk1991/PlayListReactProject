import React from 'react';//Подключаем React библиотеку
import SortModel from './SortModel.js';//Подключаем скрипт с логикой - OptionsModel
import './sort.css';//Подключаем стили

class GenresSort extends SortModel{
	constructor(props) {
		super(props);
		this.selectedValue = "genre";
	}
	
    render(){
        return(
			
			<select value = {this.selectedValue} className = "sort" readOnly
				onChange = {
					(e) => {
						this.changeHandler(e);
						this.props.genreSorting("genre",this.selectedValue,e);
						this.defoltSelectedValue("genre");
					}
				}
			>
				<option value = "genre">Жанр</option>
				<option value = "A-Z">По алфавиту от A до Z</option>
				<option value = "Z-A">По алфавиту от Z до A</option>
			</select>
			
        );
    }
}

export default GenresSort;