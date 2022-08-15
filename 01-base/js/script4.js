const a = 3;

console.log('2>5', typeof (2 > 5));
console.log('2>5', 2 < 5);
console.log('2<3<7', 2 < a && a < 7 && 'hello');
console.log(
  'logic else 2nd: 2<3>7',
  2 < a || (a > 7 && 'hello')
);
console.log(
  'logic else 1st: 2<3>7',
  (2 < a || a > 7) && 'hello'
);

console.log("undefined&&'hi", undefined && 'hi');
console.log("true&&'hi", true && 'hi');

console.log('!true', !true);

console.log('!first', !'first');

// console.log('length of empty string', Boolean(''.length));
// console.log('length of empty string', !!''.length);

console.log('!!a', !!a);
