function photographerFactory(data) {
    const { name, portrait, id } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const ancre = document.createElement( 'a' );
        ancre.href = "photographer.html?id=" + id;
        article.appendChild(ancre);
        ancre.appendChild(img);
        ancre.appendChild(h2);
      
        return (article);
    }
    return { name, picture, getUserCardDOM }
}

