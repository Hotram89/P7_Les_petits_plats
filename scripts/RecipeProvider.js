import { recipes } from '../data/recipes.js'

// class pour aller chercher les recettes
class RecipeProvider 
{
    constructor() {
        this.recettes = recipes
    }

    getAllRecipe() {
        console.log(this.recettes);
        
}

}
export { RecipeProvider}
