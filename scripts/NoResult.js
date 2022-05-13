export default class NoResult {
	refresh(searchResult) {
		//dom element
		let container = document.querySelector(".nothing-container");
		container.innerHTML = searchResult.hasIngredients()
			? ''
			: 'Aucune recette ne correspond à votre critère...'
                + ' vous pouvez chercher "<b>tarte aux pommes</b>", "<b>poisson</b>", etc.';      
	}
}
