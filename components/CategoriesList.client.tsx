"use client";

import React, { useEffect } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { setCategories } from "@/lib/features/categories/categorySlice";
import { CategoryType } from "@/types/types";

import CategoryCard from "./CategoryCard.client";

const CategoriesList = ({
  categoriesArray,
}: {
  categoriesArray: CategoryType[];
}) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCategories(categoriesArray));
  }, [dispatch, categoriesArray]);

  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categoriesArray.map((category: CategoryType) => (
          <CategoryCard category={category} key={category.id} />
        ))}
      </ul>
    </div>
  );
};

export default CategoriesList;
