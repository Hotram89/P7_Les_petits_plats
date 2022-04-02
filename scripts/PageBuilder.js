
export default
class PageBuilder {

      
    refresh(recipes) {
        
        let tableau = Array.of(recipes.name)
      
        tableau.forEach((el) => {
            el.forEach((titre) => {
                this.buildCard(titre)
            })
        });
    }

    buildCard(title) {
        
        const gallery = document.querySelector('.recipes-container')
        const htmlArticle =`
        <article class='recipe-card'>
        <img src='' alt=''>
        <div class='card-description'>
        <h2>${title}</h2>
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

