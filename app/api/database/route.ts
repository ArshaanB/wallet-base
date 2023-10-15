// If it doesn't work in the future: npx prisma generate
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { nickname, address } = await request.json();
  const result = await prisma.account.create({
    data: {
      nickname,
      address
    }
  })
  return new Response(JSON.stringify(result));
}

export async function GET() {
  const result = await prisma.account.findMany();
  return new Response(JSON.stringify(result));
}