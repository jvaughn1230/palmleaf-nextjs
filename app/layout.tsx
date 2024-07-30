import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import StoreProvider from "./StoreProvider";
import Navbar from "@/components/Navbar.client";

const poppins = Poppins({
  display: "swap",
  subsets: ["latin"],
  weight: ["700", "800"],
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
        <body className={poppins.className}>
          <Navbar />
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
