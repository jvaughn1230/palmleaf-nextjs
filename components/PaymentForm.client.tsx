"use client";
import React, { useState, FormEvent, useContext } from "react";
import { CartContext } from "@/contexts/cartContext";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { UserContext } from "@/contexts/userContext";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { cartTotal, clearCart } = useContext(CartContext);
  const { currentUser } = useContext(UserContext);

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
      body: JSON.stringify({ amount: cartTotal * 100 }),
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
      clearCart();

      elements.getElement(CardElement)?.clear();
    }
  };

  return (
    <div className="h-[300px] flex flex-col items-center justify-center">
      <form
        className="h-full min-w-[500px] flex flex-col gap-4"
        onSubmit={paymentHandler}
      >
        <h2 className="text-[2rem] font-semibold">Credit Card Payment</h2>
        <CardElement />

        <button
          type="submit"
          disabled={isProcessingPayment || !cartTotal}
          className="self-end w-2/5 mt-4 border-2 border-solid border-black bg-white text-black hover:bg-black hover:text-white"
        >
          {isProcessingPayment ? "Processing..." : "Pay Now"}
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
