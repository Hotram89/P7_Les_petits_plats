import { RecipeProvider } from './RecipeProvider.js'
import { SearchResult } from './SearchResult.js'
import SearchService from './SearchService.js'



//Je vais chercher mes recettes contenues dans le fichier de data 
let Collection = new RecipeProvider().getAllRecipe();

//SearchService permet de lancer l'algo de recherche
const searchService = new SearchService(Collection);
let recipes = searchService.search()

//si l'utilisateur entre au moins 3 caracteres
let searchBar = document.querySelector('.search-bar')


searchBar.addEventListener('keyup', (e) => {
    
    let response = searchBar.value;
    
    if (response.length > 2 )
    console.log('commence à chercher ' + response);
})


