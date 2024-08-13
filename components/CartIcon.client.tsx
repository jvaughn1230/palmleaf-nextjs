"use client";

import React from "react";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  selectCartCount,
  selectIsCartOpen,
} from "@/lib/features/cart/cart.selector";
import { setIsCartOpen } from "@/lib/features/cart/cart.reducer";

const CartIcon = () => {
  const dispatch = useAppDispatch();
  const cartCount = useAppSelector(selectCartCount);
  const isCartOpen = useAppSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <div
      onClick={toggleIsCartOpen}
      className="w-11 h-11 relative flex items-center justify-center cursor-pointer"
    >
      <Image
        src="/assets/shopping-bag.svg"
        alt="Shopping Bag"
        width={50}
        height={50}
        className="w-full h-full"
      />
      <div className="absolute text-[10px] font-bold bottom-3">{cartCount}</div>
    </div>
  );
};

export default CartIcon;
