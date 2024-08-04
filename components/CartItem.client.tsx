"use client";

import React, { memo } from "react";
import { CartItemType } from "@/types/types";
import Image from "next/image";

interface CartItemProps {
  cartItem: CartItemType;
}

const CartItemComponent: React.FC<CartItemProps> = ({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;

  return (
    <div className="w-full flex h-20 mb-[15px]">
      <Image
        src={imageUrl}
        alt={name}
        width={50}
        height={50}
        className="w-[30%] border-2 border-solid border-green-500"
      />
      <div className="w-[70%] flex flex-col items-start justify-center px-5 py-[10px] border-2 border-yellow-400 border-solid">
        <span className="text-base items-start">{name}</span>
        <span className="text-base">
          {quantity}x{price}
        </span>
      </div>
    </div>
  );
};

const CartItem = memo(CartItemComponent);

export default CartItem;