// Version 10: Add Delete buttons to each item

const todoList = {
  todo: [],
// deleted console log displayTodo function, no longer use console, only use view to see our items
  addTodo: function(todoText) {
    this.todo.push({
      todoText: todoText,
      completed: false
    })
  },
  changeTodo: function(position, todoText) {
    this.todo[position].todoText = todoText
  },
  deleteTodo: function(position) {
    this.todo.splice(position, 1)
  },
  toggleCompleted: function(position) {
    const todo = this.todo[position]
    todo.completed = !todo.completed
  },
  toggleAll: function() {
    const totalTodo = this.todo.length
    let completedTodo = 0
    for (let i = 0; i < this.todo.length; i++) {
      if (this.todo[i].completed === true) {
        completedTodo++
      }
    }
    if (completedTodo === totalTodo) {
      for (let i = 0; i < this.todo.length; i++) {
        this.todo[i].completed = false
      }
    } else {
      for (let i = 0; i < this.todo.length; i++) {
        this.todo[i].completed = true
      }
    }
  }
}

const handlers = {

  addTodo: function () {
    const addTodoTextInput = document.getElementById('addTodoTextInput')
    todoList.addTodo(addTodoTextInput.value)
    // we want input text box to clear after adding an item so it is blank and ready to accept next item
    addTodoTextInput.value = ''
    // add view.displayTodo function at end of each handler function. We don't need a display to do button in app, should display to user w/o having to press display each time.
    view.displayTodo()
  },
  changeTodo: function() {
    const changeTodoPositionInput = document.getElementById('changeTodoPositionInput')
    const changeTodoTextInput = document.getElementById('changeTodoTextInput')
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value)
    changeTodoPositionInput.value = ''
    changeTodoTextInput.value = ''
    view.displayTodo()
  },
  deleteTodo: function(position) {
    
    todoList.deleteTodo(position)
    
    view.displayTodo()
  },
  toggleCompleted: function() {
    const toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput")
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber)
    toggleCompletedPositionInput.value = ''
    view.displayTodo()
  },
    toggleAll: function() {
    todoList.toggleAll()
    view.displayTodo()
  }
}

// Create new object called "view" b/c this will be displayed on the screen and what user sees

// this one works
// const view = {
//   displayTodo: function () {
//     const todosUl= document.querySelector('ul')
//     todosUl.innerHTML= ''
//     for (let i=0; i < todo.todo.length; i++) {
//       let todoLi = document.createElement('li')
//       todosUl.appendChild(todoLi)
//     }
//   },
// }

// windows.view = view
// this is to make view object global scope as const variable is not unlike var variable that Gordon used
// also iframe in web dev tools console is not "top" but "about:blank/playcode.io", to make about:blank show 
// up, must include windows.view first, will throw some errors, delete windows.view, and about: blank will show up

const view = {
  displayTodo: function () {
    const todosUl= document.querySelector('ul')
    // resets bullet count to zero, so bullet count matches to do item count
    todosUl.innerHTML= ''
    for (let i=0; i < todoList.todo.length; i++) {
      let todoLi = document.createElement('li')
      // show item as completed (x)
      let todoTextWithCompletion = ''
      if (todoList.todo[i].completed === true) {
        todoTextWithCompletion = '(x) ' + todoList.todo[i].todoText
      } else {
        todoTextWithCompletion = '() ' + todoList.todo[i].todoText
      }
      // each li should have an id for its item position
      todoLi.id = i
      todoLi.textContent = todoTextWithCompletion
      // DOM textContent property on html element. Set each added item as bullets
      // delete button for each to do items
      todoLi.appendChild(this.createDeleteButton())
      todosUl.appendChild(todoLi)
    }
  },
  createDeleteButton: function () {
    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete'
    deleteButton.className = 'deleteButton'
    return deleteButton
  },
  setUpEventListeners: function () {
    const todosUl = document.querySelector('ul')
  // Event delegation. Instead of adding event listeners for each li delete button, just add 
  // single event listener on ul. Add event listener to ul or parent and event listener applied to all elements inside of it. 
    todosUl.addEventListener('click', function(event) {
  // Get the element that was clicked on 
      const elementClicked = event.target
  // Check if elementClicked is a delete button
      if (elementClicked.className === 'deleteButton') {
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id))
      }
    })
  }
}

view.setUpEventListeners()



 
// Gordon uses todos for his array. I use array. He created new variable "todo", I did not. Version 9 vid 5"




