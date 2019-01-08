// Version 6: It should have a toggleAll feature. If all items are checked, it should toggle off (false), otherwise check everything (all true).

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
    toggleAll: function () {
        const totalTodo = this.todo.length
        let completedTodo = 0
    // Count number of to dos that are completed
        for (let i = 0; i < this.todo.length; i++) {
            if (this.todo[i].completed === true ) {
                completedTodo++
            }
        }
    // Case 1: If all items are finished(true), then uncheck all items(make every item false)
        if (completedTodo === totalTodo) {
            for (let i = 0; i < this.todo.length; i++) {
                this.todo[i].completed = false}
    // Case 2: Otherwise, check the rest of the items (make everything true)
        } else {
            for (let i = 0; i < this.todo.length; i++) {
                this.todo[i].completed = true}
        }
        
        this.displayTodo()
    }

}