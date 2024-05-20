const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');
const { User } = require('../db');

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    let token = req.headers.authorization;

    try{
        token = token.split(" ")[1];
        const decode = jwt.verify(token, JWT_SECRET);
        const username = decode.username;

        const exists = await User.findOne({username});
        if(exists === null){
            return res.status(400).json({
                message: "Invalid token"
            });
        }
        req.user = exists;
        next();
    }catch(err){
        return res.status(401).json({message: err.message});
    }
}

module.exports = userMiddleware;