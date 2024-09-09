"use client";
import React, { useContext } from "react";

import PaymentForm from "@/components/PaymentForm.client";
import { Elements } from "@stripe/react-stripe-js";
import getStripe from "@/utils/stripe";
import CheckoutItem from "@/components/CheckoutItem.client";
import { CartContext } from "@/contexts/cartContext";

const CheckoutPage = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  const stripePromise = getStripe();

  return (
    <div className="w-full md:w-2/3 lg:w-1/2 min-h-[90vh] flex flex-col items-center mx-auto mt-12 mb-0 ">
      <div className="w-full grid grid-cols-[2fr_3fr_1fr_1fr_1fr] gap-4 py-3 px-4 border-b-2 border-b-solid border-b-gray-500">
        <div className="text-base sm:text-lg">Product</div>
        <div className="text-base sm:text-lg">Description</div>
        <div className="text-base sm:text-lg">Quantity</div>
        <div className="text-base sm:text-lg">Price</div>
        <div className="text-base sm:text-lg">Delete</div>
      </div>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))
      )}
      <div className="mt-8 ml-auto text-[2rem]">Total: ${cartTotal}</div>

      <Elements stripe={stripePromise}>
        <PaymentForm />
      </Elements>
    </div>
  );
};

export default CheckoutPage;
