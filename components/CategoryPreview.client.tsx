import React from "react";
import ItemCard from "./ItemCard";
import { ItemType } from "@/types/types";
import CategoryLink from "./CategoryLink.client";

interface CategoryPreviewProps {
  title: string;
  items: ItemType[];
}

// Need to figure row gap on small but not large
const CategoryPreview: React.FC<CategoryPreviewProps> = ({ title, items }) => {
  console.log("Category Preview Loaded");
  return (
    <div className="flex flex-col mb-8">
      <CategoryLink title={title} />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5">
        {items
          .filter((_, idx: number) => idx < 4)
          .map((item: ItemType) => (
            <ItemCard key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
