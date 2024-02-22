/* let km; */
/* let age; */
let message;
let messageDiscount = '';
let price;
let finalPrice;
let isValidData = true;

const priceXKm = 0.21;
const discoutYoung = 20;
const discoutSenior = 40;

// ELEMENTS
const titoloInput = document.querySelector('.titolo-input');
const titoloEta = document.querySelector('.titolo-eta');

// INPUT
const input = document.querySelector('.input');
const selectEta = document.querySelector('.select-age');

// BUTTONS
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');

btn1.addEventListener('click',function(event){
  event.preventDefault();
  console.log(input.value);
  titoloInput.innerHTML = 'Km: ' + input.value;
  console.log(selectEta.value);
  titoloEta.innerHTML = 'Età: ' + selectEta.value;
  
  let km = input.value;
  /* let age = selectEta.value; */
  
  price = km * priceXKm;
  finalPrice = price;

  if(selectEta.value === "Minorenne"){
    finalPrice *= 1 - (discoutYoung / 100);
    
    messageDiscount = `<br>Dal momento che sei minorenne hai lo sconto del ${discoutYoung}% e quindi paghi &euro;${finalPrice.toFixed(2)}`
  }else if(selectEta.value === "Maggiorenne"){
    finalPrice = price;
  
    messageDiscount = `<br>Sei maggiorenne e quindi paghi &euro;${finalPrice.toFixed(2)}`
  }else if(selectEta.value === "Over 65"){
    finalPrice *= 1 - (discoutSenior / 100);
  
    messageDiscount = `<br>Sei un utente senior quindi hai uno sconto del ${discoutSenior}% e quindi paghi &euro;${finalPrice.toFixed(2)}`
  }
  message = `Con ${km} Km il prezzo del biglietto è &euro;${price.toFixed(2)}`
  message += messageDiscount;
  console.log(message);
})

btn2.addEventListener('click',function(event){
  event.preventDefault();
  console.log(input.value);
  titoloInput.innerHTML = 'Km: ';
  input.value = ' ';
  
  console.log(selectEta.value);
  titoloEta.innerHTML = 'Età: ';
  selectEta.value = ' ';
})

