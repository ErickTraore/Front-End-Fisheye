function displayModal() {
    const modal = document.getElementById("contact__modal");
	modal.style.display = "flex";
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
    const divlightbox = document.querySelector(".lightbox__modal");
    divlightbox.style.display = "none";
    const divMerci = document.querySelector(".merci__modal");
    divMerci.style.display = "none";
   
} 

function closeModal() {
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
    const divlightbox = document.querySelector(".lightbox__modal");
    divlightbox.style.display = "flex";
}
function closeMerciModal() {
    const divmerciModal = document.querySelector(".merci__modal");
    divmerciModal.style.display = "none";
    
}
let eltEmail = document.getElementById('errorEmail');
let eltLast = document.getElementById('errorLast');
let eltFirst = document.getElementById('errorFirst');
let eltMessage = document.getElementById('errorMessage');
const modalForm = document.getElementById("myForm");

modalForm.addEventListener('submit', addModal);
// function validate() {

function addModal(e) {    e.preventDefault();
    console.log('Test du formulaire.')
    const formData = new FormData(myForm);
    const first = formData.get('first');
    const numberFirst = first.length;
    var dataFirst = false;
    if (!numberFirst) {
      eltFirst.innerHTML = "Entrez votre prénom svp";
    }
    else if (numberFirst <= 1 ) {
      eltFirst.innerHTML = "Prénom invalid";
    }
    else if (numberFirst >= 2 ) {
      var dataFirst = true;
      eltFirst.innerHTML = "";
    }
   
    const last = formData.get('last');
    const numberLast = last.length;
    var dataLast = false;
    if (!numberLast) {
      eltLast.innerHTML = "Entrez votre nom svp";
    }
    else if (numberLast <= 1 ) {
      eltLast.innerHTML = "Nom invalid";
    }
    else if (numberLast >= 2 ) {
      var dataLast = true;
      eltLast.innerHTML = "";
    }
    
    const email = formData.get('email');
    var dataEmail = false;
    var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (!email) {
      eltEmail.innerHTML = "Entrez votre email svp";
    }
    else if (!email.match(validRegex)) {
      eltEmail.innerHTML = "Email invalid";
    }
    else {
      var dataEmail = true;
      eltEmail.innerHTML = "";
    }
    const message = formData.get('message');
    const numberMessage = message.length;
    var dataMessage = false;
  
    if (!message) {
      eltMessage.innerHTML = "Entrez votre message svp";
    }
    else if (numberMessage <= 1 ) {
        eltMessage.innerHTML = "Message invalid";
    }
    else {
      var dataMessage = true;
      eltMessage.innerHTML = "";
    }
    console.log('test général',dataFirst ,dataLast, dataEmail, dataMessage);
    if(dataFirst && dataLast && dataEmail && dataMessage) {
    console.log('Vos données sont valid');
    console.log('data:', {first, last, email, message});
    const divMerci = document.querySelector(".merci__modal");


    modalForm.reset();
    closeModal()
    divMerci.style.display = "flex";
    }
    else{
    console.log('result is false.');
    }

    }
