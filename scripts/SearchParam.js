//classe qui retourne un resultat de la recherche, sous forme d'un objet
export default 
class SearchParam {
	constructor() {
		this.ustensiles = new Set();
		this.appareil = new Set();
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

	//fonction pour verifier si contient un ingredient
	//hasIngredient(resultat)
}
