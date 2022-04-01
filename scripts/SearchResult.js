

class SearchResult 
{
    searchIngredient(tableau) {
        console.log(tableau);
    }

    displayIngredient(tableau) {
        tableau.forEach(element => {
            console.log(element);
           
        });
    }

    displayRecettes(tableau) {  
         tableau.forEach(element => {
            // console.log(element);
            
         });

    }
}

export { SearchResult }
