import { escapeArray } from './utils.js';
export default 
class ListBuilder {

	//fonction pour rafraichir le dom
	refresh(searchResult, searchParams) {
		this.buildList( 
			searchResult.ingredient, 
			searchParams.ingredients,
			'.firstBtn', 
			'ingredient'
		);
		this.buildList(
			searchResult.appareils,
			searchParams.appareils, 
			'.secondBtn', 
			'appliance'
		);
		this.buildList(
			searchResult.ustensiles,
			searchParams.ustensiles,
			'.thirdBtn', 
			'ustensil'
		);
	}

	//fonction qui construit le contenu des listes
	buildList(data, dataSelected, selector, className) {

		//DOM element
		const listContent = document.querySelector(selector);
		let htmlList = '';
		data = escapeArray(data);

		//crée un élement <li> pour chaque ingredient du tableau
		data.forEach((element) => {
			if (!dataSelected.has(element)) {
				htmlList += `<li class='list-item' data-type='tag-${className}'>${element}</li>`;
			}
		});

		//On écrase la liste html par la nouvelle
		listContent.innerHTML = htmlList;
	}  
}
