const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require("../config");

async function usernameExsist(username, password) {
    const exsist = await User.findOne({username, password});
    return exsist === null;
}

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    try{
        // Check if username already exists
        const flag = usernameExsist(username, password);
        if(! flag){
            return res.status(400).json({
                message: "Username already exists"
            });
        }
        // Create new user
        const user = new User({username,password});
        await user.save();

        return res.status(200).json({
            message: "User created successfully"
        });
    }catch(err){
        return res.status(500).json({
            message: err.message
        });
    }
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    try{
        const flag = await usernameExsist(username,password);
        if(flag){
            return res.status(400).json({
                message: "Invalid creadentials"
            });
        }
        // console.log(JWT_SECRET);

        const token = jwt.sign({username}, JWT_SECRET);
        return res.status(200).json({
            message: "Login successful",
            token: token
        });
    }catch(err){
        return res.status(500).json({
            message: err.message
        });
    }

});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    try{
        const courses = await Course.find({});
        return res.status(200).json({
            message: "Courses fetched successfully",
            courses: courses
        });
    }catch(err){
        return res.status(500).json({
            message: err.message
        });
    }
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const userId = req.user._id;
    // console.log(`userr id found is ${userId}`);
    try{
        const user = await User.findById(userId);
        const idPresent= user.purchasedCourses.find(id => id === courseId);
        if(idPresent !== null){
            return res.status(400).json({
                message: "Course already purchased"
            });
        }
        user.purchasedCourses.push(courseId);
        await user.save();
        return res.status(200).json({
            message: "Course purchased successfully"
        });
    }catch(err){
        return res.status(500).json({
            message: err.message
        });
    }

});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const userId = req.user._id;
    try{
        const user = await User.findById(userId);
        let courses = user.purchasedCourses.map( async (id) => {
            return await Course.findById(id);
        });
        courses = await Promise.all(courses);
        return res.status(200).json({
            message: "Courses fetched successfully",
            courses: courses
        });
    }catch(err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

module.exports = router


// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIxIiwiaWF0IjoxNzE2MTcxOTExfQ.v87tmXEQxFy8aQrRMHy-38Ye2bAtzuAADRtE9KAPNdo user1

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIyIiwiaWF0IjoxNzE2MTcxMjg3fQ.JOtjImRCEiOO2Nun87gx2-OoFR5X7F6JvzweG76xN3g