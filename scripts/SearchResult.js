//classe qui retourne un resultat de recherche sous forme d'objet
export default
class SearchResult 
{
	constructor(recipes) {
		this.ingredient = new Set();
		this.ustensiles = new Set();
		this.appareils = new Set()
		this.recipes = recipes

        
		// recipes.forEach(recipeDto => {
        //     let listeCourses = recipeDto.ingredients
       
		// 	if (listeCourses.hasIngredients()) {
		// 		this.ingredient.add(ingredient.getIngredients());
		// 	}
		// });

		recipes.forEach(recipe => {
            this.appareils.add(recipe.appliance)

                recipe.blob.forEach((ustensil) => {  
                    this.ustensiles.add(ustensil)
                })

                recipe.ingredients.forEach(ingredient => {
                    this.ingredient.add(ingredient)
                })
           
		});
       
		// recipes.ingredient.forEach( recipe => {
		// 	if (recipe.hasIngredients()) {
		// 		this.ingredient.add(ingredient.getIngredients())
		// 	}
		// })
	}
  
}
