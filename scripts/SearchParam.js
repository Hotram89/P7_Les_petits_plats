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
		this.input = this.getSearchBarValue()
	}
	//recupere le tableau des elements quand un tag est créé
	getSelectedTagsList(selector) {
		let list = new Set();
		this.getSearchBarValue()
		document.querySelectorAll(selector).forEach((tag) => {
			list.add(tag.dataset.value);
		});
        
		return list;
	}

	getSearchBarValue() {
		// recupere ce qui est tapé dans l'input
		const valeur = document.querySelector('.search-bar').value;
		// remplace les apostrophes par des espaces
		const nouvelleValeur = valeur.replace('\'', ' ');
		// divise les mots et les ajoute en valeurs dans un Set
		const tableau = new Set(nouvelleValeur.split(' '));
		// retire les articles indésirables des tableaux
		let indesirables = ['un', 'une', 'de','le', 'la','les', 'au','à la' ,'l\'', 'à', 'aux', 'du', 'de la', 'des', 'l'];

		tableau.forEach((mot) => {
			indesirables.forEach((inde) => {
				if (mot === inde ){
					tableau.delete(mot);
				}
			});
		});
		return tableau;
	}
}
