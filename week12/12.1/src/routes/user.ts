import { prisma } from "..";
import { Router, Request, Response } from 'express';

const app = Router();

type User = {
    username : string;
    email : string;
    password : string;
    firstName? : string;
    lastName? : string;
}

app.get("/:id" , async (req : Request,  res : Response) => {
    const userId  = parseInt(req.params.id);
    const response = await prisma.user.findMany({
        where : {
            id : userId
        },
        select : {
            username : true,
            email : true,
            todo : true,
        },
    });

    console.log(JSON.stringify(response));

    return res.json({
        message : "User fetched successfully",
    })
});

app.post("/" , (req : Request, res : Response) => {
    const {username, email, password, firstName, lastName}  = req.body;
    return res.json({
        message : "Hello from user route"
    });
});

const insertUser = async (user : User) => {

    const response = await prisma.user.create({
        data : {
            username : user.username,
            email : user.email,
            password : user.password,
            firstName : user.firstName,
            lastName : user.lastName
        }
    });

    console.log(response);

}

    
const getUser = async (userId : number) => {
    const response = await prisma.user.findMany({
        where : {
            id : userId
        },
        select : {
            username : true,
            email : true,
            todo : true,
        },
    });

    console.log(JSON.stringify(response));
};

export default app;
