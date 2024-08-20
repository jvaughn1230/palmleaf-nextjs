import React from "react";
import { CategoryType, ItemType } from "@/types/types";
import CategoriesPreview from "@/components/CategoriesPreview.client";
import { gql } from "@apollo/client";
import client from "@/lib/graphql/apolloClient";
import { GET_CATEGORIES_WITH_PREVIEW_ITEMS } from "@/lib/graphql/queries";

interface ShopPageProps {
  categories: CategoryType[];
}

const ShopPage = async () => {
  const { data, error } = await client.query({
    query: GET_CATEGORIES_WITH_PREVIEW_ITEMS,
    variables: { limit: 4 },
  });

  const categories = data?.categories || [];

  if (error) {
    throw new Error(`GraphQL query error: ${error.message}`);
  }

  if (!data) {
    throw new Error("No data returned from Apollo Client query.");
  }

  const categoriesArray: CategoryType[] = categories.map(
    (category: CategoryType) => ({
      id: category.id,
      title: category.title,
      items: category.items.slice(0, 4),
    })
  );

  return (
    <div>
      <h1>Shop Page</h1>
      <CategoriesPreview categories={categoriesArray} />
    </div>
  );
};

export default ShopPage;
