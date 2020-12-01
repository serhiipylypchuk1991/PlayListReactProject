import React from 'react';//Подключаем React библиотеку
import SortModel from './SortModel.js';//Подключаем скрипт с логикой - OptionsModel
import './sort.css';//Подключаем стили

class YearsSort extends SortModel{
	constructor(props) {
		super(props);
		this.selectedValue = "year";
	}
    render(){
        return(
		
			<select value = {this.selectedValue} className = "sort" readOnly
				onChange = {
					(e) => {
						this.changeHandler(e);
						this.props.yearsSorting(this.selectedValue,e);
						this.defoltSelectedValue("year");
					}
				}
			>
				<option value = "year">Год</option>
				<option value = "toincrease">По возростанию</option>
				<option value = "todecrease">По убыванию</option>
			</select>
			
        );
    }
}

export default YearsSort;