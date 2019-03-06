const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete']) 
Todo.updateOptions({new:true, runVaidators: true})

module.exports = Todo