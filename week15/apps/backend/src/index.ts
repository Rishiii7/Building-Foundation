import express from "express";

const app = express();
app.use(express.json());


app.listen( 8000, () => {
    console.log('server running on port 3000');
});


app.get('/', (req, res) => {
    res.json({
        message : 'GET method from express'
    });
});


app.post('/', (req, res) => {
    const body = req.body;
    res.json({
        message : 'POST method from express',
        data : body
    });
});