import { NextRequest } from "next/server";

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

    return Response.json({
        message : 'you are logged in'
    });

}