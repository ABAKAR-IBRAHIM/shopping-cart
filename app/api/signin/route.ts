import { NextRequest, NextResponse } from "next/server";
import User from "@/app/lib/models/user";
import connectDatabase from "../../lib/databaseConnection";
var bcrypt = require("bcryptjs");
export async function GET(request: NextRequest) {
  const email = request.nextUrl.searchParams.get("email");
  const password = request.nextUrl.searchParams.get("password");

  try {
    await connectDatabase();
    const user = await User.findOne({ email: email });
    if (!user) {
      return NextResponse.json({ error: "email or password is incorrect" });
    }
    const matched = await bcrypt.compare(password, user.password);

    if (!matched) {
      return NextResponse.json({ error: "email and password do not match" });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      error: "something went wrong,please try again",
    });
  }
}
