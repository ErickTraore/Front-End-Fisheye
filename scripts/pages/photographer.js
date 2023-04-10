import Api from '../api/Api.js';
const tableMedias = [];
let photographerName = '';

// Récupération dynamique de l'id de la page 
const id = parseInt (new URLSearchParams (window.location.search).get ('id'));

// création des données relative aux médias du photographe
async function getData () {
  const dataApi = new Api ('data/test-photographers.json');
  const data = await dataApi.get ();
  
  data.photographers.forEach (dataPhotographer => {
    
    if (dataPhotographer.id === id) {
      photographerName = dataPhotographer.name;
      const profilModel = profilFactory(dataPhotographer);
      profilModel.getUserProfilDOM(dataPhotographer);
    }
    
  });


  data.medias.forEach (dataMedia => {
    if (dataMedia.photographerId === id) {
      tableMedias.push (dataMedia);
    }
  });
    
  return {
    photographerName, tableMedias
    // data,
  };
}


// Création de la fonction de trie
function compareValues (key, order = 'asc') {
  return function innerSort (a, b) {
    if (!a.hasOwnProperty (key) || !b.hasOwnProperty (key)) {
      // property doesn't exist on either object
      return 0;
    }
    const varA = typeof a[key] === 'string' ? a[key].toUpperCase () : a[key];
    const varB = typeof b[key] === 'string' ? b[key].toUpperCase () : b[key];
    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return order === 'desc' ? comparison * -1 : comparison;
  };
}

// Exécution de la fonction de trie avec récupération automatique du choix de la sélection .
const select = document.querySelector ('select');
select.addEventListener('change', (event) =>{
  const value = event.target.value;
  tableMedias.sort(compareValues(value));
  console.log(tableMedias);
  document.querySelector('.photographer__media').innerHTML =''
  displayData();

})

// Afichage des données triées
async function displayData() {
  const tableMediasLength = tableMedias.length;
  let y = 0;

  // console.log(tableMediasLength);
  tableMedias.forEach (tableMedia => {
    let numItem = y++;
    const mediaTitleModel = mediaFactory (photographerName, tableMedia, tableMediasLength);
    mediaTitleModel.getUserMediaDOM (photographerName, tableMedia, numItem );
  });

}
async function init () {
  // Récupère les datas des photographes
  const {data} = await getData ();
  displayData (data);
}
init ();
