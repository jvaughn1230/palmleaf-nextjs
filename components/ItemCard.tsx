"use client";
import React, { useContext } from "react";
import { ItemType } from "@/types/types";
import Image from "next/image";

import { CartContext } from "@/contexts/cartContext";

interface ItemCardProps {
  item: ItemType;
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  const { name, price, imageUrl } = item;

  const { addItemToCart } = useContext(CartContext);

  const addItemToCartHandler = (item: ItemType) => {
    const cartItem = { ...item, quantity: 1 };
    addItemToCart(cartItem);
  };

  return (
    <div className="w-full flex flex-col h-[350px] items-center relative group">
      <div className="w-full h-[95%] relative mb-1">
        <Image
          src={imageUrl}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="group-hover:opacity-85 transition-opacity"
        />
      </div>

      <div className="w-full h-[5%] flex justify-between text-lg">
        <span className="w-[90%] mb-4">{name}</span>
        <span className="w-[10%]">{price}</span>
      </div>

      <button
        className="hidden group-hover:flex group-hover:opacity-85 absolute top-[255px]"
        onClick={() => addItemToCartHandler(item)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ItemCard;
