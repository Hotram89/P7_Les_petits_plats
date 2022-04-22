//classe qui retourne un resultat de recherche sous forme d'objet
export default class SearchResult {
	constructor(recipes) {
		this.input = this.getInputValuesEscaped();
		this.ingredient = new Set();
		this.ustensiles = new Set();
		this.appareils = new Set();
		this.recipes = recipes;

		recipes.forEach((recipe) => {
			this.appareils.add(recipe.appliance);

			recipe.ustensils.forEach((ustensil) => {
				this.ustensiles.add(ustensil);
			});

			recipe.ingredients.forEach((ingredient) => {
				this.ingredient.add(ingredient);
			});
		});
	}

	getInputValuesEscaped() {
		//   let keyboardInput = new SearchParam().isValid()
		//   console.log(keyboardInput);
		//lait de coco
		// [ lait , de , coco]
		return 'coco';
	}
}
