// Version 4 (adding items to arrays as objects): It should have objects as an array instead of strings in order to represent more data, 
// ie whether we completed the task

const todo = {
    todo: [],
    displayTodo: function () {
        console.log(this.todo)
    },
    addTodo: function(todoText) {
        this.todo.push({
            todoText: todoText,
            completed: false
        })
        this.displayTodo ()
    },
    changeTodo: function(position, todoText) {
        this.todo[position].todoText = todoText
        this.displayTodo()
    },
    deleteTodo: function(position) {
        this.todo.splice(position, 1)
        this.displayTodo()
    },
    toggleCompleted: function(position) {
        const todo = this.todo[position]
        todo.completed = !todo.completed
        this.displayTodo()
    },

}