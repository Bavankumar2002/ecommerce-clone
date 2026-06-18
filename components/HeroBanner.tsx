"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import api from "@/lib/api";

interface DealItem {
  id?: number;
  label: string;
  img: string;
}

interface DealBox {
  id: number;
  title: string;
  seeAllLink: string;
  seeAllLabel: string;
  items: DealItem[];
}

const staticBannerSlides = [
  {
    id: 1,
    bg: "#fce4ec",
    imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/2025/GW/UNREC/PC/78269._CB785061629_.jpg",
  },
  {
    id: 2,
    bg: "#e3f2fd",
    imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Media/1/toys/Desktop_tall_Hero_3000x1200_RC-Cars_1._CB784186419_.jpg",
  },
  {
    id: 3,
    bg: "#e3f2fd",
    imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/CookwareDining/tdhruvko/GW/BAU/Mar26/WBLB3000X1200.jpg._CB786181535_.jpg",
  },
  {
    id: 4,
    bg: "#e3f2fd",
    imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Books/May26/Desktop_tall_Hero_3000x1200_EL_Rec._CB762895918_.jpg",
  },
  {
    id: 5,
    bg: "#e3f2fd",
    imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/CEPC/Dec/amazonspecial/BFCM25_GW_PC_Hero._CB775393558_.jpg",
  },
  {
    id: 6,
    bg: "#e3f2fd",
    imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/2025/GW/UNREC/PC/78270._CB785061629_.jpg",
  },
  {
    id: 7,
    bg: "#e3f2fd",
    imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/INSLGW/pc_unrec_may25_refresh._CB761742379_.jpg",
  },
];

const staticCategoryCards = [
  {
    title: "Appliances for your home | Up to 55% off",
    items: [
      { label: "Air conditioners", img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg" },
      { label: "Refrigerators", img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg" },
      { label: "Microwaves", img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg" },
      { label: "Washing machines", img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg" },
    ],
    link: "See more",
  },
  {
    title: "Revamp your home in style",
    items: [
      { label: "Cushion covers, bedsheets & more", img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg" },
      { label: "Figurines, vases & more", img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg" },
      { label: "Home storage", img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg" },
      { label: "Lighting solutions", img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg" },
    ],
    link: "Explore all",
  },
  {
    title: "Starting ₹49 | Deals on home essentials",
    items: [
      { label: "Cleaning supplies", img: "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Wipes_low_res_V1._SY116_CB549138744_.jpg" },
      { label: "Bathroom accessories", img: "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Shower_heads_low_res_V1._SY116_CB549138744_.jpg" },
      { label: "Home tools", img: "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Tools_low_res_V1._SY116_CB549138744_.jpg" },
      { label: "Wallpapers", img: "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Wallpapers_low_res_V1._SY116_CB549138744_.jpg" },
    ],
    link: "Explore all",
  },
  {
    title: "Up to 75% off | Deals on headphones",
    items: [
      { label: "Neckband 1", img: "https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_SY170_.jpg" },
      { label: "Neckband 2", img: "https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_SY170_.jpg" },
      { label: "Earbuds 1", img: "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg" },
      { label: "Earbuds 2", img: "https://m.media-amazon.com/images/I/71ndbdVgC7L._AC_SY170_.jpg" },
    ],
    link: "Explore all",
  },
];

const staticDealBoxes = [
  {
    id: 1,
    title: "Starting ₹70,348 | Engineered for the road",
    seeAllLink: "#",
    seeAllLabel: "See all offers",
    items: [
      { label: "Bajaj Pulsar NS200", img: "https://m.media-amazon.com/images/I/71TfK6WMv+L._AC_UL480_FMwebp_QL65_.jpg" },
      { label: "Bajaj Pulsar N150", img: "https://m.media-amazon.com/images/I/61GHpNzKP1L._AC_UL480_FMwebp_QL65_.jpg" },
      { label: "Honda CB Shine", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJOSVVublEfDGSc0_gEXKHDg0Owr9a-DZiMVNqRVBjLw&s" },
      { label: "Hero Splendor Plus", img: "https://m.media-amazon.com/images/I/41IwyO8DbVL._AC_UL480_FMwebp_QL65_.jpg" },
      { label: "TVS Apache", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvtYeZFQ4zDq4nB6d4rYuQNEPoZAsbz1lg7rBskU0v1ptqfMgTopuEkRzTbvsDkJfDMbrpfa72YYugGWuRKBFlhHHYwxLT4kf_SVzuYcoB&s=10" },
      { label: "Ultraviolette F77", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFgzQmfdsJW28Xc2DHk7o3Jp5Cz1-QtkOLgOGTr76rjg&s=10" },
      { label: "Yamaha XSR155", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqMVCtrK5f06R2fJl9BmWb7xJOmE62DoXdegGQDtkkBQ&s=10" },
      { label: "Yamaha MT15", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGAD6l4mfC-ktSiz9gg7ROa5Lxj8A20g-Vc9Oz34aMJA&s=10" },
    ],
  },
  {
    id: 2,
    title: "Min. 30% off | Curated collections from Small Businesses",
    seeAllLink: "#",
    seeAllLabel: "See more",
    items: [
      { label: "Furniture", img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg" },
      { label: "Wall Art", img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg" },
      { label: "Decorative Items", img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg" },
      { label: "Handmade Baskets", img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg" },
      { label: "Globe Decor", img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg" },
      { label: "Kitchen Organizer", img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg" },
      { label: "Cutlery Set", img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg" },
    ],
  },
  {
    id: 3,
    title: "Up to 60% off | Top deals on Electronics",
    seeAllLink: "#",
    seeAllLabel: "See all deals",
    items: [
      { label: "Smartphones", img: "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg" },
      { label: "Laptops", img: "https://m.media-amazon.com/images/I/71ndbdVgC7L._AC_SY170_.jpg" },
      { label: "Earbuds", img: "https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_SY170_.jpg" },
      { label: "Smart Watches", img: "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg" },
      { label: "Tablets", img: "https://m.media-amazon.com/images/I/71ndbdVgC7L._AC_SY170_.jpg" },
    ],
  },
  {
    id: 4,
    title: "Fashion | Trending styles at great prices",
    seeAllLink: "#",
    seeAllLabel: "Explore all",
    items: [
      { label: "Men's T-Shirts", img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg" },
      { label: "Women's Kurtas", img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg" },
      { label: "Sneakers", img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg" },
      { label: "Handbags", img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg" },
      { label: "Sunglasses", img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg" },
    ],
  },
];

const getCategoryFromText = (text: string) => {
  const normalized = text.toLowerCase();
  if (/headphones|earbuds|neckband|smartphones|laptops|electronics|fashion|clothing|accessories/.test(normalized)) {
    return "Electronics";
  }
  if (/home|kitchen|appliances|cleaning|bathroom|wallpapers|furniture|storage|lighting/.test(normalized)) {
    return "Home & Kitchen";
  }
  if (/fashion|clothing|accessories|handbags|kurtas|sneakers/.test(normalized)) {
    return "Clothing & Accessories";
  }
  if (/car|motorbike|industrial|road|engineered/.test(normalized)) {
    return "Car & Motorbike";
  }
  return "";
};

const buildProductListUrl = (category: string) =>
  category ? `/products?category=${encodeURIComponent(category)}` : "/products";

export default function HeroBanner() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [bannerSlides, setBannerSlides] = useState(staticBannerSlides);
  const [categoryCards, setCategoryCards] = useState(staticCategoryCards);
  const [dealBoxes, setDealBoxes] = useState<DealBox[]>(staticDealBoxes);

  useEffect(() => {
    async function fetchHomeData() {
      try {
        const res = await api.get("/api/home-data");
        if (res.data.success) {
          if (res.data.bannerSlides && res.data.bannerSlides.length > 0) {
            setBannerSlides(res.data.bannerSlides);
          }
          if (res.data.categoryCards && res.data.categoryCards.length > 0) {
            setCategoryCards(res.data.categoryCards);
          }
          if (res.data.dealBoxes && res.data.dealBoxes.length > 0) {
            setDealBoxes(res.data.dealBoxes);
          }
        }
      } catch (err) {
        console.error("Failed to load home data from DB, using static fallback:", err);
      }
    }
    fetchHomeData();
  }, []);

  const prev = () => setCurrent((c) => (c === 0 ? bannerSlides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === bannerSlides.length - 1 ? 0 : c + 1));

  const slide = bannerSlides[current] || staticBannerSlides[0];

  return (
    <div className="w-full bg-[#eaeded] pb-8">
      {/* Hero Slider */}
      <div
        className="relative w-full h-[220px] sm:h-[320px] md:h-[400px] lg:h-[450px] flex items-center justify-between overflow-hidden transition-all duration-500"
        style={{ backgroundColor: slide.bg }}
      >
        {/* Left Arrow */}
        <button
          onClick={prev}
          className="absolute left-2 md:left-6 top-[35%] sm:top-[28%] -translate-y-1/2 z-20 text-4xl md:text-7xl text-gray-800 hover:text-black font-light focus:outline-none cursor-pointer select-none"
        >
          &#8249;
        </button>

        {/* Banner Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src={slide.imageUrl}
            alt="banner"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Bottom Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 md:h-44 bg-gradient-to-t from-[#eaeded] to-transparent pointer-events-none z-10" />

        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute right-2 md:right-6 top-[35%] sm:top-[28%] -translate-y-1/2 z-20 text-4xl md:text-7xl text-gray-800 hover:text-black font-light focus:outline-none cursor-pointer select-none"
        >
          &#8250;
        </button>
      </div>

      {/* Category Cards */}
      <div className="relative z-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-4 md:px-5 mt-[-40px] sm:mt-[-80px] md:mt-[-120px] lg:mt-[-180px]">
        {categoryCards.map((card) => {
          const isHeadphones = card.title.includes("headphones");
          return (
            <div key={card.title} className="bg-white p-4 md:p-5 rounded shadow flex flex-col justify-between h-auto md:h-[420px] min-h-[380px] md:min-h-0 z-20">
              <div>
                <h3 className="text-base md:text-[19px] font-bold mb-3 text-black leading-snug tracking-tight">{card.title}</h3>
                <div className="grid grid-cols-2 gap-2 md:gap-3">
                  {card.items.map((item) => {
                    const category = getCategoryFromText(card.title) || getCategoryFromText(item.label);
                    const href = buildProductListUrl(category);
                    return (
                      <Link
                        key={item.label}
                        href={href}
                        className="flex flex-col items-start group"
                      >
                        <div className="w-full overflow-hidden bg-gray-50 flex items-center justify-center rounded">
                          <img
                            src={item.img}
                            alt={item.label}
                            className={`w-full ${isHeadphones ? 'h-[100px] sm:h-[120px] md:h-[130px]' : 'h-[80px] sm:h-[90px] md:h-[100px]'} object-contain object-center group-hover:scale-105 transition-transform duration-300`}
                          />
                        </div>
                        {!isHeadphones && (
                          <p className="text-[10px] md:text-[11px] text-gray-800 mt-1 line-clamp-1 group-hover:text-blue-600">{item.label}</p>
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>
              {!isHeadphones && (
                <Link
                  href={buildProductListUrl(getCategoryFromText(card.title))}
                  className="text-xs text-[#007185] hover:text-[#c45500] hover:underline cursor-pointer font-medium mt-3 md:mt-0"
                >
                  {card.link}
                </Link>
              )}
            </div>
          );
        })}
      </div>

      {/* ✅ NEW: Deal/Promo Boxes Section (like motorcycle & small business boxes in screenshot) */}
      <div className="px-4 md:px-5 mt-6 flex flex-col gap-6">
        {dealBoxes.map((box) => (
          <div key={box.id} className="bg-white rounded shadow p-4 md:p-5">
            {/* Box Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg md:text-xl font-bold text-black leading-snug">{box.title}</h2>
              <a
                href={box.seeAllLink}
                className="text-xs md:text-sm text-[#007185] hover:text-[#c45500] hover:underline font-medium whitespace-nowrap ml-4 shrink-0"
              >
                {box.seeAllLabel}
              </a>
            </div>

            {/* Horizontally Scrollable Items */}
            <div className="relative">
              <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar scroll-smooth">
                {box.items.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => item.id && router.push(`/products/${item.id}`)}
                    className="flex flex-col items-center cursor-pointer group shrink-0 w-[140px] sm:w-[160px] md:w-[180px]"
                  >
                    <div className="w-full h-[110px] sm:h-[130px] md:h-[150px] bg-gray-50 rounded flex items-center justify-center overflow-hidden border border-gray-100">
                      <img
                        src={item.img}
                        alt={item.label}
                        className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <p className="text-[11px] md:text-xs text-gray-700 mt-1.5 text-center line-clamp-2 group-hover:text-[#c45500]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}