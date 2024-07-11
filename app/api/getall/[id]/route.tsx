import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const id = parseInt(params.id);
        const result = await prisma.users.findUnique({
            where: { id },
        });
        if (!result) {
            return Response.json({
                message: `id ${id} not found!!!`,
            });
        }
        return Response.json(result);
    } catch (error) {
        return Response.json(error);
    }
}

export async function PUT(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const id = parseInt(params.id);
        const editdata = await req.json();
        const result = await prisma.users.update({
            where: { id },
            data: editdata,
        });
        return Response.json({
            message: "Edit OK",
            data: result,
        });
    } catch (error) {
        return Response.json(error);
    }
}

export async function DELETE(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const id = parseInt(params.id);
        const result = await prisma.users.delete({
            where: { id },
        });

        return Response.json({
            message: "Delete OK",
            Deletedata: result,
        });
    } catch (error) {
        return Response.json(error);
    }
}
