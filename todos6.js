// Importar os elementos atuais.
// renderizar Todos.
// function add Todo.
// function remove Todo.

const listElement = document.querySelector('#app ul');
const inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');
buttonElement.addEventListener('click', addTodo);

const todos = JSON.parse(localStorage.getItem('list_todos6')) || [];

renderTodos()

function renderTodos() {
  listElement.innerHTML = '';
  for (todo of todos) {
    const pos = todos.indexOf(todo);
    const itemElement = document.createElement('li');
    const itemText = document.createTextNode(todo);
    const linkElement = document.createElement('a');
    const linkText = document.createTextNode('Excluir');
    itemElement.appendChild(itemText);
    linkElement.appendChild(linkText);
    linkElement.setAttribute('href', '#');
    linkElement.style.padding = '10px';
    itemElement.appendChild(linkElement);
    listElement.appendChild(itemElement);
    linkElement.setAttribute('onClick', 'removeTodo('+pos+')');
  }
}

function addTodo() {
  todos.push(inputElement.value);
  inputElement.value = '';
  renderTodos();
  saveToLocalStorage();
}

function removeTodo(pos) {
  todos.splice(pos, 1);
  renderTodos();
  saveToLocalStorage();
}

function saveToLocalStorage() {
  localStorage.setItem('list_todos6', JSON.stringify(todos));
}