const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require("../config");

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    try{
        // Check if username already exists
        const isExsist = await Admin.findOne({username:username, password:password});
        if(isExsist){
            return res.status(400).send({message: "Username already exists"});
        }
        // Create new admin
        const user = new Admin({username, password});
        await user.save();
        return res.status(201).send({message: "Admin created successfully"});
    }catch(err){
        return res.status(500).send({message: err.message});
    }
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    try{
        // Check if username already exists
        const isExsist = await Admin.findOne({username:username, password:password});
        if(isExsist === null){
            return res.status(400).send({message: "Invalid Credentials"});
        }

        // create a token
        console.log("creating token");
        console.log(JWT_SECRET);
        const token = jwt.sign({username}, JWT_SECRET);
        console.log("token created");
        console.log(token);
        return res.status(200).json({
            message: "Login Successful",
            token :  token
        });
    }catch(err){
        return res.status(400).json({
            message: err.message
        });
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

    try{
        const published = true
        const course = new Course({title, description, price, imageLink, published});
        await course.save();
        return res.status(201).send({
            message: "Course created successfully",
            course_id : course._id
        });
    }catch(err){
        return res.status(500).json({message: err.message});
    }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    try{
        const courses = await Course.find().select('-__v');
        return res.status(200).json({
            message: "Courses fetched successfully",
            courses : courses
        });
    }catch(err){
        return res.status(400).json({
            message: err.message    
        });
    }
});

module.exports = router;