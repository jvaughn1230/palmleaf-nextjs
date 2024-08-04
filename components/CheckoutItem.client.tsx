"use client";
import React from "react";
import { useAppDispatch } from "@/lib/hooks";
import { selectCartItems } from "@/lib/features/cart/cart.selector";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "@/lib/features/cart/cart.reducer";
import Image from "next/image";
import { CartItemType } from "@/types/types";

type CheckoutItemProps = {
  cartItem: CartItemType;
};

const CheckoutItem = ({ cartItem }: CheckoutItemProps) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const dispatch = useAppDispatch();

  const clearItemHandler = () => dispatch(clearItemFromCart(cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItem));
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItem));

  return (
    <div className="w-full flex border-[1px] border-solid border-gray-500 p-4 text-[1.3021vw] items-center justify-between">
      <div className="checkout-row-section">
        <Image
          src={imageUrl}
          className="ml-6"
          height={50}
          width={50}
          alt={name}
        />
      </div>
      <div className="checkout-row-section">{name}</div>
      <div className="flex">
        <div className="cursor-pointer" onClick={removeItemHandler}>
          &#10094;
        </div>
        <div className="checkout-row-section">{quantity}</div>
        <div className="cursor-pointer" onClick={addItemHandler}>
          &#10095;
        </div>
      </div>
      <div className="checkout-row-section">{price}</div>
      <div className="cursor-pointer w-[8%]" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
