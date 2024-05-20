const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).send("Unauthorized");
    }
    try{
        // remove Bearer from token
        const tokenWithoutBearer = token.split(" ")[1];
        // validate token
        const response = jwt.verify(tokenWithoutBearer, JWT_SECRET);
        console.log("user validated");
        next();
    }catch(err){
        return res.status(401).json({
            message: err.message
        });
    }
}

module.exports = adminMiddleware;