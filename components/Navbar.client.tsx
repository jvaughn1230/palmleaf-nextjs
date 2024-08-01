"use client";
import React from "react";
import Link from "next/link";
import CartIcon from "./CartIcon.client";
import { selectIsCartOpen } from "@/lib/features/cart/cart.selector";
import { useAppSelector } from "@/lib/hooks";
import CartDropDown from "./CartDropDown.client";

const Navbar = () => {
  const isCartOpen = useAppSelector(selectIsCartOpen);
  return (
    <div className="h-16 w-full flex justify-between mb-6">
      <div>Logo</div>
      <div className="w-1/2 h-full flex items-center justify-end">
        <Link href="/shop" className="px-4 py-3 cursor-pointer">
          SHOP
        </Link>
        <CartIcon />
      </div>
      {isCartOpen && <CartDropDown />}
    </div>
  );
};

export default Navbar;
