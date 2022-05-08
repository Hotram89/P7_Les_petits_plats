export default 
class CardBuilder {
	//fonction pour rafraichir le dom
	refresh(searchResult) {
		//On ecrase l'ancien resultat
		document.querySelector('.recipes-container').innerHTML = '';

		searchResult.recipes.forEach((el) => {
			this.buildCard(el);
			this.buildIngredientsData(el);
		});
	}
	/**
     * 
     * buildCard ajoute le code html d'une card 
     * pour chaque recette trouvée
     */
	buildCard(recette) {
		const gallery = document.querySelector('.recipes-container');
		const htmlArticle = `
        <figure class='recipe-card'>
        <img src='./assets/photos/image_${recette.id}.jpg' class='img-placeholder' alt=''>
        <figcaption class='card-description'>
            <div class='card-header'>
                <h2>${recette.name}</h2> 
                <div class='time'><img src='./assets/svg/clock-regular.svg'> ${recette.time} min</div>
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

	/**
     * 
     * @buildIngredientsData crée la partie de la card 
     * où on definit le type d'ingredients, son unité et sa quantité
     * 
     * @returns le html avec l'ingredient et ses informations 
     */
	buildIngredientsData(recette) {
		let list =  [];
		recette.ingredientsData.forEach((ingredient) => {
			if ((ingredient.quantity != undefined) && (ingredient.unit != undefined)){
				let item = `<li><strong>${ingredient.ingredient}:</strong> ${ingredient.quantity} ${ingredient.unit}</li>`;
				list.push(item);
			}

			else if (ingredient.quantity != undefined) {
				let item = `<li><strong>${ingredient.ingredient}:</strong> ${ingredient.quantity}</li>`;
				list.push(item);

			} else {
				let item = `<li><strong>${ingredient.ingredient}:</strong></li>`;
				list.push(item);
			}   
		});
		list = list.join('');
		return list;
	}
}
