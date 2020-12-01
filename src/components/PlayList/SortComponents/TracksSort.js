import React from 'react';//Подключаем React библиотеку
import SortModel from './SortModel.js';//Подключаем скрипт с логикой - OptionsModel
import './sort.css';//Подключаем стили

class TracksSort extends SortModel{
	constructor(props) {
		super(props);
		this.selectedValue = "track";
	}
	
    render(){
        return(
		
			<select value = {this.selectedValue} className = "sort" readOnly
				onChange = {
					(e) => {
						this.changeHandler(e);
						this.props.trackSorting("track",this.selectedValue,e);
						this.defoltSelectedValue("track");
					}
				}
			>
				<option value = "track">Трек</option>
				<option value = "A-Z">По алфавиту от A до Z</option>
				<option value = "Z-A">По алфавиту от Z до A</option>
			</select>
			
        );
    }
}

export default TracksSort;