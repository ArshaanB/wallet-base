// If it doesn't work in the future: npx prisma generate
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
    const { name } = await request.json();
    const result = await prisma.user.create({
      data: {
        name: name
      }
    })
    return new Response(JSON.stringify(result));
  }