import { trafficLighter } from './scripts/trafficLighter.v.4.js';

trafficLighter(document.querySelector('.my-first-traffic-lighter'));
trafficLighter(document.querySelector('.my-second-traffic-lighter'));
trafficLighter(document.querySelector('.my-third-traffic-lighter'));

const myNewPageTitle = document.createElement('h1'); // создание обьекта ДОМ
myNewPageTitle.classList.add('my-cool-header', 'large-text');
myNewPageTitle.innerHTML = 'Hello Im new one!';

// console.log(myNewPageTitle);

// const body = document.querySelector('body');

// body.insertBefore(
//   myNewPageTitle,
//   document.querySelector('.my-first-traffic-lighter')
// ); // добавление элемента на страницу
