const z = require('zod');

const schema = z.object({
    a : z.number(),
    b : z.number()
});

function inputMiddleware(req, res, next) {
    let a = req.body.a;
    let b = req.body.b;

    try{
        a = parseInt(a);
        b = parseInt(b);
        let response = schema.safeParse({a,b});
        if(! response.success) {
            throw new Error("Not Integer");
        }
        req.body.a = a;
        req.body.b = b;
        next();
    } catch (error) {
        res.status(400).json({
            statusCode: 400,
            message : error.message
        });
    }
}

module.exports = inputMiddleware