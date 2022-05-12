export default class NoResult {
	builder() {
		//dom element
		let container = document.querySelector(".nothing-container");
        container.innerHTML =''
		container.innerHTML =
      'Aucune recette ne correspond à votre critère... vous pouvez chercher "<b>tarte aux pommes</b>", "<b>poisson</b>", etc.';
	}
}
