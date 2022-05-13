import RecipeProvider from './RecipeProvider.js';
import SearchService from './SearchService.js';
import PageEventListener from './PageEventListener.js';


// collection set d'objets RecipeDto
const RecipesDto = new RecipeProvider().findAll();

/**
 * 
 * instancie la recherche 
 * avec toutes les recettes 
 * récupérées dans le Provider
 * et formatées dans le Dto
 * 
 */
const searchService = new SearchService(RecipesDto);
/**
 * 
 * Lance une recherche à vide pour afficher 
 * 100% des recettes au chargement de la page
 */
let recipes = searchService.search();

//On crée une instance PageEventListener
const listener = new PageEventListener(searchService);

//On déclenche les évenements (clique, tag, input)
listener.listen();

