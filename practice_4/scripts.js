const str = prompt('Enter name'); // test
let newStr = '';
const maxLength = 8;

if (str.length > maxLength) {
  for (let i = 0; i < maxLength; i++) {
    newStr += str[i];
  }
  newStr += '...';
} else {
  newStr = str;
}

alert(newStr);
