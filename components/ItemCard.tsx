import React from "react";
import { ItemType } from "@/types/types";
import Image from "next/image";

interface ItemCardProps {
  item: ItemType;
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className="w-full flex flex-col h-[350px] items-center relative ">
      <Image
        src={imageUrl}
        alt={name}
        width={250}
        height={250}
        className="mb-1 object-cover h-[95%] w-full"
      />

      <div className="w-full h-[5%] flex justify-between text-lg">
        <span className="w-[90%] mb-4">{name}</span>
        <span className="w-[10%]">{price}</span>
      </div>
    </div>
  );
};

export default ItemCard;
