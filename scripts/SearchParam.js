//classe qui retourne un resultat de la recherche, sous forme d'un objet
export default
class SearchParam
{
    constructor() {
      
        this.ustensiles = new Set()
        this.appareil = new Set()
    }


    isValid(resultat) {
        
        if( resultat.length > 3) {
            console.log(resultat);
        }
        return resultat
    }
 
}
