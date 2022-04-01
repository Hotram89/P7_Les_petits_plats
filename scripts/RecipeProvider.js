import { recipes } from '../data/recipes.js'

// class pour aller chercher les recettes
class RecipeProvider 
{
    constructor() {
        this.recettes = recipes
    }
    // retourne un array avec toutes les recettes
    getAllRecipe() {
        console.log(this.recettes);
        return this.recettes
        
}
    // retourne un array avec tous les noms de recette

    getRecipeName(){
        
        let result = [];
        
        recipes.forEach((recette) => {
            result.push(recette.name)  
        })
        return result
    }

    // retourner un array de tableaux d'ingredients
    getRecipeIngredients() {
        let result = []
        recipes.forEach((recette) => {
            result.push(recette.ingredients)  
        })
        return result

    }

    
    getAllIngredients() {
        let result = []
        let listes = this.getRecipeIngredients()
        listes.forEach((liste, i) => {
           
            liste.forEach((el) => {
                result.push(el.ingredient)
                let longueur = result.length
            })
            return result
        })
        console.log(result);
         return result
    }

}
export { RecipeProvider}
