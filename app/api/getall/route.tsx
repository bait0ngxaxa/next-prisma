import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET() {
    try {
        const result = await prisma.users.findMany();
        return Response.json(result);
    } catch (error) {
        return Response.json(error);
    }
}

export async function POST(req: Request) {
    const request = await req.json();
    try {
        const result = await prisma.users.create({
            data: request,
        });
        return Response.json({
            status: 201,
            message: "insert OK",
            result: result,
        });
    } catch (error) {
        return Response.json(error);
    }
}


