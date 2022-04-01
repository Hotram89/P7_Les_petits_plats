import { getAllrecipe } from "./RecipeProvider.js";

export default 
class RecipeDto
{
    collection() {
        const collection = new RecipeProvider
        .getAllrecipe();
    }
    
}
