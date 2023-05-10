import Api from '../api/Api.js';
const tableMedias = [];
// const lightboxcontent = document.querySelector ('#lightbox__content');
let lightboxmodal = document.querySelector ('.lightbox__modal');
let indexNum = 0;
let totalLikes = 0;
let numIndex = 0;
let myId = 0;
let testPicture = '';

let photographerName = '';
const totalHtml = document.querySelector ('.total-likes');
// fermeture de la modal-contact.
const modal = document.getElementById ('contact__modal');
modal.style.display = 'none';

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
  document.querySelector ('.photographer__name').innerHTML = photographerName;
  document.querySelector ('.contactName').innerHTML = photographerName;

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
  const heart = media.querySelector ('.photographer__media__card__title__icone__heart');
  const like = media.querySelector ('.photographer__media__card__title__icone__number');
  const img = media.querySelector ('.photographer__media__card__img');
  const video = media.querySelector ('.photographer__media__card__img');
  const mediaName = photographerName.replaceAll (' ', '-');

  function getIndex (data) {
      tableMedias.forEach ((tableMedia, index) => {
        let dataId = index;
        const image = tableMedia.image;
        const picture = `assets/images/samplePhotos/${mediaName}/${image}`;
        testPicture = `${window.location.origin}/assets/images/samplePhotos/${mediaName}/${image}`;
        const url = [`${image}`];
        const getFileExtension = url =>
          `.${url.split ('?')[0].split ('.').pop ()}`;
        const type = getFileExtension (url[0]);
        console.log ('picture =', picture);
        console.log ('img.src=', img.src);
        if (isImage (type) && img.src == testPicture) {
          numIndex = parseInt (dataId);
        } else if (isVideo (type) && video.src == testPicture) {
          numIndex = parseInt (dataId);
        }
      });
      return numIndex;
    }
  function displayIndex (id) {
      let tableMedia = tableMedias[id];
      const image = tableMedia.image;
      const picture = `assets/images/samplePhotos/${mediaName}/${image}`;
      testPicture = `http://127.0.0.1:5501/Front-End-Fisheye/assets/images/samplePhotos/${mediaName}/${image}`;
      const url = [`${image}`];
      const getFileExtension = url =>
        `.${url.split ('?')[0].split ('.').pop ()}`;
      const type = getFileExtension (url[0]);
      let divIm = document.createElement ('div');
      divIm.classList.add ('lightbox__content');
      lightboxmodal.appendChild (divIm);

      let divx = document.createElement ('div');
      divx.classList.add ('lightbox__close');
      divIm.appendChild (divx);

      let divClose = document.createElement ('img');
      divClose.setAttribute ('src', 'assets/icons/close.svg');
      divClose.setAttribute ('onclick', 'closeMediaModal()');
      divClose.setAttribute ('class', 'closeDiaspo');
      divx.appendChild (divClose);

      if (isImage (type)) {
        let divImg = document.createElement ('img');
        divImg.classList.add ('lightbox__content__image');
        divImg.setAttribute ('src', picture);
        divIm.appendChild (divImg);
      }
      if (isVideo (type)) {
        let divImg = document.createElement ('video');
        divImg.classList.add ('lightbox__content__image');
        divImg.setAttribute ('src', picture);
        divImg.setAttribute ('autoplay', '');
        divImg.setAttribute ('loop', '');
        divIm.appendChild (divImg);
      }
      let divNav = document.createElement ('div');
      divNav.classList.add ('lightbox__nav');
      divIm.appendChild (divNav);

      let divLeft = document.createElement ('div');
      divLeft.classList.add ('lightbox__nav__fleche-gauche');
      divNav.appendChild (divLeft);
      divLeft.innerHTML = '&larr;';

      let divRigth = document.createElement ('div');
      divRigth.classList.add ('lightbox__nav__fleche-droite');
      divNav.appendChild (divRigth);
      divRigth.innerHTML = '&rarr;';

      const arrowleft = document.querySelector (
        '.lightbox__nav__fleche-gauche'
      );
      const arrowright = document.querySelector (
        '.lightbox__nav__fleche-droite'
      );
      arrowleft.addEventListener ('click', () => {
        selectleft ();
      });
      arrowright.addEventListener ('click', () => {
        selectright ();
      });
    }
    img.addEventListener ('click', () => {
      document.querySelector ('.lightbox__modal').innerHTML = '';
      indexNum = getIndex (0);
      displayIndex (indexNum);
      displayMediaModal ();
    });
    video.addEventListener ('click', () => {
      document.querySelector ('.lightbox__modal').innerHTML = '';
      indexNum = getIndex (0);
      displayIndex (indexNum);
      displayMediaModal ();
    });

  function selectleft () {
      if (indexNum === 0) {
        indexNum = tableMedias.length - 1;
      } else {
        indexNum = indexNum - 1;
      }
      console.log (indexNum);
      document.querySelector ('.lightbox__modal').innerHTML = '';
      displayIndex (indexNum);
    }
  function selectright () {
      if (indexNum === tableMedias.length - 1) {
        indexNum = 0;
      } else {
        indexNum = indexNum + 1;
      }
      console.log (indexNum);
      document.querySelector ('.lightbox__modal').innerHTML = '';
      displayIndex (indexNum);
    }
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
