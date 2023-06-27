function   focusFactory (data, e, focusablesLightbox, focusLength) {
  console.log('data', data);
  console.log('event', e);
  console.log('focusablesLightbox', focusablesLightbox);
  console.log('focusLength', focusLength);
    if(e.shiftKey === true) {
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

