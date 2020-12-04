import React from 'react';//Подключаем React библиотеку

class SortModel extends React.Component{
	constructor(props) {
		super(props);

		//Привязка обработчикa к this данного объекта
		this.changeHandler = this.changeHandler.bind(this);

	}
	//Устанавливает значение выбраного выбраного елемента в переменную selectedValue
	changeHandler(e) {
		this.selectedValue = e.target.value;
		//console.log(this.selectedValue);
	}

	//Устанавливает атрибут value по умолчанию, для корректной работы дескриптора <select>
	defoltSelectedValue(current_value){
		this.selectedValue = current_value;
	}

}

//export default - дает возможность использовать компонент SortModel в других файлах
export default SortModel;
