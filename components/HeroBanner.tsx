"use client";

import { useState } from "react";
import Image from "next/image";

const bannerSlides = [
  {
    id: 1,
    title: "Sneakers",
    subtitle: "Under ₹599",
    tags: ["TOP BRANDS", "LATEST TRENDS"],
    cashback: "Unlimited 5%* cashback with Amazon Pay ICICI Bank credit card",
    bg: "#fce4ec",
    imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/2025/GW/UNREC/PC/78269._CB785061629_.jpg",
  },
  {
    id: 2,
    title: "Electronics",
    subtitle: "Up to 70% off",
    tags: ["BEST DEALS", "TOP BRANDS"],
    cashback: "Unlimited 5%* cashback with Amazon Pay ICICI Bank credit card",
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
      { label: "Cushion covers, bedsheets & more", img: "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Wipes_low_res_V1._SY116_CB549138744_.jpg" },
      { label: "Figurines, vases & more", img: "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Shower_heads_low_res_V1._SY116_CB549138744_.jpg" },
      { label: "Home storage", img: "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Tools_low_res_V1._SY116_CB549138744_.jpg" },
      { label: "Lighting solutions", img: "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Wallpapers_low_res_V1._SY116_CB549138744_.jpg" },
    ],
    link: "Explore all",
  },
  {
    title: "Starting ₹49 | Deals on home essentials",
    items: [
      { label: "Cleaning supplies", img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg" },
      { label: "Bathroom accessories", img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg" },
      { label: "Home tools", img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg" },
      { label: "Wallpapers", img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg" },
    ],
    link: "Explore all",
  },
  {
    title: "Up to 75% off | Deals on headphones",
    items: [
      { label: "Earbuds", img: "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg" },
      { label: "Neckbands", img: "https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_SY170_.jpg" },
      { label: "Over-ear", img: "https://m.media-amazon.com/images/I/512jrg8-68L._AC_SY170_.jpg" },
      { label: "Wired", img: "https://m.media-amazon.com/images/I/71ndbdVgC7L._AC_SY170_.jpg" },
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
    <div className="w-full">
      {/* Hero Slider */}
      <div
        className="relative w-full h-[400px] flex items-center justify-between px-10 overflow-hidden transition-all duration-500"
        style={{ backgroundColor: slide.bg }}
      >
        {/* Left Arrow */}
        <button
          onClick={prev}
          className="absolute left-2 z-10 text-3xl text-gray-600 hover:text-black bg-white bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
        >
          &#8249;
        </button>

        {/* Text Content */}
        <div className="flex flex-col gap-2 ml-10 z-10">
          <p className="text-lg text-gray-700">{slide.title}</p>
          <h2 className="text-4xl font-bold text-gray-900">{slide.subtitle}</h2>
          <div className="flex gap-3 mt-2">
            {slide.tags.map((tag) => (
              <span key={tag} className="text-xs font-semibold border-r border-gray-400 pr-3 last:border-0">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 mt-3 bg-white px-3 py-2 rounded shadow-sm w-fit">
            <span className="text-xs text-gray-600">{slide.cashback}</span>
          </div>
          <p className="text-[10px] text-gray-400">*T&C apply</p>
        </div>

        {/* Banner Image */}
        <div className="absolute right-0 top-0 h-full w-[600px]">
          <img
            src={slide.imageUrl}
            alt="banner"
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute right-2 z-10 text-3xl text-gray-600 hover:text-black bg-white bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
        >
          &#8250;
        </button>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 py-6 bg-gray-100">
        {categoryCards.map((card) => (
          <div key={card.title} className="bg-white p-4 rounded shadow">
            <h3 className="text-sm font-bold mb-3 leading-snug">{card.title}</h3>
            <div className="grid grid-cols-2 gap-2">
              {card.items.map((item) => (
                <div key={item.label} className="flex flex-col items-center">
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-full h-24 object-cover rounded"
                  />
                  <p className="text-xs text-center mt-1 text-gray-700">{item.label}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-blue-500 hover:underline cursor-pointer mt-3">
              {card.link}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}