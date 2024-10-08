"use client";
import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import CartIcon from "./CartIcon.client";
import palmLogo from "@/app/icon.svg";
import CartDropDown from "./CartDropDown.client";
import { signOutUser } from "@/utils/firebase";
import { usePathname } from "next/navigation";
import { CartContext } from "@/contexts/cartContext";
import { UserContext } from "@/contexts/userContext";

const Navbar = () => {
  const pathname = usePathname();
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <div className="font-bold h-16 w-full flex justify-between mb-6 z-10 relative text-black">
      <Link href="/" className="h-full w-16 p-6 relative">
        <Image src={palmLogo} alt="Palm Logo" fill />
      </Link>
      <div className="w-1/2 h-full flex items-center justify-end">
        <Link
          href="/shop"
          className="px-4 py-3 cursor-pointer"
          prefetch={false}
        >
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
