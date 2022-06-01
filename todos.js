var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');
buttonElement.onclick = addTodo;

var todos = [
  "Fazer café",
  "Estudar javascript",
  "Acessar a comunidade Rocketseat"
]

renderTodos()

// render Todo
function renderTodos() {
  listElement.innerHTML = '';

  for (todo of todos) {
    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(todo);

    var linkElement = document.createElement('a');

    linkElement.setAttribute('href', '#')

    var pos = todos.indexOf(todo)
    linkElement.setAttribute('onclick', 'removeTodo(' + pos + ')');

    var linkText = document.createTextNode('Excluir');

    linkElement.appendChild(linkText);
    todoElement.appendChild(todoText);
    listElement.appendChild(todoElement);
    todoElement.appendChild(linkElement);
  }
}
// function add tod
function addTodo() {
  todos.push(inputElement.value)
  inputElement.value = '';
  renderTodos()
}
// function remove todo
function removeTodo(pos) {
  todos.splice(pos, 1)
  renderTodos()
}
