import CardBuilder from './CardBuilder.js';
import ListBuilder from './ListBuilder.js';
import NoResult from './NoResult.js';
import SearchParam from './SearchParam.js';
import SearchResult from './SearchResult.js';
import { escapeArray } from './utils.js';


/***
 *
 *  Cette class sert à faire une recherche initiale et la rafraichir en fonction des filtres
 */
export default class SearchService {
	/**
   *
   * Contient les données des recettes non filtrées
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
		this.noResultBuilder = new NoResult();
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
		for (let i = 0; i < this.recipes.size ; i++) {
			let recipe = [...this.recipes][i];
			if (this.isValidRecipe(recipe)) {
				this.recipesFiltered.add(recipe);
			}   
		}
		
		/**
     * On rafrachit le DOM
     */
		this.searchResult = new SearchResult(this.recipesFiltered);
		this.domBuilder.refresh(this.searchResult);
		this.listBuilder.refresh(this.searchResult, this.searchParams);
		this.noResultBuilder.refresh(this.searchResult);
	}
	//fonction qui verifie tous les parametres de recherche fusionnés
	isValidRecipe(recipe) {
		/**
     * ces validations concernent les tags selectionnés
     */
		return (this.compareLesTableaux(this.searchParams.ustensiles, recipe.ustensils, recipe.id) &&
      this.compareLesTableaux(this.searchParams.ingredients, recipe.ingredients, recipe.id) &&
      this.compareLesTableaux(this.searchParams.appareils, recipe.appliance, recipe.id) &&
      /**
       * les validations suivantes concernent la barre de recherche
       */
      (this.compareRechercheEcrite(this.escapeResult(recipe.description)) ||
        this.compareRechercheEcrite(this.escapeResult(recipe.name)) ||
        this.compareRechercheEcrite(recipe.ingredients))
		);
	}

	//compare les tableaux des criteres de tag avec le tableau correcpond de la recette
	compareLesTableaux(criterias, recipeData) {
		if (criterias.size == 0) {
            
			return true;
		}
		recipeData = escapeArray(recipeData);

		let isValid = [...criterias].every((criteria) => {
			return recipeData.has(criteria);
		});
		return isValid;
		// si un ingredient du tableau criterias existe dans recipe
		// alors renvoie true
	}

	// compare la search principale avec le titre, la description ou les ingredients
	compareRechercheEcrite(recipeParam) {
		let input = this.searchParams.input;
		let params = recipeParam;
		//let params = this.escapeResult(recipeParam);
		if (input.length < 3) {
			return true;
		}

		let isValid = 0;
		let anotherValid = false;
		params.forEach((param) => {
			isValid = param.includes(input);
			if (isValid == true) {
				anotherValid = true;
				return anotherValid;
			}
		});
		return anotherValid;
	}

	escapeResult(string) {
		// mets tous en minuscules
		string = string.toLowerCase();
		// remplace les apostrophes par des espaces
		string = string.replace('\'', ' ');
		string = string.replace('.', '');
		//retirer les espaces blancs
		string = string.trim();
		// divise les mots et les ajoute en valeurs dans un Set
		const tableau = new Set(string.split(' '));

		// retire les articles indésirables des tableaux
		let indesirables = [
			'un',
			'une',
			'de',
			'le',
			'la',
			'les',
			'au',
			'à la',
			'l\'',
			'à',
			'a',
			'aux',
			'du',
			'de la',
			'des',
			'l',
			'd',
			'et',
			'en',
			'mais',
			'ou',
			'par',
			'dans',
		];

		tableau.forEach((mot) => {
			if (indesirables.includes(mot)) {
				tableau.delete(mot);
			}
		});
		return tableau;
	}
}
