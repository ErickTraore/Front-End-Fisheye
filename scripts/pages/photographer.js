import Api from '../api/Api.js';
const tableMedias = [];
const lightbox = document.querySelector ('#lightbox');
let slides = document.querySelector (".slides");
let totalLikes = 0;
let numIndex = 0;
let testPicture = '';

let photographerName = '';
const totalHtml = document.querySelector ('.total-likes');

// Récupération dynamique de l'id de la page
const id = parseInt (new URLSearchParams (window.location.search).get ('id'));

// création des données relative aux médias du photographe
async function getData () {
  const dataApi = new Api ('data/test-photographers.json');
  const data = await dataApi.get ();

  data.photographers.forEach (dataPhotographer => {
    if (dataPhotographer.id === id) {
      photographerName = dataPhotographer.name;
      const profilModel = profilFactory (dataPhotographer);
      profilModel.getUserProfilDOM (dataPhotographer);
    }
  });

  data.medias.forEach (dataMedia => {
    if (dataMedia.photographerId === id) {
      tableMedias.push (dataMedia);
    }
  });
  data.medias.forEach (dataLikes => {
    if (dataLikes.photographerId === id) {
      let dataLikesLikes = dataLikes.likes;
      totalLikes += dataLikesLikes;
    }
  });
  console.log (totalLikes);
  totalHtml.innerHTML = totalLikes;
  return {
    photographerName,
    tableMedias,
    totalLikes,
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
select.addEventListener ('change', event => {
  const value = event.target.value;
  tableMedias.sort (compareValues (value));
  document.querySelector ('.photographer__media').innerHTML = '';
  displayData ();
});

// Afichage des données triées
async function displayData () {
  tableMedias.forEach (tableMedia => {
    // let numItem = y++;
    const mediaTitleModel = mediaFactory (photographerName, tableMedia, id);
    mediaTitleModel.getUserMediaDOM (photographerName, tableMedia, totalLikes);
  });
}

async function init () {
  // Récupère les datas des photographes
  const {data} = await getData ();
  // Afichage des datas du photographe
  displayData (data);
  // Pour chaque media(carte), identifions le coeur(heart) et son nombre de like(like-number).
  const medias = document.querySelectorAll ('.photographer__media__card');
  medias.forEach (media => {
    const heart = media.querySelector (
      '.photographer__media__card__title__icone__heart'
    );
    const like = media.querySelector (
      '.photographer__media__card__title__icone__number'
    );
    const img = media.querySelector ('.photographer__media__card__img');
    const mediaName = photographerName.replaceAll (' ', '-');
    
    function getIndex (data) {
        tableMedias.forEach((tableMedia, index) =>{  
        const image = tableMedia.image;
        const picture = `assets/images/samplePhotos/${mediaName}/${image}`;
        testPicture = `http://127.0.0.1:5502/Front-End-Fisheye/assets/images/samplePhotos/${mediaName}/${image}`;
        if (img.src == testPicture) {
          numIndex = parseInt(index) + data;
        }
      })
      return numIndex
    }
    function displayIndex (id) {
      let tableMedia = tableMedias[id]
      const image = tableMedia.image;
      const picture = `assets/images/samplePhotos/${mediaName}/${image}`;
      testPicture = `http://127.0.0.1:5502/Front-End-Fisheye/assets/images/samplePhotos/${mediaName}/${image}`;
      
      let divIm = document.createElement('div');
      divIm.classList.add ('slides__container');
      slides.appendChild (divIm);

      var divImg = document.createElement ('img');
      divImg.setAttribute ('src', testPicture);
      divImg.classList.add ('slides__container__image');
      divIm.appendChild (divImg);
    }
    img.addEventListener ('click', () => {
      let indexNum = getIndex (0);
      displayIndex (indexNum);
    });

    // créons une condition pour autoriser uniquement un seul like.
    let isLiked = false;

    heart.addEventListener ('click', () => {
      let numLike = parseInt (like.textContent);
      if (!isLiked) {
        numLike++;
        totalLikes++;
        isLiked = true;
      } else {
        numLike--;
        totalLikes--;
        isLiked = false;
      }
      like.innerHTML = numLike;
      totalHtml.innerHTML = totalLikes;
      console.log (numLike);
    });
  });
}
init ();
export {tableMedias};
