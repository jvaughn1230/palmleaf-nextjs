"use client";
import React, { Fragment } from "react";
import { useAppSelector } from "@/lib/hooks";
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "@/lib/features/categories/category.selector";
import CategoryPreview from "./CategoryPreview.client";

const CategoriesPreview = () => {
  const categoriesMap = useAppSelector(selectCategoriesMap);
  const isLoading = useAppSelector(selectCategoriesIsLoading);

  console.log("Categories Preview Loaded");

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
