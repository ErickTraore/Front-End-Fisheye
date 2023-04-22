class diapo {
    constructor(data) {
        this._title = data.title
        this._image = data.image
     }
   
     get image() {
         return './assets/images/samplePhotos/'+ this._name + '/' +this._image
     }
     get title() {
         return this._title
     }
 }