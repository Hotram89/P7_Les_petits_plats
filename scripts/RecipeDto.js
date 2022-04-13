
export default 
class RecipeDto
{
	constructor(recipe) {

		this.id = recipe.id
		this.time = recipe.time
		this.name = recipe.name
		this.servings = recipe.servings
		this.ingredients = new Set()
        this.ingredientsText = new Set()
		recipe.ingredients.forEach((ingredient) => {
			this.ingredients.add(ingredient.ingredient)
            this.ingredientsText.add(ingredient)
		})
		this.description = recipe.description
		this.appliance = recipe.appliance
		this.ustensils = recipe.ustensils
		this.blob = new Set()
		recipe.ustensils.forEach((ustensil) => {
			this.blob.add(ustensil)
		})

	}
   
	hasIngredient(ingredient) {
		return this.ingredients.include(ingredient)
	}
}
