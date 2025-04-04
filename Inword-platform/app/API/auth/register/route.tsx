import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const { email, password, name } = await req.json();

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Store user in DB
  const user = await prisma.user.create({
    data: { email, password: hashedPassword, name },
  });

  return NextResponse.json(
    { message: "Congrats, you are registered!", user }, // Add the message
    { status: 201 }
  );
}

