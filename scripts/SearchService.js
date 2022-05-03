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

		let searchParams = new SearchParam();
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
}


