import { prisma } from "@lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  const user = await prisma.user.create({
    data: {
      name: data.name,
      surname: data.surname,
      email: data.email,
      password: data.password,
      role: data.role,
    },
  });

  return NextResponse.json(user);
}
