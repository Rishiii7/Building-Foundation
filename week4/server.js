const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const inputMiddleware = require('./middleware');

const app = express();

app.use(cors());
app.use(bodyParser.json());
// app.use();

app.listen(3000, () =>{
    console.log('Server is running on port 3000');
});

app.get('/sum', (req, res) => {
    let a = req.query.a;
    let b = req.query.b;
    try{
        a = parseInt(a);
        b = parseInt(b);
        if(isNaN(a) || isNaN(b)){
            throw new Error('Invalid input');
        }

        let sum = a + b;
        return res.json({
            statusCode : 200,
            message : sum
        });
    } catch (error) {
        return res.json({
            statusCode : 402, // unexpected error
            message : error.message
        });
    }
    
});

app.post('/sum', inputMiddleware, (req, res) => {
    let a = req.body.a;
    let b =req.body.b;

    try{
        let sum = a + b;
        return res.json({
            statusCode : 200,
            message : sum
        });

    }catch(error) {
        return res.status(400).json({
            statusCode : 400,
            message : error.message
        });
    }
})