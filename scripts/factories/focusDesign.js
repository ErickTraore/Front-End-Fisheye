function   focusFactory (data, e, focusablesLightbox, focusLength) {
    if(data >= 3) {
        console.log(data);
        }
    if(e.shiftkey === true) {
          data-- ;
        } else {
          data++ ;
        }
    if(data >= focusLength) {
          data = 0 ;
        }
    if(data < 0) {
          data = focusLength -1;
        }
    focusablesLightbox[data].focus();  
}

