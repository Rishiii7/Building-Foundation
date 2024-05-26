const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const z = require('zod')
const jwt = require('jsonwebtoken')

const app = express()
const port = 3000
const jwtPassword = "12345"
const DB_NAME = "user_app"
const DB_URL = "mongodb+srv://riso2414:QAZwsx%401234@cluster0.ud80h5k.mongodb.net/"

//validation schema with zod
const userSchema = z.object({
    name: z.string().min(1).max(20),
    email: z.string().email(),
    password: z.string().min(4).max(20)
})

// connect to the mongoose database
mongoose.connect(DB_URL + DB_NAME);

const User = mongoose.model('users', {name : String, email: String, password : String});

app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

function inputValidationMiddleware(req, res, next) {
    console.log("validating the inputs");

    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    const user = {
        name: username,
        email: email,
        password: password
    }

    const response = userSchema.safeParse(user);
    if( ! response.success) {
        res.status(400).json({
            message: response.error
        });
        return ;
    }

    console.log("inpute validated");
    next();
}

async function userExsist(username, password){
    // check for user in User database
    try{
        console.log("Checking if user already exsisted in database");
        const user = await User.findOne({name: username, password: password});
        // console.log(user)
        if(user === null) {
            return false;
        }
        return true;
    }catch(error){
        console.log(error);
        throw error;
    }
        
}


app.get('/users',  (req, res) => {
    const token = req.headers.authorization;
    
    jwt.verify(token, jwtPassword, async (err, decode) => {
        if(err) {
            res.status(401).json({
                message: "Invalid token"
            });
            return ;
        }

        // return all user except the authorized one
        const users = await User.find({name: {$ne: decode.username}});
        // const users = await User.find( {name:decode.username})

        console.log(users);

        return res.status(200).json({
            message: "All users",
            users: users
        })

    })

})

app.post('/singup', inputValidationMiddleware, async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    //check if user already exsist in database
    const exsist = await userExsist(username, password);
    if( exsist ){
        console.log("User already exsist");
        return res.status(400).json({
            message: "User already exsist"
        });
    }

    try {
        console.log("Creating new user");
        const user = new User({name: username, email: email, password: password});
        user.save();
        console.log("User created");

        // create jwt token for that user
        const token = jwt.sign({username: username}, jwtPassword);
        res.status(200).json({
            message: "User created successfully",
            token: token
        });
    }
    catch(error) {
        console.log(`Error occured while saving user into database ${error}`);
        throw error;
    }
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        message: "Internal server error, Please try again some time !!!"
    });
});