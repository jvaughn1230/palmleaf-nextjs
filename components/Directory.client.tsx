"use client";

import React from "react";
import { categoriesDirectoryData } from "../lib/categoriesDirectoryData";
import DirectoryItem from "./DirectoryItem.client";

const Directory = () => {
  return (
    <div className="w-full flex flex-wrap flex-col md:flex-row justify-between">
      {categoriesDirectoryData.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
