function mediaFactory (photographerName, data, id ) {
  const image = data.image;
  console.log (data);
  let i = 2;
  dataLikes = data.likes;
  const mediaName = photographerName.replaceAll (' ', '-');
  const picture_1 = `assets/images/samplePhotos/${mediaName}/${image}`;
  const picture_2 = `assets/images/samplePhotos/${mediaName}`;
  const picture_3 = `assets/icons/vector.png`;

  console.log (picture_1);
  console.log (picture_2);
  console.log (picture_3);

  const url = [`${image}`];
  const getFileExtension = url => `.${url.split ('?')[0].split ('.').pop ()}`;
  const type = getFileExtension (url[0]);
  console.log (photographerName);
  console.log (mediaName);
  console.log (image);
  // newImage = image.replaceAll ('_', ' ');
  // console.log (newImage);
  // const words = newImage.split (' ');
  // console.log (words);
  // const nb = words.length;
  // console.log (nb);

  

  // function removeItem (arr, value) {
  //   var i = 0;
  //   while (i < arr.length) {
  //     if (arr[i] === value) {
  //       arr.splice (i, 1);
  //     } else {
  //       ++i;
  //     }
  //   }
  //   return arr;
  // }
  // wordDeletet = words[nb - 1];

  // nexArray = removeItem (words, wordDeletet);

  function getUserMediaDOM () {

    let counter = dataLikes;
    const photographersMedia = document.querySelector ('.photographer__media');

    var divPresent = document.createElement ('a');
    const a = picture_1;
    const b = picture_2;
    divPresent.classList.add ('photographer__media__card');
    divPresent.setAttribute ('href', "diapo.html?id="+id+"&url_1="+a+"&url_2="+b);
    // &+'url_2='+ picture_2&+'url_3='+ picture_3

    photographersMedia.appendChild (divPresent);

    console.log (type);
    if (type === `.jpg`) {
      var img = document.createElement ('img');
      img.setAttribute ('src', picture_1);
      img.classList.add ('photographer__media__card__img');
      img.setAttribute ('alt', 'image');
      divPresent.appendChild (img);
    } else {
      var video = document.createElement ('video');
      video.setAttribute ('src', picture_1);
      video.classList.add ('photographer__media__card__img');
      video.setAttribute ('alt', 'image');
      divPresent.appendChild (video);
    }
    var divTitle = document.createElement ('div');
    divTitle.classList.add ('photographer__media__card__title');
    divPresent.appendChild (divTitle);

    var divTexte = document.createElement ('div');
    divTexte.classList.add ('photographer__media__card__title__texte');
    divTitle.appendChild (divTexte);
    divTexte.innerHTML = data.title;

    var divOther = document.createElement ('div');
    divOther.classList.add ('photographer__media__card__title__icone');
    divTitle.appendChild (divOther);

    var divNumber = document.createElement ('div');
    divNumber.classList.add ('photographer__media__card__title__icone__number');
    divOther.appendChild (divNumber);
    divNumber.innerHTML = counter;

    var divLike = document.createElement ('img');
    divOther.appendChild (divLike);
    divLike.setAttribute ('src', picture_3);
    divLike.classList.add ('photographer__media__card__title__icone__heart');
    divLike.innerHTML = picture_2;
  }
  return {
    picture_1,
    picture_2,
    image,
    // newImage,
    type,
    dataLikes,
    getUserMediaDOM,
  };
}



