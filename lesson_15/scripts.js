import './js/context.js';
import { Button } from './js/button.js';
import { Header } from './js/Header.js';
const body = document.querySelector('body');
const signInBtn = new Button(body, 'Sign in', 'success', function () {
  alert('SignIN');
});
signInBtn.render();

const logOut = new Button(body, 'Log in', 'default', function () {
  alert('Logout');
});
logOut.render();

const pageHeader = new Header(body, ['Sign In', 'Sign Up']);
pageHeader.render();
