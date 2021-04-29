
const addInputEl1 = document.getElementById('add-input-one');
const addInputEl2 = document.getElementById('add-input-two');
const addButton = document.getElementById('add-button');
const addResultEl = document.getElementById('add-result');

console.log(addInputEl1, addInputEl2, addButton, addResultEl)
addButton.addEventListener('click', () => {
    const number1 = addInputEl1.value;
    const number2 = addInputEl2.value;
    const sum = Number(number1) + Number(number2); 
    
    console.log(sum);

    addResultEl.textContent = sum;
});

const subInputEl1 = document.getElementById('sub-input-one');
const subInputEl2 = document.getElementById('sub-input-two');
const subButton = document.getElementById('sub-button');
const subResultEl = document.getElementById('sub-result');

console.log(subInputEl1, subInputEl2, subButton, subResultEl)
subButton.addEventListener('click', () => {
    const number1 = subInputEl1.value;
    const number2 = subInputEl2.value;
    const answer = Number(number1) - Number(number2); 
    
    console.log (answer);

    addResultEl.textContent = answer;
});

const mulInputEl1 = document.getElementById('mul-input-one');
const mulInputEl2 = document.getElementById('mul-input-two');
const mulButton = document.getElementById('mul-button');
const mulResultEl = document.getElementById('mul-result');

console.log(mulInputEl1, mulInputEl2, mulButton, mulResultEl)
mulButton.addEventListener('click', () => {
    const number1 = mulInputEl1.value;
    const number2 = mulInputEl2.value;
    const answer = Number(number1) * Number(number2); 
    
    console.log(answer);

    mulResultEl.textContent = answer;
});

const divInputEl1 = document.getElementById('div-input-one');
const divInputEl2 = document.getElementById('div-input-two');
const divButton = document.getElementById('div-button');
const divResultEl = document.getElementById('div-result');

console.log(divInputEl1, divInputEl2, divButton, divResultEl)
divButton.addEventListener('click', () => {
    const number1 = divInputEl1.value;
    const number2 = divInputEl2.value;
    const answer = Number(number1) / Number(number2); 
    
    console.log(answer);

    divResultEl.textContent = answer;
});