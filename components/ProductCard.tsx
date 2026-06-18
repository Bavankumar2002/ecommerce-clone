"use client";

import Link from "next/link";
import { Star, StarHalf } from "lucide-react";

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    price: number | string;
    mrp?: number | string;
    rating: number;
    ratingCount: number;
    imageUrl: string;
    badge?: string;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const formattedPrice = Number(product.price).toLocaleString("en-IN", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  });

  // Render star ratings helper
  const renderStars = (rating: number) => {
    const stars = [];
    const floor = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.4;

    for (let i = 1; i <= 5; i++) {
      if (i <= floor) {
        stars.push(
          <Star key={i} size={15} className="fill-[#F5A623] stroke-[#F5A623]" />
        );
      } else if (i === floor + 1 && hasHalf) {
        stars.push(
          <div key={i} className="relative flex items-center">
            <Star size={15} className="stroke-gray-300 fill-gray-100" />
            <div className="absolute top-0 left-0 w-[50%] overflow-hidden">
              <Star size={15} className="fill-[#F5A623] stroke-[#F5A623]" />
            </div>
          </div>
        );
      } else {
        stars.push(
          <Star key={i} size={15} className="stroke-gray-300 fill-gray-100" />
        );
      }
    }
    return stars;
  };

  return (
    <div className="bg-white rounded shadow-sm border border-gray-100 p-4 flex flex-col justify-between hover:shadow-md transition-shadow relative w-full h-[400px] group select-none">
      {/* Rank Badge */}
      {product.badge && (
        <div className="absolute top-2 left-2 bg-[#D05D00] text-white font-bold text-xs px-2.5 py-1 rounded-sm shadow-sm z-10">
          {product.badge}
        </div>
      )}

      {/* Product Image */}
      <Link
        href={`/products/${product.id}`}
        className="flex-1 flex items-center justify-center overflow-hidden min-h-[160px] relative mt-4 mb-3"
      >
        <img
          src={product.imageUrl}
          alt={product.title}
          className="max-h-[180px] max-w-full object-contain group-hover:scale-[1.03] transition-transform duration-300"
        />
        
        {/* Play Icon Circle (similar to screenshot) */}
        <div className="absolute bottom-2 right-2 w-7 h-7 rounded-full bg-white/90 border border-gray-200 flex items-center justify-center shadow-sm cursor-pointer opacity-80 hover:opacity-100">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-3.5 h-3.5 text-gray-700 ml-0.5"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </Link>

      {/* Product Info */}
      <div className="flex flex-col gap-1.5 shrink-0">
        {/* Title */}
        <Link
          href={`/products/${product.id}`}
          className="text-xs md:text-sm text-[#007185] hover:text-[#C45500] hover:underline leading-tight line-clamp-3 font-medium cursor-pointer"
          title={product.title}
        >
          {product.title}
        </Link>

        {/* Ratings */}
        <div className="flex items-center gap-1">
          <div className="flex items-center">{renderStars(product.rating)}</div>
          <span className="text-xs text-[#007185] hover:text-[#C45500] hover:underline cursor-pointer">
            {product.ratingCount.toLocaleString()}
          </span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-1">
          <span className="text-xs text-[#B12704] font-medium align-super">₹</span>
          <span className="text-sm md:text-base font-bold text-[#B12704] leading-none">
            {formattedPrice}
          </span>
        </div>
      </div>
    </div>
  );
}

// "use client";

// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { Star } from "lucide-react";

// interface ProductCardProps {
//   product: {
//     id: number;
//     title: string;
//     price: number | string;
//     mrp?: number | string;
//     rating: number;
//     ratingCount: number;
//     imageUrl: string;
//     badge?: string;
//   };
// }

// export default function ProductCard({ product }: ProductCardProps) {
//   const router = useRouter();

//   const formattedPrice = Number(product.price).toLocaleString("en-IN", {
//     maximumFractionDigits: 2,
//     minimumFractionDigits: 2,
//   });

//   const renderStars = (rating: number) => {
//     const stars = [];
//     const floor = Math.floor(rating);
//     const hasHalf = rating % 1 >= 0.4;

//     for (let i = 1; i <= 5; i++) {
//       if (i <= floor) {
//         stars.push(<Star key={i} size={15} className="fill-[#F5A623] stroke-[#F5A623]" />);
//       } else if (i === floor + 1 && hasHalf) {
//         stars.push(
//           <div key={i} className="relative flex items-center">
//             <Star size={15} className="stroke-gray-300 fill-gray-100" />
//             <div className="absolute top-0 left-0 w-[50%] overflow-hidden">
//               <Star size={15} className="fill-[#F5A623] stroke-[#F5A623]" />
//             </div>
//           </div>
//         );
//       } else {
//         stars.push(<Star key={i} size={15} className="stroke-gray-300 fill-gray-100" />);
//       }
//     }
//     return stars;
//   };

//   return (
//     <div
//       onClick={() => router.push(`/products/${product.id}`)}
//       className="bg-white rounded shadow-sm border border-gray-100 p-4 flex flex-col justify-between hover:shadow-md transition-shadow relative w-full h-[400px] group select-none cursor-pointer"
//     >
//       {/* Badge */}
//       {product.badge && (
//         <div className="absolute top-2 left-2 bg-[#D05D00] text-white font-bold text-xs px-2.5 py-1 rounded-sm shadow-sm z-10">
//           {product.badge}
//         </div>
//       )}

//       {/* Product Image */}
//       <div className="flex-1 flex items-center justify-center overflow-hidden min-h-[160px] relative mt-4 mb-3">
//         <img
//           src={product.imageUrl}
//           alt={product.title}
//           className="max-h-[180px] max-w-full object-contain group-hover:scale-[1.03] transition-transform duration-300"
//         />
//         <div className="absolute bottom-2 right-2 w-7 h-7 rounded-full bg-white/90 border border-gray-200 flex items-center justify-center shadow-sm cursor-pointer opacity-80 hover:opacity-100">
//           <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-gray-700 ml-0.5">
//             <path d="M8 5v14l11-7z" />
//           </svg>
//         </div>
//       </div>

//       {/* Product Info */}
//       <div className="flex flex-col gap-1.5 shrink-0">
//         <p
//           className="text-xs md:text-sm text-[#007185] hover:text-[#C45500] hover:underline leading-tight line-clamp-3 font-medium"
//           title={product.title}
//         >
//           {product.title}
//         </p>

//         <div className="flex items-center gap-1">
//           <div className="flex items-center">{renderStars(product.rating)}</div>
//           <span className="text-xs text-[#007185] hover:text-[#C45500] hover:underline cursor-pointer">
//             {product.ratingCount.toLocaleString()}
//           </span>
//         </div>

//         <div className="flex items-baseline gap-1">
//           <span className="text-xs text-[#B12704] font-medium align-super">₹</span>
//           <span className="text-sm md:text-base font-bold text-[#B12704] leading-none">
//             {formattedPrice}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }