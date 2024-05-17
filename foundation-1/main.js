const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const jsonParser = bodyParser.json();

const port = 3000

app.use(jsonParser);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
    console.log("request has reached");
    for(let i=0; i<100; i++){}
    res.send("Hello World !");
});

app.post('/conversation', (req, res) => {
    console.log("request has reached");
    console.log(req.body);
    res.send({
        msg : "2+2=4"
    });
})