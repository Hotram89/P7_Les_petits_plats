
export default 
class RecipeDto
{
    constructor(recipe) {

        this.id = recipe.id
        this.name = recipe.name
        console.log(recipe.name);
        this.servings = recipe.servings
        this.ingredients = new Set()
        // recipe.ingredients.forEach((ingredient) => {
        //     this.ingredients.add(ingredient)
        // })

    }
    findAll() {
        console.log('coucou');
    }
    collection() {
        const collection = new RecipeProvider
        .getAllrecipe();
    }
    
    getIngredient(ingredient) {
        return this.ingredients.include(ingredient)

    }

    hasIngredient() {
        
    }
}
