// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';

const displayTodos = document.querySelector('.todo-list-inner');

const todoItem = [
  {
    description: 'cook food',
    completed: false,
    index: 0,
  },
  {
    description: 'clean house',
    completed: false,
    index: 1,
  },
  {
    description: 'write code',
    completed: false,
    index: 2,
  },
];
// Lodash, now imported by this script
function displayTodo(featured) {
  let display = '';
  // eslint-disable-next-line array-callback-return
  featured.map((todo) => {
    const {
      description, completed, index,
    } = todo;
    display += `
     <div class="${completed ? 'red d-flex' : 'green d-flex'}">
     <input type="checkbox" name="" id="${index}" class='checkbox'>
      <label for="${index}" class='label'>${description}</label>
     </div>
     `;
  });
  displayTodos.innerHTML = display;
}

document.addEventListener('DOMContentLoaded', displayTodo(todoItem));