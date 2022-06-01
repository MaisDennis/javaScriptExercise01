// importar os elementos atuais
// renderizar todos
// add todo
// remove todo
// salvar para LocalStorage

var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');
buttonElement.onclick = addTodo;

var todos = JSON.parse(localStorage.getItem('list_todos4')) || [];

renderTodos(todos);

function renderTodos(todos) {
  listElement.innerHTML = '';
  for (todo of todos) {
    var pos = todos.indexOf(todo);
    var itemElement = document.createElement('li');
    var itemText = document.createTextNode(todo);
    var linkElement = document.createElement('a');
    linkElement.setAttribute('href', '#');
    linkText = document.createTextNode('Excluir');
    linkElement.appendChild(linkText);
    linkElement.style.padding = '10px';
    linkElement.setAttribute('onclick', 'removeTodo('+pos+')');

    itemElement.appendChild(itemText);
    itemElement.appendChild(linkElement)
    listElement.appendChild(itemElement);
    
  }
}

function addTodo() {
  todos.push(inputElement.value);
  renderTodos(todos);
  inputElement.value='';
  saveTodosAtLocalStorage()
}

function removeTodo(pos) {
  todos.splice(pos, 1);
  renderTodos(todos);
  saveTodosAtLocalStorage()
}

function saveTodosAtLocalStorage() {
  localStorage.setItem('list_todos4', JSON.stringify(todos))
}