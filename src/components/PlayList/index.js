import React from 'react';//Подключаем React библиотеку

import YearsSort from './SortComponents/YearsSort.js';//Подключаем компонент YearsSort
import PerformersSort from './SortComponents/PerformersSort.js';//Подключаем компонент PerformersSort
import GenresSort from './SortComponents/GenresSort.js';//Подключаем компонент GenresSort
import TracksSort from './SortComponents/TracksSort.js';//Подключаем компонент TracksSort
import './style.css';//Подключаем стили

 //Создаем компонент PlayList который будет отображать таблицу с данными
 class PlayList extends React.Component{

	//Определяет, какие элементы нужно показывать с учетом текущей страницы и количества элементов на странице
	pagFilter(current_pag,count,index){
		var a = current_pag * count;
		var b = a - (count - 1);

		if(index >= b && index <= a){
			return true;
		}else{
			return false;
		}
	}

	//Метод отображения информации
  render(){

  		const db_data = this.props.state.db_data;//Объект в котором хранится плейлист
  		const count = this.props.state.elements_on_page;//Количество элементов на странице
  		const current_pag = this.props.state.current_pag;//Текущая страница

      return(
  			<div className = "col-sm">
  				<h2>Плейлист</h2>
  				<table className = "table table-bordered" >
  					<thead>
  						<tr>
  							<th>#</th>
  							<th>
  								<PerformersSort
  									performerSorting = {this.props.alphabetSortingHandler}
  								/>
  							</th>
  							<th>
  								<TracksSort
  									trackSorting = {this.props.alphabetSortingHandler}
  								/>
  							</th>
  							<th>
  								<GenresSort
  									genreSorting = {this.props.alphabetSortingHandler}
  								/>
  							</th>
  							<th>
  								<YearsSort
  									yearsSorting = {this.props.yearsSortingHandler}
  								/>
  							</th>
  						</tr>
  					</thead>
  					<tbody>
  						{db_data.map(
  							// eslint-disable-next-line
  							(row,index) => {
  								if(this.pagFilter(current_pag,count,index+1)){

  									return (<tr key = {row.id}>
  											<td>{index+1}</td>
  											<td>{row.performer}</td>
  											<td>{row.track}</td>
  											<td>{row.genre}</td>
  											<td>{row.year}</td>
  										</tr>
  									);
  								}

  							}
  						)}
  					</tbody>
  				</table>
  			</div>
      );
  }
}

//export default - дает возможность использовать компонент PlayList в других файлах
export default PlayList;
