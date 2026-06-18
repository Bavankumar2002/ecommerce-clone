// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }
// import Link from "next/link";
// import HeroBanner from "@/components/HeroBanner";

// export default function Home() {
//   return (

    // <div>
    //   <h1>Welcome to Amazon Clone</h1>
    // </div>
//     <main>
//       <HeroBanner />
//     </main>
//   );
// }

"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import HeroBanner from "@/components/HeroBanner";
import ProductGrid from "@/components/ProductGrid";
import api from "@/lib/api";

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

function HomeContent() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      setLoadingProducts(true);
      try {
        const res = await api.get("/api/products");
        if (res.data.success) setProducts(res.data.products);
      } catch (e) {
        console.error(e);
      } finally {
        setLoadingProducts(false);
      }
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    const handler = (e: Event) => {
      const category = (e as CustomEvent).detail.category;
      setActiveCategory(category);
      setTimeout(() => {
        document.getElementById("product-section")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    };
    window.addEventListener("navbar-category", handler);
    return () => window.removeEventListener("navbar-category", handler);
  }, []);

  const filteredProducts = activeCategory
    ? products.filter((p) => p.category === activeCategory)
    : [];

  return (
    <main>
      <HeroBanner />

      {activeCategory && (
        <div id="product-section" className="bg-[#EAEDED] px-4 py-8">
          <div className="max-w-[1500px] mx-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">{activeCategory}</h2>
              <button
                onClick={() => setActiveCategory(null)}
                className="text-sm text-[#007185] hover:text-[#C45500] hover:underline cursor-pointer bg-transparent border-none outline-none"
              >
                ✕ Close
              </button>
            </div>

            {loadingProducts ? (
              <div className="flex flex-col items-center justify-center py-20 bg-white rounded shadow-sm border border-gray-200">
                <div className="w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-sm text-gray-500 mt-4">Loading products...</p>
              </div>
            ) : filteredProducts.length > 0 ? (
              <ProductGrid
                products={filteredProducts}
                title={`Bestsellers in ${activeCategory}`}
                seeMoreLink="/products"
              />
            ) : (
              <div className="bg-white p-8 rounded border border-gray-200 text-center shadow-sm">
                <p className="text-gray-500 text-sm">No products found in this category.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#EAEDED]" />}>
      <HomeContent />
    </Suspense>
  );
}