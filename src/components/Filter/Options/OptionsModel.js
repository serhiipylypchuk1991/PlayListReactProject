import React from 'react';//Подключаем React библиотеку

class OptionsModel extends React.Component{

	constructor(props) {
		super(props);

		//Массив неповторяющихся елементов
		this.options = [];

		//Привязка обработчикa к this данного объекта
		this.changeHandler = this.changeHandler.bind(this);
	}

	//Устанавливает значение выбраного выбраного елемента в состояние
	changeHandler(event) {
		this.setState({value: event.target.value});
	}

	//Функция очистки массива неповторяющихся елементов
	cleanOptions(){
		this.options = [];
	}

	//Сортирует массив в алфавитном порядке от А до Z, а затем возвращает его
	alphabetSorting(current_arr){

			//Сортирует массив в алфавитном порядке от А до Z
			current_arr.sort(function(a, b){

				if(a < b){
						return -1;
				}
				if(a > b){
						return 1;
				}else{
						return 0;
				}

			});

		return current_arr;

	}

}

//export default - дает возможность использовать компонент OptionsModel в других файлах
export default OptionsModel;
