/**
 * class qui construit un objet
 * cet objet structure et range
 * les differentes données du provider
 * 
 */
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
			this.ingredients.add(ingredient.ingredient.toLowerCase());
			this.ingredientsData.add(ingredient);
		});
		this.description = recipe.description;
		this.appliance = new Set();
		this.appliance.add(recipe.appliance.toLowerCase());
		this.ustensils = new Set();
		recipe.ustensils.forEach((ustensil) => {
			this.ustensils.add(ustensil);
		});
	}
}
