import React from "react";

import CategoryPreview from "./CategoryPreview.client";
import { CategoryType, ItemType } from "@/types/types";

interface CategoriesPreviewProps {
  categories: CategoryType[];
}

const CategoriesPreview: React.FC<CategoriesPreviewProps> = ({
  categories,
}) => {
  return categories.map((category) => {
    return (
      <CategoryPreview
        key={category.title}
        items={category.items}
        title={category.title}
      />
    );
  });
};

export default CategoriesPreview;
