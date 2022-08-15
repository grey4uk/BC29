const numberInt1 = 12;
const numberInt2 = 10;

const numberFloat1 = '12.12qwe';
const numberFloat2 = 10.01;

console.log('sum integer', numberInt1 + numberInt2);
console.log('sum float', numberFloat1 + numberFloat2);

console.log('integer:', parseInt(numberFloat1));
console.log('float:', parseFloat(numberFloat1));

// const pow = prompt('enter pow for 2');
// console.log(`2 pow to ${pow} : `, Math.pow(2, pow));

console.log('floor', Math.floor(numberFloat2));
console.log('ceil', Math.ceil(numberFloat2));

console.log(Math.floor(Math.random() * (10 - 1) + 1));
