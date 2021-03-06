import React from 'react';//Подключаем React библиотеку

import OptionsModel from './OptionsModel.js';//Подключаем скрипт с логикой - OptionsModel

class Performer extends OptionsModel{

	constructor(props) {
		super(props);
		this.state = {value:""};
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

				{	// eslint-disable-next-line
					this.props.play_list_arr.map((row) => {

							if(!this.options.includes(row.performer)){

								//Заталкивает уникальные названия в массив
								this.options.push(row.performer);

								if(this.options.length > 1){
									//Сортирует массив в алфавитном порядке от А до Z
									this.options = this.alphabetSorting(this.options);
								}
								
							}

					 })
				}

				{
						//Выводит отсортированные в алфавитном порядке имена исполнителей в виде  элементов <option>
						this.options.map((performer,i) => {
								return (<option key = {i} value = {performer}> {performer} </option>);
						})
					// eslint-disable-next-line
				}

				{this.cleanOptions()}

			</select>
        );
    }
}

//export default - дает возможность использовать компонент Performer в других файлах
export default Performer;
