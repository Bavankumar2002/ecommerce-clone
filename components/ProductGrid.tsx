"use client";

import ProductCard from "./ProductCard";

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
  return (
    <div className="bg-white p-5 rounded border border-gray-200 shadow-sm">
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

      {/* Grid Container - 4 cards per row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
