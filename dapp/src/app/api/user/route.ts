import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();

    const { account } = body;

    const user = await prisma.user.upsert({
      where: {
        account,
      },
      update: {},
      create: {
        account,
      },
    });

    console.log(user);

    return NextResponse.json({
      user,
    });
  } catch (error) {
    console.error(error);
  }
};
