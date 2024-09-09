"use client";

import React, { useCallback, useContext } from "react";
import CartItem from "./CartItem.client";
import { useRouter } from "next/navigation";
import { CartContext } from "@/contexts/cartContext";

const CartDropDown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const router = useRouter();

  const goToCheckoutHandler = useCallback(() => {
    router.push("/checkout");
    setIsCartOpen(false);
  }, [router, setIsCartOpen]);

  return (
    <div className="absolute flex flex-col z-20 w-60 h-80 p-5 border-solid border-black border-2 bg-[#EAF6F6] right-0 top-14">
      <div className="h-60 flex flex-col  overflow-y-scroll">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <div className="text-lg my-12 mx-auto">Your Cart Is Empty</div>
        )}
      </div>
      <button onClick={() => goToCheckoutHandler()}>Checkout</button>
    </div>
  );
};

export default CartDropDown;
