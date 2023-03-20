//Mettre le code JavaScript lié à la page photographers
const id = parseInt(new URLSearchParams(window.location.search).get('id'))
console.log(id)
const prof = document.getElementById('photographer-profil');

// Récuperez les produits sélectionnés par le client grace à l'api.
fetch('data/test-photographers.json')
.then(res => res.json())
.then(data => {
    const dataMedias = data.media
    const mediasFiltres = dataMedias.filter(function(dataMedia){
    if (dataMedia.photographerId === id) {
        const data = dataMedia;
        console.log(data.title);
    const { title, photographerId, price } = data;

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
    divName.innerHTML = data.title;

    var divOther = document.createElement("div");
    divOther.classList.add("photographer__profil__profile__presentation__other");
    divPresent.appendChild(divOther);

    var divTown = document.createElement("div");
    divTown.classList.add("photographer__profil__profile__presentation__other__town");
    divOther.appendChild(divTown);

    var divText = document.createElement("div");
    divText.classList.add("photographer__profil__profile__presentation__other__text");
    divOther.appendChild(divText);

    // return true
    }
})
    console.log(mediasFiltres)
})
.catch(function(err) {
    console.log(err);
});

    // const photographersProfil = document.querySelector(".photographer_profil");



