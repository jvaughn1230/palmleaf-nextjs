"use client";
import React, { Fragment, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "@/lib/features/categories/category.selector";
import CategoryPreview from "./CategoryPreview.client";
import { CategoryType, ItemType } from "@/types/types";
import { setCategories } from "@/lib/features/categories/categorySlice";

interface CategoriesPreviewProps {
  categories: CategoryType[];
}

const CategoriesPreview: React.FC<CategoriesPreviewProps> = ({
  categories,
}) => {
  const dispatch = useAppDispatch();
  const categoriesMap = useAppSelector(selectCategoriesMap);
  const isLoading = useAppSelector(selectCategoriesIsLoading);

  useEffect(() => {
    // Check if categories are already in the Redux store
    if (Object.keys(categoriesMap).length === 0) {
      // Transform categories into the format expected by the Redux store
      const categoriesArray = categories.map((category) => ({
        id: category.id, // Include id
        title: category.title,
        items: category.items,
      }));

      dispatch(setCategories(categoriesArray));
    }
  }, [categories, categoriesMap, dispatch]);

  return (
    <Fragment>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const items = categoriesMap[title];
          return <CategoryPreview key={title} items={items} title={title} />;
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
