export async function POST(request:Request) {
    const loginData = await request.json()
    return Response.json({
        message : "OK"
    })
}