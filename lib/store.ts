import { configureStore } from "@reduxjs/toolkit";
import { categoriesReducer } from "./features/categories/categorySlice";

const rootReducer = {
  categories: categoriesReducer,
};

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
