import React from "react";
import { ItemType } from "@/types/types";
import ItemCard from "./ItemCard";
import CategoryLink from "./CategoryLink.client";

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
      <CategoryLink title={title} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 gap-y-8">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPageClient;
