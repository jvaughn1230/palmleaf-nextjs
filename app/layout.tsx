import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

import { Providers } from "@/components/Providers";
import { CartProvider } from "@/contexts/cartContext";

import StoreProvider from "./StoreProvider";
import Navbar from "@/components/Navbar.client";

const openSans = Open_Sans({
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PalmLeaf",
  description: "One stop shop for a day at the beach",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <Providers>
          <CartProvider>
            <body className={` ${openSans.className} px-10 py-5`}>
              <Navbar />
              {children}
            </body>
          </CartProvider>
        </Providers>
      </html>
    </StoreProvider>
  );
}
