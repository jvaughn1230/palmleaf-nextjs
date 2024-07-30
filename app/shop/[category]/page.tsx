"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { CategoryType } from "@/types/types";
import { useAppSelector } from "@/lib/hooks";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "@/lib/features/categories/category.selector";
import ItemCard from "@/components/ItemCard";

const CategoryPage = () => {
  const params = useParams();
  const category = params.category as string;
  const categoriesMap = useAppSelector(selectCategoriesMap);
  const isLoading = useAppSelector(selectCategoriesIsLoading);
  const [items, setItems] = useState<CategoryType["items"]>([]);

  useEffect(() => {
    if (categoriesMap[category]) {
      setItems(categoriesMap[category]);
    }
  }, [category, categoriesMap]);
  console.log(items);

  return (
    <div>
      <h1>Page Title</h1>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div className="grid grid-cols-1 gap-y-12 gap-x-3 mb-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-5">
          {items.map((item) => (
            <ItemCard item={item} key={item.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
