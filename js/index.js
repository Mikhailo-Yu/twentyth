let laptop = document.getElementById('laptop');
let computer = document.getElementById('computer');
let flashlight = document.getElementById('flashlight');

let laptopGrey = document.getElementById('laptop-grey');
let laptopLightgrey = document.getElementById('laptop-lightgrey');

let computerGrey = document.getElementById('computer-grey');
let computerLightgrey = document.getElementById('computer-lightgrey');

let flashlightGrey = document.getElementById('flashlight-grey');
let flashlightLightgrey = document.getElementById('flashlight-lightgrey');

let laptopGreyDescription = document.querySelector('.laptop-grey');
let laptopLightgreyDescription = document.querySelector('.laptop-lightgrey');

let computerGreyDescription = document.querySelector('.computer-grey');
let computerLightgreyDescription = document.querySelector('.computer-lightgrey');

let flashlightGreyDescription = document.querySelector('.flashlight-grey');
let flashlightLightgreyDescription = document.querySelector('.flashlight-lightgrey');

let laptopList = document.querySelector('.goods__laptop');
let computerList = document.querySelector('.goods__computer');
let flashlightList = document.querySelector('.goods__flashlight');
let ulCategories = document.querySelector('.list__categories');
let ulGoods = document.querySelector('.goods__wrap');
let ulDescription = document.querySelector('.description__wrap');

let modalEl = document.querySelector('.modal');
let modalOverlayEl = document.querySelector('.modal-overlay');

let closeModal = document.querySelector('.modal-button');

ulCategories.addEventListener('click', classAdd);
ulGoods.addEventListener('click', classAdd1);
ulDescription.addEventListener('click', classRemove);
closeModal.addEventListener('click',  modalToggleClass);
modalOverlayEl.addEventListener('click',  modalToggleClass);

 function classAdd (event) {
    if (event.target.tagName === 'P') {
      const activeEl = document.querySelector('.active');
      if(activeEl) {
        activeEl.classList.remove('active')
      }    
        if(event.target.id === 'laptop') {
            laptopList.classList.add('active');
    } else if ( event.target.id === 'computer') {
        computerList.classList.add('active');
    }
    else if (event.target.id === 'flashlight') {
        flashlightList.classList.add('active');
    } 
}
 }
 function classAdd1 (event) {
    if (event.target.tagName === 'P') {
      const activeEl1 = document.querySelector('.active1');
      if(activeEl1) {
        activeEl1.classList.remove('active1')
      }     
      if (event.target.id === 'laptop-grey') {
        laptopGreyDescription.classList.add('active1');
    }
    else if (event.target.id === 'laptop-lightgrey') {
        laptopLightgreyDescription.classList.add('active1');
    }  else if (event.target.id === 'computer-grey') {
        computerGreyDescription.classList.add('active1');
    } else if (event.target.id === 'computer-lightgrey') {
        computerLightgreyDescription.classList.add('active1');
    } else if (event.target.id === 'flashlight-grey') {
        flashlightGreyDescription.classList.add('active1');
    } else if (event.target.id === 'flashlight-lightgrey') {
        flashlightLightgreyDescription.classList.add('active1');
    }
    }
 }

 function classRemove (event) {
    if (event.target.tagName === 'BUTTON') {
    const activeEl = document.querySelector('.active');
    const activeEl1 = document.querySelector('.active1');
    if(activeEl) {
      activeEl.classList.remove('active');
    } 
    if(activeEl1) {
      activeEl1.classList.remove('active1');
    }
    modalToggleClass ()
  }
 }
 function modalToggleClass () {
    modalEl.classList.toggle('d-none');
    modalOverlayEl.classList.toggle('d-none');
 }
