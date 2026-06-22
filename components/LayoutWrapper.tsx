"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideNavbar = pathname === "/login" || pathname === "/create-account";
  const hideFooter = pathname === "/login" || pathname === "/create-account";

  return (
    <AuthProvider>
      <CartProvider>
        {!hideNavbar && <Navbar />}
        {children}
        {!hideFooter && <Footer />}
      </CartProvider>
    </AuthProvider>
  );
}