import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");

  const users = await prisma.users.findMany({
    where: {
      name: {
        contains: name, 
        mode: "insensitive", 
      },
    },
  });

  return NextResponse.json({
    status: 200,
    message: "Search users successfully!",
    payload: users,
  });
}