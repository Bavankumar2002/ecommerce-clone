"use client";

import { useRef } from "react";
import ProductCard from "./ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Product {
  id: number;
  title: string;
  price: number | string;
  mrp?: number | string;
  rating: number;
  ratingCount: number;
  imageUrl: string;
  badge?: string;
}

interface ProductGridProps {
  products: Product[];
  title?: string;
  seeMoreLink?: string;
}

export default function ProductGrid({
  products,
  title = "Bestsellers in Electronics",
  seeMoreLink = "#",
}: ProductGridProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75; // Scroll 75% of container width
      scrollContainerRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-white p-5 rounded border border-gray-200 shadow-sm relative">
      {/* Header section */}
      <div className="flex items-baseline justify-between mb-4 border-b border-gray-100 pb-2">
        <h2 className="text-lg md:text-xl font-bold text-black flex items-baseline gap-2">
          {title}
          {seeMoreLink && (
            <a
              href={seeMoreLink}
              className="text-xs md:text-sm text-[#007185] hover:text-[#C45500] hover:underline font-medium"
            >
              See More
            </a>
          )}
        </h2>
        <span className="text-xs text-gray-500 font-medium">Page 1 of 5</span>
      </div>

      {/* Slider Container Wrapper */}
      <div className="relative group/slider">
        {/* Left Arrow Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-[-20px] top-[50%] -translate-y-[50%] w-10 h-10 rounded-md bg-white border border-gray-300 shadow-md flex items-center justify-center cursor-pointer z-20 hover:bg-gray-50 active:bg-gray-100 focus:outline-none transition-colors"
          aria-label="Previous products"
        >
          <ChevronLeft className="text-gray-800" size={24} />
        </button>

        {/* Scrollable products viewport */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto pb-4 pt-1 px-1 no-scrollbar scroll-smooth snap-x snap-mandatory"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="w-[240px] sm:w-[260px] md:w-[280px] shrink-0 snap-start"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-[-20px] top-[50%] -translate-y-[50%] w-10 h-10 rounded-md bg-white border border-gray-300 shadow-md flex items-center justify-center cursor-pointer z-20 hover:bg-gray-50 active:bg-gray-100 focus:outline-none transition-colors"
          aria-label="Next products"
        >
          <ChevronRight className="text-gray-800" size={24} />
        </button>
      </div>
    </div>
  );
}
