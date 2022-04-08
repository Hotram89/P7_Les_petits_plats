//class qui ecoute l'utilisateur sur la page

export default class PageEventListener {
  clickListen() {
    //DOM element
    const body = document.querySelector("body");
    const ingredients = document.getElementById("ingredients");
    const wrapper = document.querySelector(".wrapper");

    body.addEventListener("click", (e) => {
      // verifie si on a cliquer sur Ingredients
      if (e.target === ingredients || e.target.parentNode === ingredients) {
        wrapper.classList.add("activ");
        ingredients.classList.remove("activ");
      }

      // verifie si on a cliquer sur le chevron pour fermer Ingredients
      const closeIngredients = document.querySelector(".wrapper img");
      if (e.target === closeIngredients) {
        wrapper.classList.remove("activ");
        ingredients.classList.add("activ");
      }
    });
  }
}
