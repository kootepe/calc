let mainContainer = document.querySelector('#container');
let calcContainer = document.querySelector('#operators');

const display = document.createElement('p');
display.textContent = '9659';
display.style.height = '1em';
calcContainer.appendChild(display);

let calculation = [];

function arrPush() {
  calculation.push(display.textContent);
}


// buttons start 

const oneBtn = document.createElement('button');
oneBtn.textContent = "1";
calcContainer.appendChild(oneBtn);

const twoBtn = document.createElement('button');
twoBtn.textContent = "2";
calcContainer.appendChild(twoBtn);

const threeBtn = document.createElement('button');
threeBtn.textContent = "3";
calcContainer.appendChild(threeBtn);

const fourBtn = document.createElement('button');
fourBtn.textContent = "4";
calcContainer.appendChild(fourBtn);

const fiveBtn = document.createElement('button');
fiveBtn.textContent = "5";
calcContainer.appendChild(fiveBtn);

const sixBtn = document.createElement('button');
sixBtn.textContent = "6";
calcContainer.appendChild(sixBtn);

const sevenBtn = document.createElement('button');
sevenBtn.textContent = "7";
calcContainer.appendChild(sevenBtn);

const eightBtn = document.createElement('button');
eightBtn.textContent = "8";
calcContainer.appendChild(eightBtn);

const nineBtn = document.createElement('button');
nineBtn.textContent = "9";
calcContainer.appendChild(nineBtn);

const zeroBtn = document.createElement('button');
zeroBtn.textContent = "0";
calcContainer.appendChild(zeroBtn);

const br = document.createElement('br');
calcContainer.appendChild(br);

const addBtn = document.createElement('button');
addBtn .textContent = "+";
calcContainer.appendChild(addBtn );

const substractBtn = document.createElement('button');
substractBtn.textContent = "-";
calcContainer.appendChild(substractBtn);

const divideBtn = document.createElement('button');
divideBtn .textContent = "/";
calcContainer.appendChild(divideBtn );

const multiplyBtn = document.createElement('button');
multiplyBtn.textContent = "*";
calcContainer.appendChild(multiplyBtn);

const equalsBtn = document.createElement('button');
equalsBtn.textContent = "=";
calcContainer.appendChild(equalsBtn);

const clearBtn = document.createElement('button');
clearBtn.textContent = "clear";
calcContainer.appendChild(clearBtn);

//buttons end

oneBtn.onclick = (e) => {
  display.textContent += '1';
  calculation.push('1');
}

twoBtn.onclick = (e) => {
  display.textContent += '2';
  calculation.push('2');
}

threeBtn.onclick = (e) => {
  display.textContent += '3';
  calculation.push('3');
}

fourBtn.onclick = (e) => {
  display.textContent += '4';
  calculation.push('4');
}

fiveBtn.onclick = (e) => {
  display.textContent += '5';
  calculation.push('5');
}

sixBtn.onclick = (e) => {
  display.textContent += '6';
  calculation.push('6');
}
sevenBtn.onclick = (e) => {
  display.textContent += '7';
  calculation.push('7');
}

eightBtn.onclick = (e) => {
  display.textContent += '8';
  calculation.push('8');
}

nineBtn.onclick = (e) => {
  display.textContent += '9';
  calculation.push('9');
}

zeroBtn.onclick = (e) => {
  display.textContent += '0';
  calculation.push('0');
}

addBtn.onclick = (e) => {
  display.textContent = '';
  display.textContent += '+ ';
  calculation.push('+');
}

substractBtn.onclick = (e) => {
  display.textContent = '';
  display.textContent += '- ';
  calculation.push('-');
}

divideBtn.onclick = (e) => {
  display.textContent = '';
  display.textContent += '/ ';
  calculation.push('/');
}

multiplyBtn.onclick = (e) => {
  display.textContent = '';
  display.textContent += '* ';
  calculation.push('*');
}

equalsBtn.onclick = (e) => {
  display.textContent += '';
}

clearBtn.onclick = (e) => {
  display.textContent = '';
}

