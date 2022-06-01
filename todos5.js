// Importar os elementos atuais
// Renderizar Todos
// Function Add Todo
// FUnction Remove Todo
// Function Save to Localhost

var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');
// buttonElement.onclick = addTodo;
buttonElement.addEventListener('click', addTodo)

var todos = JSON.parse(localStorage.getItem('list_todos5')) || []

renderTodos(todos);

function renderTodos(todosArray) {
  listElement.innerHTML = '';
  for(todo of todosArray) {
    pos = todosArray.indexOf(todo)
    var itemElement = document.createElement('li');
    var itemText = document.createTextNode(todo);
    var linkElement = document.createElement('a');
    
    linkElement.setAttribute('href', '#');
    var linkText = document.createTextNode('Excluir');
    linkElement.style.padding = '10px';
    
    linkElement.appendChild(linkText);
    itemElement.appendChild(itemText)
    itemElement.appendChild(linkElement)
    listElement.appendChild(itemElement)
    linkElement.setAttribute('onclick', 'removeTodo('+ pos +')');
  }
}

function addTodo() {
  todos.push(inputElement.value);
  renderTodos(todos);
  saveToLocalStorage()
}

function removeTodo(pos) {
  todos.splice(pos, 1);
  renderTodos(todos);
  saveToLocalStorage()
}

function saveToLocalStorage() {
  localStorage.setItem('list_todos5', JSON.stringify(todos))
}


