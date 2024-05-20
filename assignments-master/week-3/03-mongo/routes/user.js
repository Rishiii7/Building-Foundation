const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    try{

        console.log("signing up user");

        const username = req.body.username;
        const password = req.body.password;

        const user = new User({username:username, password:password});
        await user.save();
        console.log("user signed up");
        return res.status(200).json({
            message: 'User created successfully'
        });

    }catch(err){
        return res.status(400).json({
            message: err.message
        });
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    try{
        console.log("listing courses");
        const courses = await Course.find().select('-__v');
        console.log("courses listed" + courses);
        return res.status(200).json({
            message: 'Courses listed successfully',
            courses: courses
        })
    }catch(err){
        return res.status(400).json({
            message: err.message
        });
    }
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseid = req.params.courseId;
    const username = req.headers.username;

    try{
        // extract that course from course collection
        const course = await Course.findById(courseid);
        if(course === null) {
            return res.status(404).json({
                message: 'Course not found'
            });
        }
        console.log("course found" + course);
        // check if user has already purchased this course
        const user = await User.findOne({username : username});
        const isPurchased = user.purchasedCourses.find(id => id === courseid);
        if(isPurchased) {
            return res.status(400).json({
                message: 'Course already purchased'
            });
        }
        // otherwise add the course to purchase
        user.purchasedCourses.push(courseid);
        await user.save();
        console.log("Course purchased");

        return res.status(200).json({
            message: 'Course purchased successfully'
        });

    }catch(err){
        return res.status(400).json({
            message: err.message
        });
    }

});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username;

    try{
        // find the user
        const user = await User.findOne({username : username});
        //fetch all coursid's and then search them into course table
        const courses = user.purchasedCourses.map( async (courseid) => {
            let course =  await Course.findById(courseid).select('-__v');
            return course;
        });
        const purchasedCourses = await Promise.all(courses);
        console.log(`all the course purchased are : ${purchasedCourses}`);
        return res.status(200).json({
            message: 'Course purchased successfully',
            course : purchasedCourses
        });

    }catch(err){
        return res.status(400).json({
            message: err.message
        });
    }
});

module.exports = router