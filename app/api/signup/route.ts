import { NextResponse } from "next/server";
import User from "@/app/lib/models/user";
import connectDatabase from "../../lib/databaseConnection";
const bcrypt = require("bcryptjs");

export async function POST(request: Request) {
  const { email, password } = await request.json();
  console.log(`email ${email} password ${password}`);
  try {
    await connectDatabase();
    const hashedpassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email: email,
      password: hashedpassword,
    });
    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
    new Response(
      JSON.stringify({ error: { message: (error as Error).message } }),
      {
        status: 400,
      }
    );
  }
}
