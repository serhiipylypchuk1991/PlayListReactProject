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
}

//export default - дает возможность использовать компонент OptionsModel в других файлах
export default OptionsModel;
