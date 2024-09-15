"use client";
import React from "react";
import Link from "next/link";
import useIsProduction from "@/hooks/isProduction";

interface CategoryLinkProps {
  title: string;
}

const CategoryLink: React.FC<CategoryLinkProps> = ({ title }) => {
  const isProduction = useIsProduction();

  return (
    <Link
      href={`/shop/${title}`}
      className="mb-6 cursor-pointer text-2xl font-extrabold"
      prefetch={isProduction}
    >
      {title.toUpperCase()}
    </Link>
  );
};

export default CategoryLink;
