//class qui ecoute l'utilisateur sur la page
export default class PageEventListener {
	constructor(searchService) {
		//permet de lancer la recherche quand c'est nécessaire
		this.searchService = searchService;
	}
	//initialise les fonctions suivantes
	listen() {
		this.tagListen();
		this.inputListen('#ingredient-searcher');
		this.inputListen('.search-bar');
		this.inputListen('#appareil-searcher');
		this.inputListen('#ustensil-searcher');
    
	}
	/**
   *
   * tagListen()  est le listener qui pilote les actions
   * en fonction du clic
   *
   */
	tagListen() {
		document.querySelector('body').addEventListener('click', (e) => {
			const target = e.target;
			// si on clique sur un des 3 boutons
			if (target.classList.contains('buttonList')) {
				// ouvre la liste concernée
				this.openList(target);
			}
			//si on clique sur un span Ingredient / Ustensiles / Appareils
			if(target.outerHTML.includes('span')) {
				// recupère toutes les listes
				let openLists = document.querySelectorAll('.toggleList');
				//ferme toutes les listes ouvertes avant d'ouvrir la bonne
				openLists.forEach((el) => {
					el.classList.remove('activ');
				});

				target.closest('div').classList.toggle('activ');
			}
			// si on clique sur une liste déjà déroulée
			if (target.classList.contains('results')) {
				//ferme cette liste
				this.closeList(target);
			}
			// si on clique sur un chevron
			if (target.classList.contains('closeList')) {
				// ouvre ou ferme la liste
				this.toggleChevron(target);
			}
			// si on clique sur un element d'une liste
			if (target.classList.contains('list-item')) {
				this.buildTag(target);
				this.removeTag(target);
				// relance la recherche
				this.searchService.search();
			}
			// fermer un tag
			if (target.classList.contains('remove-tag')) {
				this.removeTag(target);
				// relance la recherche
				this.searchService.search();
			}
		});
	}

	openList(list) {
		// recupère toutes les listes
		let openLists = document.querySelectorAll('.toggleList');
		//ferme toutes les listes ouvertes avant d'ouvrir la bonne
		openLists.forEach((el) => {
			el.classList.remove('activ');
		});
		// cible le bouton
		const listBtn = document.getElementById(list.id);
		// ouvre la liste deroulante
		listBtn.closest('div').classList.toggle('activ');
	}

	closeList(list) {
		// ferme la liste déroulante
		list.closest('div').classList.toggle('activ');
	}

	toggleChevron(chevron) {
		//ferme toutes les listes ouvertes avant d'ouvrir la bonne
		// ouvre ou ferme au clic sur un chevron
		chevron.closest('.toggleList').classList.toggle('activ');
	}

	removeTag(element) {
		// retire le tag selectionné en cliquant sur la croix
		if (element.classList.contains('remove-tag')) {
			element.closest('.tag').remove();
		}
	}

	buildTag(element) {
		//dom element
		const tagContainer = document.getElementById('tag-container');
		const tagType = element.dataset.type;
		// ajoute une majuscule a la premiere lettre
		let valeurHtml =
      element.innerHTML.charAt(0).toUpperCase() + element.innerHTML.slice(1);

		//construit le tag
		tagContainer.innerHTML += `<li class='tag ${tagType}' data-value='${element.innerHTML}'>${valeurHtml} 
            <div class='cross'>
                <img src='./assets/svg/close.svg' class='remove-tag' alt='close button'>
            </div>
        </li>`;

		element.remove();
	}   
	

	/**
   * fonction qui écoute ce que l'user
   * écrit dans la barre de recherche
   *
   */
	inputListen(selector) {
		document.querySelector(selector).addEventListener('keyup', () => {
			this.searchService.search();
			
		});
	}
}
