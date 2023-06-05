import Api from '../api/Api.js';

const tableMedias = [];
// const lightboxcontent = document.querySelector ('#lightbox__content');
let lightboxmodal = document.querySelector ('.lightbox__modal');
let indexNum = 0;
let totalLikes = 0;
let numIndex = 0;
let testPicture = '';
let photographerName = '';
const totalHtml = document.querySelector ('.total-likes');

// Gestion du focus
const focusableSelector = 'button, a'
const divlightbox = document.querySelector(".lightbox__modal");

function focusInModal(e) {
  e.preventDefault();
  console.log(divlightbox);
  console.log("1-test de modalLightbox");
  const focusablesLightbox = Array.from(divlightbox.querySelectorAll(focusableSelector));
  console.log(focusablesLightbox);
  let index = focusablesLightbox.findIndex(f => f === divlightbox.querySelector(':focus'));
  console.log('1-index', index)
  console.log('2-index', index)
  console.log('focusables.length', focusablesLightbox.length)
  console.log('focusables[index]', focusablesLightbox[index])
  let focusLength  = focusablesLightbox.length;
  
  focusFactory (index, e, focusablesLightbox, focusLength)
}
// programmation de la touche echap pour fermer la lightbox
function contactListener(data) {
  window.addEventListener('keydown', function(e){
    if(e.key === "Escape" || e.key === "Esc") {
      closeMediaModal(e) 
    }
    if(e.key === "Tab" && lightboxmodal.style.display === "flex" ){
      focusInModal(e)
    }
  });
}
contactListener(lightboxmodal);

const id = parseInt (new URLSearchParams (window.location.search).get ('id'));

// création des données relative aux médias du photographe
async function getData () {
  const dataApi = new Api ('data/test-photographers.json');
  const data = await dataApi.get ();
        // içi on récupère grace à l'id le nom du photographe afin de projeter son profil dans la page de ce photographe
  data.photographers.forEach (dataPhotographer => {
    if (dataPhotographer.id === id) {
      photographerName = dataPhotographer.name;

      const profilModel = profilFactory (dataPhotographer);
      profilModel.getUserProfilDOM (dataPhotographer);
    }
  });
        // puis on crée une table comprenant toutes ses photos.(tableMedias)
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
// Afichage des données triées
async function displayData (data) {
  data.forEach (tableMedia => {
    const mediaTitleModel = mediaFactory (photographerName, tableMedia, id);
    mediaTitleModel.getUserMediaDOM (photographerName, tableMedia, totalLikes);
  });
  init ();
}
// Exécution de la fonction de trie avec récupération automatique du choix de la sélection .
const select = document.querySelector ('select');
select.addEventListener ('change', event => {
  const value = event.target.value;
  tableMedias.sort (compareValues (value));
  document.querySelector ('.photographer__media').innerHTML = '';
  displayData (tableMedias);
  
});

 // Récupère les datas des photographes
 const {data} = await getData ();
 // Afichage des datas du photographe
 displayData (tableMedias);

async function init () {
 
  // Pour chaque media(carte), identifions le coeur(heart) et son nombre de like(like-number).
  const medias = document.querySelectorAll ('.photographer__media__card');
  medias.forEach (media => {
  // const heart = media.querySelector ('.photographer__media__card__title__icone__heart');
  const hearted = media.querySelector ('.photographer__media__card__title__icone__media');
  const like = media.querySelector ('.photographer__media__card__title__icone__number');
  
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
      console.log(tableMedia);
      const image = tableMedia.image;
      const titre = tableMedia.title;
      const picture = `assets/images/samplePhotos/${mediaName}/${image}`;
      testPicture = `http://127.0.0.1:5501/Front-End-Fisheye/assets/images/samplePhotos/${mediaName}/${image}`;
      const url = [`${image}`];
      const getFileExtension = url =>
        `.${url.split ('?')[0].split ('.').pop ()}`;
      const type = getFileExtension (url[0]);

      let divIm = document.createElement ('div');
      // divIm.setAttribute ('href', '#lightbox__nav');
      divIm.classList.add ('lightbox__content');
      divIm.classList.add ('js-modal');
      lightboxmodal.appendChild (divIm);

      let divNav = document.createElement ('aside');
      // divNav.classList.add ('lightbox__nav');
      divNav.classList.add ('modal-light');
      divNav.setAttribute ('id', 'lightbox__nav');
      divNav.setAttribute ('aria-hidden', 'true');
      divNav.setAttribute ('aria-labelledBy', 'texteh3');
      divNav.setAttribute ('role', 'dialog');
      lightboxmodal.appendChild (divNav);

      let divWrapper = document.createElement ('div');
      divWrapper.classList.add ('modal-wrapper');
      divNav.appendChild (divWrapper);
      
      let divH3 = document.createElement ('h3');
      divH3.setAttribute ('id', 'texteh3');
      divWrapper.appendChild (divH3);
      divH3.innerHTML = "";

      
      let divx = document.createElement ('div');
      divx.classList.add ('lightbox__close');
      // divx.setAttribute ('tabindex', '0');
      // divx.setAttribute ('href', '#');
      // // divx.setAttribute ('id', 'lightbox__close');
      // divx.setAttribute ('onclick', 'closeMediaModal()');
      divWrapper.appendChild (divx);
      
      let divNavigate = document.createElement ('div');
      divNavigate.classList.add ('lightbox__navigate');
      divWrapper.appendChild (divNavigate);
      
      let divname = document.createElement ('div');
      divname.classList.add ('lightbox__name');
      divWrapper.appendChild (divname);
      divname.innerHTML = titre;

      let divClose = document.createElement ('button');
      // numberKey = 0 ;
      divClose.setAttribute ('class', 'closeDiaspo');
      divClose.setAttribute ('alt', 'image-close');
      divClose.setAttribute ('role', 'button');
      divClose.setAttribute ('role', 'button');
      divClose.setAttribute ('onclick', 'closeMediaModal()');
      divx.appendChild (divClose);
      divClose.innerHTML = 'X'
      
      let divLeft = document.createElement ('a');
      divLeft.classList.add ('lightbox__nav__fleche-gauche');
      divLeft.setAttribute ('href', '#');
      divLeft.setAttribute ('tabindex', '0');
      divNavigate.appendChild (divLeft);
      divLeft.innerHTML = '\u3008 ';

      if (isImage (type)) {
        let divImg = document.createElement ('img');
        divImg.classList.add ('lightbox__content__image');
        divImg.setAttribute ('src', picture);
        divImg.setAttribute ('alt', image);
        divNavigate.appendChild (divImg);
      }
      if (isVideo (type)) {
        let divImg = document.createElement ('video');
        divImg.classList.add ('lightbox__content__image');
        divImg.setAttribute ('src', picture);
        divImg.setAttribute ('alt', image);
        divImg.setAttribute ('autoplay', '');
        divImg.setAttribute ('loop', '');
        divNavigate.appendChild (divImg);
      }

      let divRigth = document.createElement ('a');
      divRigth.classList.add ('lightbox__nav__fleche-droite');
      divRigth.setAttribute ('href', '#');
      divRigth.setAttribute ('tabindex', '0');
      divNavigate.appendChild (divRigth);
      divRigth.innerHTML = '\u3009';

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
   
     
    // const mediaCard = media.querySelector ('.photographer__media__card');  
    const img = media.querySelector ('.photographer__media__card__img');
    const video = media.querySelector ('.photographer__media__card__img');
    const openModal = media.querySelector ('.js-modal');
    
    openModal.addEventListener('click',function() { 
        document.querySelector ('.lightbox__modal').innerHTML = '';
        indexNum = getIndex (0);
        displayIndex (indexNum);
        displayMediaModal ();
        // getKeyOfLightbox();
      });

    img.addEventListener ('click', function(setImg) {
      document.querySelector ('.lightbox__modal').innerHTML = '';
      indexNum = getIndex (0);
      displayIndex (indexNum);
      displayMediaModal ();
      // getKeyOfLightbox();
    });
    video.addEventListener ('click', function(setVideo) {
      document.querySelector ('.lightbox__modal').innerHTML = '';
      indexNum = getIndex (0);
      displayIndex (indexNum);
      displayMediaModal ();
      // getKeyOfLightbox();
    });

    img.addEventListener ('click', () => {
      document.querySelector ('.lightbox__modal').innerHTML = '';
      indexNum = getIndex (0);
      displayIndex (indexNum);
      displayMediaModal ();
      // getKeyOfLightbox()
    });
    video.addEventListener ('click', () => {
      document.querySelector ('.lightbox__modal').innerHTML = '';
      indexNum = getIndex (0);
      displayIndex (indexNum);
      displayMediaModal ();
      // getKeyOfLightbox()
    });
    window.addEventListener('keydom', function(e){
      console.log(e.key);
    })
  function selectleft () {
      if (indexNum === 0) {
        indexNum = tableMedias.length - 1;
      } else {
        indexNum = indexNum - 1;
      }
      console.log (indexNum);
      document.querySelector ('.lightbox__modal').innerHTML = '';
      displayIndex (indexNum);
      // getKeyOfLightbox()
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
      // getKeyOfLightbox()
    }
    let isLiked = false;

    hearted.addEventListener ('click', () => {
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
  
  const focusInModal = function(e) {
    e.preventDefault()
    const divlightbox = document.querySelector(".lightbox__modal");
    focusables = Array.from(divlightbox.querySelectorAll(focusableSelector));
  
  console.log(focusables)
  }
});


}

export {tableMedias};
