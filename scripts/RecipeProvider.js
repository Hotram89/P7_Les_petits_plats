import { recipes } from "../data/recipes.js";
import RecipeDto from "./RecipeDto.js";

// class pour aller chercher les recettes
export default class RecipeProvider {
  constructor() {
    this.data = new Set();
    recipes.forEach((recipe) => {
      this.data.add(new RecipeDto(recipe));
    });
  }

  // retourne un array avec toutes les recettes
  findAll() {
    return this.data;
  }
}
export { RecipeProvider };
