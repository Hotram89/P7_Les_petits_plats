//classe qui retourne un resultat de la recherche, sous forme d'un objet
export default 
class SearchParam {
	constructor() {
		this.ustensiles = new Set();
		this.appareil = new Set();
		this.appareil = document.getElementsByClassName('tag-appliance');
		this.ustensiles = document.querySelectorAll('.tag-ustensil');
		this.ingredients = new Set();

		//recupere le tableau des elements quand un tag est créé
		document.querySelectorAll('.tag-ingredient').forEach(tag =>
			this.ingredients.add(tag));
    
	}

	refresh(result) {
		this.isValid(result);
	}

	isValid(resultat) {
		if (resultat.length > 3) {
			console.log(resultat);
			return resultat;
		}
		//    return resultat
	}

}
