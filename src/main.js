import { createCounter } from './counter.js';

const button = document.querySelector('#counter');
const counter = createCounter();

button.addEventListener('click', () => {
  button.textContent = `Count is ${counter.increment()}`;
});

document.querySelector('#reset').addEventListener('click', () => {
  counter.reset();
  button.textContent = `Count is ${counter.value}`;
});
