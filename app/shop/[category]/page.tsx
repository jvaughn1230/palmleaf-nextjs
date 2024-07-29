"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { CategoryType } from "@/types/types";
import { useAppSelector } from "@/lib/hooks";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "@/lib/features/categories/category.selector";

const CategoryPage = () => {
  const params = useParams();
  const category = params.category as string;
  const categoriesMap = useAppSelector(selectCategoriesMap);
  const isLoading = useAppSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState<CategoryType["items"]>([]);

  useEffect(() => {
    if (categoriesMap[category]) {
      setProducts(categoriesMap[category]);
    }
  }, [category, categoriesMap]);

  return (
    <div>
      <h1>Page Title</h1>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div>
          {products.map((product) => (
            <div key={product.id}>
              <p>{product.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
