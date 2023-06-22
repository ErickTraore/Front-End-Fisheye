function mediaFactory (photographerName, data, id) {
  const image = data.image;
  const title = data.title;
  console.log (data);
  dataLikes = data.likes;
  const mediaName = photographerName.replaceAll (' ', '-');
  const picture_1 = `assets/images/samplePhotos/${mediaName}/${image}`;
  const picture_2 = `assets/images/samplePhotos/${mediaName}`;
  const picture_3 = `assets/icons/vector.png`;
  const modifImage = image.replaceAll ('.jpg', '');
  const picture_4 = `assets/images/samplePhotos/${mediaName}/${modifImage}`;

  console.log (photographerName);
  console.log (mediaName);
  console.log (picture_1);
  console.log (picture_2);
  console.log (picture_3);
  console.log (picture_4);
  console.log (modifImage);

  const url = [`${image}`];
  const getFileExtension = url => `.${url.split ('?')[0].split ('.').pop ()}`;
  const type = getFileExtension (url[0]);
  console.log (photographerName);
  console.log (mediaName);
  console.log (image);
  document.addEventListener('DOMContentLoaded', function() {
    console.log('HTML prêt !');
  });
  function getUserMediaDOM () {
    let counter = dataLikes;
    const photographersMedia = document.querySelector ('.photographer__media');

    var divPresent = document.createElement ('div');

    const a = picture_1;
    const b = picture_2;
    divPresent.classList.add ('photographer__media__card');

    // divPresent.setAttribute ('aria-pressed', "true"   );
    // divPresent.setAttribute ('aria-describedby', 'ouvrir le slider');

    photographersMedia.appendChild (divPresent);
    var divAncre = document.createElement ('a');
    divAncre.classList.add ('photographer__media__card__img__media');
    divAncre.setAttribute ('id', '#photographer__media__card__img');
    divAncre.setAttribute ('href', '#photographer__media__card__img');
    divAncre.classList.add ('js-modal');
    divPresent.appendChild (divAncre);

    console.log (type);
    if (type === `.jpg`) {
      var img = document.createElement ('img');
      img.setAttribute ('src', picture_4 + `/ultra.jpg`);
      img.setAttribute ('srcset', picture_4 + '/mobile.jpg 425w,' + picture_4 + '/tablette.jpg 768w,' + picture_4 + '/tabletteXl.jpg 1024w,' + picture_4 + '/desktop.jpg 1440w,' + picture_4 + '/ultra.jpg 2000w') 
      img.classList.add ('photographer__media__card__img');
      img.dataset.id = data.id;
      img.setAttribute ('alt', image);
      divAncre.appendChild (img);
    } else {
      var video = document.createElement ('video');
      video.dataset.id = data.id;
      video.setAttribute ('src', picture_1);
      video.classList.add ('photographer__media__card__img');
      video.setAttribute ('alt', 'video');
      video.setAttribute ('autoplay', '');
      video.setAttribute ('loop', '');
      divAncre.appendChild (video);
    }
    var divTitle = document.createElement ('div');
    divTitle.classList.add ('photographer__media__card__title');
    divPresent.appendChild (divTitle);

    var divTexte = document.createElement ('p');
    divTexte.classList.add ('photographer__media__card__title__texte');
    divTitle.appendChild (divTexte);
    divTexte.innerHTML = data.title;

    var divOther = document.createElement ('div');
    divOther.classList.add ('photographer__media__card__title__icone');
    divTitle.appendChild (divOther);

    var divNumber = document.createElement ('p');
    divNumber.classList.add ('photographer__media__card__title__icone__number');
    divOther.appendChild (divNumber);
    divNumber.innerHTML = counter;

    var divAncre = document.createElement ('button');
    divAncre.classList.add ('photographer__media__card__title__icone__media');
    divAncre.setAttribute ('aria-label', 'like-photo');
    divAncre.setAttribute ('role', 'button');
    divAncre.setAttribute ('tabindex', '0');
    divOther.appendChild (divAncre);

    var divLike = document.createElement ('img');
    divLike.setAttribute ('src', picture_3);
    divLike.setAttribute ('alt', 'icone-heart');
    divAncre.appendChild (divLike);
  }
  return {
    picture_1,
    picture_2,
    image,
    type,
    dataLikes,
    getUserMediaDOM,
  };
}


