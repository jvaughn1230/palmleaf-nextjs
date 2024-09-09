"use client";
import { createContext, useState, useEffect, ReactNode } from "react";
import { CartItemType } from "@/types/types";

// Define the CartContextType interface
type CartContextType = {
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  cartItems: CartItemType[];
  addItemToCart: (productToAdd: CartItemType) => void;
  removeItemFromCart: (cartItemToRemove: CartItemType) => void;
  clearItemFromCart: (cartItemToClear: CartItemType) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
};

// Define the helper functions
const addCartItem = (
  cartItems: CartItemType[],
  productToAdd: CartItemType
): CartItemType[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (
  cartItems: CartItemType[],
  cartItemToRemove: CartItemType
): CartItemType[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (
  cartItems: CartItemType[],
  cartItemToClear: CartItemType
): CartItemType[] =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

// Create the context with a default value
export const CartContext = createContext<CartContextType>({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  clearCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

type CartProviderProps = {
  children: ReactNode;
};

// Create the CartProvider component
export const CartProvider = ({ children }: CartProviderProps) => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [cartCount, setCartCount] = useState<number>(0);
  const [cartTotal, setCartTotal] = useState<number>(0);

  // Update cartCount whenever cartItems change
  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  // Update cartTotal whenever cartItems change
  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd: CartItemType) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (cartItemToRemove: CartItemType) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const clearItemFromCart = (cartItemToClear: CartItemType) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const value: CartContextType = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    clearCart,
    cartItems,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
