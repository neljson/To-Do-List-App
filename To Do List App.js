// Version 2 and 3 (objects): It should oragnize functions on a Todo list object

const todo = {
    todo: ['item1', 'item2', 'item3'],
    displayTodo: function () {
        console.log(this.todo)
    },
    addTodo: function(newItem) {
        this.todo.push(newItem)
        this.displayTodo ()
    },
    changeTodo: function(position, newValue) {
        this.todo[position] = newValue
        this.displayTodo()
    },
    deleteTodo: function(position) {
        this.todo.splice(position, 1)
        this.displayTodo()
    }
}
