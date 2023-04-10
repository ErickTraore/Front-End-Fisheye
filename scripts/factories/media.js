tableLikes = [];

function mediaFactory(photographerName, data, tableMediasLength) {
   const image = data.image;
   console.log(data);
   console.log(tableMediasLength);
   let target = 0;
 
 

  dataLikes = data.likes
   const  mediaName =    photographerName.replaceAll(' ', '-')
   const picture_1 = `assets/images/samplePhotos/${mediaName}/${image}`;
   const picture_2 = `assets/icons/vector.png`;
   const url = [`${image}`];
   const getFileExtension = (url) => 
   `.${url.split("?")[0].split(".").pop()}`
const type = getFileExtension(url[0])
console.log(photographerName)
console.log(mediaName)
console.log(image)
newImage = image.replaceAll('_', ' ')
console.log(newImage)
const words = newImage.split(' ');
console.log(words)
const nb = words.length
console.log(nb)

function removeItem(arr, value) {
    var i = 0;
    while (i < arr.length) {
      if (arr[i] === value) {
        arr.splice(i, 1);
      } else {
        ++i;
      }
    }
    return arr;
  }
  wordDeletet = words[nb - (1)];

  nexArray = removeItem(words, wordDeletet);

function getUserMediaDOM(photographerName, image, nbItem) {
    console.log('id = ',nbItem);
    const counter = dataLikes;
    // let test = document.getElementsByClassName('.photographer__media__card__title__icone');
    const photographersMedia = document.querySelector(".photographer__media");

    var divPresent = document.createElement("div");
    divPresent.classList.add("photographer__media__card");
    photographersMedia.appendChild(divPresent);

    console.log(type)
    if(type === `.jpg`){
      
    var img = document.createElement("img");
        img.setAttribute("src", picture_1)
        img.classList.add("photographer__media__card__img");
        img.setAttribute("alt", "image");
        divPresent.appendChild(img);
    }
    else  {
    var video = document.createElement("video");
        video.setAttribute("src", picture_1)
        video.classList.add("photographer__media__card__img");
        video.setAttribute("alt", "image");
        divPresent.appendChild(video);   
    }
    var divTitle = document.createElement("div");
        divTitle.classList.add("photographer__media__card__title");
        divPresent.appendChild(divTitle);
        
    var divTexte = document.createElement("div");
        divTexte.classList.add("photographer__media__card__title__texte");
        divTitle.appendChild(divTexte);
        divTexte.innerHTML = data.title
   
    var divOther = document.createElement("div");
        divOther.classList.add("photographer__media__card__title__icone");
        divTitle.appendChild(divOther);

    var divNumber = document.createElement("div");
        divNumber.classList.add("photographer__media__card__title__icone__number");
        divNumber.setAttribute('id',nbItem)
        divOther.appendChild(divNumber);
        divNumber.innerHTML = counter;

    var divLike = document.createElement("img");
        divLike.setAttribute("src", picture_2)
        divLike.classList.add("photographer__media__card__title__icone__heart");
        divLike.setAttribute('id',nbItem)
        divLike.innerHTML = picture_2;
        divOther.appendChild(divLike);

    // }
      
    }
    const totalLikes = document.querySelectorAll('.photographer__media__card__title__icone__number');
    totalLikes.forEach((totalLike,) =>{
      // e.preventDefault();
      tableLikes.push(totalLike);
    });
    console.log(tableLikes);
  const buttons = document.querySelectorAll('.photographer__media__card__title__icone__heart');
   buttons.forEach(button => {
  
      button.addEventListener('click', function (e) {  
        e.preventDefault();
        target = +e.target.id;
        console.log(target);

      }, false);
  })

return { picture_1, picture_2, image, newImage, type, dataLikes, getUserMediaDOM }

 }
 
