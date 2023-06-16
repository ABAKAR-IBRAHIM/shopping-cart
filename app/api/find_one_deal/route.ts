import { NextRequest, NextResponse } from "next/server";
import Deals from "@/app/lib/models/deals";
import connectDatabase from "../../lib/databaseConnection";
export async function GET(request: NextRequest) {
  const queryParam = request.nextUrl.searchParams.get("id");

  try {
    await connectDatabase();
    const products = await Deals.findById(queryParam);
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
