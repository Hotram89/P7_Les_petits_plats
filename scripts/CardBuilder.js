export default 
class CardBuilder {

	//fonction pour rafraichir le dom
	refresh(recipes) {
		recipes.recipes.forEach((el) => {
			this.buildCard(el);
            this.buildIngredientsData(el)
		});
        
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
                <ul class='list-ingredients'>${this.buildIngredientsData(recette)}</ul>
                <div class='tuto'>${recette.description}</div>
            </div>
        </figcaption>
        
        </figure>`;
		const article = document.createElement('div');
		article.innerHTML = htmlArticle;

		gallery.appendChild(article);
	}

    buildIngredientsData(recette) {
       let list =  []
        recette.ingredientsData.forEach((ingredient) => {

             let item = `<li><strong>${ingredient.ingredient}:</strong> ${ingredient.quantity} ${ingredient.unit} `
             list.push(item)
        })

       return list
    }

	
}
