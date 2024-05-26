const { createTodo, updateTodo } = require("../validator/types");

function inputTodoValidator(req, res, next) {
    const {title, description} = req.body;
    console.log(title, description);

    try{
        const response = createTodo.safeParse({title, description});
        if(! response.success) {
            throw new Error("Invalid Input for TODO");
        }

        req.body = {title, description};
        next();
    } catch(error) {
        console.log(error);
        return  res.json({
            status_code: 401,
            data : error.message
        });
    }
}

function putTodoValidator(req, res, next) {
    const id = req.body.id;
    console.log(`id retrived is ${id}`);

    try{
        const response = updateTodo.safeParse({id});
        if( ! response.success) {
            throw new Error("Invalid Input to update TODO");
        }

        req.body.id = id;
        next();
    } catch (error) {
        console.log(error);
        return res.json({
            status_code: 401,
            data: error.message
        });
    }
}

module.exports = {
    inputTodoValidator,
    putTodoValidator
}