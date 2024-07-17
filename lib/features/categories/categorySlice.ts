import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CategoriesStateType, CategoryType } from "@/types/types";

export const CATEGORIES_INITIAL_STATE: CategoriesStateType = {
  categories: [],
  name: "",
  isLoading: false,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: CATEGORIES_INITIAL_STATE,
  reducers: {
    setCategories(state, action: PayloadAction<CategoryType[]>) {
      state.categories = action.payload;
    },
    setCategoryName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    toggleLoading(state) {
      state.isLoading = !state.isLoading;
    },

    initializeCategory(state, action: PayloadAction<{ name: string }>) {
      const { name } = action.payload;
      state.name = name;
    },
  },
});

export const {
  setCategories,
  initializeCategory,
  setCategoryName,
  toggleLoading,
} = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;
