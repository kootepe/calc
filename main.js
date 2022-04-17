let mainContainer = document.querySelector('#container');
let calcContainer = document.querySelector('#operators');

const display = document.createElement('p');
const aboveDisplay= document.createElement('p');
display.textContent = '';
display.style.height = '1em';
aboveDisplay.style.height = '1em';
calcContainer.append(aboveDisplay);
calcContainer.append(display);

let calculation = [];

// buttons start 

const oneBtn = document.createElement('button');
oneBtn.classList.add('numBtn');
oneBtn.textContent = "1";
calcContainer.appendChild(oneBtn);

const twoBtn = document.createElement('button');
twoBtn.classList.add('numBtn');
twoBtn.textContent = "2";
calcContainer.appendChild(twoBtn);

const threeBtn = document.createElement('button');
threeBtn.classList.add('numBtn');
threeBtn.textContent = "3";
calcContainer.appendChild(threeBtn);

const fourBtn = document.createElement('button');
fourBtn.classList.add('numBtn');
fourBtn.textContent = "4";
calcContainer.appendChild(fourBtn);

const fiveBtn = document.createElement('button');
fiveBtn.classList.add('numBtn');
fiveBtn.textContent = "5";
calcContainer.appendChild(fiveBtn);

const sixBtn = document.createElement('button');
sixBtn.classList.add('numBtn');
sixBtn.textContent = "6";
calcContainer.appendChild(sixBtn);

const sevenBtn = document.createElement('button');
sevenBtn.classList.add('numBtn');
sevenBtn.textContent = "7";
calcContainer.appendChild(sevenBtn);

const eightBtn = document.createElement('button');
eightBtn.classList.add('numBtn');
eightBtn.textContent = "8";
calcContainer.appendChild(eightBtn);

const nineBtn = document.createElement('button');
nineBtn.classList.add('numBtn');
nineBtn.textContent = "9";
calcContainer.appendChild(nineBtn);

const zeroBtn = document.createElement('button');
zeroBtn.classList.add('numBtn');
zeroBtn.textContent = "0";
calcContainer.appendChild(zeroBtn);

const br = document.createElement('br');
calcContainer.appendChild(br);

const addBtn = document.createElement('button');
addBtn.classList.add('opsBtn');
addBtn.textContent = "+";
calcContainer.appendChild(addBtn );

const substractBtn = document.createElement('button');
substractBtn.classList.add('opsBtn');
substractBtn.textContent = "-";
calcContainer.appendChild(substractBtn);

const divideBtn = document.createElement('button');
divideBtn.classList.add('opsBtn');
divideBtn.textContent = "/";
calcContainer.appendChild(divideBtn );

const multiplyBtn = document.createElement('button');
multiplyBtn.classList.add('opsBtn');
multiplyBtn.textContent = "*";
calcContainer.appendChild(multiplyBtn);

const equalsBtn = document.createElement('button');
equalsBtn.classList.add('equals');
equalsBtn.textContent = "=";
calcContainer.appendChild(equalsBtn);

const clearBtn = document.createElement('button');
clearBtn.textContent = "clear";
calcContainer.appendChild(clearBtn);

//buttons end

equalsBtn.onclick = (e) => {
  display.textContent = '';
}

clearBtn.onclick = (e) => {
  display.textContent = '';
  aboveDisplay.textContent = '';
  display.style.height = '1em';
  calcContainer.prepend(display);
  calcContainer.prepend(aboveDisplay)
  calculation = [];
}

let numBtns = document.querySelectorAll('.numBtn');
let opsBtns = document.querySelectorAll('.opsBtn');
let equals = document.querySelectorAll('.equals');

opsBtns.forEach(function(e) {
  e.addEventListener('click', (e) => {
  toDisplay(e);
  });
});

numBtns.forEach(function(e) {
  e.addEventListener('click', (e) => {
    toDisplay(e);
  });
});

equals.forEach(function(e) {
  e.addEventListener('click', (e) => {
    toDisplay(e);
  });
});


const operatorArray = ['*', '/', '+', '-']
const allowedOnce = '+-';
const notAllowed = '*/';
let valueOne = 0;
let valueTwo = 0;
let btnTxt = 0;
let currentOperator = '';
let tulos = 0;

function toDisplay(e) {
  const currentBtn = e.currentTarget; 
  btnTxt = currentBtn.textContent;
  displayed = ``;

  if (btnTxt === '=') {
    selectFunc(currentOperator, valueOne, valueTwo);
    display.textContent = tulos;
  } else if (operatorArray.includes(btnTxt)) {
    aboveDisplay.textContent = display.textContent;
    valueOne = aboveDisplay.textContent;
    display.textContent = btnTxt;
    currentOperator = btnTxt;
  } else {
    display.textContent += btnTxt;
    valueOne = aboveDisplay.textContent;
    valueTwo = display.textContent;
    console.log(`valueOne is ${valueOne} and valueTwo is ${valueTwo}`);
    console.log(btnTxt === '=');
};
};

function summa(a, b) {
  tulos = a + b;
  return tulos;
}

 function multiply(a, b) {
  tulos = a * b;
  return tulos;
}

function divide(a, b) {
  tulos = a / b;
  return tulos;
}

function selectFunc(currentOperator, valueOne, valueTwo) {
  removeOperator(valueOne, valueTwo);
  const first = Number(fixOne);
  const second = Number(fixTwo); 
  switch (currentOperator) {
    case '+':
      summa(first, second);
      break;
    case '-':
      summa(first, second);
      break;
    case '*':
      multiply(first, second);
      break;
    case '/':
      divide(first, second);
      break;
  };
};

let fixOne = '';
let fixTwo = '';


function removeOperator(valueOne, valueTwo) {
  fixOne = valueOne.replace('*', "");
  fixOne = fixOne.replace('/', '');
  fixTwo =  valueTwo.replace('*', "");
  fixTwo = fixTwo.replace('/', '');
    console.log(`valueOne is ${fixOne} and valueTwo is ${fixTwo}`);
  return fixOne, fixTwo;
}

// function arrPush() {
//   let constants = display.textContent;
//   calculation.push(constants);
// };
