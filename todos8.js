// import elements

var listElement = document.querySelector('div#app ul');
var inputElement = document.querySelector('div#app input');
var buttonElement = document.querySelector('div#app button');
buttonElement.addEventListener('click', addTodo)

var todos = [
  'Fazer café',
  'Estudar js',
  'Entrar na comunidade Rocketseat'
]

renderTodos()

function renderTodos() {
  listElement.innerHTML = '';
  for (todo of todos) {
    var itemElement = document.createElement('li');
    var itemText = document.createTextNode(todo);
    itemElement.appendChild(itemText);
    listElement.appendChild(itemElement);
    
    var linkElement = document.createElement('a');
    var linkText = document.createTextNode('Excluir');

    linkElement.appendChild(linkText);
    linkElement.setAttribute('href', '#');
    linkElement.style.marginLeft = '40px';
    itemElement.appendChild(linkElement);

    
  }
}

function addTodo() {
  todos.push(inputElement.value)
  renderTodos()
}

function removeTodo(position) {
  todos.splice(position, 1)
}