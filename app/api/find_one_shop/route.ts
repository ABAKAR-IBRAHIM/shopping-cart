import { NextRequest, NextResponse } from "next/server";
import Shop from "@/app/lib/models/shop";
import connectDatabase from "../../lib/databaseConnection";
export async function GET(request: NextRequest) {
  const queryParam = request.nextUrl.searchParams.get("id");

  try {
    await connectDatabase();
    const products = await Shop.findById(queryParam);
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
