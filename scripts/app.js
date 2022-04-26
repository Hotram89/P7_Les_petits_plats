import RecipeProvider from './RecipeProvider.js';
import SearchService from './SearchService.js';
import PageEventListener from './PageEventListener.js';

// collection set d'objets RecipeDto
const RecipesDto = new RecipeProvider().findAll();

//SearchService permet de lancer l'algo de recherche
const searchService = new SearchService(RecipesDto);

//On lance une recherche à vide pour afficher 100% des recettes
let recipes = searchService.search();

//On crée une instance PageEventListener
const listener = new PageEventListener(searchService);

//On déclenche les évenements (clique, tag, input)
listener.listen();


