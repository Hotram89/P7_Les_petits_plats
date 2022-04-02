import { recipes } from '../data/recipes.js'

// class pour aller chercher les recettes
class RecipeProvider 
{
    constructor() {
        this.name = []
        recipes.forEach((recette) => {
            this.name.push(recette.name) 
            return this.name
        })

        this.id = []
        recipes.forEach((recette) => {
            this.id.push(recette.id)
            return this.id
        })

        this.servings = []
        recipes.forEach((recette) => {
            this.servings.push(recette.servings)
            return this.servings
        })

        this.ingredients = []
        recipes.forEach((recette) => {
            this.ingredients.push(recette.ingredients)
            return this.ingredients
        })

        this.time = []
        recipes.forEach((recette) => {
            this.time.push(recette.time)
            return this.time
        })

        this.description = []
        recipes.forEach((recette) => {
            this.description.push(recette.description)
            return this.description
        })

        this.appliance = []
        recipes.forEach((recette) => {
            this.appliance.push(recette.appliance)
            return this.appliance
        })

        this.ustensils = []
        recipes.forEach((recette) => {
            this.ustensils.push(recette.ustensils)
            return this.ustensils
        })
    
    }

    // retourne un array avec toutes les recettes
    getAllRecipe() {
        return this  
}
    // retourne un array avec tous les noms de recette


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
