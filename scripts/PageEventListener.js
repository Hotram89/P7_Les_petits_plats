import SearchParams from './SearchParam.js';

//class qui ecoute l'utilisateur sur la page

export default class PageEventListener {
	constructor(searchService) {
		this.searchService;
	}

	listen() {
		this.tagListen()
		this.inputListen()
			
	}

	/*
    *
    Permet de savoir si on click sur un element ayant la classe .toggleList alors appeler openTagList()
    *
    */

	tagListen() {
		document.querySelector('body').addEventListener('click', (e) => {
			const target = e.target;
			// document.querySelector('.activ').classList.toggle('activ')
			if (target.classList.contains('toggleList')) {
				//verifie si il est valide
				this.openTagList(target);
			}

			if (target.classList.contains('results')) {
				//verifie si on est sur une liste deroulée
				this.closeTagList(target);
			}
			if (target.classList.contains('closeList')) {
				//verifie si on est sur le chevron
				this.toggleChevron(target)
			}
           

			//ajouter un tag
			this.buildTag(target);
			//fermer un tag
			this.removeTag(target);
              //permet de sortir des menus 
			 if (!target.classList.contains('toggleList')) {
                document.querySelector('.activ').classList.toggle('activ')
            }
		})};


	openTagList(list) {
		//cible le ul associé (element html enfant .wrapper du frere du bouton)
		const listwrapper = document.getElementById(list.id);
		//verifie si on a cliquer sur Ingredients
		listwrapper.parentNode.classList.toggle('activ');
	}

	closeTagList(list) {
		//cible le ul associé
		list.parentNode.parentNode.classList.toggle('activ')
	}

	toggleChevron(chevron) {
		//cible le parent
		console.log(chevron);
	}

	removeTag(element) {
		//retire le tag selectionné
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

	SelectedTagList(element) {

		let selectedTags = document.querySelectorAll('.tag')
		if (element.classList.contains('list-item')){
			console.log('un tag');
		}

		console.log(selectedTags);

	}
}
