import RecipeProvider from './RecipeProvider.js';
import SearchService from './SearchService.js';
import PageEventListener from './PageEventListener.js';

// collection set d'objets RecipeDto
const RecipesDto = new RecipeProvider().findAll();


//SearchService permet de lancer l'algo de recherche
const searchService = new SearchService(RecipesDto);

let recipes = searchService.search();
const listene = new PageEventListener().clickListen();

const keyboardResult = new PageEventListener().inputListen();

