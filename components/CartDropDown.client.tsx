"use client";

import React from "react";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import CartItem from "./CartItem.client";

import {
  selectCartItems,
  selectIsCartOpen,
} from "@/lib/features/cart/cart.selector";
import { setIsCartOpen } from "@/lib/features/cart/cart.reducer";

const CartDropDown = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);
  const IsCartOpen = useAppSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!IsCartOpen));

  return (
    <div className="absolute flex flex-col z-20 w-60 h-80 p-5 border-solid border-black border-2 bg-[#EAF6F6] right-10 top-20">
      <div className="h-60 flex flex-col  overflow-y-scroll">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <div className="text-lg my-12 mx-auto">Your Cart Is Empty</div>
        )}
      </div>
    </div>
  );
};

export default CartDropDown;
