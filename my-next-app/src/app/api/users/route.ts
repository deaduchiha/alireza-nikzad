import { PrismaClient } from "@prisma/client";
import { PrismaD1 } from "@prisma/adapter-d1";
import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = "edge";

export async function GET(request: Request) {
  const db = getRequestContext().env.DB;
  const adapter = new PrismaD1(db);
  const prisma = new PrismaClient({ adapter });

  const users = await prisma.user.findMany();

  return Response.json(users);
}

export async function POST(request: Request) {
  const db = getRequestContext().env.DB;
  const adapter = new PrismaD1(db);
  const prisma = new PrismaClient({ adapter });

  const body: { email: string; name: string } = await request.json();

  const user = await prisma.user.create({
    data: { email: body.email, name: body.name },
  });

  return Response.json(
    {
      message: "User created successfully",
      user: user,
    },
    { status: 201 }
  );
}

export async function DELETE(request: Request) {
  try {
    const db = getRequestContext().env.DB;
    const adapter = new PrismaD1(db);
    const prisma = new PrismaClient({ adapter });

    const { id }: { id: number } = await request.json();

    prisma.user.delete({
      where: {
        id,
      },
    });

    if (!id || typeof id !== "number") {
      return Response.json({ error: "Invalid ID provided" }, { status: 400 });
    }

    const deletedUser = await prisma.user.delete({
      where: { id },
    });

    return Response.json(
      {
        message: "User deleted successfully",
        user: deletedUser,
      },
      { status: 200 }
    );
  } catch (error: any) {
    if (error.code === "P2025") {
      // error code to handle check user is exist or not
      return Response.json(
        { error: "User not found. Unable to delete." },
        { status: 404 }
      );
    }

    return Response.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}
