import SearchParam from './SearchParam.js';

//classe qui retourne un resultat de recherche sous forme d'objet
export default class SearchResult {
	constructor(recipes) {
		this.ingredient = new Set();
		this.ustensiles = new Set();
		this.appareils = new Set();
		this.recipes = recipes;

		recipes.forEach((recipe) => {
			recipe.appliance.forEach((appareil) => {
				this.appareils.add(appareil);
			});

			recipe.ustensils.forEach((ustensil) => {
				this.ustensiles.add(ustensil);
			});

			recipe.ingredients.forEach((ingredient) => {
				this.ingredient.add(ingredient);
			});
		});
		//va chercher le texte tapé dans l'input
		this.searchParams = new SearchParam();
		this.ingredient = this.filterInput(this.searchParams.inputIngredient, this.ingredient);
		this.appareils = this.filterInput(this.searchParams.inputAppareil, this.appareils);
		this.ustensiles = this.filterInput(this.searchParams.inputUstensil, this.ustensiles);
	}

	hasIngredients() {
		return this.recipes.size > 0;
	}
    
	filterInput(params, data) {
		if (params.length <= 2) {
			return data;
		}

		let newData = new Set();
		data.forEach((element) => {
			if (element.includes(params)) {
				newData.add(element);
			}
		});

		return newData;
	}

    
}
