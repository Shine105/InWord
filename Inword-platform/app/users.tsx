import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST() {
    try {
        const user = await prisma.user.create({
            data: {
                email: "test@example.com",
                name: "John Doe",
            }
        });
        return NextResponse.json(user);
    } catch (error) {
        return NextResponse.json({ error: "Failed to create user", details: error }, { status: 500 });
    }
}
