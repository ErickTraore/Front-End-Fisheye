function displayMediaModal() {
    const modal = document.getElementById("contact__modal");
	modal.style.display = "none";
    // fermeture de la div-profil.
    const divprofil = document.querySelector(".photographer__profil");
    divprofil.style.display = "none";
    // fermeture de la div-trier.
    const divtrier = document.querySelector(".photographer__trier");
    divtrier.style.display = "none";
    // fermeture de la div-photographer-media.
    const divmedia = document.querySelector(".photographer__media");
    divmedia.style.display = "none";
    // fermeture de la div-lightbox.
    const divlightbox = document.querySelector(".lightbox");
    divlightbox.style.display = "flex";
} 

function closeMediaModal() {
    const modal = document.getElementById("contact__modal");
    modal.style.display = "none";
    // fermeture de la div-profil.
    const divprofil = document.querySelector(".photographer__profil");
    divprofil.style.display = "flex";
    // fermeture de la div-trier.
    const divtrier = document.querySelector(".photographer__trier");
    divtrier.style.display = "flex";
    // fermeture de la div-photographer-media.
    const divmedia = document.querySelector(".photographer__media");
    divmedia.style.display = "flex";
    // fermeture de la div-lightbox.
    const divlightbox = document.querySelector(".lightbox");
    divlightbox.style.display = "none";
}
