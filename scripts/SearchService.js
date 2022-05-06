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

			if (this.isValidRecipe(recipe, this.searchParams)) {
				this.recipesFiltered.add(recipe)

			}		

		})

		/**
         * Pour chacune des recettes dans recipes 
         * si searchParams.hasIngredient
         * verifier si cette recipe contient les bons ingredients
         * alors add dans un tableau vide 
         * 
         * 
         */
		this.domBuilder.refresh(new SearchResult(this.recipesFiltered));
		this.listBuilder.refresh(new SearchResult(this.recipesFiltered));
	}
	//fonction qui verifie tous les parametres de recherche
	isValidRecipe(recipe, searchParams) {
		
		let isValid = this.isValidRecipeForCriterias(searchParams.ingredients, recipe.ingredients)
        && this.isValidRecipeForCriterias(searchParams.appareils, recipe.appliance )
        && this.isValidRecipeForCriterias(searchParams.ustensiles, recipe.ustencils);
       
		return isValid;
	}
	// fonction qui verifie si il y a bien au moins un critere
	isValidRecipeForCriterias(criteria, recipe) {
		if (criteria.size > 0) {
			return this.compareLesTableaux(criteria , recipe)
		}
		return true;
	}

	contientTousLesFiltres(criterias, recipe) {
		const array2Sorted = array2.slice().sort();
		array1.length === array2.length && array1.slice().sort().every(function(value, index) {
			return value ===array2Sorted[index]
		})
	}

	compareLesTableaux(criterias, recipe) {
		console.log(recipe);
		console.log(criterias);
	}
}


