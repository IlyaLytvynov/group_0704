// переменные
// типы данных
// if ... else
// loops циклы for, while, do .. while
// fucntions
// OOP class
// DOM
const aStr = prompt('Enter operand a');
const bStr = prompt('Enter operand b');
const operator = prompt('Enter + or -');

if (operator === '+') {
  alert(parseInt(aStr) + parseInt(bStr));
} else if (operator === '-') {
  alert(parseInt(aStr) - parseInt(bStr));
} else if (operator === '*') {
  alert(parseInt(aStr) * parseInt(bStr));
} else if (operator === '/') {
  alert(parseInt(aStr) / parseInt(bStr));
} else {
  alert('Unknown operator, reload page');
}
