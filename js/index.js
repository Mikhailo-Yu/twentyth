// Categories
const laptop = document.getElementById('laptop');
const computer = document.getElementById('computer');
const flashlight = document.getElementById('flashlight');
// Products
const laptopGrey = document.getElementById('laptop-grey');
const laptopLightgrey = document.getElementById('laptop-lightgrey');

const computerGrey = document.getElementById('computer-grey');
const computerLightgrey = document.getElementById('computer-lightgrey');

const flashlightGrey = document.getElementById('flashlight-grey');
const flashlightLightgrey = document.getElementById('flashlight-lightgrey');

const laptopGreyDescription = document.querySelector('.laptop-grey');
const laptopGreyDescription1 = document.querySelector('.laptop-grey1');


const laptopLightgreyDescription = document.querySelector('.laptop-lightgrey');
const laptopLightgreyDescription1 = document.getElementById('laptop-lightgrey-description');

const computerGreyDescription = document.querySelector('.computer-grey');
const computerGreyDescription1 = document.getElementById('computer-grey-description');
const computerLightgreyDescription = document.querySelector('.computer-lightgrey');
const computerLightgreyDescription1 = document.getElementById('flashlight-grey-description');

const flashlightGreyDescription = document.querySelector('.flashlight-grey');
const flashlightGreyDescription1 = document.getElementById('flashlight-grey-description');
const flashlightLightgreyDescription = document.querySelector('.flashlight-lightgrey');
const flashlightLightgreyDescription1 = document.getElementById('flashlight-lightgrey-description');
// Products lists
const laptopList = document.querySelector('.goods__laptop');
const computerList = document.querySelector('.goods__computer');
const flashlightList = document.querySelector('.goods__flashlight');
const ulCategories = document.querySelector('.list__categories');
const ulGoods = document.querySelector('.goods__wrap');
const ulDescription = document.querySelector('.description__wrap');

// form
const form = document.getElementById('form');
const formName = document.getElementById('name');
const formPost = document.getElementById('post');
const modalEl = document.querySelector('.modal');
const modalOverlayEl = document.querySelector('.modal-overlay');
const closeModal = document.querySelector('.modal-button');
const requiredField = form.querySelectorAll('.requeired');
const cash =  document.getElementById('cash');
const card =  document.getElementById('cash');
const sendBtn = document.querySelector('.send');
const buyerList = document.querySelector('.buyer-list');
const descriptionGoods = document.querySelector('.description__goods');

// Error message 
const EMPTY_FIELD = 'The field is empty';
const INCORRECT_VALUE = 'Incorrect value';
const NOT_CHOICE = 'You did not make a choice';

// Listener for magazine
ulCategories.addEventListener('click', classAdd);
ulGoods.addEventListener('click', classAdd1);
ulDescription.addEventListener('click', classRemove);
closeModal.addEventListener('click',  modalToggleClass);
modalOverlayEl.addEventListener('click',  modalToggleClass);

// Listener for form
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let validForm = true;
  const activeEl = document.querySelector('.active');
  const activeEl1 = document.querySelector('.active1');
  
  requiredField.forEach((field) => {
    if(field.value === '') {
      printError(field.id, EMPTY_FIELD);
      validForm = false;
 }
 if(field.value === '') {
  printError(field.id, EMPTY_FIELD);
  validForm = false;
}
  });
  if(form.elements.cash.checked === false && form.elements.card.checked === false) {
    printError('card', NOT_CHOICE);
    validForm = false;
  }
  if(form.elements.city.value === 'not choice') {
    printError('city', NOT_CHOICE);
    validForm = false;
  }

  if (validForm) {
if(activeEl) {
      activeEl.classList.remove('active');
    } 
    if(activeEl1) {
      activeEl1.classList.remove('active1');
    }
       modalToggleClass ();
         }
         
});

form.addEventListener('change', () => {
  printError('card', '');
  printError('city', '');
});

form.addEventListener('input', (e) => {
if(e.target.value.length > 0) {
  printError('name', '');
  }
  if(e.target.value.length > 0) {
    printError('post', '');
    }    
});

sendBtn.addEventListener('click', () => {
  const activeEl1 = document.querySelector('.active1');
  let clone = activeEl1.firstElementChild.cloneNode(true);
    buyerList.appendChild(clone);
    let buttonRemove = document.createElement("button");
  buttonRemove.innerHTML = 'Remove';
  clone.appendChild(buttonRemove);
  
  updateLocalStorage();
});
buyerList.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    console.log(21); 
    const itemToRemove = event.target.closest('div');
    itemToRemove.remove();

    updateLocalStorage();
  }
});


function printError (el, erorMessage) {
  form.elements[el].parentElement.querySelector('small').textContent = erorMessage;
}

function classAdd (event) {
    if (event.target.tagName === 'P') {
      const activeEl = document.querySelector('.active');
      if(activeEl) {
        activeEl.classList.remove('active');
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
      modalToggleClass ();
  }
 }
 function modalToggleClass () {
    modalEl.classList.toggle('d-none');
    modalOverlayEl.classList.toggle('d-none');
 }

 function updateLocalStorage() {
  const items = Array.from(buyerList.children);
  const itemValues = items.map(item => item.textContent.trim());
  localStorage.setItem('buyerList', JSON.stringify(itemValues));
}

function loadFromLocalStorage() {
  const items = JSON.parse(localStorage.getItem('buyerList')) || [];
  items.forEach(item => {
    const div = document.createElement('div');
    div.textContent = item;

    const buttonRemove = document.createElement('button');
    buttonRemove.textContent = 'Remove';
    div.appendChild(buttonRemove);

    buyerList.appendChild(div);
  });
}

loadFromLocalStorage();