import PageBuilder from "./PageBuilder.js";
import SearchResult from "./SearchResult.js";

/*
    Cette class sert à proposer des services avec la recherche, comme par exemple, constuire le dom

    */

export default 
class SearchService {

    constructor(collectionDto) {
        this.domBuilder = new PageBuilder()
        this.recipedFiltered = collectionDto 

    }

    search() {
        this.domBuilder.refresh(new SearchResult(this.recipedFiltered))
        
    }

}


