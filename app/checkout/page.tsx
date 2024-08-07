"use client";
import React from "react";
import { useAppSelector } from "@/lib/hooks";
import {
  selectCartItems,
  selectCartTotal,
} from "@/lib/features/cart/cart.selector";
import PaymentForm from "@/components/PaymentForm.client";
import { Elements } from "@stripe/react-stripe-js";
import getStripe from "@/utils/stripe";
import CheckoutItem from "@/components/CheckoutItem.client";

const CheckoutPage = () => {
  const stripePromise = getStripe();

  const cartItems = useAppSelector(selectCartItems);
  const cartTotal = useAppSelector(selectCartTotal);

  return (
    <div className="w-1/2 min-h-[90vh] flex flex-col items-center mx-auto mt-12 mb-0">
      <div className="w-full py-3 px-4 flex justify-center border-b-2 border-b-solid border-b-gray-500">
        <div className="checkout-row-section">Product</div>
        <div className="checkout-row-section">Description</div>
        <div className="checkout-row-section">Quantity</div>
        <div className="checkout-row-section">Price</div>
        <div className="w-[8%]">Delete</div>
      </div>

      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}

      <div className="mt-8 ml-auto">Total: ${cartTotal}</div>

      <Elements stripe={stripePromise}>
        <PaymentForm />
      </Elements>
    </div>
  );
};

export default CheckoutPage;
