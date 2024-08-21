"use client";

import React, { useContext } from "react";
import Image from "next/image";
import { CartContext } from "@/contexts/cartContext";

const CartIcon = () => {
  const { setIsCartOpen, isCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

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
