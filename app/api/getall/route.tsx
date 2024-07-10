"use server"

export async function POST(req:Request,params:Request) {
    const request = await req.json()
    console.log(request)
    return Response.json({
        status : 201,
        message : "insert OK",
        result : request
    })
}