class Media {
    constructor(data) {
       this._name = data.name
       this._image = data.image
    }
  
    get image() {
        return './assets/images/samplePhotos/'+ this._name + '/' +this._image
    }
    get name() {
        return this._name
    }
}



// class media {
//     constructor(data) {
//         this._id = data.id
//         this._photographerId = data.photographerId
//         this._title = data.title
//         this._likes = data.likes
//         this._date = data.date
//         this._price = data.price
//         this._image = data.image

//     }

//     get photographerId() {
//         return this._photographerId
//     }
//     get id() {
//         return this._id
//     }
//     get image() {
//         return './assets/images/samplePhotos/'+ this._name + this._image
//     }
//     get title() {
//         return this._title
//     }
//     get likes() {
//         return this._likes
//     }

//     get date() {
//         return this._date
//     }

//     get price() {
//         return this._price
//     }
// }