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
				this.toggleChevron(target);
			}
           
			if (target.classList.contains('list-item')){
                let listParent = target.closest('ul');
				this.buildTag(target,listParent );
			}
			
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
		list.closest('section').classList.toggle('activ')
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

	buildTag(element, parent) {
		//dom element
		const tagContainer = document.getElementById('tag-container');

		//construit le tag
		tagContainer.innerHTML += 
        `<li class='tag '>${element.innerHTML} 
            <div class='cross'>
                <img src='./assets/svg/close.svg' class='remove-tag' alt='close button'>
            </div>
        </li>`;

		element.remove();
		
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
