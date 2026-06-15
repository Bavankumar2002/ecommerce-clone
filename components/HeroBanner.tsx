"use client";

import { useState } from "react";

const bannerSlides = [
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
];

const categoryCards = [
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

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? bannerSlides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === bannerSlides.length - 1 ? 0 : c + 1));

  const slide = bannerSlides[current];

  return (
    <div className="w-full bg-[#eaeded] pb-8">
      {/* Hero Slider */}
      <div
        className="relative w-full h-[450px] flex items-center justify-between overflow-hidden transition-all duration-500"
        style={{ backgroundColor: slide.bg }}
      >
        {/* Left Arrow */}
        <button
          onClick={prev}
          className="absolute left-6 top-[28%] -translate-y-1/2 z-20 text-7xl text-gray-800 hover:text-black font-light focus:outline-none cursor-pointer select-none"
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
        <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-[#eaeded] to-transparent pointer-events-none z-10" />

        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute right-6 top-[28%] -translate-y-1/2 z-20 text-7xl text-gray-800 hover:text-black font-light focus:outline-none cursor-pointer select-none"
        >
          &#8250;
        </button>
      </div>

      {/* Category Cards */}
      <div className="relative z-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-5 mt-[-180px]">
        {categoryCards.map((card) => {
          const isHeadphones = card.title.includes("headphones");
          return (
            <div key={card.title} className="bg-white p-5 rounded shadow flex flex-col justify-between h-[420px] z-20">
              <div>
                <h3 className="text-[19px] font-bold mb-3 text-black leading-snug tracking-tight">{card.title}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {card.items.map((item) => (
                    <div key={item.label} className="flex flex-col items-start cursor-pointer group">
                      <div className="w-full overflow-hidden bg-gray-50 flex items-center justify-center rounded">
                        <img
                          src={item.img}
                          alt={item.label}
                          className={`w-full ${isHeadphones ? 'h-[130px]' : 'h-[100px]'} object-contain object-center group-hover:scale-105 transition-transform duration-300`}
                        />
                      </div>
                      {!isHeadphones && (
                        <p className="text-[11px] text-gray-800 mt-1 line-clamp-1 group-hover:text-blue-600">{item.label}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              {!isHeadphones && (
                <p className="text-xs text-[#007185] hover:text-[#c45500] hover:underline cursor-pointer font-medium mt-3">
                  {card.link}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}