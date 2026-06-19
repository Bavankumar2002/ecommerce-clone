"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCart } from "@/hooks/useCart";
import { useAuth } from "@/hooks/useAuth";
import api from "@/lib/api";
import { CheckCircle2, ChevronRight, MapPin, CreditCard, ShieldCheck } from "lucide-react";

export default function CheckoutPage() {
  const { cartItems, cartCount, cartSubtotal, clearCart } = useCart();
  const { user } = useAuth();
  const router = useRouter();

  const [mounted, setMounted] = useState(false);
  const [shippingName, setShippingName] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [shippingCity, setShippingCity] = useState("");
  const [shippingZip, setShippingZip] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cod"); // cod or card

  const [loading, setLoading] = useState(false);
  const [orderError, setOrderError] = useState<string | null>(null);
  const [placedOrderId, setPlacedOrderId] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Redirect if user not logged in or cart empty
  useEffect(() => {
    if (mounted) {
      if (!user) {
        router.push(`/login?redirect=${encodeURIComponent("/checkout")}`);
      } else if (cartItems.length === 0 && !placedOrderId) {
        router.push("/cart");
      }
    }
  }, [mounted, user, cartItems, router, placedOrderId]);

  // Autofill shipping name with user's name if available
  useEffect(() => {
    if (user && user.name) {
      setShippingName(user.name);
    }
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    if (!shippingName.trim() || !shippingAddress.trim() || !shippingCity.trim() || !shippingZip.trim()) {
      setOrderError("Please fill in all shipping fields.");
      return;
    }

    try {
      setLoading(true);
      setOrderError(null);

      const orderData = {
        userId: user.id,
        total: cartSubtotal,
        shippingName: shippingName.trim(),
        shippingAddress: shippingAddress.trim(),
        shippingCity: shippingCity.trim(),
        shippingZip: shippingZip.trim(),
        items: cartItems.map((item) => ({
          id: item.id,
          quantity: item.quantity,
          price: item.price,
        })),
      };

      const res = await api.post("/api/orders", orderData);
      if (res.data.success) {
        setPlacedOrderId(res.data.orderId);
        clearCart();
      } else {
        setOrderError(res.data.error || "Failed to place order.");
      }
    } catch (err: any) {
      console.error("Order submission error:", err);
      setOrderError(
        err?.response?.data?.error || "A connection error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (!mounted || !user) {
    return (
      <main className="min-h-[70vh] bg-[#eaeded] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
      </main>
    );
  }

  // If order was placed successfully, render success view
  if (placedOrderId) {
    return (
      <main className="bg-[#eaeded] min-h-screen py-12 px-4 font-sans text-[#0F1111]">
        <div className="max-w-xl mx-auto bg-white border border-[#d5d9d9] rounded-lg p-6 md:p-8 text-center shadow-sm">
          <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={36} className="text-green-600" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-green-700 mb-2">Order Placed Successfully!</h1>
          <p className="text-sm text-gray-600 mb-6">
            Thank you for shopping with us. Your order ID is <strong className="text-gray-900 font-bold">#{placedOrderId}</strong>.
          </p>
          <div className="border-t border-b border-gray-100 py-4 mb-8 flex flex-col gap-2.5 text-left text-sm text-gray-700 max-w-sm mx-auto">
            <p><strong>Deliver to:</strong> {shippingName}</p>
            <p><strong>Address:</strong> {shippingAddress}, {shippingCity} - {shippingZip}</p>
            <p><strong>Payment Method:</strong> {paymentMethod === "cod" ? "Cash on Delivery" : "Simulated Credit Card"}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/orders"
              className="bg-[#ffd814] hover:bg-[#f7ca00] text-black font-semibold text-sm px-6 py-2.5 rounded-full shadow-sm cursor-pointer transition-colors text-center"
            >
              Go to Your Orders
            </Link>
            <Link
              href="/"
              className="bg-white hover:bg-gray-50 text-gray-800 border border-[#d5d9d9] font-semibold text-sm px-6 py-2.5 rounded-full shadow-sm cursor-pointer transition-colors text-center"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#eaeded] min-h-screen pb-16 pt-4 font-sans text-[#0F1111]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Checkout Header Banner */}
        <div className="bg-white border border-[#d5d9d9] rounded-lg p-4 mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold">Checkout</h1>
            <span className="text-gray-400 text-lg hidden sm:inline">|</span>
            <Link href="/cart" className="text-[#007185] hover:text-[#c45500] hover:underline text-sm font-semibold">
              ({cartCount} {cartCount === 1 ? "item" : "items"})
            </Link>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <ShieldCheck size={16} className="text-green-600" />
            <span>Secure Transaction</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Form Sections */}
          <div className="lg:col-span-9 flex flex-col gap-6">
            
            {/* Section 1: Shipping Address */}
            <div className="bg-white border border-[#d5d9d9] rounded-lg p-5 md:p-6 shadow-sm">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2 border-b border-gray-100 pb-2">
                <MapPin size={18} className="text-[#e47911]" />
                1. Delivery Address
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-1.5 text-gray-700">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Recipient's first and last name"
                    value={shippingName}
                    onChange={(e) => setShippingName(e.target.value)}
                    className="w-full h-9 border border-[#888c8c] rounded px-3 text-black focus:border-[#007185] focus:ring-2 focus:ring-[#c8f3fa]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1.5 text-gray-700">Street Address</label>
                  <input
                    type="text"
                    required
                    placeholder="Flat, House no., Building, Company, Apartment"
                    value={shippingAddress}
                    onChange={(e) => setShippingAddress(e.target.value)}
                    className="w-full h-9 border border-[#888c8c] rounded px-3 text-black focus:border-[#007185] focus:ring-2 focus:ring-[#c8f3fa]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1.5 text-gray-700">City</label>
                  <input
                    type="text"
                    required
                    placeholder="Town / City"
                    value={shippingCity}
                    onChange={(e) => setShippingCity(e.target.value)}
                    className="w-full h-9 border border-[#888c8c] rounded px-3 text-black focus:border-[#007185] focus:ring-2 focus:ring-[#c8f3fa]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1.5 text-gray-700">Pincode</label>
                  <input
                    type="text"
                    required
                    placeholder="6-digit PIN code"
                    value={shippingZip}
                    onChange={(e) => setShippingZip(e.target.value)}
                    className="w-full h-9 border border-[#888c8c] rounded px-3 text-black focus:border-[#007185] focus:ring-2 focus:ring-[#c8f3fa]"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Payment Method */}
            <div className="bg-white border border-[#d5d9d9] rounded-lg p-5 md:p-6 shadow-sm">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2 border-b border-gray-100 pb-2">
                <CreditCard size={18} className="text-[#e47911]" />
                2. Select a payment method
              </h2>
              
              <div className="flex flex-col gap-3">
                <label className="flex items-start gap-3 p-3 border border-gray-200 rounded cursor-pointer hover:bg-gray-50 transition-colors">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                    className="mt-1 accent-[#e47911]"
                  />
                  <div>
                    <span className="text-sm font-bold text-gray-800 block">Cash on Delivery (COD)</span>
                    <span className="text-xs text-gray-500">Pay with cash, card or UPI upon delivery. No pre-payment required.</span>
                  </div>
                </label>

                <label className="flex items-start gap-3 p-3 border border-gray-200 rounded cursor-pointer hover:bg-gray-50 transition-colors">
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={() => setPaymentMethod("card")}
                    className="mt-1 accent-[#e47911]"
                  />
                  <div>
                    <span className="text-sm font-bold text-gray-800 block">Credit / Debit Card (Simulated)</span>
                    <span className="text-xs text-gray-500">Simulate a secure online credit card payment. Details are not saved.</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Section 3: Review Items */}
            <div className="bg-white border border-[#d5d9d9] rounded-lg p-5 md:p-6 shadow-sm">
              <h2 className="text-lg font-bold mb-4 border-b border-gray-100 pb-2">
                3. Review items and delivery
              </h2>

              <div className="flex flex-col gap-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 items-center">
                    <div className="w-16 h-16 bg-gray-50 rounded border border-gray-100 p-1 flex items-center justify-center shrink-0">
                      <img src={item.imageUrl} alt={item.title} className="max-h-full max-w-full object-contain" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-gray-800 truncate">{item.title}</h4>
                      <p className="text-xs text-gray-500 mt-0.5">Quantity: {item.quantity} | Brand: {item.brand || "Seller"}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-sm font-bold text-gray-900">₹{(item.price * item.quantity).toLocaleString("en-IN")}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-3 bg-white border border-[#d5d9d9] rounded-lg p-5 shadow-sm sticky top-4 flex flex-col gap-4">
            <h3 className="text-base font-bold border-b border-gray-100 pb-2">Order Summary</h3>
            
            <div className="flex flex-col gap-2.5 text-sm text-gray-600 border-b border-gray-100 pb-3">
              <div className="flex justify-between">
                <span>Items:</span>
                <span>₹{cartSubtotal.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery:</span>
                <span className="text-green-700 font-medium">FREE</span>
              </div>
            </div>

            <div className="flex justify-between text-base font-bold text-gray-900 border-b border-gray-100 pb-3">
              <span>Order Total:</span>
              <span className="text-xl">₹{cartSubtotal.toLocaleString("en-IN")}</span>
            </div>

            {orderError && (
              <div className="text-xs text-red-600 bg-red-50 border border-red-200 rounded p-2.5 font-medium leading-relaxed">
                {orderError}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#ffd814] hover:bg-[#f7ca00] text-black font-semibold text-sm py-2.5 px-4 rounded-full shadow-sm cursor-pointer transition-colors border border-[#a88734] disabled:opacity-60"
            >
              {loading ? "Placing order..." : "Place your order"}
            </button>

            <p className="text-[10px] text-gray-500 leading-relaxed text-center">
              By placing your order, you agree to our conditions of use and privacy notice.
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}
