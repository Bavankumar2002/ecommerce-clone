"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import api from "@/lib/api";
import { useAuth } from "@/hooks/useAuth";

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
  const { user } = useAuth();

  // Handle initial mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Sync cart state when mounting or when user authentication state changes
  useEffect(() => {
    if (!mounted) return;

    const loadAndSyncCart = async () => {
      if (user) {
        // Logged in: Check if we have guest items in localStorage to merge
        const stored = localStorage.getItem("cart");
        if (stored) {
          try {
            const localStorageItems = JSON.parse(stored);
            if (Array.isArray(localStorageItems) && localStorageItems.length > 0) {
              // Call POST endpoint to merge local storage items into database
              await api.post("/api/cart", {
                userId: user.id,
                items: localStorageItems,
              });
            }
          } catch (e) {
            console.error("Failed to merge guest cart with database", e);
          }
          // Clear localStorage so guest items aren't processed again
          localStorage.removeItem("cart");
        }

        // Fetch user's cart from database
        try {
          const res = await api.get(`/api/cart?userId=${user.id}`);
          if (res.data.success) {
            setCartItems(res.data.items || []);
          }
        } catch (e) {
          console.error("Failed to fetch cart from database", e);
        }
      } else {
        // Guest user: Load from localStorage
        const stored = localStorage.getItem("cart");
        if (stored) {
          try {
            setCartItems(JSON.parse(stored));
          } catch (e) {
            console.error("Failed to parse cart items from localStorage", e);
            setCartItems([]);
          }
        } else {
          setCartItems([]);
        }
      }
    };

    loadAndSyncCart();
  }, [user, mounted]);

  // Save guest cart to localStorage when it changes
  useEffect(() => {
    if (mounted && !user) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems, mounted, user]);

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
    const parsedPrice = typeof product.price === "string" ? parseFloat(product.price) : product.price;

    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
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

    // If logged in, save to backend database
    if (user) {
      api
        .post("/api/cart", {
          userId: user.id,
          productId: product.id,
          quantity: quantity,
        })
        .catch((err) => {
          console.error("Failed to save added cart item to database", err);
        });
    }
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));

    // If logged in, remove from backend database
    if (user) {
      api
        .delete(`/api/cart?userId=${user.id}&productId=${id}`)
        .catch((err) => {
          console.error("Failed to remove cart item from database", err);
        });
    }
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, Math.min(quantity, item.stock)) }
          : item
      )
    );

    // If logged in, update backend database
    if (user) {
      api
        .put("/api/cart", {
          userId: user.id,
          productId: id,
          quantity: Math.max(1, quantity),
        })
        .catch((err) => {
          console.error("Failed to update cart item quantity in database", err);
        });
    }
  };

  const clearCart = () => {
    setCartItems([]);

    // If logged in, clear cart in database
    if (user) {
      api.delete(`/api/cart?userId=${user.id}`).catch((err) => {
        console.error("Failed to clear cart in database", err);
      });
    }
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
