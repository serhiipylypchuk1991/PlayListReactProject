import React from 'react';//Подключаем React библиотеку

import OptionsModel from './OptionsModel.js';//Подключаем скрипт с логикой - OptionsModel

class Year extends OptionsModel{

	constructor(props) {
		super(props);
		this.state = {value: 0};
	}

	//Метод отображения информации
    render(){
        return(
			<select value = {this.state.value} className = "form-control form-control-sm"
				onChange = {(e)=>{
					this.changeHandler(e);
					this.props.change_option_handler(e);
				}}
			>
				<option value = {0}> Все </option>
				{
					//Функция перебирает каждый элемент массива с годом, фильтрует уникальные года,
					//отправляет их в специальный массив this.options и сортирует его по убыванию годов
					// eslint-disable-next-line
					this.props.play_list_arr.map((row) =>
						{
							if(!this.options.includes(row.year)){ //Проверяет уникальность годов
								this.options.push(row.year); //Добавляет уникальные года в массив

								//Сортирует массив с уникальными годами в порядке убывания
								if(this.options.length > 1){
										this.options.sort(function(a,b){
	  										return b-a;
										})
								}

							}
						}
					)
				}

				{
					//Выводит отсортированные по убыванию года в виде  элементов <option>
					this.options.map((year,i) =>
						{
							//console.log(year,i);
							return (<option key = {i} value = {year}> {year} </option>);
						}
					)
				// eslint-disable-next-line
				}

				//Очищает массив с опциями в виде годов
				{this.cleanOptions()}
			</select>
        );
    }
}

//export default - дает возможность использовать компонент Year в других файлах
export default Year;
