import Api from "../api/Api.js";
 // Permet de récuperer les photos de l'api
        async function getPhotographers() {
            const photographersApi = new Api('data/test-photographers.json')
            const photographers = await photographersApi.get()
        return ({
            photographers })
    }
    // On affiche ses photos dans la page d'accueuil grace à l'utilisation du design patern factory
    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");
        console.log('index:photographers',photographers);
        photographers.photographers.forEach((photographer) => {
            console.log('photographer',photographer);
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
    
