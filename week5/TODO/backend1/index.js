const express = require('express');
const bodyParser = require('body-parser');
const Todo = require('./db/db');
const cors = require('cors');
const { putTodoValidator, inputTodoValidator } = require('./middleware/inputvalidater');


const app = express();
app.use(bodyParser.json());
app.use(cors());




const port = 3000;
app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
});


// get all todos
// Input
// body {
    // title : string,
    // description : string,
// }
app.get('/todos', async (req, res) => {
    console.log("in the get method");
    try {
        const todos = await Todo.find().select('-__v');
        return res.json({
            status_code : 200,
            data : todos
        });
    } catch( error ){
        return res.json({
            status_code : 500,
            data : error.message
        });
    }
});


// put the todo into database
app.post('/todo', inputTodoValidator, async (req, res) => {
    const {title, description} = req.body;
    console.log(title, description);

    try{
        // insert the todo into DB
        let newTodo = {title, description,  completed : false };
        newTodo = new Todo(newTodo);
        await newTodo.save();
        return res.json({
            status_code : 200,
            data : 'Todo added successfully',
        });
    } catch (error) {
        return res.json({
            status_code : 402,
            data : error.message
        });
    }
});


//delete a toto with particular id
app.delete('/todo/:id', (req, res) => {

});

// update the todo with id
app.put('/todo', putTodoValidator, async (req, res) => {
    const id = req.body.id;
    console.log(typeof id);

    try {
        const todo = await Todo.findById(id);
        if(todo === null) {
            throw new Error("No such id present");
        }
        
        // chaneg the status of completed from fals to true
        console.log(todo);
        
        await Todo.updateOne({
            _id : id
        }, {
            completed : !todo.completed
        });

        return res.json({
            status_code : 200,
            data : 'Todo updated successfully',
        });
    } catch (error) {
        return res.json({
            status_code : 402,
            data : error.message
        });
    }

});

app.use((err, req, res, next) => {
    console.log(err);
    return res.json({
        status_code : 500,
        data : "Internal server error, please try again some time"
    });
})