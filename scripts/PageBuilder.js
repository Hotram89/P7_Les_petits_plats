export default 
class PageBuilder {

	//fonction pour rafraichir le dom
	refresh(recipes) {
		recipes.recipes.forEach((el) => {
			this.buildCard(el);
		});
		this.buildIngredients(recipes);
        this.buildUstencils(recipes)
        this.buildAppareils(recipes)
	}

	//fonction pour construire les cards de recettes
	buildCard(recette) {

        const ingredients = recette.ingredientsText
		const gallery = document.querySelector('.recipes-container');
		const htmlArticle = `
        <figure class='recipe-card'>
        <img src='http://placekitten.com/g/200/300' class='img-placeholder' alt=''>
        <figcaption class='card-description'>
            <div class='card-header'>
                <h2>${recette.name}</h2> 
                <div class='time'>${recette.time} min</div>
            </div>
            <div class='card-details'>
                <div class='listIngredients'>${ingredients}</div>
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
		const ingredientResult = document.querySelector('.firstBtn');

		//crée un nouveau tableau d'ingredients à partir de toutes les recettes dispo dans recipes
		const liste = recette.ingredient
		
		//crée un element <li> pour chaque ingredient du tableau
		liste.forEach((ing) => {
			const element = `${ing}`;
			const ele = document.createElement('li');
			ele.innerHTML = element;
			ingredientResult.appendChild(ele);
		});
	}

    buildUstencils(recette) {
        //DOM Elements
        const ustencilResult = document.querySelector('.thirdBtn')

        //crée un nouveau tableau d'ustensiles à partir de toutes les recettes dispo dans recipes
		const liste = recette.ustensiles

        liste.forEach( ustencil => {
            const element = `${ustencil}`
            const ele = document.createElement('li')
            ele.innerHTML = element
            ustencilResult.appendChild(ele)
        })

    }

    buildAppareils(recette) {
        //DOM elements
        const appareilResult = document.querySelector('.secondBtn')
        console.log(appareilResult);

        //crée un nouveau tableau d'appareils a partir de recipes
        const liste = recette.appareils
        
        liste.forEach( appareil => {
            const element = `${appareil}`
            const ele = document.createElement('li')
            ele.innerHTML = element
            appareilResult.appendChild(ele)
        })
    }
}
