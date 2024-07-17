import { createSelector } from "reselect";
import { RootState } from "../../store";
import { CategoryMapType, CategoryType } from "@/types/types";

const selectCategorySlice = (state: RootState) => state.categories;

export const SelectCategories = createSelector(
  [selectCategorySlice],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [SelectCategories],
  (categories): CategoryMapType =>
    categories.reduce((acc: CategoryMapType, category: CategoryType) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMapType)
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategorySlice],
  (categoriesSlice) => categoriesSlice.isLoading
);
