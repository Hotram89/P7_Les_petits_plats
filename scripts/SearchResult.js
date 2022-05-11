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
		this.inputIngredients(this.searchParams.inputIngredient);
		this.inputAppareils(this.searchParams.inputAppareil);
		this.inputUstencils(this.searchParams.inputUstensil);
	}

	inputIngredients(inputText) {
		//si il y des lettres tapées
		if (inputText.length > 2) {
			let newList = new Set();
			this.ingredient.forEach((element) => {
				if (element.includes(inputText)) {
					newList.add(element);
				}
				this.ingredient = newList;
			});
		}
	}

	inputAppareils(inputText) {
		//si il y des lettres tapées
		if (inputText.length > 2) {
			let newList = new Set();
			this.appareils.forEach((element) => {
				if (element.includes(inputText)) {
					newList.add(element);
				}
				this.appareils = newList;
			});
		}
	}

	inputUstencils(inputText){
		//si il y des lettres tapées
		if (inputText.length > 2) {
			let newList = new Set();
			this.ustensiles.forEach((element) => {
				if (element.includes(inputText)) {
					newList.add(element);
				}
				this.ustensiles = newList;
			});
		}
	}
}
