import React from 'react';//Подключаем React библиотеку

class PagModel extends React.Component{
	constructor(props) {
		super(props);
		
		//Массив элементов пагинации
		this.pag_arr = [];	
	}
	
	//Заполняет массив элементами пагинации 
	fillUpPagArr(length,count){
		var pages_count = Math.ceil(length/count);
		for(var i = 1; i <= pages_count; i++){
			this.pag_arr.push(i);
		}
	}
	
	//Чистит массив с элементами пагинации
	cleanPagArr(){
		this.pag_arr = [];	
	}
	
	//Создает элемент пагинации для перехода к предыдущей странице
	previousPage(){
		if(this.pag_arr.length >= 2){
			return(
				<li className = "page-item" onClick = {this.props.previousPag}>
					<span className = "page-link" aria-label = "Previous">
						<span aria-hidden = "true">&laquo;</span>
					</span>
				</li>
			);	
		}
	}
	
	//Создает элемент пагинации для перехода к следующей странице
	nextPage(){
		if(this.pag_arr.length >= 2){
			return(
				<li className = "page-item" onClick = {this.props.nextPag}>
					<span className = "page-link" aria-label = "Next">
						<span aria-hidden = "true">&raquo;</span>
					</span>
				</li>
			);
		}
	}
	
	//Создает обычный элемент пагинации
	createPagElement(page){
		return (
			<li key = {page} className = "page-item" onClick = {this.props.changePag}>
				<span className = "page-link" name = {page}>{page}</span>
			</li>
		);
	}
	
	//Создает активный элемент пагинации
	createActivePagElement(current_page){
		return (
			<li key = {current_page} className = "page-item active" aria-current = "page">
				<span className = "page-link">{current_page}</span>
			</li>
		);
	}
	
}

//export default - дает возможность использовать PagModel в других файлах
export default PagModel;