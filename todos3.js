// importar os elementos atuais
// renderizar todos
// add todo
// remove todo
// save to localStorage

var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')
buttonElement.onclick = addTodo;

var todos = JSON.parse(localStorage.getItem('list_todos3'))

renderTodos(todos)

function renderTodos(todos) {
  listElement.innerHTML = '';
  for (todo of todos) {
    pos = todos.indexOf(todo);
    var itemElement = document.createElement('li')
    var itemText = document.createTextNode(todo)
    var linkElement = document.createElement('a')
    var linkText = document.createTextNode('Excluir')
    linkElement.setAttribute('href', '#')
    linkElement.appendChild(linkText)
    linkElement.style.color = '#f00'
    linkElement.style.padding = '10px'
    linkElement.setAttribute('onclick', 'removeTodo('+pos+')')

    itemElement.appendChild(itemText)
    itemElement.appendChild(linkElement)
    listElement.appendChild(itemElement)
    
  
  }
}

function addTodo() {
  todos.push(inputElement.value)
  renderTodos(todos)
  saveToLocalStorage()
}

function removeTodo(pos) {
  todos.splice(pos, 1)
  renderTodos(todos)
  saveToLocalStorage()
}

function saveToLocalStorage() {
  localStorage.setItem('list_todos3', JSON.stringify(todos))
}