/* eslint-disable import/no-cycle */
/* eslint-disable no-use-before-define */
/* eslint-disable spaced-comment */
// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
// eslint-disable-next-line import/no-cycle
// eslint-disable-next-line import/no-named-as-default
import checkTodos from './checked.js';
import './style.css';

const displayTodos = document.querySelector('.todo-list-inner');
const todoInput = document.querySelector('.add-todo');
const todoForm = document.querySelector('.todo');
const clear = document.querySelector('.clear-completed');
let todos = [];
function addTodo(event) {
  event.preventDefault();
  saveLocalTodos({ description: todoInput.value, completed: false });
  getTodos();
  todoInput.value = '';
}

todoForm.addEventListener('submit', addTodo);

function saveLocalTodos({ description, completed }) {
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.push({ description, completed });
  localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos() {
  //to check if i already have a thing in there?
  //  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  let display = '';
  todos.forEach((todo, index) => {
    const check = todo.completed ? 'checked' : '';
    const completed = todo.completed ? 'completed' : '';
    display += `
    <div class="d-flex ${completed}" id="${index}">
    <input type="checkbox" id="${index}"  class='checkbox' ${check}>
     <label for="${index}" class='label'>${todo.description}</label>
     <i class="fa fa-trash delete"></i><i class="fas fa-ellipsis-v icon"></i>
    </div>
    `;
  });
  displayTodos.innerHTML = display;
}

export default function removeLocalTodos(todo) {
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.splice(todo, 1);
  localStorage.setItem('todos', JSON.stringify(todos));
}

export function completeLocalTodos(todo) {
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  const me = todo.parentElement;
  const answ = todos[me.id];
  if (me.classList.contains('completed')) {
    answ.completed = true;
  } else {
    answ.completed = false;
  }

  localStorage.setItem('todos', JSON.stringify(todos));
}

export const editLocal = (todo) => {
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  const me = todos[todo];
  todoInput.value = me.description;
  me.description = todoInput.value;
  localStorage.setItem('todos', JSON.stringify(todos));
};

const deleteItem = () => {
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos = todos.filter((item) => !item.completed === true);
  localStorage.setItem('todos', JSON.stringify(todos));
};

displayTodos.addEventListener('click', checkTodos);

clear.addEventListener('click', deleteItem);

document.addEventListener('DOMContentLoaded', getTodos);
