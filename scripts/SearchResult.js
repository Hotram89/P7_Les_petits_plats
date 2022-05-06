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
	}
}
