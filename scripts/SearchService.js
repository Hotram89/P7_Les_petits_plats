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
				console.log(this.recipesFiltered);

			}
		})


		console.log(this.searchParams);
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
		console.log('ça passe');
	}

	isValidRecipe(recipe, searchParams) {
		console.log(recipe);
		console.log(searchParams);
		let isValid = this.isValidRecipeForCriterias(searchParams.ingredients, recipe.ingredients)
		console.log(isValid);
		return isValid;
	}

	isValidRecipeForCriterias(criteria, recipe) {
		if (criteria.length > 0) {
			return this.contientTousLesFiltres(recipe, criteria)
		}
	}

	contientTousLesFiltres(criterias, recipe) {
		const array2Sorted = array2.slice().sort()
	}
}


