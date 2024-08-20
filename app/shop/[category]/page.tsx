import React from "react";
import { CategoryType, ItemType } from "@/types/types";
import CategoryPageClient from "@/components/CategoryPage.client";
import { GET_CATEGORY_ITEMS } from "@/lib/graphql/schema";
import client from "@/lib/graphql/apolloClient";

interface CategoryPageProps {
  category: CategoryType;
  items: ItemType[];
}

const CategoryPage = async ({ params }: { params: { category: string } }) => {
  const { category } = params;

  const { data, error, loading } = await client.query({
    query: GET_CATEGORY_ITEMS,
    variables: { title: category },
  });

  const { categoryByTitle } = data || {};
  const items = categoryByTitle?.items || [];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <CategoryPageClient title={category} items={items} />
    </div>
  );
};

export default CategoryPage;
