//si l'utilisateur entre au moins 3 caracteres
let searchBar = document.querySelector('.search-bar')


searchBar.addEventListener('keyup', (e) => {
    
    let response = searchBar.value;
    
    if (response.length > 2 )
    console.log('commence à chercher ' + response);
})
