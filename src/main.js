import { createCounter } from './counter.js';

const button = document.querySelector('#counter');
const resetButton = document.querySelector('#reset');
const counter = createCounter();

button.addEventListener('click', () => {
  button.textContent = `Count is ${counter.increment()}`;
});

resetButton.addEventListener('click', () => {
  counter.reset();
  button.textContent = `Count is ${counter.value}`;
});
