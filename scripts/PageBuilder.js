
export default
class PageBuilder {

      
    refresh(recipes) {
        recipes.forEach((el) => {
            this.buildCard(el)
        });
    }

    buildCard(recette) {
        
        const gallery = document.querySelector('.recipes-container')
        const htmlArticle =`
        <article class='recipe-card'>
        <div class='img-placeholder'></div>
        <div class='card-description'>
            <div class='card-header'>
                <h2>${recette.name}</h2> 
                <div class='time'>${recette.time} min</div>
            </div>
            <div class='card-details'>
                <div class='tuto'>${recette.description}</div>
            </div>
        </div>
        
        </article>`;
        const article = document.createElement('div')
        article.innerHTML = htmlArticle
        
        gallery.appendChild(article)

    }

    getTitle() {
       console.log('ça passe');
    }

}

