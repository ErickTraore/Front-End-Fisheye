//Mettre le code JavaScript lié à la page photographers
const id = parseInt(new URLSearchParams(window.location.search).get('id'))
console.log(id)
const prof = document.getElementById('photographer-profil');
// Récuperez les produits sélectionnés par le client grace à l'api.
fetch('data/test-photographers.json')
.then(res => res.json())
.then(data => {

    const dataPhotographers = data.photographers
    dataPhotographers.filter(function(dataPhotographers){
    if (dataPhotographers.id === id) {
        console.log(dataPhotographers);
    const { name, id, city, country, tagline, portrait } = dataPhotographers;
    const picture = `assets/photographers/${portrait}`;
    const photographersProfil = document.querySelector(".photographer__profil");

    var div = document.createElement("div");
    div.classList.add("photographer__profil__profile");
    photographersProfil.appendChild(div);

    var divPresent = document.createElement("div");
    divPresent.classList.add("photographer__profil__profile__presentation");
    div.appendChild(divPresent);

    var divName = document.createElement("div");
    divName.classList.add("photographer__profil__profile__presentation__name");
    divPresent.appendChild(divName);
    divName.innerHTML = dataPhotographers.name;

    var divOther = document.createElement("div");
    divOther.classList.add("photographer__profil__profile__presentation__other");
    divPresent.appendChild(divOther);

    var divTown = document.createElement("div");
    divTown.classList.add("photographer__profil__profile__presentation__other__town");
    divOther.appendChild(divTown);
    divTown.innerHTML = dataPhotographers.city + "," + " "+ dataPhotographers.country ;
    
    var divText = document.createElement("div");
    divText.classList.add("photographer__profil__profile__presentation__other__text");
    divOther.appendChild(divText);
    divText.innerHTML = dataPhotographers.tagline;
    
    var divModal = document.createElement("div");
    divModal.classList.add("photographer__profil__profile__modal");
    div.appendChild(divModal);
    
    var divModalHeader = document.createElement("div");
    divModalHeader.classList.add("photographer__profil__profile__modal__header");
    divModal.appendChild(divModalHeader);
   
    var divModalButton = document.createElement("button");
    divModalButton.classList.add("contact_button");
    divModalButton.setAttribute("onclick", "displayModal()");
    divModalButton.innerHTML = "Contactez-moi";
    divModal.appendChild(divModalButton);

    var divImage = document.createElement("div");
    divImage.classList.add("photographer__profil__profile__image");
    div.appendChild(divImage);

    var img = document.createElement("img");
    img.setAttribute("src", picture)
    img.classList.add("photographer__profil__profile__image__img");
    img.setAttribute("alt", "image");
    divImage.appendChild(img);
    }
})
})
.catch(function(err) {
    console.log(err);
});



