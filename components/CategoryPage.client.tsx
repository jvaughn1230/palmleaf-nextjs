import React from "react";
import { ItemType } from "@/types/types";
import ItemCard from "./ItemCard";

interface CategoryPageClientProps {
  title: string;
  items: ItemType[];
}

const CategoryPageClient: React.FC<CategoryPageClientProps> = ({
  title,
  items,
}) => {
  return (
    <div>
      <h1>{title}</h1>
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CategoryPageClient;
