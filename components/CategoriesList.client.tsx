"use client";

import React, { useEffect } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { setCategories } from "@/lib/features/categories/categorySlice";
import { CategoryType } from "@/types/types";

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
        {categoriesArray.map((category) => (
          <li key={category.id}>{category.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesList;
