"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCart } from "@/hooks/useCart";
import { useAuth } from "@/hooks/useAuth";
import { Trash2, ShoppingBag, ChevronRight, CheckCircle2 } from "lucide-react";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, cartCount, cartSubtotal } = useCart();
  const { user } = useAuth();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCheckoutRedirect = () => {
    if (user) {
      router.push("/checkout");
    } else {
      router.push(`/login?redirect=${encodeURIComponent("/checkout")}`);
    }
  };

  if (!mounted) {
    return (
      <main className="min-h-[70vh] bg-[#eaeded] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
      </main>
    );
  }

  return (
    <main className="bg-[#eaeded] min-h-screen pb-16 pt-4 font-sans text-[#0F1111]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-xs text-gray-600 mb-4">
          <Link href="/" className="hover:text-[#c45500] hover:underline">Home</Link>
          <ChevronRight size={12} className="text-gray-400" />
          <span className="font-semibold text-gray-800">Shopping Cart</span>
        </div>

        {cartItems.length === 0 ? (
          /* Empty Cart State */
          <div className="bg-white border border-[#d5d9d9] rounded-lg p-8 md:p-12 text-center shadow-sm max-w-3xl mx-auto my-8">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag size={40} className="text-gray-400" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-3">Your Shopping Cart is empty</h1>
            <p className="text-gray-600 text-sm max-w-md mx-auto mb-8">
              Check out our best-selling items, update your preferences, or sign in to access items you may have previously added.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/bestsellers"
                className="bg-[#ffd814] hover:bg-[#f7ca00] text-black font-semibold text-sm px-6 py-2.5 rounded-full shadow-sm cursor-pointer transition-colors inline-block text-center"
              >
                Shop Bestsellers
              </Link>
              {!user && (
                <Link
                  href="/login"
                  className="bg-white hover:bg-gray-50 text-gray-800 border border-[#d5d9d9] font-semibold text-sm px-6 py-2.5 rounded-full shadow-sm cursor-pointer transition-colors inline-block text-center"
                >
                  Sign in to your account
                </Link>
              )}
            </div>
          </div>
        ) : (
          /* Cart Content Layout */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left: Cart Items List */}
            <div className="lg:col-span-9 bg-white border border-[#d5d9d9] rounded-lg p-5 md:p-6 shadow-sm">
              <div className="flex justify-between items-baseline border-b border-gray-200 pb-4 mb-4">
                <h1 className="text-2xl md:text-3xl font-normal">Shopping Cart</h1>
                <span className="text-sm text-gray-500 hidden md:block">Price</span>
              </div>

              <div className="flex flex-col gap-6">
                {cartItems.map((item) => {
                  const itemSubtotal = item.price * item.quantity;
                  return (
                    <div key={item.id} className="flex flex-col sm:flex-row gap-4 border-b border-gray-100 pb-6 last:border-b-0 last:pb-0">
                      {/* Product Thumbnail */}
                      <Link href={`/products/${item.id}`} className="w-32 h-32 bg-gray-50 rounded border border-gray-100 p-2 flex items-center justify-center shrink-0 mx-auto sm:mx-0">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="max-h-full max-w-full object-contain"
                        />
                      </Link>

                      {/* Product Info & Controls */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between gap-4 items-start">
                            <Link href={`/products/${item.id}`} className="text-base md:text-lg font-bold hover:text-[#c45500] hover:underline leading-snug line-clamp-2">
                              {item.title}
                            </Link>
                            {/* Price for Mobile (hidden on desktop) */}
                            <span className="text-lg font-bold block sm:hidden text-gray-900 shrink-0">
                              ₹{item.price.toLocaleString("en-IN")}
                            </span>
                          </div>

                          {item.brand && (
                            <p className="text-xs text-gray-500 mt-0.5">by {item.brand}</p>
                          )}

                          <div className="mt-1.5 flex items-center gap-2">
                            {item.stock > 0 ? (
                              <span className="text-xs font-bold text-green-700">In stock</span>
                            ) : (
                              <span className="text-xs font-bold text-red-600">Out of stock</span>
                            )}
                            <span className="text-xs text-gray-400">|</span>
                            <span className="text-xs text-gray-500">Eligible for FREE Shipping</span>
                          </div>
                        </div>

                        {/* Controls: Quantity Selector + Delete */}
                        <div className="flex items-center gap-4 mt-4">
                          <div className="flex items-center gap-1.5">
                            <label className="text-xs text-gray-500 font-medium">Qty:</label>
                            <select
                              value={item.quantity}
                              onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                              className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded px-2 py-0.5 text-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-amber-500 font-semibold"
                            >
                              {[...Array(Math.min(10, item.stock))].map((_, i) => (
                                <option key={i + 1} value={i + 1}>
                                  {i + 1}
                                </option>
                              ))}
                            </select>
                          </div>

                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="flex items-center gap-1 text-xs text-[#007185] hover:text-[#c45500] hover:underline cursor-pointer border-none bg-transparent outline-none py-1"
                          >
                            <Trash2 size={13} />
                            Delete
                          </button>
                        </div>
                      </div>

                      {/* Price for Desktop (hidden on mobile) */}
                      <div className="hidden sm:block text-right shrink-0">
                        <span className="text-lg font-bold text-gray-900">
                          ₹{item.price.toLocaleString("en-IN")}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Subtotal */}
              <div className="border-t border-gray-200 mt-6 pt-4 text-right">
                <span className="text-lg md:text-xl">
                  Subtotal ({cartCount} {cartCount === 1 ? "item" : "items"}):{" "}
                  <strong className="text-gray-900 font-bold">
                    ₹{cartSubtotal.toLocaleString("en-IN")}
                  </strong>
                </span>
              </div>
            </div>

            {/* Right: Subtotal Summary Card */}
            <div className="lg:col-span-3 bg-white border border-[#d5d9d9] rounded-lg p-5 shadow-sm sticky top-4 flex flex-col gap-4">
              <div className="flex gap-2 items-start text-xs text-green-700 font-medium mb-1">
                <CheckCircle2 size={20} className="shrink-0 text-green-600 mt-0.5" />
                <div>
                  <p>Your order is eligible for FREE Delivery.</p>
                  <p className="text-gray-500 mt-0.5">Select this option at checkout.</p>
                </div>
              </div>

              <div className="text-lg">
                Subtotal ({cartCount} {cartCount === 1 ? "item" : "items"}):{" "}
                <div className="font-bold text-xl md:text-2xl mt-1">
                  ₹{cartSubtotal.toLocaleString("en-IN")}
                </div>
              </div>

              <button
                onClick={handleCheckoutRedirect}
                className="w-full bg-[#ffd814] hover:bg-[#f7ca00] text-black font-semibold text-sm py-2 px-4 rounded-full shadow-sm cursor-pointer transition-colors border border-[#a88734]"
              >
                Proceed to Buy
              </button>

              <div className="border-t border-gray-200 pt-4 mt-2">
                <h3 className="text-sm font-bold mb-2">EMI available</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  No Cost EMI available on select cards. Terms & conditions apply.
                </p>
              </div>
            </div>

          </div>
        )}
      </div>
    </main>
  );
}
