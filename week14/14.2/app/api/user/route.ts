import { NextRequest } from "next/server";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export function GET() {
    return Response.json({
        email : 'rishi@gmail.com',
        password : 'rishi123',
        name : 'Rishi'
    });
};

export async function POST(req : NextRequest) {

    // extract the body
    const body = await req.json();

    console.log(body);

    const repsonse = await prisma.user.create({
        data : {
            username : body.username,
            password : body.password
        }
    });

    return Response.json({
        message : 'you are logged in',
    });

}