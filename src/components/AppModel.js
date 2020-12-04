import React from 'react';//Подключаем React библиотеку

class AppModel extends React.Component{
	constructor(props){
        super(props);

		//Привязка обработчиков к this данного объекта
		this.handlePerformerFilter = this.handlePerformerFilter.bind(this);
		this.handleGenreFilter = this.handleGenreFilter.bind(this);
		this.handleYearFilter = this.handleYearFilter.bind(this);

		this.yearsSortingHandler = this.yearsSortingHandler.bind(this);
		this.alphabetSortingHandler = this.alphabetSortingHandler.bind(this);

		this.changePagHandler = this.changePagHandler.bind(this);
		this.nextPagHandler = this.nextPagHandler.bind(this);
		this.previousPagHandler = this.previousPagHandler.bind(this);

		this.changeElementsCountHandler = this.changeElementsCountHandler.bind(this);

		//Устанавливаем первоначальное состояние
		//Здесь будет храниться информация/плейлист из базы
    this.state = ({
        db_data:[],
				elements_on_page:10,
				current_pag:1
    });

		//Устанавливаем объект запроса (нужен для фильтра)
		this.query_data = {
			performer:null,
			genre:null,
			year:null
		};

		//Получаем первоначальную информацию из базы
		this.getListFromDB(this.query_data);
    }

	//Обработчики событий фильтрации плейлиста (Можно было объеденить все в 1 функцию, но так понятнее)
	//Фильтр по исполнителям
	handlePerformerFilter(event){
		this.query_data.performer = event.target.value;
		this.getListFromDB(this.query_data);
	}

	//Фильтр по жанрам
	handleGenreFilter(event){
		this.query_data.genre = event.target.value;
		this.getListFromDB(this.query_data);
	}

	//Фильтр по годам
	handleYearFilter(event){
		this.query_data.year = event.target.value;
		this.getListFromDB(this.query_data);
	}

	//Сортирует по возрастанию если reverse равен false, и в обратном порядке если true
	yearsSortingHandler(reverse,event){
		// eslint-disable-next-line
		var sorted_arr = this.state.db_data.sort(function(a,b){
			if(reverse === "toincrease"){//Реализуется сортировка по возростанию (false)
				return (a.year - b.year);
			}
			if(reverse === "todecrease"){//Реализуется сортировка по убыванию (true)
				return (b.year - a.year);
			}
		});

		//Меняем состояние объекта нашого плейлиста
		this.setState({
			db_data: sorted_arr,
			current_pag:1
		});

	}

	//Сортирует по алфавиту если reverse равен false, и в обратном порядке если true
	//row_name - это или performer(исполнитель), или genre(жанр), или track(трек), в зависимости от того, что нам надо сортировать
	alphabetSortingHandler(row_name,reverse,event){
		// eslint-disable-next-line
		var alphabet_sorted_arr = this.state.db_data.sort(function(a, b){

			var nameA = a[row_name].toLowerCase(),
					nameB = b[row_name].toLowerCase();
			if(reverse === "A-Z"){//Реализуется сортировка по возростанию (a-z) false
				if(nameA < nameB){
					return -1;
				}
				if(nameA > nameB){
					return 1;
				}else{
					return 0;
				}
			}
			if(reverse === "Z-A"){//Реализуется сортировка по убыванию (z-a) true
				if(nameA > nameB){
					return -1;
				}
				if(nameA < nameB){
					return 1;
				}else{
					return 0;
				}
			}

		});

		//Меняем состояние объекта нашого плейлиста
		this.setState({
			db_data: alphabet_sorted_arr,
			current_pag:1//После сортировки по алфавиту устанавливаем  первую страницу, для избежания некорректной работы
		});
	}

	//Устанавливает полученый номер пагинации в состояние, и этим меняет сам плейлист
	changePagHandler(event){
		this.setState({current_pag:event.target.getAttribute('name')});
		//console.log('Текущая страница = ' + event.target.getAttribute('name'));
	}

	//Увеличивает номер пагинации на 1
	nextPagHandler(event){
		var pag_count = Math.ceil(this.state.db_data.length/this.state.elements_on_page);
		var current_page = +this.state.current_pag;
		if(current_page < pag_count){
			var next_pag = current_page + 1;
			this.setState({current_pag:next_pag});
			//console.log('Текущая страница = '+ next_pag);
		}
	}

	//Уменшает номер пагинации на 1
	previousPagHandler(event){
		var current_page = +this.state.current_pag;
		if(current_page > 1){
			this.setState({current_pag:current_page-1});
		}
	}

	//Устанавливает полученый номер пагинации в состояние, и этим меняет сам плейлист
	changeElementsCountHandler(event){
		this.setState({
			elements_on_page:event.target.getAttribute('name'),
			current_pag:1
		});
		//console.log('Количество элементов на странице = ' + event.target.getAttribute('name'));
	}

	//Функция делает запрос в базу, получает массив со списком треков и сохраняет ее в this.state
  getListFromDB(parameters){

		var url = "http://localhost/play-list-app/src/api/index.php";
		//var url = "http://pylypchukprojects.of.by/static/php/index.php";
		//var url = "http://playlistreactproject.pylypchuk-projects.site/static/php/index.php";

        fetch(url,{
					method:"POST", //Метод запроса
					body:JSON.stringify(parameters) //Кодируем массив с параметрами и устанавливаем его в тело запроса
				})
        .then((response) => response.json())
        .then(
			(responseJson) => {
				this.setState({
					db_data: responseJson,
					current_pag:1 //При обновлении контента устанавливается 1 страница
				});
			}
		)
    }
}

//export default - дает возможность использовать Model в других файлах
export default AppModel;
