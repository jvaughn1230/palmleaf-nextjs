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
        <div className="cursor-pointer" onClick={removeItemFromCartHandler}>
          &#10094;
        </div>
        <div className="checkout-row-section">{quantity}</div>
        <div className="cursor-pointer" onClick={addItemToCartHandler}>
          &#10095;
        </div>
      </div>
      <div className="checkout-row-section">{price}</div>
      <div className="cursor-pointer w-[8%]" onClick={clearItemFromCartHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
