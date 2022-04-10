let mainContainer = document.querySelector('#container');
let calcContainer = document.querySelector('#operators');

const calcPara = document.createElement('p');
calcPara.textContent = '9659';
calcContainer.appendChild(calcPara);

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
calcContainer.appendChild(fiveBtn );

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

const diviveBtn = document.createElement('button');
diviveBtn.textContent = "/";
calcContainer.appendChild(diviveBtn);

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

