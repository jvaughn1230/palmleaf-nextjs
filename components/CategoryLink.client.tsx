"use client";
import React from "react";
import Link from "next/link";

interface CategoryLinkProps {
  title: string;
}

const CategoryLink: React.FC<CategoryLinkProps> = ({ title }) => {
  return (
    <Link href={`/shop/${title}`} className="mb-6 cursor-pointer text-3xl">
      {title.toUpperCase()}
    </Link>
  );
};

export default CategoryLink;
