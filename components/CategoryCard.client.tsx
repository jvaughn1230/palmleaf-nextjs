"use client";

import { CategoryType } from "@/types/types";
import Link from "next/link";
import React from "react";
import useIsProduction from "@/hooks/isProduction";

const CategoryCard = ({ category }: { category: CategoryType }) => {
  const categoryName = category.title;
  const isProduction = useIsProduction();

  return (
    <Link href={`/shop/${categoryName.toLowerCase()}`} prefetch={isProduction}>
      {categoryName}
    </Link>
  );
};

export default CategoryCard;
