"use client";
import React from "react";
import Link from "next/link";
import CartIcon from "./CartIcon.client";
import { selectIsCartOpen } from "@/lib/features/cart/cart.selector";
import { useAppSelector } from "@/lib/hooks";
import CartDropDown from "./CartDropDown.client";
import { selectCurrentUser } from "@/lib/features/user/user.selector";
import { signOutUser } from "@/utils/firebase";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const isCartOpen = useAppSelector(selectIsCartOpen);
  const currentUser = useAppSelector(selectCurrentUser);

  return (
    <div className="font-bold h-16 w-full flex justify-between mb-6 z-10 relative text-black">
      <Link href="/" className="h-full w-16 p-6">
        Logo
      </Link>
      <div className="w-1/2 h-full flex items-center justify-end">
        <Link href="/shop" className="px-4 py-3 cursor-pointer">
          SHOP
        </Link>
        {currentUser ? (
          <span className="px-4 py-3 cursor-pointer" onClick={signOutUser}>
            SIGN OUT
          </span>
        ) : (
          <Link
            href={{
              pathname: "/auth",
              query: { from: pathname },
            }}
          >
            SIGN IN
          </Link>
        )}

        <CartIcon />
      </div>
      {isCartOpen && <CartDropDown />}
    </div>
  );
};

export default Navbar;
