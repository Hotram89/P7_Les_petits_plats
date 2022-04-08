export default 
class PageBuilder {

	//fonction pour rafraichir le dom
	refresh(recipes) {
		recipes.forEach((el) => {
			this.buildCard(el);
		});
		this.buildIngredients(recipes);
	}

	//fonction pour construire les cards de recettes
	buildCard(recette) {
		const gallery = document.querySelector('.recipes-container');
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
		const article = document.createElement('div');
		article.innerHTML = htmlArticle;

		gallery.appendChild(article);
	}

	//fonction pour construire le contenu des 3 boutons
	buildIngredients(recette) {
		//DOM elements
		const ingredientResult = document.querySelector('.results');

		//crée un nouveau tableau d'ingredients à partir de toutes les recettes dispo dans recipes
		const liste = new Set();
		recette.forEach((el) => {
			el.ingredients.forEach((ing) => {
				liste.add(ing.ingredient);
			});
		});

		//crée un element <li> pour chaque ingredient du tableau
		liste.forEach((ing) => {
			const element = `${ing}`;
			const ele = document.createElement('li');
			ele.innerHTML = element;
			ingredientResult.appendChild(ele);
		});
	}
}
