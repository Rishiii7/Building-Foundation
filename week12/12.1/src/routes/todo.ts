import { prisma } from "..";
import {Router, Request, Response} from 'express'

const app = Router();

type Todo = {
    title : string;
    description? : string;
    done? : boolean;
    userId : number;
}


app.get("/:id" , async (req : Request,  res : Response) => {
    const userId  = parseInt(req.params.id);
    const response = await prisma.todo.findMany({
        where : {
            userId : userId
        },
        select : {
            title : true,
            description : true,
        },
    });

    console.log(JSON.stringify(response));

    return res.json({
        message : "User fetched successfully",
    })
});

const insertTodo = async(todo : Todo) => {
    const response = await prisma.todo.create({
        data :{
            title : todo.title,
            description : todo.description,
            userId : todo.userId
        },
    });

    console.log(response);
}

const getTodo = async (userId : number) => {
    const response = await prisma.todo.findMany({
        where : {
            userId : userId
        },
        select : {
            title : true,
            description : true,
        },
    });

    console.log(JSON.stringify(response));
};

export default app;