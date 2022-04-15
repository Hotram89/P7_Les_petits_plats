//class qui ecoute l'utilisateur sur la page

export default class PageEventListener {
    constructor(searchService) {
        this.searchService
    }
  clickListen() {
    //DOM element
    const body = document.querySelector("body");
    const ingredients = document.getElementById("ingredients");
    const ingredientWrapper = document.querySelector("#ingredients+.wrapper");
    const appareils = document.getElementById('appareils')
    const appareilWrapper = document.querySelector('#appareils+.wrapper')
    const ustensil = document.getElementById('ustensils')
    const ustensilWrapper = document.querySelector('#ustensils+.wrapper')

    body.addEventListener("click", (e) => {
      // verifie si on a cliquer sur Ingredients
      if (e.target === ingredients || e.target.parentNode === ingredients) {
        ingredientWrapper.classList.toggle("activ");
        ingredients.classList.remove("activ");
      }

      //verifie si on a cliqué sur Appareils
      if (e.target === appareils || e.target.parentNode === appareils) {
          appareilWrapper.classList.add('activ')
          appareils.classList.remove('activ')
      }

      //verifie si on a cliqué sur Ustensils
      if (e.target === ustensil || e.target.parentNode === ustensil) {
        ustensilWrapper.classList.toggle('activ')
        ustensil.classList.toggle('activ')
    }

      // verifie si on a cliquer sur le chevron pour fermer Ingredients
      const closeIngredients = document.querySelector("#ingredients+.wrapper img");
      
      if (e.target === closeIngredients) {
        ingredientWrapper.classList.toggle("activ");
        ingredients.classList.toggle("activ");
      }

      if (e.target === document.querySelector('#appareils+.wrapper img')) {
          appareilWrapper.classList.toggle('activ')
          appareils.classList.toggle('activ')
      }

      if (e.target === document.querySelector('#ustensils+.wrapper img')) {
          ustensilWrapper.classList.toggle('activ')
          ustensil.classList.toggle('activ')
      }

      //ajouter un tag
      //dom element
      const tagContainer = document.getElementById('tag-container')
      const ingredientsList = document.querySelector('.firstBtn')
      const ustensilList = document.querySelector('.thirdBtn')
      const appareilsList = document.querySelector('.secondBtn')

      if (e.target.localName === "li") {
        const ele = document.createElement("li");
        const cross = document.createElement("div");

        tagContainer.appendChild(ele);

        if (         e.target.localName === "li" &&  e.target.parentNode === ustensilList ) {
          ele.classList.add("redTag");
        }
        if (
          e.target.localName === "li" &&
          e.target.parentNode === appareilsList
        ) {
          ele.classList.add("greenTag");
        }

        if (
          e.target.localName === "li" &&
          e.target.parentNode === ingredientsList
        ) {
          ele.classList.add("blueTag");
        }

        ele.innerHTML = e.target.innerHTML;
        ele.classList.add("tag");

        cross.innerHTML = `<img src='./assets/svg/close.svg' alt='close button'>`;
        cross.classList.add("cross");
        ele.appendChild(cross);
        e.target.remove();
      }
    
      //fermer un tag
      const closeBtn = document.querySelector('.cross img')
      console.log(e.target);
      if (e.target === closeBtn) {
          e.target.parentNode.parentNode.remove()
      }
      
    });
  }
}
