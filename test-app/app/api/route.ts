export async function GET() {
    const res = await fetch("https://randomuser.me/api/")
    const data = await res.json()

    return Response.json({ data })
}