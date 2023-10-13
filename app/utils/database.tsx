// If it doesn't work in the future: npx prisma generate
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createUser(name?: string) {
  const newUser = await prisma.user.create({
    data: {
      name: name
    }
  });

  return newUser;
}
