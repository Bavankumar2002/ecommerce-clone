"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import api from "@/lib/api";
import { Star, MapPin, ShieldCheck, RefreshCw, Truck, Heart, Share2 } from "lucide-react";

interface Product {
  id: number;
  title: string;
  price: number | string;
  mrp?: number | string;
  rating: number;
  ratingCount: number;
  imageUrl: string;
  images?: string[];
  badge?: string;
  category: string;
  brand?: string;
  highlights?: string;
  specs?: Record<string, string>;
  description?: string;
  stock: number;
}

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [activeImage, setActiveImage] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    if (!id) return;
    async function fetchProductDetails() {
      try {
        setLoading(true);
        const res = await api.get(`/api/products/${id}`);
        if (res.data.success) {
          const prod = res.data.product;
          setProduct(prod);
          setActiveImage(prod.imageUrl);
        } else {
          setError(res.data.error || "Failed to load product details");
        }
      } catch (err: any) {
        console.error("Error loading product details:", err);
        setError("Product not found or database connection failed.");
      } finally {
        setLoading(false);
      }
    }
    fetchProductDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] bg-white">
        <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-sm text-gray-500 mt-4">Fetching product details...</p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded shadow-sm inline-block">
          <h2 className="text-lg font-bold mb-1">Error Loading Page</h2>
          <p className="text-sm">{error || "Could not retrieve details for this item."}</p>
        </div>
        <div className="mt-6">
          <Link
            href="/products"
            className="text-sm text-[#007185] hover:text-[#c45500] hover:underline font-bold"
          >
            ← Back to Bestsellers
          </Link>
        </div>
      </div>
    );
  }

  // Calculate discount percentage
  const numPrice = Number(product.price);
  const numMrp = product.mrp ? Number(product.mrp) : null;
  const discountPercent = numMrp ? Math.round(((numMrp - numPrice) / numMrp) * 100) : null;

  // Star ratings helper
  const renderStars = (rating: number) => {
    const stars = [];
    const floor = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.4;

    for (let i = 1; i <= 5; i++) {
      if (i <= floor) {
        stars.push(
          <Star key={i} size={18} className="fill-[#F5A623] stroke-[#F5A623]" />
        );
      } else if (i === floor + 1 && hasHalf) {
        stars.push(
          <div key={i} className="relative flex items-center">
            <Star size={18} className="stroke-gray-300 fill-gray-100" />
            <div className="absolute top-0 left-0 w-[50%] overflow-hidden">
              <Star size={18} className="fill-[#F5A623] stroke-[#F5A623]" />
            </div>
          </div>
        );
      } else {
        stars.push(
          <Star key={i} size={18} className="stroke-gray-300 fill-gray-100" />
        );
      }
    }
    return stars;
  };

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  // Get gallery list (combining primary image with optional dynamic images array)
  const imageGallery = [
    product.imageUrl,
    ...(product.images && Array.isArray(product.images) ? product.images : []),
  ].filter((url, index, self) => self.indexOf(url) === index); // Deduplicate

  return (
    <div className="bg-white min-h-screen text-black font-sans pb-16">
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 border-b border-gray-200 py-2.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center text-xs text-gray-600 gap-1.5 overflow-x-auto whitespace-nowrap">
          <Link href="/products" className="hover:text-[#c45500] hover:underline">
            Bestsellers
          </Link>
          <span>›</span>
          <span className="hover:text-[#c45500] cursor-pointer hover:underline">
            {product.category}
          </span>
          {product.brand && (
            <>
              <span>›</span>
              <span className="font-bold text-gray-800">{product.brand}</span>
            </>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Image Gallery Viewport & Thumbnails */}
          <div className="lg:col-span-5 flex flex-col md:flex-row gap-4 items-center md:items-start">
            {/* Gallery Thumbnails List */}
            {imageGallery.length > 1 && (
              <div className="flex md:flex-col gap-2 order-2 md:order-1 overflow-x-auto md:overflow-x-visible">
                {imageGallery.map((url, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(url)}
                    className={`w-12 h-12 md:w-16 md:h-16 rounded border bg-white flex items-center justify-center p-1 shrink-0 transition-all cursor-pointer ${
                      activeImage === url
                        ? "border-[#e47911] ring-1 ring-[#e47911] shadow-sm"
                        : "border-gray-300 hover:border-gray-500"
                    }`}
                  >
                    <img src={url} alt={`Thumbnail ${idx}`} className="max-h-full max-w-full object-contain" />
                  </button>
                ))}
              </div>
            )}

            {/* Main Interactive Viewport */}
            <div className="flex-1 order-1 md:order-2 bg-white border border-gray-100 rounded p-6 flex items-center justify-center min-h-[300px] sm:min-h-[400px] md:min-h-[480px] max-w-full relative group shadow-sm">
              <img
                src={activeImage}
                alt={product.title}
                className="max-h-[380px] md:max-h-[440px] max-w-full object-contain select-none transition-all duration-300 group-hover:scale-[1.02]"
              />
              <div className="absolute top-2 right-2 flex flex-col gap-2 z-10">
                <button className="p-2 bg-white rounded-full border border-gray-200 hover:bg-gray-50 cursor-pointer shadow-sm text-gray-500 hover:text-black">
                  <Share2 size={16} />
                </button>
                <button className="p-2 bg-white rounded-full border border-gray-200 hover:bg-gray-50 cursor-pointer shadow-sm text-gray-500 hover:text-red-500">
                  <Heart size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* CENTER: Details Column */}
          <div className="lg:col-span-4 flex flex-col border-b lg:border-none border-gray-200 pb-6 lg:pb-0">
            {/* Title & Brand */}
            <h1 className="text-xl md:text-2xl font-semibold text-gray-900 leading-snug tracking-tight mb-1">
              {product.title}
            </h1>
            {product.brand && (
              <div className="text-sm font-medium text-[#007185] hover:text-[#C45500] hover:underline cursor-pointer mb-2">
                Visit the {product.brand} Store
              </div>
            )}

            {/* Ratings Summary */}
            <div className="flex items-center gap-2 mb-4 text-sm border-b border-gray-100 pb-3">
              <span className="font-bold text-gray-900">{product.rating}</span>
              <div className="flex items-center">{renderStars(product.rating)}</div>
              <span className="text-[#007185] hover:text-[#C45500] hover:underline cursor-pointer">
                {product.ratingCount.toLocaleString()} ratings
              </span>
            </div>

            {/* Pricing Section */}
            <div className="mb-4">
              <div className="flex items-baseline gap-2">
                {discountPercent && (
                  <span className="text-2xl md:text-3xl font-light text-red-600">
                    -{discountPercent}%
                  </span>
                )}
                <div className="flex items-baseline text-2xl md:text-3xl font-bold">
                  <span className="text-base align-super mr-0.5">₹</span>
                  <span>{numPrice.toLocaleString("en-IN")}</span>
                </div>
              </div>
              
              {numMrp && (
                <div className="text-xs text-gray-500 mt-1">
                  M.R.P.: <span className="line-through">₹{numMrp.toLocaleString("en-IN")}</span>
                </div>
              )}
              
              <div className="text-xs text-gray-800 font-semibold mt-1">
                Inclusive of all taxes
              </div>
            </div>

            {/* Special Amazon-style Badges & Promotions */}
            <div className="grid grid-cols-3 gap-2 border border-gray-200 rounded p-3 bg-gray-50/50 mb-5 text-center">
              <div className="flex flex-col items-center justify-center">
                <Truck size={20} className="text-[#e47911] mb-1" />
                <span className="text-[10px] font-bold text-gray-900">Free Delivery</span>
              </div>
              <div className="flex flex-col items-center justify-center border-x border-gray-200">
                <RefreshCw size={20} className="text-[#e47911] mb-1" />
                <span className="text-[10px] font-bold text-gray-900">7 Days Replacement</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <ShieldCheck size={20} className="text-[#e47911] mb-1" />
                <span className="text-[10px] font-bold text-gray-900">1 Year Warranty</span>
              </div>
            </div>

            {/* Highlights (Bullet Points) */}
            {product.highlights && (
              <div className="mb-5 border-t border-gray-100 pt-4">
                <h3 className="text-sm font-bold mb-2">Key Features:</h3>
                <ul className="list-disc list-inside text-xs md:text-sm text-gray-800 space-y-1 pl-1">
                  {product.highlights.split(",").map((point, index) => (
                    <li key={index}>{point.trim()}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Specifications Grid */}
            {product.specs && Object.keys(product.specs).length > 0 && (
              <div className="border-t border-gray-100 pt-4">
                <h3 className="text-sm font-bold mb-2">Technical Specifications:</h3>
                <div className="grid grid-cols-2 gap-y-2 gap-x-4 bg-gray-50 p-3 rounded text-xs border border-gray-100">
                  {Object.entries(product.specs).map(([key, val]) => (
                    <div key={key} className="contents">
                      <span className="font-semibold text-gray-600">{key}</span>
                      <span className="text-gray-900">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT: Buy/Cart Sticky Box */}
          <div className="lg:col-span-3 border border-gray-300 rounded-lg p-5 shadow-sm bg-white flex flex-col gap-4">
            <div className="flex items-baseline">
              <span className="text-sm align-super mr-0.5 font-bold">₹</span>
              <span className="text-xl md:text-2xl font-bold">{numPrice.toLocaleString("en-IN")}</span>
            </div>

            <div>
              <p className="text-xs text-gray-800 mt-1">
                <span className="text-[#007185] hover:text-[#c45500] hover:underline cursor-pointer font-medium">FREE delivery</span>{" "}
                <span className="font-bold">Tomorrow, June 19</span>. Order within <span className="text-green-700 font-medium">4 hrs 12 mins</span>.
              </p>
            </div>

            {/* Delivery Location */}
            <div className="flex items-center gap-1.5 text-xs text-gray-600 border-b border-gray-100 pb-3">
              <MapPin size={14} className="shrink-0 text-gray-500" />
              <span>Delivering to Madurai 625009 - Update location</span>
            </div>

            {/* Stock Status */}
            <div>
              {product.stock > 0 ? (
                <div className="flex flex-col gap-0.5">
                  <span className="text-base font-bold text-green-700">In stock</span>
                  {product.stock <= 5 && (
                    <span className="text-xs text-amber-700 font-semibold">
                      Only {product.stock} left in stock - order soon.
                    </span>
                  )}
                </div>
              ) : (
                <span className="text-base font-bold text-red-600">Currently unavailable</span>
              )}
            </div>

            {/* Quantity Selector */}
            {product.stock > 0 && (
              <div className="flex items-center gap-2 text-xs">
                <span className="text-gray-600 font-medium">Quantity:</span>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded px-2.5 py-1 cursor-pointer focus:outline-none focus:ring-1 focus:ring-amber-500"
                >
                  {[...Array(Math.min(10, product.stock))].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Buttons */}
            {product.stock > 0 ? (
              <div className="flex flex-col gap-2.5 mt-2">
                {/* Add to Cart button */}
                <button
                  onClick={handleAddToCart}
                  className={`w-full py-2 px-4 rounded-full text-xs md:text-sm font-semibold text-black shadow-sm cursor-pointer border transition-all ${
                    addedToCart
                      ? "bg-green-500 border-green-600 text-white font-bold"
                      : "bg-gradient-to-b from-[#F7DFA5] to-[#F0C14B] border-[#a88734] hover:from-[#f5d78e] hover:to-[#eeb933] active:from-[#f0c14b] active:to-[#e5b225]"
                  }`}
                >
                  {addedToCart ? "✓ Added to Cart!" : "Add to Cart"}
                </button>

                {/* Buy Now button */}
                <button className="w-full py-2 px-4 rounded-full text-xs md:text-sm font-semibold text-white bg-gradient-to-b from-[#F3A847] to-[#E47911] border-[#a88734] hover:from-[#f19e38] hover:to-[#d66f0a] active:from-[#e47911] active:to-[#cb6700] shadow-sm cursor-pointer transition-all">
                  Buy Now
                </button>
              </div>
            ) : (
              <button
                disabled
                className="w-full py-2 px-4 rounded-full text-xs md:text-sm font-semibold text-gray-400 bg-gray-200 border border-gray-300 cursor-not-allowed shadow-none"
              >
                Out of Stock
              </button>
            )}

            {/* Fulfilled Info */}
            <div className="text-[11px] text-gray-500 space-y-0.5 border-t border-gray-100 pt-3">
              <p>Ships from: <span className="text-gray-700 font-medium">Amazon</span></p>
              <p>Sold by: <span className="text-[#007185] hover:text-[#c45500] hover:underline cursor-pointer font-medium">{product.brand || "Seller"}</span></p>
            </div>
          </div>
        </div>

        {/* BOTTOM: Detailed Description */}
        {product.description && (
          <div className="mt-12 border-t border-gray-200 pt-8 max-w-4xl">
            <h2 className="text-lg font-bold text-gray-900 mb-3">Product Description</h2>
            <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
              {product.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// "use client";

// import { useEffect, useState } from "react";
// import { useParams, useRouter } from "next/navigation";
// import Link from "next/link";
// import api from "@/lib/api";
// import { Star, MapPin, ShieldCheck, RefreshCw, Truck, Heart, Share2, ArrowLeft } from "lucide-react";

// interface Product {
//   id: number;
//   title: string;
//   price: number | string;
//   mrp?: number | string;
//   rating: number;
//   ratingCount: number;
//   imageUrl: string;
//   images?: string[];
//   badge?: string;
//   category: string;
//   brand?: string;
//   highlights?: string;
//   specs?: Record<string, string>;
//   description?: string;
//   stock: number;
// }

// export default function ProductDetailPage() {
//   const { id } = useParams();
//   const router = useRouter();
//   const [product, setProduct] = useState<Product | null>(null);
//   const [activeImage, setActiveImage] = useState<string>("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [quantity, setQuantity] = useState(1);
//   const [addedToCart, setAddedToCart] = useState(false);

//   useEffect(() => {
//     if (!id) return;
//     async function fetchProductDetails() {
//       try {
//         setLoading(true);
//         const res = await api.get(`/api/products/${id}`);
//         if (res.data.success) {
//           const prod = res.data.product;
//           setProduct(prod);
//           setActiveImage(prod.imageUrl);
//         } else {
//           setError(res.data.error || "Failed to load product details");
//         }
//       } catch (err: any) {
//         setError("Product not found or database connection failed.");
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchProductDetails();
//   }, [id]);

//   if (loading) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-[70vh] bg-white">
//         <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
//         <p className="text-sm text-gray-500 mt-4">Fetching product details...</p>
//       </div>
//     );
//   }

//   if (error || !product) {
//     return (
//       <div className="max-w-4xl mx-auto px-4 py-16 text-center">
//         <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded shadow-sm inline-block">
//           <h2 className="text-lg font-bold mb-1">Error Loading Page</h2>
//           <p className="text-sm">{error || "Could not retrieve details for this item."}</p>
//         </div>
//         <div className="mt-6">
//           <button onClick={() => router.back()} className="text-sm text-[#007185] hover:text-[#c45500] hover:underline font-bold">
//             ← Go Back
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const numPrice = Number(product.price);
//   const numMrp = product.mrp ? Number(product.mrp) : null;
//   const discountPercent = numMrp ? Math.round(((numMrp - numPrice) / numMrp) * 100) : null;

//   const renderStars = (rating: number) => {
//     const stars = [];
//     const floor = Math.floor(rating);
//     const hasHalf = rating % 1 >= 0.4;
//     for (let i = 1; i <= 5; i++) {
//       if (i <= floor) {
//         stars.push(<Star key={i} size={18} className="fill-[#F5A623] stroke-[#F5A623]" />);
//       } else if (i === floor + 1 && hasHalf) {
//         stars.push(
//           <div key={i} className="relative flex items-center">
//             <Star size={18} className="stroke-gray-300 fill-gray-100" />
//             <div className="absolute top-0 left-0 w-[50%] overflow-hidden">
//               <Star size={18} className="fill-[#F5A623] stroke-[#F5A623]" />
//             </div>
//           </div>
//         );
//       } else {
//         stars.push(<Star key={i} size={18} className="stroke-gray-300 fill-gray-100" />);
//       }
//     }
//     return stars;
//   };

//   const handleAddToCart = () => {
//     setAddedToCart(true);
//     setTimeout(() => setAddedToCart(false), 3000);
//   };

//   const imageGallery = [
//     product.imageUrl,
//     ...(product.images && Array.isArray(product.images) ? product.images : []),
//   ].filter((url, index, self) => self.indexOf(url) === index);

//   return (
//     <div className="bg-white min-h-screen text-black font-sans pb-16">
//       {/* Breadcrumb */}
//       <div className="bg-gray-50 border-b border-gray-200 py-2.5 px-6">
//         <div className="max-w-7xl mx-auto flex items-center text-xs text-gray-600 gap-1.5 overflow-x-auto whitespace-nowrap">
//           <button
//             onClick={() => router.back()}
//             className="flex items-center gap-1 text-[#007185] hover:text-[#c45500] hover:underline font-medium cursor-pointer bg-transparent border-none outline-none"
//           >
//             <ArrowLeft size={12} /> Back
//           </button>
//           <span>›</span>
//           <Link href="/products" className="hover:text-[#c45500] hover:underline">
//             Bestsellers
//           </Link>
//           <span>›</span>
//           <span className="hover:text-[#c45500] cursor-pointer hover:underline">{product.category}</span>
//           {product.brand && (
//             <>
//               <span>›</span>
//               <span className="font-bold text-gray-800">{product.brand}</span>
//             </>
//           )}
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

//           {/* LEFT: Image Gallery */}
//           <div className="lg:col-span-5 flex flex-col md:flex-row gap-4 items-center md:items-start">
//             {imageGallery.length > 1 && (
//               <div className="flex md:flex-col gap-2 order-2 md:order-1 overflow-x-auto md:overflow-x-visible">
//                 {imageGallery.map((url, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => setActiveImage(url)}
//                     className={`w-12 h-12 md:w-16 md:h-16 rounded border bg-white flex items-center justify-center p-1 shrink-0 transition-all cursor-pointer ${
//                       activeImage === url
//                         ? "border-[#e47911] ring-1 ring-[#e47911] shadow-sm"
//                         : "border-gray-300 hover:border-gray-500"
//                     }`}
//                   >
//                     <img src={url} alt={`Thumbnail ${idx}`} className="max-h-full max-w-full object-contain" />
//                   </button>
//                 ))}
//               </div>
//             )}

//             <div className="flex-1 order-1 md:order-2 bg-white border border-gray-100 rounded p-6 flex items-center justify-center min-h-[300px] sm:min-h-[400px] md:min-h-[480px] max-w-full relative group shadow-sm">
//               <img
//                 src={activeImage}
//                 alt={product.title}
//                 className="max-h-[380px] md:max-h-[440px] max-w-full object-contain select-none transition-all duration-300 group-hover:scale-[1.02]"
//               />
//               <div className="absolute top-2 right-2 flex flex-col gap-2 z-10">
//                 <button className="p-2 bg-white rounded-full border border-gray-200 hover:bg-gray-50 cursor-pointer shadow-sm text-gray-500 hover:text-black">
//                   <Share2 size={16} />
//                 </button>
//                 <button className="p-2 bg-white rounded-full border border-gray-200 hover:bg-gray-50 cursor-pointer shadow-sm text-gray-500 hover:text-red-500">
//                   <Heart size={16} />
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* CENTER: Details */}
//           <div className="lg:col-span-4 flex flex-col border-b lg:border-none border-gray-200 pb-6 lg:pb-0">
//             <h1 className="text-xl md:text-2xl font-semibold text-gray-900 leading-snug tracking-tight mb-1">
//               {product.title}
//             </h1>
//             {product.brand && (
//               <div className="text-sm font-medium text-[#007185] hover:text-[#C45500] hover:underline cursor-pointer mb-2">
//                 Visit the {product.brand} Store
//               </div>
//             )}

//             <div className="flex items-center gap-2 mb-4 text-sm border-b border-gray-100 pb-3">
//               <span className="font-bold text-gray-900">{product.rating}</span>
//               <div className="flex items-center">{renderStars(product.rating)}</div>
//               <span className="text-[#007185] hover:text-[#C45500] hover:underline cursor-pointer">
//                 {product.ratingCount.toLocaleString()} ratings
//               </span>
//             </div>

//             <div className="mb-4">
//               <div className="flex items-baseline gap-2">
//                 {discountPercent && (
//                   <span className="text-2xl md:text-3xl font-light text-red-600">-{discountPercent}%</span>
//                 )}
//                 <div className="flex items-baseline text-2xl md:text-3xl font-bold">
//                   <span className="text-base align-super mr-0.5">₹</span>
//                   <span>{numPrice.toLocaleString("en-IN")}</span>
//                 </div>
//               </div>
//               {numMrp && (
//                 <div className="text-xs text-gray-500 mt-1">
//                   M.R.P.: <span className="line-through">₹{numMrp.toLocaleString("en-IN")}</span>
//                 </div>
//               )}
//               <div className="text-xs text-gray-800 font-semibold mt-1">Inclusive of all taxes</div>
//             </div>

//             <div className="grid grid-cols-3 gap-2 border border-gray-200 rounded p-3 bg-gray-50/50 mb-5 text-center">
//               <div className="flex flex-col items-center justify-center">
//                 <Truck size={20} className="text-[#e47911] mb-1" />
//                 <span className="text-[10px] font-bold text-gray-900">Free Delivery</span>
//               </div>
//               <div className="flex flex-col items-center justify-center border-x border-gray-200">
//                 <RefreshCw size={20} className="text-[#e47911] mb-1" />
//                 <span className="text-[10px] font-bold text-gray-900">7 Days Replacement</span>
//               </div>
//               <div className="flex flex-col items-center justify-center">
//                 <ShieldCheck size={20} className="text-[#e47911] mb-1" />
//                 <span className="text-[10px] font-bold text-gray-900">1 Year Warranty</span>
//               </div>
//             </div>

//             {product.highlights && (
//               <div className="mb-5 border-t border-gray-100 pt-4">
//                 <h3 className="text-sm font-bold mb-2">Key Features:</h3>
//                 <ul className="list-disc list-inside text-xs md:text-sm text-gray-800 space-y-1 pl-1">
//                   {product.highlights.split(",").map((point, index) => (
//                     <li key={index}>{point.trim()}</li>
//                   ))}
//                 </ul>
//               </div>
//             )}

//             {product.specs && Object.keys(product.specs).length > 0 && (
//               <div className="border-t border-gray-100 pt-4">
//                 <h3 className="text-sm font-bold mb-2">Technical Specifications:</h3>
//                 <div className="grid grid-cols-2 gap-y-2 gap-x-4 bg-gray-50 p-3 rounded text-xs border border-gray-100">
//                   {Object.entries(product.specs).map(([key, val]) => (
//                     <div key={key} className="contents">
//                       <span className="font-semibold text-gray-600">{key}</span>
//                       <span className="text-gray-900">{val}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* RIGHT: Buy Box */}
//           <div className="lg:col-span-3 border border-gray-300 rounded-lg p-5 shadow-sm bg-white flex flex-col gap-4">
//             <div className="flex items-baseline">
//               <span className="text-sm align-super mr-0.5 font-bold">₹</span>
//               <span className="text-xl md:text-2xl font-bold">{numPrice.toLocaleString("en-IN")}</span>
//             </div>

//             <div>
//               <p className="text-xs text-gray-800 mt-1">
//                 <span className="text-[#007185] hover:text-[#c45500] hover:underline cursor-pointer font-medium">FREE delivery</span>{" "}
//                 <span className="font-bold">Tomorrow, June 19</span>. Order within{" "}
//                 <span className="text-green-700 font-medium">4 hrs 12 mins</span>.
//               </p>
//             </div>

//             <div className="flex items-center gap-1.5 text-xs text-gray-600 border-b border-gray-100 pb-3">
//               <MapPin size={14} className="shrink-0 text-gray-500" />
//               <span>Delivering to Madurai 625009 - Update location</span>
//             </div>

//             <div>
//               {product.stock > 0 ? (
//                 <div className="flex flex-col gap-0.5">
//                   <span className="text-base font-bold text-green-700">In stock</span>
//                   {product.stock <= 5 && (
//                     <span className="text-xs text-amber-700 font-semibold">
//                       Only {product.stock} left in stock - order soon.
//                     </span>
//                   )}
//                 </div>
//               ) : (
//                 <span className="text-base font-bold text-red-600">Currently unavailable</span>
//               )}
//             </div>

//             {product.stock > 0 && (
//               <div className="flex items-center gap-2 text-xs">
//                 <span className="text-gray-600 font-medium">Quantity:</span>
//                 <select
//                   value={quantity}
//                   onChange={(e) => setQuantity(Number(e.target.value))}
//                   className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded px-2.5 py-1 cursor-pointer focus:outline-none focus:ring-1 focus:ring-amber-500"
//                 >
//                   {[...Array(Math.min(10, product.stock))].map((_, i) => (
//                     <option key={i + 1} value={i + 1}>{i + 1}</option>
//                   ))}
//                 </select>
//               </div>
//             )}

//             {product.stock > 0 ? (
//               <div className="flex flex-col gap-2.5 mt-2">
//                 <button
//                   onClick={handleAddToCart}
//                   className={`w-full py-2 px-4 rounded-full text-xs md:text-sm font-semibold text-black shadow-sm cursor-pointer border transition-all ${
//                     addedToCart
//                       ? "bg-green-500 border-green-600 text-white font-bold"
//                       : "bg-gradient-to-b from-[#F7DFA5] to-[#F0C14B] border-[#a88734] hover:from-[#f5d78e] hover:to-[#eeb933]"
//                   }`}
//                 >
//                   {addedToCart ? "✓ Added to Cart!" : "Add to Cart"}
//                 </button>
//                 <button className="w-full py-2 px-4 rounded-full text-xs md:text-sm font-semibold text-white bg-gradient-to-b from-[#F3A847] to-[#E47911] border-[#a88734] hover:from-[#f19e38] hover:to-[#d66f0a] shadow-sm cursor-pointer transition-all">
//                   Buy Now
//                 </button>
//               </div>
//             ) : (
//               <button disabled className="w-full py-2 px-4 rounded-full text-xs md:text-sm font-semibold text-gray-400 bg-gray-200 border border-gray-300 cursor-not-allowed">
//                 Out of Stock
//               </button>
//             )}

//             <div className="text-[11px] text-gray-500 space-y-0.5 border-t border-gray-100 pt-3">
//               <p>Ships from: <span className="text-gray-700 font-medium">Amazon</span></p>
//               <p>Sold by: <span className="text-[#007185] hover:text-[#c45500] hover:underline cursor-pointer font-medium">{product.brand || "Seller"}</span></p>
//             </div>
//           </div>
//         </div>

//         {product.description && (
//           <div className="mt-12 border-t border-gray-200 pt-8 max-w-4xl">
//             <h2 className="text-lg font-bold text-gray-900 mb-3">Product Description</h2>
//             <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">{product.description}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }