import React from "react";
import { CategoryType, ItemType } from "@/types/types";
import CategoriesPreview from "@/components/CategoriesPreview.client";
import { gql, useQuery } from "@apollo/client";
import client from "@/lib/graphql/apolloClient";

import { getCategoryByTitle } from "@/utils/firebase";

const GET_CATEGORIES_WITH_LIMITED_ITEMS = gql`
  query GetCategoriesWithItems($limit: Int) {
    categories {
      id
      title
      items(limit: $limit) {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

interface ShopPageProps {
  categories: CategoryType[];
}

const ShopPage = async () => {
  const { data, error } = await client.query({
    query: GET_CATEGORIES_WITH_LIMITED_ITEMS,
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
