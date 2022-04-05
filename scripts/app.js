import { RecipeProvider } from './RecipeProvider.js'
import { SearchResult } from './SearchResult.js'
import SearchService from './SearchService.js'
import RecipeDto from './RecipeDto.js'



//Je vais chercher mes recettes contenues dans le fichier de data 

const collectionDto = new RecipeProvider().findAll()

//SearchService permet de lancer l'algo de recherche
const searchService = new SearchService(collectionDto);
let recipes = searchService.search()



