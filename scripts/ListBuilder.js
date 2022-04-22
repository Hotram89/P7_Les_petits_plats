export default 
class ListBuilder {

	//fonction pour rafraichir le dom
	refresh(recipes) {
		this.buildIngredients(recipes);
		this.buildUstencils(recipes)
		this.buildAppareils(recipes)
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
			ele.classList.add('list-item')
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
			ele.classList.add('list-item')
		});

	}

	buildAppareils(recette) {
		//DOM elements
		const appareilResult = document.querySelector('.secondBtn');

		//crée un nouveau tableau d'appareils a partir de recipes
		const liste = recette.appareils
        
		liste.forEach( appareil => {
			const element = `${appareil}`;
			const ele = document.createElement('li');
			ele.innerHTML = element;
			appareilResult.appendChild(ele);
			ele.classList.add('list-item');
		})
	}
}
