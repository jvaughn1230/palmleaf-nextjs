"use client";
import React, { useContext } from "react";
import { ItemType } from "@/types/types";
import Image from "next/image";
import { useAppDispatch } from "@/lib/hooks";
import { addItemToCart } from "@/lib/features/cart/cart.reducer";
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
      <Image
        src={imageUrl}
        alt={name}
        width={250}
        height={250}
        className="mb-[5px] object-cover h-[95%] w-full"
      />

      <div className="w-full h-[5%] flex justify-between text-lg">
        <span className="w-[90%] mb-4">{name}</span>
        <span className="w-[10%]">{price}</span>
      </div>

      <button
        className="bg-white text-black border-solid border-black border-[1px] hover:bg-black hover:text-white hover:border-none w-4/5 opacity-70 absolute top-[255px] hidden group-hover:block hover:opacity-85"
        onClick={() => addItemToCartHandler(item)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ItemCard;
