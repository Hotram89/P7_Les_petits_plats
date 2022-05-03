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
export default 
class SearchParam {
	constructor() {
		this.ustensiles = this.getSelectedTagsList('.tag-ustensil');
		this.appareils = this.getSelectedTagsList('.tag-appliance');
		this.ingredients = this.getSelectedTagsList('.tag-ingredient'); 
		this.input = new Set();
	}
	//recupere le tableau des elements quand un tag est créé
	getSelectedTagsList(selector) {
		let list = new Set();
		document.querySelectorAll(selector).forEach((tag) => {
			list.add(tag.dataset.value);
		});
		return list;
	}
}
