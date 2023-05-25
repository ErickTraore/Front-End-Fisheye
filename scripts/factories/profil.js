function profilFactory(data) {
    const {  name, id, city, country, tagline, portrait } = data;
    const picture = `assets/photographers/${portrait}`;
    console.log(data)

    function getUserProfilDOM(photographer) {
        const {  name = photographer.name, id, city, country, tagline, portrait } = data;
        const photographersProfil = document.querySelector(".photographer__profil");
        const dataPhotographer = photographer
        const picture = `assets/photographers/${portrait}`;
    
        var div = document.createElement("div");
        div.classList.add("photographer__profil__profile");
        photographersProfil.appendChild(div);
    
        var divPresent = document.createElement("div");
        divPresent.classList.add("photographer__profil__profile__presentation");
        div.appendChild(divPresent);
    
        var divName = document.createElement("div");
        divName.classList.add("photographer__profil__profile__presentation__name");
        divPresent.appendChild(divName);
        divName.innerHTML = dataPhotographer.name;
    
        var divOther = document.createElement("div");
        divOther.classList.add("photographer__profil__profile__presentation__other");
        divPresent.appendChild(divOther);
    
        var divTown = document.createElement("div");
        divTown.classList.add("photographer__profil__profile__presentation__other__town");
        divOther.appendChild(divTown);
        divTown.innerHTML = dataPhotographer.city + "," + " "+ dataPhotographer.country ;
        
        var divText = document.createElement("div");
        divText.classList.add("photographer__profil__profile__presentation__other__text");
        divOther.appendChild(divText);
        divText.innerHTML = dataPhotographer.tagline;
        
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
        img.setAttribute("alt", portrait);
        
        divImage.appendChild(img);
        return (div);

    }
    return { name, picture, id, city, country, tagline, portrait,  getUserProfilDOM }

    }

    
