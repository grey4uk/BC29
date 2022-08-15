const str1 = 'Java Script';

const str2 = 'Wonderful language';

// console.log(`${str2} - ${str1}`);
// console.log(str2 + ' - ' + str1);
console.log(str2.concat(` - ${str1}`));

// console.log(str1.split(' '));

console.log('indexof', str1.indexOf('a'));

console.log(
  'includes script',
  //   str1.toLowerCase().includes('Script')
  str1.toLowerCase().includes('Script'.toLowerCase())
);

const resultOfSlice = str1.slice(0, 4);
console.log('resultOfSlice', resultOfSlice);
console.log('str1', str1);

console.log(
  str2.replace('Wonderful', 'Not good') +
    ' - ' +
    resultOfSlice
);
