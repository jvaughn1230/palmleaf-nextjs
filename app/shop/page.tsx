import React from "react";
import CategoriesList from "@/components/CategoriesList.client";
import { getCategoriesAndDocuments } from "@/utils/firebase";
import { CategoryType } from "@/types/types";

const fetchCategories = async () => {
  const categoriesArray = await getCategoriesAndDocuments().then((data) => {
    return data.map((doc) => ({
      id: doc.id,
      title: doc.title,
      items: doc.items,
    })) as CategoryType[];
  });
  return categoriesArray;
};

const Page = async () => {
  const categoriesArray = await fetchCategories();
  console.log(categoriesArray);

  return <CategoriesList categoriesArray={categoriesArray} />;
};

export default Page;
