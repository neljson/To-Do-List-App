// Version 5 (For Loops): It should display all items in our list as .todoText propety. It should
// display a message to tell user that To do list is empty. It should display
// our .completed property

const todo = {
    todo: [],
    displayTodo: function () {
        if (this.todo.length === 0) {
            console.log('You have finished everything on your To Do List!')
        } else {
            console.log('My To do list:')
            for (let i = 0; i < this.todo.length; i++) {
                if (this.todo[i].completed === true) {
                    console.log('(x)', this.todo[i].todoText)
                } else {
                    console.log('()', this.todo[i].todoText)
                }
            }
        }  
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