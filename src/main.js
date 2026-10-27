import { createCounter } from './counter.js';
import { fuzzyFilter } from './fuzzy.js';

const button = document.querySelector('#counter');
const counter = createCounter();

button.addEventListener('click', () => {
  button.textContent = `Count is ${counter.increment()}`;
});

const FRUITS = [
  'Apple', 'Apricot', 'Banana', 'Blueberry', 'Cherry', 'Grape',
  'Kiwi', 'Lemon', 'Mango', 'Orange', 'Peach', 'Pear',
  'Pineapple', 'Plum', 'Raspberry', 'Strawberry', 'Watermelon',
];

const input = document.querySelector('#fruit-input');
const list = document.querySelector('#fruit-list');
const selected = document.querySelector('#fruit-selected');

function renderList() {
  const matches = fuzzyFilter(input.value, FRUITS);
  list.replaceChildren();
  if (matches.length === 0) {
    const empty = document.createElement('li');
    empty.className = 'empty';
    empty.textContent = 'No fruits found';
    list.append(empty);
  }
  for (const fruit of matches) {
    const item = document.createElement('li');
    item.textContent = fruit;
    item.addEventListener('click', () => {
      input.value = fruit;
      selected.textContent = `Selected: ${fruit}`;
      list.hidden = true;
    });
    list.append(item);
  }
  list.hidden = false;
}

input.addEventListener('focus', renderList);
input.addEventListener('input', renderList);
document.addEventListener('click', (e) => {
  if (!e.target.closest('.picker')) list.hidden = true;
});
