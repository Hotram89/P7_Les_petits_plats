import CardBuilder from './CardBuilder.js';
import ListBuilder from './ListBuilder.js';
import SearchParam from './SearchParam.js';
import SearchResult from './SearchResult.js';

/***
 * 
 *  Cette class sert à faire une recherche initiale et la rafraichir en fonction des filtres
*/
export default 
class SearchService {
	/**
     * 
     * COntient les données des recettes non filtrées
     */ 
	recipes;

	/**
     * 
     * Contient les données de recettes deja filtrées en fonction de la recherche courante
     */
	recipesFiltered;

	constructor(collectionDto) {
		this.domBuilder = new CardBuilder();
		this.listBuilder = new ListBuilder();
		this.recipes = collectionDto; // ne change pas, a les 50 recettes
		this.recipesFiltered = collectionDto; // change en fonction des recherches effectuées
	}

	search() {

		this.searchParams = new SearchParam();
		this.recipesFiltered = new Set();
		/**
         * 
         * pour chaque recette, on compare
         * la recette de base avec les parametres de recherche
         * si on trouve une correspondance,
         * on l'ajoute au tableau des recettes filtrées
         * 
         */
		this.recipes.forEach((recipe) => {
			if (this.isValidRecipe(recipe)) {
				this.recipesFiltered.add(recipe);
			}		
		});

		/**
         * On rafrachit le DOM
         */
		let searchResult = new SearchResult(this.recipesFiltered);
		this.domBuilder.refresh(searchResult);
		this.listBuilder.refresh(searchResult);
	}
	//fonction qui verifie tous les parametres de recherche
	isValidRecipe(recipe) {
		return this.compareLesTableaux(this.searchParams.ustensiles, recipe.ustensils, recipe.id)
        && this.compareLesTableaux(this.searchParams.ingredients, recipe.ingredients, recipe.id)
        && this.compareLesTableaux(this.searchParams.appareils, recipe.appliance, recipe.id)
	}

	compareLesTableaux(criterias, recipeData) {
		if (criterias.size == 0) {
			return true;
		}

		let isValid = [...criterias].every((criteria) => {
			return recipeData.has(criteria);
		});
		 return isValid;
		// si un ingredient du tableau criterias existe dans recipe
		// alors renvoie true
	}
}


