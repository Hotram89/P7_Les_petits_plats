
export default 
class RecipeDto
{
	constructor(recipe) {

		this.id = recipe.id;
		this.time = recipe.time;
		this.name = recipe.name;
		this.servings = recipe.servings;
		this.ingredients = new Set();
		this.ingredientsData = new Set();
		recipe.ingredients.forEach((ingredient) => {
			this.ingredients.add(ingredient.ingredient);
			this.ingredientsData.add(ingredient);
		});
		this.description = recipe.description;
		this.appliance = recipe.appliance;
		//this.ustensils = recipe.ustensils
		this.ustensils = new Set();
		recipe.ustensils.forEach((ustensil) => {
			this.ustensils.add(ustensil);
		});

	}

	//permet de savoir si il contient l'ingredient
	hasIngredient(ingredient) {
		return this.ingredients.include(ingredient);
	}
}
