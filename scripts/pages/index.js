import Api from "../api/Api.js";
 
        async function getPhotographers() {
            const photographersApi = new Api('data/test-photographers.json')
            const photographers = await photographersApi.get()
        return ({
            photographers })
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");
        console.log('photographers',photographers);
        photographers.photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();
    
