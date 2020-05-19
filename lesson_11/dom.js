const someBtn = document.querySelector('#myCoolBtn'); // выбрать элемент с помощью селекторов

// обьфвит функцию обработчик клика
function average() {
  const userNumbers = [];
  let userNumber = parseInt(prompt('Enter number'));
  // аккумулируем пользовательский ввод
  while (!isNaN(userNumber)) {
    userNumbers.push(userNumber);
    userNumber = parseInt(prompt('Enter number'));
  }

  let total = 0; // аккумулятор суммы
  // userNumbers.length; - возвращает длину массива
  for (let i = 0; i < userNumbers.length; i++) {
    const currentNumber = userNumbers[i];
    total = total + currentNumber;
  }

  alert(total / userNumbers.length);
}

function test() {
  console.log(i++);
}
// прфвязать функцию обработчик к СОБЫТИЮ
// someBtn.onclick = test;
// someBtn.onclick = average;
// единственный верный спосб навешивания обработчиков на события 'click'
someBtn.addEventListener('click', average);
someBtn.addEventListener('click', test);
