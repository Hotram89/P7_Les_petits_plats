import RecipeDto from "./RecipeDto.js";
export default class PageBuilder {
  refresh(recipes) {
    recipes.forEach((el) => {
      this.buildCard(el);
    });
    this.buildIngredients(recipes);
  }

  buildCard(recette) {
    const gallery = document.querySelector(".recipes-container");
    const htmlArticle = `
        <figure class='recipe-card'>
        <img src='' class='img-placeholder' alt=''>
        <figcaption class='card-description'>
            <div class='card-header'>
                <h2>${recette.name}</h2> 
                <div class='time'>${recette.time} min</div>
            </div>
            <div class='card-details'>
                <div class='tuto'>${recette.description}</div>
            </div>
        </figcaption>
        
        </figure>`;
    const article = document.createElement("div");
    article.innerHTML = htmlArticle;

    gallery.appendChild(article);
  }

  buildIngredients(recette) {
    //DOM elements
    const ingredientResult = document.querySelector(".results");
    const liste = new Set();
    recette.forEach((el) => {
      el.ingredients.forEach((ing) => {
        liste.add(ing.ingredient);
      });
    });
    //   ingredientResult.innerHTML = liste
    liste.forEach((ing) => {
      const element = `${ing}`;
      const ele = document.createElement("li");
      ele.innerHTML = element;
      ingredientResult.appendChild(ele);
    });
  }

  getTitle() {
    console.log("ça passe");
  }
  getIngredients() {}
}
