export default 
class ListBuilder {

	//fonction pour rafraichir le dom
	refresh(recipes) {
		this.buildList(recipes.ingredient, '.firstBtn', 'ingredient');
		this.buildList(recipes.appareils, '.secondBtn', 'appliance');
		this.buildList(recipes.ustensiles, '.thirdBtn', 'ustensil');
	}

	//fonction qui construit le contenu des listes
	buildList(data, selector, className) {
		//DOM element
		const listContent = document.querySelector(selector);
		let htmlList = '';

		//crée un élement <li> pour chaque ingredient du tableau
		data.forEach((element) => {
			htmlList += `<li class='list-item' data-type='tag-${className}'>${element}</li>`;
		});

		//On écrase la liste html par la nouvelle
		listContent.innerHTML = htmlList;
	}
}
