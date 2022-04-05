//classe qui retourne un resultat de recherche sous forme d'objet

class SearchResult 
{

    constructor(recipes) {
        this.ingredient = new Set();
        this.ustensiles = new Set();
        this.appareils = new Set()
        this.recipes = recipes

        recipes.appareils.forEach(recipe => {
            if (recipe.hasIngredients()) {
                this.ingredient.add(ingredient.getIngredients());
            }
        });

        recipes.ustensiles.forEach(recipe => {
            if (recipe.hasIngredients()) {
                this.ingredient.add(ingredient.getIngredients())
            }
        });

        recipes.ingredient.forEach( recipe => {
            if (recipe.hasIngredients()) {
                this.ingredient.add(ingredient.getIngredients())
            }
        })
    }
  
}

export { SearchResult }
