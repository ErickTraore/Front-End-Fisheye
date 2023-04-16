const tableLikes = [];

function likedFactory () {
    const totalLikes = document.querySelectorAll (
      '.photographer__media__card__title__icone__number'
    );
    console.log (totalLikes);
  
    totalLikes.forEach (totalLike => {
      // e.preventDefault();
      tableLikes.push (totalLike);
    });
    console.log (tableLikes);
  }
  return {
    likedFactory,
  }
