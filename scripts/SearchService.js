import PageBuilder from "./PageBuilder.js";


export default 
class SearchService {

    constructor(collectionDto) {
        this.domBuilder = new PageBuilder()
        this.recipes = collectionDto /// les 50 recettes
        this.recipedFiltered = collectionDto ///les XX recettes filtrées

    }

    search() {
        //1- checker les filtres
        // 2 - elle filtre selon les filtres
        // 3 - reconstruit le html
        this.domBuilder.refresh(this.recipedFiltered)
        
    }

}


