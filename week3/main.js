const express = require('express')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')
const z = require('zod')

const app = express()
const port = 3000
const jwtPassword = "12345"

const schema = z.object({
    username: z.string().min(1).max(20),
    password: z.string().min(1).max(20),
    email : z.string().email()
})

const USERS = [
    {
        username : "Rishi",
        password : "1234",
        email : "rishi234@gmail.com" 
    },
    {
        username : "John",
        password : "2345",
        email : "John2345@gmail.com" 
    },
    {
        username : "Smith",
        password : "3456",
        email : "Smith3456@gmail.com" 
    },
]

function checkCredentials(username, password) {
    const found = USERS.find( (user) => {
        return user.username === username && user.password === password
    })

    if(found === null) {
        return false;
    }
    return true;
}

function inputValidation(req, res, next){

    console.log("validating Inputs");

    const username = req.body.username
    const password = req.body.password
    const email = req.body.email

    input = {
        username : username,
        password : password,
        email : email
    }

    const response = schema.safeParse(input);
    if(! response.success) {
        return res.status(400).json({message : "Invalid input"});
    }

    console.log("Inputs validated, OK to proceed !");
    next();
}

function authenticationMiddleware(req, res, next){
    console.log("validating credentials");

    const username = req.body.username
    const password = req.body.password

    // console.log(username)
    // console.log(password)

    if(! checkCredentials(username, password)){
        return res.status(401).json({
            message: 'Invalid username or password'
        });
    }

    console.log("successfully validated");
    next();

}

app.use(bodyParser.json());

app.listen(port , () =>{
    console.log(`Server is running on port ${port}`);
});

app.post('/signin', inputValidation, authenticationMiddleware, (req, res) => {

    const username = req.body.username
    // convert the username into jwt token
    let token = jwt.sign({username : username}, jwtPassword);
    return res.status(200).json({
        token
    });

});

app.get('/users', (req, res) => {
    const token = req.headers.authorization

    //verify the jwt token and return the particuar user
    jwt.verify(token, jwtPassword, (err, decoded) => {
        if(err) {
            res.status(401).json({
                message: 'Invalid token'
            })
            return ;
        }

        const user = USERS.filter(user => user.username !== decoded.username);
        if (user === null) {

            return res.status(404).json({ 
                message: 'User not found' 
            });

        }
        return res.status(200).json({
            usersname : user
        })
    });

});

app.use( (err, req, res, next) =>{
    return res.status(400).json({
        error : err
    });
});