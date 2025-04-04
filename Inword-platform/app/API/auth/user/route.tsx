import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const { email } = req.query; // Extract email from query string

    try {
      const user = await prisma.user.findUnique({
        where: { email: String(email) },
        select: { id: true, name: true, email: true }, // Exclude password
      });

      if (!user) return res.status(404).json({ error: "User not found" });

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: "Error fetching user" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
