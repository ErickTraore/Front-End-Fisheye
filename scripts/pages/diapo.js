import Api from '../api/Api.js';
// const tableMedias = [];
// const tableMedia = document.querySelector('.photographer_diapo');
const photo = (new URLSearchParams (window.location.search).get ('url_1'));
const url = (new URLSearchParams (window.location.search).get ('url_2'));
const id = (new URLSearchParams (window.location.search).get ('id'));
console.log(photo);
console.log(url);
console.log(id);

// création des données relative aux médias du photographe
async function getData () {
  const dataApi = new Api ('data/test-photographers.json');
  const data = await dataApi.get();

data.medias.forEach (dataMedia => {
    if (dataMedia.photographerId === id) {
        console.log(dataMedias);
        const diapoModel = diapoFactory (dataMedia);
        diapoModel.getUserDiapoDOM(dataMedia);
    }
  });
}
getData ()
// console.log(dataMedias);
// displayData()



