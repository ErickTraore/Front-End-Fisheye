function mediaFactory (photographerName, data, id ) {
  const image = data.image;
  const title = data.title;
  console.log (data);
  dataLikes = data.likes;
  const mediaName = photographerName.replaceAll (' ', '-');
  const picture_1 = `assets/images/samplePhotos/${mediaName}/${image}`;
  const picture_2 = `assets/images/samplePhotos/${mediaName}`;
  const picture_3 = `assets/icons/vector.png`;

  console.log (photographerName);
  console.log (mediaName);
  console.log (picture_1);
  console.log (picture_2);
  console.log (picture_3);

  const url = [`${image}`];
  const getFileExtension = url => `.${url.split ('?')[0].split ('.').pop ()}`;
  const type = getFileExtension (url[0]);
  console.log (photographerName);
  console.log (mediaName);
  console.log (image);
 
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
    var divAncre = document.createElement ('button');
    divAncre.classList.add ('photographer__media__card__img__media');
    divAncre.setAttribute ('href', '#');
    divPresent.appendChild (divAncre);


    console.log (type);
    if (type === `.jpg`) {
      var img = document.createElement ('img');
      img.setAttribute ('src', picture_1);
      img.classList.add ('photographer__media__card__img');
      // img.setAttribute ('role', "button");
      img.setAttribute ('alt', image);
      divAncre.appendChild (img);
    } else {
      var video = document.createElement ('video');
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
    divOther.appendChild (divAncre );

    var divLike = document.createElement ('img');
    divLike.setAttribute ('src', picture_3);
    divLike.setAttribute ('alt', 'icone-heart');
    divAncre .appendChild (divLike);

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



