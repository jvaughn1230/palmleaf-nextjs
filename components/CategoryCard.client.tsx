"use client";

import { CategoryType } from "@/types/types";
import Link from "next/link";
import React from "react";

const CategoryCard = ({ category }: { category: CategoryType }) => {
  const categoryName = category.title;

  return (
    <Link href={`/shop/${categoryName.toLowerCase()}`} prefetch={false}>
      {categoryName}
    </Link>
  );
};

export default CategoryCard;
