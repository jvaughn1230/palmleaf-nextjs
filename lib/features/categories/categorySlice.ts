import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CategoriesStateType, CategoryType } from "@/types/types";
import { getCategoriesAndDocuments } from "@/utils/firebase";

export const CATEGORIES_INITIAL_STATE: CategoriesStateType = {
  categories: [],
  name: "",
  isLoading: false,
  error: null,
};

export const fetchCategoriesAsync = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const categoriesArray = await getCategoriesAndDocuments();
    return categoriesArray as CategoryType[];
  }
);

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
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
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
  setError,
} = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;
