import React from "react";
import { CategoryType, ItemType } from "@/types/types";
import { getCategoriesAndDocuments } from "@/utils/firebase";
import CategoriesPreview from "@/components/CategoriesPreview.client";

interface ShopPageProps {
  categories: CategoryType[];
}

const ShopPage = async () => {
  const categories = await getCategoriesAndDocuments();

  const categoriesArray: CategoryType[] = categories.map((category) => ({
    id: category.id,
    title: category.title,
    items: category.items.slice(0, 5),
  }));

  console.log(categoriesArray);

  return (
    <div>
      <h1>Shop Page</h1>
      <CategoriesPreview categories={categoriesArray} />
    </div>
  );
};

export default ShopPage;
