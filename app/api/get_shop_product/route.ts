import { NextResponse } from "next/server";
import Shop from "@/app/lib/models/shop";
import connectDatabase from "../../lib/databaseConnection";
export async function GET() {
  try {
    await connectDatabase();
    const products = await Shop.find();
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
