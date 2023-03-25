
function mediaFactory(photographerName, image) {
   const  mediaName =    photographerName.replaceAll(' ', '-')
   const picture = `assets/images/samplePhotos/${mediaName}/${image}`;
console.log(photographerName)
console.log(mediaName)
console.log(image)
console.log(picture)

function getUserMediaDOM(photographerName, image) {
    const photographersMedia = document.querySelector(".photographer__media");
    var divPresent = document.createElement("div");
    divPresent.classList.add("photographer__media__card");
    photographersMedia.appendChild(divPresent);

    var img = document.createElement("img");
        img.setAttribute("src", picture)
        img.classList.add("photographer__media__card__img");
        img.setAttribute("alt", "image");
        divPresent.appendChild(img);
    
    // return (div);
}
return { picture, image,  getUserMediaDOM }

 }
