//classe qui retourne un resultat de la recherche, sous forme d'un objet
export default
class SearchParam
{
    constructor(recipes) {
        this.input = this.getInputValuesEscaped();
        this.ustensiles = new Set()
        this.appareil = new Set()
        this.recipes = recipes
    }

    getInputValuesEscaped() {
        //lait de coco
        // [ lait , de , coco]
        return 'coco'
    }
}
