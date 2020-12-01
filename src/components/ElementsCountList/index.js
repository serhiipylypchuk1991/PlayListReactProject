import React from 'react';//Подключаем React библиотеку

 //Создаем компонент ElementsCountList который будет отображать панель управления количеством элементов на странице
 class ElementsCountList extends React.Component{
	constructor(props) {
		super(props);
		
		//Массив параметров количества элементов на странице
		this.elements_count_arr = [5,10,15,20];	
	}
	//Метод отображения информации
    render(){
		
		const elements_count = this.props.elements_count;
		
        return(
			<div className = "col-sm">
				<nav className = 'elements_count_list'>
					
					<ul className = "pagination pagination-md unselecteble" unselectable = "on">
					
						{this.elements_count_arr.map(
							(count) => {
								if(count === +elements_count){
									return (
										<li key = {count} className = "page-item active" aria-current = "page">
												<span className = "page-link">{count}</span>
										</li>
									);
								}else{
									return (<li key = {count} className = "page-item" onClick = {this.props.changeCount}><span className = "page-link" name = {count}>{count}</span></li>);
								}
							}
						)}	
							
					</ul>
					
				</nav>
			</div>
        );
    }
}

//export default - дает возможность использовать компонент ElementsCountList в других файлах
export default ElementsCountList;