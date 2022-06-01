// importar os elementos atuais
// renderizar os todos
// function add todo
// function remove todo
// function add to Local Storage

var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');
buttonElement.onclick = addTodo;

// var todos = [
//   'Fazer café',
//   'Aprender Javascript',
//   'Acessar a comunidade da Rocketseat'
// ]

var todos = JSON.parse(localStorage.getItem('todo_list')) || [];

renderTodos(todos)

function renderTodos(todos) {
  listElement.innerHTML = '';
  for (todo of todos) {
    pos = todos.indexOf(todo);
    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(todo);
    var linkElement = document.createElement('a');
    var linkText = document.createTextNode('Excluir');
    linkElement.appendChild(linkText);
    linkElement.setAttribute('href', '#');
    linkElement.setAttribute('onclick', 'removeTodo(' + pos + ')')

    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);
    listElement.appendChild(todoElement);
  }
}

function addTodo() {
  todos.push(inputElement.value)
  renderTodos(todos);
  saveToLocalStorage(todos);
}

function removeTodo(pos) {
  todos.splice(pos, 1)
  renderTodos(todos);
  saveToLocalStorage(todos);
}

function saveToLocalStorage(todos) {
  localStorage.setItem('todo_list', JSON.stringify(todos))
}
