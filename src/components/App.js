import React from 'react';//Подключаем React библиотеку

import AppModel from './AppModel.js';//Подключаем скрипт с логикой - AppModel

import PlayList from './PlayList/index.js';//Подключаем компонент PlayList
import Filter from './Filter/index.js';//Подключаем компонент Filter
import PagList from './PagList/index.js';//Подключаем компонент PagList
import ElementsCountList from './ElementsCountList/index.js';//Подключаем компонент ElementsCountList
import 'bootstrap/dist/css/bootstrap.css';//Подключаем бутстрап

//Создаем новый компонент/класс App, который наследует методы из Модели
class App extends AppModel{

	//Метод отображения информации
    render(){
        return(
			<div className = "container">
				<div className = "row">
				
					<PlayList 
						state = {this.state}
						
						yearsSortingHandler = {this.yearsSortingHandler}
						alphabetSortingHandler = {this.alphabetSortingHandler}
					/>
					
					<Filter 
						db_data = {this.state.db_data}
						
						performerSelect = {this.handlePerformerFilter}
						genreSelect = {this.handleGenreFilter}
						yearSelect = {this.handleYearFilter}
					/>
					
				</div>
				
				<div className = 'row'>
				
					<ElementsCountList
						elements_count = {this.state.elements_on_page}
						changeCount = {this.changeElementsCountHandler}
					/>
					
					<PagList 
						state = {this.state}
						
						changePag = {this.changePagHandler}
						nextPag = {this.nextPagHandler}
						previousPag = {this.previousPagHandler}
					/>
					
				</div>
				
			</div>
        );
    }
}

//export default - дает возможность использовать компонент App в других файлах
export default App;