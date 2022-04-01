import { RecipeProvider } from './RecipeProvider.js'
import { SearchResult } from './SearchResult.js'

let Collection = new RecipeProvider();
    Collection.getAllRecipe()
    Collection.getRecipeName()
    Collection.getRecipeIngredients()
    Collection.getAllIngredients()


let constructPage = new SearchResult()
constructPage.displayRecettes(Collection.getRecipeName())
constructPage.displayIngredient(Collection.getAllIngredients())





//si l'utilisateur entre au moins 3 caracteres
let searchBar = document.querySelector('.search-bar')


searchBar.addEventListener('keyup', (e) => {
    
    let response = searchBar.value;
    
    if (response.length > 2 )
    console.log('commence à chercher ' + response);
})


