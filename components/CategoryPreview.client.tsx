import React from "react";
import ItemCard from "./ItemCard";
import { ItemType } from "@/types/types";
import CategoryLink from "./CategoryLink.client";

interface CategoryPreviewProps {
  title: string;
  items: ItemType[];
}

const CategoryPreview: React.FC<CategoryPreviewProps> = ({ title, items }) => {
  return (
    <div className="flex flex-col mb-8">
      <CategoryLink title={title} />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map((item: ItemType) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
