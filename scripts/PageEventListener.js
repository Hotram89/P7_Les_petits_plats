import SearchParams from './SearchParam.js';

//class qui ecoute l'utilisateur sur la page

export default class PageEventListener {
	constructor(searchService) {
		this.searchService;
	}
	clickListen() {
		//DOM element
		const body = document.querySelector('body');

		body.addEventListener('click', (e) => {
			//verifie si il est valide
			this.openTagList(e.target);
			//deplier la liste
			this.unwrapList(e.target);
			//ajouter un tag
			this.buildTag(e.target);
			//fermer un tag
			this.removeTag(e.target);
		});
	}

	openTagList(element) {
		//DOM elements
		const ingredients = document.getElementById('ingredients');
		const ingredientWrapper = document.querySelector('#ingredients+.wrapper');
		const appareils = document.getElementById('appareils');
		const appareilWrapper = document.querySelector('#appareils+.wrapper');
		const ustensil = document.getElementById('ustensils');
		const ustensilWrapper = document.querySelector('#ustensils+.wrapper');

		// verifie si on a cliquer sur Ingredients
		if (element === ingredients || element.parentNode === ingredients) {
			ingredientWrapper.classList.toggle('activ');
			ingredients.classList.remove('activ');
		}

		//verifie si on a cliqué sur Appareils
		if (element === appareils || element.parentNode === appareils) {
			appareilWrapper.classList.add('activ');
			appareils.classList.remove('activ');
		}

		//verifie si on a cliqué sur Ustensils
		if (element === ustensil || element.parentNode === ustensil) {
			ustensilWrapper.classList.toggle('activ');
			ustensil.classList.toggle('activ');
		}
	}

	unwrapList(element) {
		// verifie si on a cliquer sur le chevron pour fermer Ingredients
		const closeIngredients = document.querySelector(
			'#ingredients+.wrapper img'
		);
		const ingredients = document.getElementById('ingredients');
		const ingredientWrapper = document.querySelector('#ingredients+.wrapper');
		const appareils = document.getElementById('appareils');
		const appareilWrapper = document.querySelector('#appareils+.wrapper');
		const ustensil = document.getElementById('ustensils');
		const ustensilWrapper = document.querySelector('#ustensils+.wrapper');

		if (element === closeIngredients) {
			ingredientWrapper.classList.toggle('activ');
			ingredients.classList.toggle('activ');
		}

		if (element === document.querySelector('#appareils+.wrapper img')) {
			appareilWrapper.classList.toggle('activ');
			appareils.classList.toggle('activ');
		}

		if (element === document.querySelector('#ustensils+.wrapper img')) {
			ustensilWrapper.classList.toggle('activ');
			ustensil.classList.toggle('activ');
		}
	}

	removeTag(element) {
		if (element.classList.contains('remove-tag')) {
			element.closest('.tag').remove();
		}
	}

	buildTag(element) {
		//dom element
		const tagContainer = document.getElementById('tag-container');
		const ingredientsList = document.querySelector('.firstBtn');
		const ustensilList = document.querySelector('.thirdBtn');
		const appareilsList = document.querySelector('.secondBtn');

		//construit le tag
		if (element.classList.contains('list-item')) {
			const ele = document.createElement('li');
			const cross = document.createElement('div');
			tagContainer.appendChild(ele);

			// colore les tag
			if (
				element.classList.contains('list-item') &&
        element.parentNode === ustensilList
			) {
				ele.classList.add('redTag');
			}
			if (
				element.classList.contains('list-item') &&
        element.parentNode === appareilsList
			) {
				ele.classList.add('greenTag');
			}

			if (
				element.classList.contains('list-item') &&
        element.parentNode === ingredientsList
			) {
				ele.classList.add('blueTag');
			}

			ele.innerHTML = element.innerHTML;
			ele.classList.add('tag');

			cross.innerHTML = '<img src=\'./assets/svg/close.svg\' class=\'remove-tag\' alt=\'close button\'>';
			cross.classList.add('cross');
			ele.appendChild(cross);
			element.remove();
		}
	}

	inputListen() {
		let userWord = document.querySelector('.search-bar');

		userWord.addEventListener('keyup', (e) => {
			new SearchParams().refresh(userWord.value);
		});
		return userWord.value;
	}

	SelectedTagList() {

		let selectedTags = document.querySelectorAll('.tag')
		console.log(selectedTags);

	}
}
