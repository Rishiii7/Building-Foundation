const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://riso2414:QAZwsx%401234@cluster0.ud80h5k.mongodb.net/todo');

// todo schema
const todoSchema = new mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
});

// create a model
const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;