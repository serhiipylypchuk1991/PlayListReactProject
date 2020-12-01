import React from 'react';//Подключаем React библиотеку
import SortModel from './SortModel.js';//Подключаем скрипт с логикой - OptionsModel
import './sort.css';//Подключаем стили

class PerformersSort extends SortModel{
	
	constructor(props) {
		super(props);	
		this.selectedValue = "performer";
	}
	
    render(){
        return(
			<select value = {this.selectedValue} className = "sort" readOnly
				onChange = {
					(e) => {
						this.changeHandler(e);
						this.props.performerSorting("performer",this.selectedValue,e);
						this.defoltSelectedValue("performer");
					}
				}
			>
				<option value = "performer">Исполнитель</option>
				<option value = "A-Z">По алфавиту от A до Z</option>
				<option value = "Z-A">По алфавиту от Z до A</option>
			</select>
			
        );
    }
}

export default PerformersSort;