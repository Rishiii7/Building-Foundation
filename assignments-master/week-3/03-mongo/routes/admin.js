const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db");


// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    try{
        // Check if username already exists
        const existingUser = await Admin.findOne({ username });
        if(existingUser){
            throw new Error('Username already exists');
        }
        // Create new user
        const user = new Admin({ username, password });
        await user.save();
        return res.status(201).json({ message: 'Admin created successfully' });
    }
    catch(err){
        return res.status(500).json({ message: err.message });
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    // Input: Headers: { 'username': 'username', 'password': 'password' }, Body: { title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com' }
    // Output: { message: 'Course created successfully' }
    const title = req.body.title;
    const description = req.body.description;
    const price = parseInt(req.body.price);
    const imageLink = req.body.imageLink;   
    // const username = req.headers.username;
    
    try{
        // Create new course
        console.log("Creating new course");
        // const courseid = Math.floor(Math.random() * 100000);
        const published = true;
        const course = new Course({ title, description, price, imageLink, published });

        await course.save();
        console.log("Course created successfully");
        return res.status(201).json({ 
            message: 'Course created successfully',
            courseid: course.courseid,
        });
    }catch(err){
        return res.status(500).json({ message: err.message });
    }
    
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const username = req.headers.username;

    try{
        // Fetch all courses
        console.log("Fetching all courses");
        const courses = await Course.find().select(' -__v');
        console.log("Courses fetched successfully");
        return res.status(200).json({
            courses: courses
        });
    }catch(err){
        return res.status(500).json({ message: err.message });
    }
});

module.exports = router;