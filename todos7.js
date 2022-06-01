var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')
buttonElement.addEventListener('click', addTodo)

var todos = JSON.parse(localStorage.getItem('list_todos7')) || []

renderTodos()

function renderTodos() {
  listElement.innerHTML = '';
  for (todo of todos) {
    var position = todos.indexOf(todo);
    var itemText = document.createTextNode(todo)
    var itemElement = document.createElement('li')
    var linkText = document.createTextNode('Exluir')
    var linkElement = document.createElement('a')
    linkElement.appendChild(linkText)
    linkElement.setAttribute('href', '#')
    linkElement.style.padding = '10px'

    itemElement.appendChild(itemText)
    itemElement.appendChild(linkElement)
    listElement.appendChild(itemElement)

    linkElement.setAttribute('onclick', 'removeTodo('+position+')')
  }
}

function addTodo() {
  todos.push(inputElement.value)
  inputElement.value='';
  renderTodos()
  saveToLocalStorage()
}

function removeTodo(pos) {
  todos.splice(pos, 1)
  renderTodos()
  saveToLocalStorage()
}

function saveToLocalStorage() {
  localStorage.setItem('list_todos9', JSON.stringify(todos))
}