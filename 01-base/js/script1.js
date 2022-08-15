'use strict';
// const [a] = [['2'] + [2]];

// export const MY_NAME = 'SCRIPT2';

// wrong
// const a = 4;
// a = '2' + 2;

// right
const a = '2' + 2;

console.log('a>>>', typeof a);

let c;
const b = a * a;
c = a / a;

console.log('b>>>', b);

console.log('c>>>', c);

// alert('Hello user');

// console.error('error of script1');
console.warn('warning of script1');

// const num = prompt('add your number');
// const sum = Number(num) + 1;
// console.log('sum>>>', sum);

const str = prompt('add your string');
const resStr = 'my string :' + str;
console.log('resStr>>>', resStr, resStr.length);
console.log(resStr.toUpperCase());
console.log(resStr.toLowerCase());

// const res = confirm('are you sure?');
// console.log('res>>>', res);

// number
// string
// null
// undefined
// boolean
// symbol

// false - undefined, false, '' , null , 0 , NaN
