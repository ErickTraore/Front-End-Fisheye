
function mediaFactory(photographerName, image) {
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
console.log(getFileExtension)


// console.log(image.src.split('.')[1])

console.log(url)
console.log(picture_1)

function getUserMediaDOM(photographerName, image) {
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
        divTexte.innerHTML = url
   
    var divOther = document.createElement("div");
        divOther.classList.add("photographer__media__card__title__icone");
        divTitle.appendChild(divOther);
    var divNumber = document.createElement("div");
        divNumber.classList.add("photographer__media__card__title__number");
        divOther.appendChild(divNumber);
    var divLike = document.createElement("img");
        divLike.setAttribute("src", picture_2)
        divLike.classList.add("photographer__media__card__title__heart");
        divLike.innerHTML = picture_2;
        divOther.appendChild(divLike);
    }
return { picture_1, picture_2, image, type, getUserMediaDOM }

 }
