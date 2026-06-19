"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { useCart } from "@/hooks/useCart";
import api from "@/lib/api";
import { Package, ChevronRight, AlertCircle, ShoppingBag } from "lucide-react";

interface OrderItem {
  id: number;
  order_id: number;
  product_id: number;
  quantity: number;
  price: number | string;
  title: string;
  image_url: string;
  brand: string | null;
  category: string;
}

interface Order {
  id: number;
  user_id: number;
  total: number | string;
  shipping_name: string;
  shipping_address: string;
  shipping_city: string;
  shipping_zip: string;
  created_at: string;
  items: OrderItem[];
}

export default function OrdersPage() {
  const { user } = useAuth();
  const { addToCart } = useCart();
  const router = useRouter();

  const [mounted, setMounted] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !user) {
      router.push(`/login?redirect=${encodeURIComponent("/orders")}`);
    }
  }, [mounted, user, router]);

  useEffect(() => {
    if (!user) return;
    const userId = user.id;

    async function fetchOrders() {
      try {
        setLoading(true);
        setError(null);
        const res = await api.get(`/api/orders?userId=${userId}`);
        if (res.data.success) {
          setOrders(res.data.orders);
        } else {
          setError(res.data.error || "Failed to retrieve order history.");
        }
      } catch (err: any) {
        console.error("Fetch orders error:", err);
        setError("Could not load your orders. Please check your database connection.");
      } finally {
        setLoading(false);
      }
    }

    fetchOrders();
  }, [user]);

  const handleBuyAgain = (item: OrderItem) => {
    addToCart({
      id: item.product_id,
      title: item.title,
      price: item.price,
      imageUrl: item.image_url,
      brand: item.brand || undefined,
      stock: 10, // Default fallback stock
    }, 1);
    router.push("/cart");
  };

  const formatDate = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString("en-IN", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  if (!mounted || !user) {
    return (
      <main className="min-h-[70vh] bg-[#eaeded] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
      </main>
    );
  }

  return (
    <main className="bg-[#eaeded] min-h-screen pb-16 pt-4 font-sans text-[#0F1111]">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-xs text-gray-600 mb-4">
          <Link href="/" className="hover:text-[#c45500] hover:underline">Home</Link>
          <ChevronRight size={12} className="text-gray-400" />
          <Link href="/profile" className="hover:text-[#c45500] hover:underline">Your Account</Link>
          <ChevronRight size={12} className="text-gray-400" />
          <span className="font-semibold text-gray-800">Your Orders</span>
        </div>

        <h1 className="text-2xl md:text-3xl font-normal mb-6">Your Orders</h1>

        {loading ? (
          <div className="bg-white border border-[#d5d9d9] rounded-lg p-12 text-center shadow-sm">
            <div className="w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-sm text-gray-500">Loading your order history...</p>
          </div>
        ) : error ? (
          <div className="bg-white border border-[#d5d9d9] rounded-lg p-8 shadow-sm flex items-start gap-3 text-red-700 bg-red-50/50 border-red-200">
            <AlertCircle size={20} className="shrink-0 text-red-600 mt-0.5" />
            <div>
              <h3 className="font-bold text-sm">Error Loading Orders</h3>
              <p className="text-xs mt-1">{error}</p>
            </div>
          </div>
        ) : orders.length === 0 ? (
          <div className="bg-white border border-[#d5d9d9] rounded-lg p-8 md:p-12 text-center shadow-sm">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package size={30} className="text-gray-400" />
            </div>
            <h3 className="text-lg font-bold mb-1">No orders placed yet</h3>
            <p className="text-sm text-gray-500 mb-6">
              Looks like you haven&apos;t ordered anything yet. Browse our bestsellers to find great deals!
            </p>
            <Link
              href="/bestsellers"
              className="bg-[#ffd814] hover:bg-[#f7ca00] text-black font-semibold text-sm px-6 py-2 rounded-full shadow-sm cursor-pointer transition-colors inline-block"
            >
              Shop Bestsellers
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {orders.map((order) => (
              <div key={order.id} className="bg-white border border-[#d5d9d9] rounded-lg overflow-hidden shadow-sm">
                
                {/* Order Header Card (metadata summary) */}
                <div className="bg-[#f0f2f2] border-b border-[#d5d9d9] px-4 py-3 md:px-6 md:py-4 flex flex-wrap gap-y-4 gap-x-8 text-xs text-gray-600 justify-between items-center">
                  <div className="flex flex-wrap gap-x-8 gap-y-2">
                    <div>
                      <p className="uppercase font-semibold text-[10px] text-gray-500 tracking-wider">Order Placed</p>
                      <p className="font-medium text-gray-800 mt-0.5">{formatDate(order.created_at)}</p>
                    </div>
                    <div>
                      <p className="uppercase font-semibold text-[10px] text-gray-500 tracking-wider">Total</p>
                      <p className="font-bold text-gray-800 mt-0.5">₹{Number(order.total).toLocaleString("en-IN")}</p>
                    </div>
                    <div>
                      <p className="uppercase font-semibold text-[10px] text-gray-500 tracking-wider">Ship To</p>
                      <span className="font-medium text-[#007185] hover:text-[#c45500] cursor-pointer hover:underline relative group mt-0.5 block">
                        {order.shipping_name}
                        {/* Hover Tooltip showing delivery address */}
                        <span className="absolute left-0 bottom-full mb-1 w-48 bg-white text-gray-800 text-[11px] p-2.5 rounded shadow-lg border border-gray-200 hidden group-hover:block z-10 leading-normal pointer-events-none">
                          <strong className="block text-gray-900 mb-0.5">{order.shipping_name}</strong>
                          {order.shipping_address}<br />
                          {order.shipping_city} - {order.shipping_zip}
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="uppercase font-semibold text-[10px] text-gray-500 tracking-wider">Order ID</p>
                    <p className="font-medium text-gray-800 mt-0.5">#{order.id}</p>
                  </div>
                </div>

                {/* Order Items Body */}
                <div className="p-4 md:p-6 flex flex-col gap-6">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex flex-col sm:flex-row gap-4 items-center sm:items-start justify-between border-b border-gray-100 last:border-b-0 pb-6 last:pb-0">
                      <div className="flex gap-4 items-center sm:items-start flex-1 min-w-0">
                        {/* Thumbnail */}
                        <Link href={`/products/${item.product_id}`} className="w-20 h-20 bg-gray-50 border border-gray-100 p-1.5 flex items-center justify-center shrink-0 rounded">
                          <img src={item.image_url} alt={item.title} className="max-h-full max-w-full object-contain" />
                        </Link>
                        
                        <div className="min-w-0">
                          <Link href={`/products/${item.product_id}`} className="text-sm font-bold text-[#007185] hover:text-[#c45500] hover:underline line-clamp-2 leading-snug">
                            {item.title}
                          </Link>
                          {item.brand && (
                            <p className="text-xs text-gray-500 mt-0.5">by {item.brand}</p>
                          )}
                          <p className="text-xs text-gray-700 mt-2 font-medium bg-gray-50 border border-gray-200 rounded px-2 py-0.5 inline-block">
                            Quantity: {item.quantity}
                          </p>
                          <p className="text-xs text-gray-800 mt-1 font-bold">
                            ₹{Number(item.price).toLocaleString("en-IN")} each
                          </p>
                        </div>
                      </div>

                      {/* Buy it again / Details links */}
                      <div className="flex flex-row sm:flex-col gap-2 mt-4 sm:mt-0 shrink-0 w-full sm:w-auto justify-center sm:justify-start">
                        <button
                          onClick={() => handleBuyAgain(item)}
                          className="w-full sm:w-36 bg-[#ffd814] hover:bg-[#f7ca00] text-black font-semibold text-xs py-1.5 px-3 rounded-full shadow-sm cursor-pointer border border-[#a88734] transition-colors"
                        >
                          Buy it again
                        </button>
                        <Link
                          href={`/products/${item.product_id}`}
                          className="w-full sm:w-36 bg-white hover:bg-gray-50 text-gray-800 text-xs py-1.5 px-3 rounded-full border border-[#d5d9d9] shadow-sm font-medium transition-colors text-center inline-block"
                        >
                          View item
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </main>
  );
}
