import { NextResponse } from "next/server";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2022-11-15",
  typescript: true,
});

export async function POST(request: Request) {
  const { items, email } = await request.json();
  const lineItems = items.map((item: ProductModel) => ({
    description: item.description,
    quantity: item.quantity,
    price_data: {
      currency: "USD",
      unit_amount: (item.price * 100).toFixed(0),
      product_data: {
        name: item.name,
        images: [item.imageSrc],
      },
    },
  }));

  try {
    const checkoutSession: Stripe.Checkout.Session =
      await stripe.checkout.sessions.create({
        mode: "payment",
        payment_method_types: ["card"],

        line_items: lineItems,

        success_url: `${process.env.HOST}/success`,
        cancel_url: `${process.env.HOST}/cancel`,
      });
    return NextResponse.json({ id: checkoutSession.id });
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

interface ProductModel {
  _id: any;
  name: string;
  imageSrc: string;
  description: string;
  price: number;
  off: number;
  rating: number;
  review: number;
  quantity: number;
  totalPrice: number;
  totalItems: number;
  images: [
    {
      _id: any;
      image: string;
    }
  ];
}
