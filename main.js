// import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))


// Primo esercizio: 
// Dato un numero in base 10, scrivere una funzione che restituisca lo stesso numero ma in base 2 (trasformare un decimale in un binario)

// let decimalNumber = 100;


// function convertToBinary(decimalNumber) {
//   let binary = ''; 
//   let remainder;  
 
//   if (decimalNumber === 0) {
//     return '0';
// }
  
//   while (decimalNumber > 0) {
//     remainder = decimalNumber % 2; 
//     binary = remainder + binary;
//     decimalNumber = Math.floor(decimalNumber / 2);
   
// } 
// return binary;
// }

// console.log(convertToBinary(decimalNumber));


// Secondo esercizio: 
// Dato un numero in base 2, scrivere una funzione che restituisca lo stesso numero ma in base 10 (trasformare un binario in un decimale)

let binaryNumber = 1100100;

function convertToDecimal(binaryNumber) {
  let decimal = 0;
  let power = 0;
  let remainder;
  
  while (binaryNumber > 0) {
    remainder = binaryNumber % 10;
    decimal += remainder * Math.pow(2, power);
    binaryNumber = Math.floor(binaryNumber / 10);
    power++;
  }
  return decimal;
}

console.log(convertToDecimal(binaryNumber));



