function photographerFactory(data) {
    const { name, portrait, id, city, country, tagline , price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.setAttribute("alt", portrait)
        
        const h3 = document.createElement( 'h3' );
        h3.textContent = name;

        const article = document.createElement( 'article' );

        const ancre = document.createElement( 'a' );

        ancre.href = "photographer.html?id=" + id;
        article.appendChild(ancre);
        ancre.appendChild(img);
        ancre.appendChild(h3);

        const textearticle = document.createElement( 'div' );
        textearticle.classList.add ('article__texte');
        article.appendChild (textearticle);

        const locationarticle = document.createElement( 'div' );
        locationarticle.classList.add ('article__location');
        textearticle.appendChild (locationarticle);
        
        const locationcity = document.createElement( 'div' );
        locationcity.classList.add ('article__locationcity');
        locationarticle.appendChild (locationcity);
        locationcity.textContent = city +","+" " + country;

        const messagearticle = document.createElement( 'div' );
        messagearticle .classList.add ('article__message');
        textearticle.appendChild (messagearticle );
        messagearticle .textContent = tagline;

        const pricearticle = document.createElement( 'div' );
        pricearticle.classList.add ('article__price');
        textearticle.appendChild (pricearticle);
        pricearticle .textContent = price +" €/jour";
      
        return (article);
    }
    return { name, picture, getUserCardDOM }
}


