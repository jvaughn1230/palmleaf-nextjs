import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="h-16 w-full flex justify-between mb-6">
      <div>Logo</div>
      <div className="w-1/2 h-full flex items-center justify-end">
        <Link href="/shop" className="px-4 py-3 cursor-pointer">
          SHOP
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
