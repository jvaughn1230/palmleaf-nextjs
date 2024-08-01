"use client";
import React from "react";
import { ItemType } from "@/types/types";
import Image from "next/image";
import { useAppDispatch } from "@/lib/hooks";
import { addItemToCart } from "@/lib/features/cart/cart.reducer";

interface ItemCardProps {
  item: ItemType;
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  const { name, price, imageUrl } = item;
  const dispatch = useAppDispatch();

  const addToCart = () => {
    dispatch(addItemToCart(item));
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
        onClick={addToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ItemCard;
