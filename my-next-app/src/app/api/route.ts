import { PrismaClient } from "@prisma/client";
import { PrismaD1 } from "@prisma/adapter-d1";
import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = "edge";

export async function GET(request: Request) {
  const db = getRequestContext().env.DB;
  const adapter = new PrismaD1(db);
  const prisma = new PrismaClient({ adapter });

  const users = await prisma.user.findMany();

  const contacts = await prisma.contact.findMany();

  const results = {
    users,
    contacts,
  };

  return Response.json(results);
}

export async function POST(request: Request) {
  const db = getRequestContext().env.DB;
  const adapter = new PrismaD1(db);
  const prisma = new PrismaClient({ adapter });

  const body: { email: string; name: string } = await request.json();

  const user = await prisma.user.create({
    data: { email: body.email, name: body.name },
  });

  return Response.json(user);
}
