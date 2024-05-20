const { Admin } = require("../db");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username
    const password = req.headers.password

    console.log("validating admin credentials");

    const user = await Admin.findOne({username : username, password : password});

    if(user === null){
        res.status(401).send("Invalid Credentials");
        return;
    }
    console.log("validated admin credentials");
    next();
}

module.exports = adminMiddleware;