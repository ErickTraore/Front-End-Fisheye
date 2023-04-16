class Media {
    constructor(data) {
       this._url = data.url
       this._image = data.image
    }
  
    get image() {
        return './assets/images/samplePhotos/'+ this._url + '/' +this._image
    }
    get url() {
        return this._url
    }
}