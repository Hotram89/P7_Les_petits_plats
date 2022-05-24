/**
 *
 * class qui retourne un objet
 * dans lequel on retrouve un tableau avec:
 * les ustencils taggés
 * les ingredients taggés
 * les appareils taggés
 * les caractères tapés au clavier
 *
 */
export default class SearchParam {
	constructor() {
		this.ustensiles = this.getSelectedTagsList('.tag-ustensil');
		this.appareils = this.getSelectedTagsList('.tag-appliance');
		this.ingredients = this.getSelectedTagsList('.tag-ingredient');
		this.input =  document.querySelector('.search-bar').value;
		this.inputIngredient = this.getTagsInput('ingredient-searcher');
		this.inputAppareil = this.getTagsInput('appareil-searcher');
		this.inputUstensil = this.getTagsInput('ustensil-searcher');
	}

	
	//recupere le tableau des elements quand un tag est créé
	getSelectedTagsList(selector) {
		let list = new Set();
		document.querySelectorAll(selector).forEach((tag) => {
			let valueTag = tag.dataset.value;
			valueTag = valueTag.toLowerCase();
			list.add(valueTag);
		});

		return list;
	}
    
	getTagsInput(id) {
		// recupere ce qui est tapé dans l'input
		let valeur = document.getElementById(id).value
		return valeur
	}

	getTagsList() {
		this.ingTags = new Set();
		let dom = document.querySelectorAll('.list-item');
		dom.forEach((item) => {
			let mot = item.innerHTML;
			this.ingTags.add(mot); 
		});
		return this.ingTags;

	}
}
