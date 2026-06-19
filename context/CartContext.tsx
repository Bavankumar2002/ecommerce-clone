"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  brand?: string;
  stock: number;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (
    product: {
      id: number;
      title: string;
      price: number | string;
      imageUrl: string;
      brand?: string;
      stock: number;
    },
    quantity: number
  ) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartSubtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [mounted, setMounted] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) {
      try {
        setCartItems(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse cart items from localStorage", e);
      }
    }
    setMounted(true);
  }, []);

  // Save cart to localStorage when it changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems, mounted]);

  const addToCart = (
    product: {
      id: number;
      title: string;
      price: number | string;
      imageUrl: string;
      brand?: string;
      stock: number;
    },
    quantity: number
  ) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      const parsedPrice = typeof product.price === "string" ? parseFloat(product.price) : product.price;

      if (existing) {
        // Ensure we don't exceed stock
        const newQty = Math.min(existing.quantity + quantity, product.stock);
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: newQty } : item
        );
      }

      return [
        ...prev,
        {
          id: product.id,
          title: product.title,
          price: parsedPrice,
          imageUrl: product.imageUrl,
          brand: product.brand,
          stock: product.stock,
          quantity: Math.min(quantity, product.stock),
        },
      ];
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, Math.min(quantity, item.stock)) } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const cartSubtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount: mounted ? cartCount : 0,
        cartSubtotal: mounted ? cartSubtotal : 0,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
