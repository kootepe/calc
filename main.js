let mainContainer = document.querySelector('#container');
let calcContainer = document.querySelector('#operators');

const display = document.createElement('p');
display.textContent = '9659';
display.style.height = '1em';
calcContainer.appendChild(display);

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
addBtn.classList.add('opBtn');
addBtn.textContent = "+";
calcContainer.appendChild(addBtn );

const substractBtn = document.createElement('button');
substractBtn.classList.add('opBtn');
substractBtn.textContent = "-";
calcContainer.appendChild(substractBtn);

const divideBtn = document.createElement('button');
divideBtn.classList.add('opBtn');
divideBtn.textContent = "/";
calcContainer.appendChild(divideBtn );

const multiplyBtn = document.createElement('button');
multiplyBtn.classList.add('opBtn');
multiplyBtn.textContent = "*";
calcContainer.appendChild(multiplyBtn);

const equalsBtn = document.createElement('button');
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
  calculation = [];
}

let numBtns = document.querySelectorAll('.numBtn');

numBtns.forEach(function(e) {
  e.addEventListener('click', toDisplay);
});

function toDisplay(e) {
  let currentBtn = e.currentTarget; 
  let btnTxt = currentBtn.textContent;
  display.textContent += btnTxt;
}

let opBtns = document.querySelectorAll('.opBtn');

opBtns.forEach(function(e) {
  e.addEventListener('click', (e) => {
    arrPush();
    display.textContent = '';
    toDisplay(e);
    arrPush();
  });
});

function arrPush() {
  let constants = display.textContent;
  calculation.push(constants);
};
