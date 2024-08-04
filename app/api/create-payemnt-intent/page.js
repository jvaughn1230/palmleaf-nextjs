import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const { amount } = await req.json();

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
    });

    return NextResponse.json({ paymentIntent });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
