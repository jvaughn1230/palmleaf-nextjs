"use client";
import React, { useState, FormEvent } from "react";
import { useAppSelector } from "@/lib/hooks";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { selectCartTotal } from "@/lib/features/cart/cart.selector";
import { getCurrentUser } from "@/utils/firebase";
import getStripe from "@/utils/stripe";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useAppSelector(selectCartTotal);

  //   TODO: Change when auth redux feature is setup
  const currentUser = { displayName: "temp name" };

  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessingPayment(true);

    const response = await fetch("/api/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    });

    const data = await response.json();

    const clientSecret = data.paymentIntent.client_secret;

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      throw new Error("Could not find CardElement");
    }

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded")
        alert("Payment Successful");
    }
  };

  console.log(<CardElement />);

  return (
    <div className="h-[300px] flex flex-col items-center justify-center">
      <form className="h-full min-w-[500px]" onClick={paymentHandler}>
        <h2>Credit Card Payment</h2>
        <CardElement />

        <button className="ml-auto mt-8 min-w-40 w-auto h-12 tracking-[0.5px] leading-[50px] uppercase font-extrabold cursor-pointer flex justify-center items-center whitespace-nowrap bg-white text-black hover:text-white hover:bg-black hover:border-none">
          Submit Payment
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
