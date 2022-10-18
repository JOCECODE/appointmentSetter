import { PrismaClient } from "@prisma/client"
import { NextApiResponse, NextApiRequest} from "next"

// Instantiate PrismaClient
const prisma = new PrismaClient();

export default async function handler(
    _req: NextApiRequest,
    res: NextApiResponse
) {
    const posts = await prisma.customers.findMany()
    res.json(posts)
}