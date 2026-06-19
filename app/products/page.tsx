"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import api from "@/lib/api";
import ProductCard from "@/components/ProductCard";
import { Star, RotateCcw, SlidersHorizontal } from "lucide-react";

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
  brand: string;
  description?: string;
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

function ProductsList() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filter States
  const [selectedCategory, setSelectedCategory] = useState<string>("All Departments");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(null);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<string>("featured");
  
  // Mobile sidebar toggle
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  // Sync state with URL params
  useEffect(() => {
    const cat = searchParams.get("category");
    const search = searchParams.get("search");

    if (cat) {
      setSelectedCategory(cat);
    } else {
      setSelectedCategory("All Departments");
    }

    if (search) {
      setSearchQuery(search);
    } else {
      setSearchQuery("");
    }
  }, [searchParams]);

  // Fetch all products
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

  // Get unique brands dynamically
  const uniqueBrands = Array.from(
    new Set(
      products
        .filter((p) => selectedCategory === "All Departments" || p.category === selectedCategory)
        .map((p) => p.brand)
        .filter(Boolean)
    )
  ).sort() as string[];

  // Update URL helpers
  const updateCategoryUrl = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (category === "All Departments") {
      params.delete("category");
    } else {
      params.set("category", category);
    }
    router.push(`/products?${params.toString()}`);
  };

  const handleBrandChange = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const handleClearFilters = () => {
    setSelectedBrands([]);
    setSelectedPriceRange(null);
    setSelectedRating(null);
    setSortBy("featured");
    setSelectedCategory("All Departments");
    setSearchQuery("");
    router.push("/products");
  };

  // Filter products logic
  const filteredProducts = products.filter((p) => {
    // 1. Category Filter
    if (selectedCategory !== "All Departments" && p.category !== selectedCategory) {
      return false;
    }

    // 2. Search Query Filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const titleMatch = p.title?.toLowerCase().includes(q);
      const brandMatch = p.brand?.toLowerCase().includes(q);
      const catMatch = p.category?.toLowerCase().includes(q);
      const descMatch = p.description?.toLowerCase().includes(q);
      if (!titleMatch && !brandMatch && !catMatch && !descMatch) {
        return false;
      }
    }

    // 3. Brand Filter
    if (selectedBrands.length > 0 && !selectedBrands.includes(p.brand)) {
      return false;
    }

    // 4. Rating Filter
    if (selectedRating !== null && p.rating < selectedRating) {
      return false;
    }

    // 5. Price Filter
    if (selectedPriceRange) {
      const price = Number(p.price);
      if (selectedPriceRange === "under500" && price >= 500) return false;
      if (selectedPriceRange === "500-1000" && (price < 500 || price >= 1000)) return false;
      if (selectedPriceRange === "1000-5000" && (price < 1000 || price >= 5000)) return false;
      if (selectedPriceRange === "5000-10000" && (price < 5000 || price >= 10000)) return false;
      if (selectedPriceRange === "over10000" && price < 10000) return false;
    }

    return true;
  });

  // Sort products logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "priceAsc") {
      return Number(a.price) - Number(b.price);
    }
    if (sortBy === "priceDesc") {
      return Number(b.price) - Number(a.price);
    }
    if (sortBy === "rating") {
      return b.rating - a.rating;
    }
    // Default Featured
    return a.id - b.id;
  });

  const renderStarsRating = (minRating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          size={14}
          className={
            i <= minRating
              ? "fill-[#F5A623] stroke-[#F5A623]"
              : "stroke-gray-300 fill-gray-100"
          }
        />
      );
    }
    return stars;
  };

  const SidebarContent = () => (
    <div className="flex flex-col gap-6 text-gray-800 text-sm">
      {/* Category Section */}
      <div>
        <h3 className="font-bold text-gray-900 mb-2">Category</h3>
        <ul className="flex flex-col gap-1 text-xs">
          <li>
            <button
              onClick={() => updateCategoryUrl("All Departments")}
              className={`text-left hover:text-[#c45500] hover:underline block w-full py-0.5 cursor-pointer ${
                selectedCategory === "All Departments" ? "font-bold text-[#c45500]" : "text-gray-700"
              }`}
            >
              All Departments
            </button>
          </li>
          {departments.map((dept) => (
            <li key={dept}>
              <button
                onClick={() => updateCategoryUrl(dept)}
                className={`text-left hover:text-[#c45500] hover:underline block w-full py-0.5 cursor-pointer ${
                  selectedCategory === dept ? "font-bold text-[#c45500]" : "text-gray-700"
                }`}
              >
                {dept}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <hr className="border-gray-200" />

      {/* Customer Review Rating */}
      <div>
        <h3 className="font-bold text-gray-900 mb-2">Customer Reviews</h3>
        <ul className="flex flex-col gap-2 text-xs">
          {[4, 3, 2, 1].map((stars) => (
            <li key={stars}>
              <button
                onClick={() => setSelectedRating(stars)}
                className={`flex items-center gap-1.5 hover:text-[#c45500] cursor-pointer text-left w-full ${
                  selectedRating === stars ? "font-bold text-[#c45500]" : ""
                }`}
              >
                <div className="flex">{renderStarsRating(stars)}</div>
                <span>& Up</span>
              </button>
            </li>
          ))}
          {selectedRating !== null && (
            <li className="mt-1">
              <button
                onClick={() => setSelectedRating(null)}
                className="text-[#007185] hover:text-[#c45500] hover:underline text-xs flex items-center gap-1 cursor-pointer bg-transparent border-none outline-none"
              >
                ✕ Clear Rating Filter
              </button>
            </li>
          )}
        </ul>
      </div>

      <hr className="border-gray-200" />

      {/* Brand Section */}
      {uniqueBrands.length > 0 && (
        <div>
          <h3 className="font-bold text-gray-900 mb-2">Brand</h3>
          <div className="flex flex-col gap-1.5 max-h-48 overflow-y-auto pr-1 no-scrollbar text-xs">
            {uniqueBrands.map((brand) => {
              const isChecked = selectedBrands.includes(brand);
              return (
                <label key={brand} className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => handleBrandChange(brand)}
                    className="w-3.5 h-3.5 border-gray-300 rounded focus:ring-amber-500 accent-amber-500 cursor-pointer"
                  />
                  <span className="text-gray-700 hover:text-[#c45500]">{brand}</span>
                </label>
              );
            })}
          </div>
          {selectedBrands.length > 0 && (
            <button
              onClick={() => setSelectedBrands([])}
              className="text-[#007185] hover:text-[#c45500] hover:underline text-xs mt-2 cursor-pointer bg-transparent border-none outline-none block"
            >
              ✕ Clear Brands
            </button>
          )}
        </div>
      )}

      {uniqueBrands.length > 0 && <hr className="border-gray-200" />}

      {/* Price Section */}
      <div>
        <h3 className="font-bold text-gray-900 mb-2">Price</h3>
        <ul className="flex flex-col gap-1.5 text-xs">
          {[
            { label: "Under ₹500", id: "under500" },
            { label: "₹500 - ₹1,000", id: "500-1000" },
            { label: "₹1,000 - ₹5,000", id: "1000-5000" },
            { label: "₹5,000 - ₹10,000", id: "5000-10000" },
            { label: "Over ₹10,000", id: "over10000" },
          ].map((range) => (
            <li key={range.id}>
              <button
                onClick={() => setSelectedPriceRange(range.id)}
                className={`text-left hover:text-[#c45500] hover:underline block w-full cursor-pointer ${
                  selectedPriceRange === range.id ? "font-bold text-[#c45500]" : "text-gray-700"
                }`}
              >
                {range.label}
              </button>
            </li>
          ))}
          {selectedPriceRange !== null && (
            <li className="mt-1">
              <button
                onClick={() => setSelectedPriceRange(null)}
                className="text-[#007185] hover:text-[#c45500] hover:underline text-xs flex items-center gap-1 cursor-pointer bg-transparent border-none outline-none"
              >
                ✕ Clear Price Filter
              </button>
            </li>
          )}
        </ul>
      </div>

      <hr className="border-gray-200" />

      {/* Clear Filters Button */}
      <button
        onClick={handleClearFilters}
        className="w-full flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded text-xs transition-colors border border-gray-300 cursor-pointer"
      >
        <RotateCcw size={14} />
        Clear All Filters
      </button>
    </div>
  );

  return (
    <div className="w-full bg-white min-h-screen pb-12">
      {/* Top Banner indicating search stats */}
      <div className="bg-[#fcfcfc] border-b border-gray-200 px-5 py-2">
        <div className="max-w-[1500px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-gray-700">
          <div>
            {loading ? (
              <span className="text-xs text-gray-500">Searching products...</span>
            ) : (
              <span className="text-xs font-medium text-gray-600">
                1-{sortedProducts.length} of {sortedProducts.length} results
                {searchQuery && (
                  <span>
                    {" "}
                    for <span className="text-[#c45500] font-semibold">&ldquo;{searchQuery}&rdquo;</span>
                  </span>
                )}
                {selectedCategory !== "All Departments" && (
                  <span>
                    {" "}
                    in <span className="text-gray-900 font-semibold">{selectedCategory}</span>
                  </span>
                )}
              </span>
            )}
          </div>
          <div className="flex items-center gap-4">
            {/* Sort Select */}
            <div className="flex items-center gap-1.5 text-xs">
              <span className="text-gray-500">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-1 px-2.5 rounded border border-gray-300 outline-none cursor-pointer text-xs"
              >
                <option value="featured">Featured</option>
                <option value="priceAsc">Price: Low to High</option>
                <option value="priceDesc">Price: High to Low</option>
                <option value="rating">Avg. Customer Review</option>
              </select>
            </div>

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowMobileSidebar(true)}
              className="md:hidden flex items-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300 px-2 py-1 rounded text-xs cursor-pointer font-medium"
            >
              <SlidersHorizontal size={12} />
              Filters
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="max-w-[1500px] mx-auto px-4 py-5 flex gap-6">
        
        {/* Left Sidebar - Desktop */}
        <aside className="hidden md:block w-[240px] shrink-0 border-r border-gray-150 pr-4">
          <SidebarContent />
        </aside>

        {/* Mobile Sidebar Overlay */}
        {showMobileSidebar && (
          <div className="fixed inset-0 z-50 flex">
            {/* Dark background overlay */}
            <div
              className="fixed inset-0 bg-black/50 transition-opacity"
              onClick={() => setShowMobileSidebar(false)}
            />
            {/* Sidebar drawer */}
            <div className="relative w-80 max-w-[85vw] bg-white h-full shadow-xl flex flex-col p-5 z-10 overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-gray-900">Filters</h2>
                <button
                  onClick={() => setShowMobileSidebar(false)}
                  className="p-1 text-gray-500 hover:text-black cursor-pointer"
                >
                  ✕
                </button>
              </div>
              <SidebarContent />
            </div>
          </div>
        )}

        {/* Products Grid Area */}
        <main className="flex-1 min-w-0">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-32 bg-white">
              <div className="w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-sm text-gray-500 mt-4 font-medium">Fetching match details...</p>
            </div>
          ) : error ? (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative shadow-sm max-w-2xl mx-auto my-8">
              <span className="block sm:inline">{error}</span>
            </div>
          ) : sortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {sortedProducts.map((product) => (
                <div key={product.id} className="flex">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white py-20 px-4 text-center max-w-lg mx-auto border border-gray-200 rounded mt-8">
              <svg
                className="w-16 h-16 text-gray-300 mx-auto mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h2 className="text-xl font-bold text-gray-800 mb-2">No Results Found</h2>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                We couldn&apos;t find any products matching your current filters. Try adjusting your checkboxes or clear the filters to start over.
              </p>
              <button
                onClick={handleClearFilters}
                className="bg-[#f0c14b] hover:bg-[#e2b238] text-black font-semibold py-2 px-5 rounded border border-[#a88734] shadow-sm hover:shadow transition-all cursor-pointer text-sm"
              >
                Clear Filters
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="flex flex-col items-center justify-center py-20 bg-white min-h-screen">
        <div className="w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-sm text-gray-500 mt-4 font-medium">Loading search results...</p>
      </div>
    }>
      <ProductsList />
    </Suspense>
  );
}
