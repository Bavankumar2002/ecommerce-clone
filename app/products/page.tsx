"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import api from "@/lib/api";
import ProductGrid from "@/components/ProductGrid";

interface Product {
  id: number;
  title: string;
  price: number | string;
  mrp?: number | string;
  rating: number;
  ratingCount: number;
  imageUrl: string;
  badge?: string;
  category: string;
}

const departments = [
  "Amazon Launchpad",
  "Amazon Renewed",
  "Apps & Games",
  "Baby Products",
  "Bags, Wallets and Luggage",
  "Beauty",
  "Books",
  "Car & Motorbike",
  "Clothing & Accessories",
  "Computers & Accessories",
  "Electronics",
  "Garden & Outdoors",
  "Gift Cards",
  "Grocery & Gourmet Foods",
  "Health & Personal Care",
  "Home & Kitchen",
  "Home Improvement",
  "Industrial & Scientific",
  "Jewellery",
];

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"bestsellers" | "releases">("bestsellers");
  const [selectedDept, setSelectedDept] = useState("Electronics");
  const searchParams = useSearchParams();

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const res = await api.get("/api/products");
        if (res.data.success) {
          setProducts(res.data.products);
        } else {
          setError(res.data.error || "Failed to load products");
        }
      } catch (err: any) {
        console.error("Error fetching products:", err);
        setError("Could not retrieve products. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      setSelectedDept(category);
    }
  }, [searchParams]);

  const filteredProducts = products.filter((p) => p.category === selectedDept);

  return (
    <div className="w-full bg-[#EAEDED] min-h-screen pb-12">
      {/* Top Banner (Optional Amazon style sub-nav) */}
      <div className="bg-white border-b border-gray-200 px-5 py-2.5">
        <div className="max-w-7xl mx-auto flex items-center gap-6 text-sm font-medium text-gray-700">
          <span className="text-[#c45500] font-bold border-b-2 border-[#c45500] pb-0.5 cursor-pointer">Bestsellers</span>
          <span className="hover:text-[#c45500] cursor-pointer transition-colors">Hot New Releases</span>
        </div>
      </div>

      <div className="max-w-[1500px] mx-auto px-4 py-5 flex flex-col md:flex-row gap-6">
        
        {/* Left Sidebar - Departments */}
        <aside className="w-full md:w-[220px] shrink-0 bg-white md:bg-transparent p-4 md:p-0 rounded border md:border-none border-gray-200 shadow-sm md:shadow-none">
          <h2 className="text-sm font-bold text-gray-900 mb-2 tracking-tight">Any Department</h2>
          <ul className="flex flex-wrap md:flex-col gap-x-4 gap-y-1">
            {departments.map((dept) => {
              const isSelected = dept === selectedDept;
              return (
                <li key={dept} className="w-[45%] md:w-full">
                  <button
                    onClick={() => setSelectedDept(dept)}
                    className={`text-left text-xs py-1 hover:text-[#c45500] hover:underline cursor-pointer block w-full transition-colors ${
                      isSelected
                        ? "font-bold text-black border-l-2 border-[#e47911] pl-1.5"
                        : "text-gray-700"
                    }`}
                  >
                    {dept}
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col min-w-0">
          {/* Header */}
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
              Amazon Bestsellers
            </h1>
            <p className="text-xs text-gray-500 mt-0.5">
              Our most popular products based on sales. Updated frequently.
            </p>
          </div>

          {/* Sub Tabs */}
          <div className="flex border-b border-gray-300 gap-8 mb-6 bg-white md:bg-transparent p-1 md:p-0 rounded">
            <button
              onClick={() => setActiveTab("bestsellers")}
              className={`text-sm font-bold pb-2 transition-all cursor-pointer ${
                activeTab === "bestsellers"
                  ? "text-black border-b-2 border-[#e47911]"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              Bestsellers
            </button>
            <button
              onClick={() => setActiveTab("releases")}
              className={`text-sm font-bold pb-2 transition-all cursor-pointer ${
                activeTab === "releases"
                  ? "text-black border-b-2 border-[#e47911]"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              Hot New Releases
            </button>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 bg-white rounded shadow-sm border border-gray-200">
              <div className="w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-sm text-gray-500 mt-4">Loading bestsellers...</p>
            </div>
          ) : error ? (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative shadow-sm">
              <span className="block sm:inline">{error}</span>
            </div>
          ) : activeTab === "bestsellers" ? (
            <div className="flex flex-col gap-6">
              {/* Electronics section */}
              {filteredProducts.length > 0 ? (
                <ProductGrid
                  products={filteredProducts}
                  title={`Bestsellers in ${selectedDept}`}
                  seeMoreLink="#"
                />
              ) : (
                <div className="bg-white p-8 rounded border border-gray-200 text-center">
                  <p className="text-gray-500 text-sm">No bestselling products found in this category.</p>
                </div>
              )}

              {/* Other departments dummy banner / grid if needed */}
              <div className="bg-white p-5 rounded border border-gray-200 shadow-sm">
                <h3 className="text-base font-bold text-gray-900 mb-3">About Amazon Bestsellers</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Our Bestsellers list is calculated based on Amazon customer sales and is updated hourly to reflect the most current information. Whether you are looking for top-rated smartphones, wireless earbuds, accessories, or other electronics, you will find the most trending options here.
                </p>
              </div>
            </div>
          ) : (
            <div className="bg-white p-12 rounded border border-gray-200 text-center shadow-sm">
              <svg
                className="w-12 h-12 text-gray-300 mx-auto mb-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-base font-bold text-gray-800 mb-1">New Releases Coming Soon</h3>
              <p className="text-xs text-gray-500">We are currently updating our list of hot new releases. Check back shortly!</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
