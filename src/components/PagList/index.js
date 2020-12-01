import React from 'react';//Подключаем React библиотеку
import PagModel from './PagModel.js';//Подключаем скрипт с логикой - PagModel
import './style.css';//Подключаем стили

 //Создаем компонент PagList который будет отображать пагинацию
 class PagList extends PagModel{

	//Метод отображения информации
    render(){
		
		const play_list_length = this.props.state.db_data.length;//Длинна массива с плейлистом
		const elements_count_on_page = this.props.state.elements_on_page;//Количество элементов на странице
		const current_page = +this.props.state.current_pag;//Номер текущей страницы
		const max_pag_count = 5; //Максимальное количество элементов пагинации для показа
		
        return(
			<div className = "col-sm">
				<nav>
					<ul className = "pagination pagination-md unselecteble" unselectable = "on">
						{this.fillUpPagArr(play_list_length,elements_count_on_page)}
						{this.previousPage()}
						
						{this.pag_arr.map(
							//eslint-disable-next-line
							(page,index) => {
								if(this.pag_arr.length >= 2){
									
									if(current_page <= 3){
										if(page <= max_pag_count){
											if(page === current_page){
												return (this.createActivePagElement(current_page));
											}else{
												return (this.createPagElement(page));
											}
										}
									}
									
									if(current_page > 3 && current_page <= this.pag_arr.length - 2){
										if(page >= (current_page - 2) && page <= (current_page + 2)){
											if(page === current_page){
												return (this.createActivePagElement(current_page));
											}else{
												return (this.createPagElement(page));
											}
										}
									}
									
									if(current_page > this.pag_arr.length - 2){
										if(page >= this.pag_arr.length - 4){
											if(page === current_page){
												return (this.createActivePagElement(current_page));
											}else{
												return (this.createPagElement(page));
											}
										}
									}	
								}
							}
						)}
						
						{this.nextPage()}
						{this.cleanPagArr()}
					</ul>
				</nav>
			</div>
        );
    }
}

//export default - дает возможность использовать компонент PagList в других файлах
export default PagList;