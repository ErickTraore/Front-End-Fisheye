function displayMediaModal() {
    const modal = document.getElementById("contact__modal");
	modal.style.display = "none";
    const divlightbox = document.querySelector(".lightbox__modal");
    divlightbox.style.display = "flex";
} 
function closeMediaModal() {
    const divlightbox = document.querySelector(".lightbox__modal");
    divlightbox.style.display = "none";
}
