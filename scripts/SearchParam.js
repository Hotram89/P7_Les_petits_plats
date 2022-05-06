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
		this.input = this.getSearchBarValue();
	}
	//recupere le tableau des elements quand un tag est créé
	getSelectedTagsList(selector) {
		let list = new Set();
		this.getSearchBarValue();
		document.querySelectorAll(selector).forEach((tag) => {
			let valueTag = tag.dataset.value;
			valueTag = valueTag.toLowerCase();
			list.add(valueTag);
		});

		return list;
	}

	getSearchBarValue() {
		// recupere ce qui est tapé dans l'input
		let valeur = document.querySelector('.search-bar').value;
		// mets tous en minuscules
		valeur = valeur.toLowerCase();
		// remplace les apostrophes par des espaces
		valeur = valeur.replace('\'', ' ');
		// divise les mots et les ajoute en valeurs dans un Set
		const tableau = new Set(valeur.split(' '));
		// retire les articles indésirables des tableaux
		let indesirables = [
			'un',
			'une',
			'de',
			'le',
			'la',
			'les',
			'au',
			'à la',
			'l\'',
			'à',
			'a',
			'aux',
			'du',
			'de la',
			'des',
			'l',
			'd',
		];

		tableau.forEach((mot) => {
			if (indesirables.includes(mot)) {
				tableau.delete(mot);
			}
		});
		return tableau;
	}
}
