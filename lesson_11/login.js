const loginBtn = document.querySelector('#logInBtn'); // Single element

function login() {
  const userName = prompt('Enter user name');
  loginBtn.style.backgroundColor = 'red';
  loginBtn.style.fontSize = '20px';

  loginBtn.classList.remove('active'); // удалить класс
  loginBtn.classList.add('active'); // добавить класс

  if (userName === 'admin') {
    const password = prompt('Enter password');
    if (password === '123') {
      alert('Hello admin!!I can show you secret info!');
    } else {
      alert('Password wrong, reload!');
    }
  } else {
    alert('Hello ' + userName);
  }
}

loginBtn.addEventListener('click', login);
