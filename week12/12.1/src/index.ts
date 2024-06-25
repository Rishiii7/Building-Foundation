import { PrismaClient } from "@prisma/client";
const express = require('express');
import userRouter from './routes/user'
import todoRouter from './routes/todo'

export const prisma  = new PrismaClient();
const app = express();
const port = 3000;

app.use("/user", userRouter);
app.use("/todo", todoRouter);

app.listen( port, () => {
    console.log('Server is running on port 3000');
});
