"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { CartItemType } from "@/types/types";
import { CartContext } from "@/contexts/cartContext";

type CheckoutItemProps = {
  cartItem: CartItemType;
};

const CheckoutItem = ({ cartItem }: CheckoutItemProps) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { removeItemFromCart, addItemToCart, clearItemFromCart } =
    useContext(CartContext);

  const removeItemFromCartHandler = () => {
    removeItemFromCart(cartItem);
  };

  const addItemToCartHandler = () => {
    addItemToCart(cartItem);
  };

  const clearItemFromCartHandler = () => {
    clearItemFromCart(cartItem);
  };

  return (
    <div className="w-full grid grid-cols-[2fr_3fr_1fr_1fr_1fr] gap-4 border-[1px] border-solid border-gray-500 p-4 text-[1.3021vw] items-center">
      <div>
        <Image src={imageUrl} height={50} width={50} alt={name} />
      </div>
      <div className="capitalize w-auto text-base">{name}</div>
      <div className="flex">
        <div
          className="cursor-pointer text-base"
          onClick={removeItemFromCartHandler}
        >
          &#10094;
        </div>
        <div className="text-base">{quantity}</div>
        <div
          className="cursor-pointer text-base"
          onClick={addItemToCartHandler}
        >
          &#10095;
        </div>
      </div>
      <div className="text-base">{price}</div>
      <div
        className="cursor-pointer text-base"
        onClick={clearItemFromCartHandler}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
