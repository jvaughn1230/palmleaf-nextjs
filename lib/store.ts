import { configureStore } from "@reduxjs/toolkit";
import { categoriesReducer } from "./features/categories/categorySlice";
import { categoryApi } from "./features/categories/categoryApi";
import { combineReducers } from "@reduxjs/toolkit";
import { cartReducer } from "./features/cart/cart.reducer";
import { userReducer } from "./features/user/userSlice";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  cart: cartReducer,
  user: userReducer,
});

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
