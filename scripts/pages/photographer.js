import Api from "../api/Api.js";
let photographerName = ''
const id = parseInt(new URLSearchParams(window.location.search).get('id'))
console.log(id)
 
        async function getPhotographers() {
            const photographersApi = new Api('data/test-photographers.json')
            const photographers = await photographersApi.get()
        return ({
            photographers })
    }

    async function displayData(photographers) {
        console.log('pages:photographers',photographers);
        photographers.photographers.forEach((photographer) => {
        if (photographer.id === id) {
            console.log('pages:photographer', photographer)
            photographerName = photographer.name
            const profilModel = profilFactory(photographer);
            profilModel.getUserProfilDOM(photographer);
        }
        });
        const dataMedias = photographers.medias;
        const tableImages = [];
        console.log('dataMedias', dataMedias)
        dataMedias.forEach((dataMedia) => {
        if (dataMedia.photographerId === id) {
            console.log(dataMedia.photographerId)
            console.log(dataMedia.image)
            console.log(photographerName)
            const mediaModel = mediaFactory(photographerName, dataMedia.image);
            console.log(mediaModel);
            mediaModel.getUserMediaDOM(photographerName, dataMedia.image);
            // tableImages.push(dataMedia.image)
        };
        });
        // const dataName = photographerName;
        // console.log(tableImages);
        // tableImages.forEach((tableImage) => {
        //         // console.log('tableImage', tableImage)
        //         const mediaModel = mediaFactory(photographers);
        //     console.log(tableImage);
        //     // console.log(dataName);
        //     // console.log(mediaModel);

        //          mediaModel.getUserMediaDOM(dataMedia);
        //     });

        // const mediaModel = mediaFactory(tableImages, id, dataName);
        // mediaModel.getUserMediaDOM(dataMedia);
        }
    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
        displayData(photographerName);
        displayData(dataMedia.image);
    };
    
    init();
