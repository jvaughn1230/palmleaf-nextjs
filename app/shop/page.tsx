"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

import { getCategoriesAndDocuments } from "@/utils/firebase";
import {
  setCategories,
  toggleLoading,
  setError,
} from "@/lib/features/categories/categorySlice";
import { SelectCategories } from "@/lib/features/categories/category.selector";
import CategoriesPreview from "@/components/CategoriesPreview.client";

const ShopPage = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(SelectCategories);

  console.log("shop page loaded");

  useEffect(() => {
    const getCategoriesMap = async () => {
      dispatch(toggleLoading());
      try {
        const categoriesArray = await getCategoriesAndDocuments();
        dispatch(setCategories(categoriesArray));
      } catch (error) {
        console.error("Error fetching categories:", error);
        dispatch(setError("Error fetching categories"));
      } finally {
        dispatch(toggleLoading());
      }
    };

    getCategoriesMap();
  }, [dispatch]);

  return (
    <div>
      <h1>Shop Page</h1>
      {/* {categories.map((category) => (
        <CategoriesPreview
          title={category.title}
          items={category.items}
          key={category.id}
        />
      ))} */}
      <CategoriesPreview />
    </div>
  );
};
export default ShopPage;
