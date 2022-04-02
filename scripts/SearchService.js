import PageBuilder from "./PageBuilder.js";


export default 
class SearchService {

    constructor(collection) {
        this.domBuilder = new PageBuilder()
        this.recipes = collection
        this.recipedFiltered = collection

    }

    search() {
        //1- checker les filtres
        // 2 - elle filtre selon les filtres
        // 3 - reconstruit le html
        this.domBuilder.refresh(this.recipedFiltered)
    }

}


