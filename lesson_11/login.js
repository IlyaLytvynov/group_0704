const loginBtn = document.querySelector('#logInBtn');
function login() {
  const userName = prompt('Enter user name');

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
