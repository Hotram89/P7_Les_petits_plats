import { recipes } from '../data/recipes.js'

// class pour aller chercher les recettes
export default
class RecipeProvider 
{
    // retourne un array avec toutes les recettes
    findAll() {
        console.log(recipes);
        return recipes 
}

   

}
export { RecipeProvider}
