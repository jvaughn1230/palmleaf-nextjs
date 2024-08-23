import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CategoriesStateType, CategoryType, ItemType } from "@/types/types";
import {
  getCategoriesAndDocuments,
  getCategoryByTitle,
} from "@/utils/firebase";
import { AppDispatch, RootState } from "@/lib/store";

// Added
interface CategoryState extends CategoryType {
  isFullSet: boolean;
}

interface CategoriesState {
  categories: CategoryState[];
  name: string;
  isLoading: boolean;
  error: string | null;
}

const initialState: CategoriesState = {
  categories: [],
  name: "",
  isLoading: false,
  error: null,
};

// export const CATEGORIES_INITIAL_STATE: CategoriesStateType = {
//   categories: [],
//   name: "",
//   isLoading: false,
//   error: null,
// };

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories(state, action: PayloadAction<CategoryType[]>) {
      state.categories = action.payload.map((category) => ({
        ...category,
        isFullSet: false,
      }));
    },
    addCategory(state, action: PayloadAction<CategoryState>) {
      const newCategory = action.payload;
      const existingCategory = state.categories.find(
        (category) =>
          category.title.toLowerCase() === newCategory.title.toLowerCase()
      );
      if (!existingCategory) {
        state.categories.push(newCategory);
      }
    },
    updateCategoryItems(
      state,
      action: PayloadAction<{
        id: string;
        title: string;
        items: ItemType[];
        isFullSet: boolean;
      }>
    ) {
      const { id, title, items, isFullSet } = action.payload;
      const existingCategory = state.categories.find(
        (category) => category.id === id
      );

      if (existingCategory) {
        if (isFullSet) {
          // Replace all items if it's a full set
          existingCategory.items = items;
        } else {
          // Merge items if it's not a full set
          const existingItemIds = new Set(
            existingCategory.items.map((item) => item.id)
          );
          const newItems = items.filter(
            (item) => !existingItemIds.has(item.id)
          );
          existingCategory.items = [...existingCategory.items, ...newItems];
        }
        existingCategory.isFullSet = isFullSet;
      } else {
        // If category doesn't exist, create it with the given items
        state.categories.push({ id, title, items, isFullSet });
      }
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
    // setCategoryItems(
    //   state,
    //   action: PayloadAction<{ title: string; items: ItemType[] }>
    // ) {
    //   const { title, items } = action.payload;
    //   const category = state.categories.find(
    //     (category) => category.title.toLowerCase() === title.toLowerCase()
    //   );
    //   if (category) {
    //     category.items = items;
    //   } else {
    //     // Optional: handle the case where the category does not exist
    //     state.categories.push({ title, items } as CategoryType);
    //   }
    // },

    initializeCategory(state, action: PayloadAction<{ name: string }>) {
      const { name } = action.payload;
      state.name = name;
    },
    // addCategory(state, action: PayloadAction<CategoryType>) {
    //   const newCategory = action.payload;
    //   // Check if the category already exists
    //   const existingCategory = state.categories.find(
    //     (category) =>
    //       category.title.toLowerCase() === newCategory.title.toLowerCase()
    //   );
    //   if (!existingCategory) {
    //     state.categories.push(newCategory);
    //   }
    // },
  },
});

export const {
  setCategories,
  initializeCategory,
  setCategoryName,
  toggleLoading,
  setError,
  addCategory,
  updateCategoryItems,
} = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;
