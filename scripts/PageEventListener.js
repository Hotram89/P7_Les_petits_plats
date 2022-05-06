//class qui ecoute l'utilisateur sur la page
export default class PageEventListener {
	constructor(searchService) {
		//permet de lancer la recherche quand c'est nécessaire
		this.searchService = searchService;
	}
	//initialise les fonctions suivantes
	listen() {
		this.tagListen();
		this.inputListen();	
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
			if (target.classList.contains('list-item')){
				this.buildTag(target);
				// relance la recherche 
				this.searchService.search();
			}
			
			// fermer un tag
			if (target.classList.contains('remove-tag')){
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
		openLists.forEach(el => {
			el.classList.remove('activ');
		} );
		// cible le bouton
		const listBtn = document.getElementById(list.id);
		// ouvre la liste deroulante
		listBtn.closest('section').classList.toggle('activ');
	}

	closeList(list) {
		// ferme la liste déroulante
		list.closest('section').classList.toggle('activ');
	}

	toggleChevron(chevron) {
		// ouvre ou ferme au clic sur un chevron
		chevron.closest('section').classList.toggle('activ');
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

		//construit le tag
		tagContainer.innerHTML += 
        `<li class='tag ${tagType}' data-value='${element.innerHTML}'>${element.innerHTML} 
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
	inputListen() {
		document.querySelector('.search-bar').addEventListener('keyup', (e) => {
			if (e.target.value.length > 2) {
				this.searchService.search();
			}
		});
	}
}
