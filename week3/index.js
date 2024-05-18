const express = require('express')
const zod = require('zod')
const bodyParser = require('body-parser')

const app = express()
const port = 3000
const schema = zod.array(zod.number());


app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
});


function userMiddleware(req, res, next) {
    console.log("Check for authentication");
    const username = req.headers.username;
    const password = req.headers.password;

    if( username != 'Rishi' || password != 'pass'){
        
        res.status(401).json({
            message: 'Unauthorized'
        });
        return ;
    }

    next();

}

function kidneyMiddleware(req, res, next) {
    const kidneyID = req.query.kidneyID;
    console.log("chekcing kidney input");

    if( kidneyID != 1 && kidneyID != 2) {
        
        res.status(400).json({
            message: 'Invalid kidneyID'
        });
        return;
    }

    next();
}

app.use(bodyParser.json());
app.use(userMiddleware);

app.get('/kidney-checkup', kidneyMiddleware, (req, res) => {
    
    console.log("Checking your health");
    res.status(200).json({
        message : "your Kidney is fine"
    });
})

app.post('/health-checkup', (req,res) => {
    // kidney = [1,2]
    const kidney = req.body.kidney;
    const response = schema.safeParse(kidney);
    if(!response.success){
        res.status(400).json({
            message: `${response.error.issues[0].code}, expected ${response.error.issues[0].expected} received ${response.error.issues[0].received}`
        })
        return;
    }
    const kidneyLen = kidney.length;

    res.send(`You have ${kidneyLen} kidney`);
})


// global catches
app.use((err, req, res, next) => {
    // console.log(err);
    res.json({
        message: 'Something went wrong, Check your input again !'
    });
});