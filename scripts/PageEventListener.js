import SearchParams from './SearchParam.js';

//class qui ecoute l'utilisateur sur la page

export default class PageEventListener {
	constructor(searchService) {
		this.searchService = searchService;
    
	}

	listen() {
		this.tagListen();
		this.inputListen();	
	}

	/*
    *
    Permet de savoir si on click sur un element ayant la classe .toggleList alors appeler openTagList()
    *
    */

	tagListen() {
		document.querySelector('body').addEventListener('click', (e) => {
			const target = e.target;

			if (target.classList.contains('buttonList')) {
				//verifie si il est valide
				this.openList(target);
			}

			if (target.classList.contains('results')) {
				//verifie si on est sur une liste deroulée
				this.closeList(target);
			}
			if (target.classList.contains('closeList')) {
				//verifie si on est sur le chevron
				this.toggleChevron(target);
			}
           
			if (target.classList.contains('list-item')){
				this.buildTag(target);
			}
			
			//fermer un tag
			this.removeTag(target);
			//permet de sortir des menus 
			
		});
	}


	openList(list) {
		//recupere toutes les listes
		let openLists = document.querySelectorAll('.toggleList');
		//ferme toutes les listes ouvertes avant d'ouvrir la bonne
		openLists.forEach(el => {
			el.classList.remove('activ');
		} );
		//cible le ul associé (element html enfant .wrapper du frere du bouton)
		const listwrapper = document.getElementById(list.id);
		//verifie si on a cliquer sur Ingredients
		listwrapper.closest('section').classList.toggle('activ');
	}

	closeList(list) {
		//cible le ul associé
		list.closest('section').classList.toggle('activ');
	}

	toggleChevron(chevron) {
		//cible le parent avec closest
		chevron.closest('section').classList.toggle('activ');
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
		const tagType = element.dataset.type
        ;

		//construit le tag
		tagContainer.innerHTML += 
        `<li class='tag ${tagType}'>${element.innerHTML} 
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
}
