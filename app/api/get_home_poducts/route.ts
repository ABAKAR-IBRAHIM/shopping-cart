import { NextResponse } from "next/server";
import Home from "@/app/lib/models/home";
import connectDatabase from "../../lib/databaseConnection";
export async function GET() {
  try {
    await connectDatabase();
    const products = await Home.find();
    return NextResponse.json({ products });
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
