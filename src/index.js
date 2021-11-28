import './scss/main.scss';

const _todoInput = document.querySelector('.todo-input');
const _todoButton = document.querySelector('.todo-button');
const _todoList = document.querySelector('.todo-list');



document.addEventListener('DOMContentLoaded', getTodo);
_todoList.addEventListener('click', delTodo);
_todoButton.addEventListener('click', addTodo);

