"use client";

import Link from "next/link";
import { ShoppingCart, MapPin, Search } from "lucide-react";

export default function Navbar() {
  return (
    <>
      {/* Top Navbar */}
      <nav className="bg-[#131921] text-white">
        {/* Main Nav Container */}
        <div className="flex flex-col md:flex-row md:items-center px-4 py-2 gap-2 md:gap-4">
          
          {/* Top Row for Mobile: Hamburger + Logo + Account + Cart */}
          <div className="flex items-center justify-between w-full md:w-auto gap-2">
            <div className="flex items-center gap-2">
              {/* Mobile Hamburger menu */}
              <button className="md:hidden text-white hover:border border-transparent hover:border-white p-1.5 rounded cursor-pointer transition-colors">
                <span className="text-2xl leading-none">☰</span>
              </button>
              
              {/* Logo */}
              <Link href="/" className="text-2xl md:text-3xl font-bold flex items-center hover:border border-transparent hover:border-white p-1 rounded shrink-0">
                amazon<span className="text-xs md:text-sm pt-2">.in</span>
              </Link>
            </div>

            {/* Mobile Actions: Sign-in & Cart */}
            <div className="flex items-center gap-1.5 md:hidden">
              <Link href="/login" className="cursor-pointer hover:border border-transparent hover:border-white p-1.5 rounded text-xs flex items-center gap-0.5">
                <span className="font-semibold text-gray-200">Sign in</span>
                <span className="text-[8px] text-gray-400">▼</span>
              </Link>
              
              <Link href="/cart" className="flex items-end relative cursor-pointer hover:border border-transparent hover:border-white p-1.5 rounded">
                <div className="relative flex items-center justify-center">
                  <span className="absolute -top-1.5 left-[50%] -translate-x-1/2 text-orange-500 font-bold text-sm leading-none bg-[#131921] px-0.5 rounded-full">0</span>
                  <ShoppingCart size={24} />
                </div>
              </Link>
            </div>
          </div>

          {/* Location (Desktop Only) */}
          <div className="hidden md:flex items-center gap-1 cursor-pointer hover:border border-transparent hover:border-white p-1 rounded shrink-0">
            <MapPin size={18} className="mt-2" />
            <div>
              <p className="text-xs text-gray-300">Delivering to Madurai 625009</p>
              <p className="text-sm font-bold text-white leading-tight">Update location</p>
            </div>
          </div>

          {/* Search Bar (Responsive: full-width on mobile, flex-1 on desktop) */}
          <div className="flex flex-1 items-stretch h-10 w-full rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-orange-500">
            <select className="bg-gray-200 text-black px-2 md:px-3 rounded-l-md outline-none text-xs border-r border-gray-300 cursor-pointer hover:bg-gray-300">
              <option>All</option>
            </select>

            <input
              type="text"
              placeholder="Search Amazon.in"
              className="bg-white flex-1 px-3 md:px-4 text-black outline-none text-sm w-full"
            />

            <button className="bg-amber-500 hover:bg-amber-600 px-4 md:px-6 rounded-r-md flex items-center justify-center cursor-pointer transition-colors shrink-0">
              <Search className="text-black" size={20} />
            </button>
          </div>

          {/* Language Selector (Desktop Only) */}
          <div className="hidden lg:flex items-center gap-1 cursor-pointer hover:border border-transparent hover:border-white p-1 rounded shrink-0">
            <span className="text-lg">🇮🇳</span>
            <span className="text-sm font-bold text-white flex items-center gap-0.5">
              EN <span className="text-[8px] text-gray-300">▼</span>
            </span>
          </div>

          {/* Account (Desktop Only) */}
          <Link href="/login" className="hidden md:block cursor-pointer hover:border border-transparent hover:border-white p-1 rounded shrink-0">
            <p className="text-xs text-gray-300">Hello, sign in</p>
            <div className="flex items-center gap-0.5">
              <span className="text-sm font-bold">Account & Lists</span>
              <span className="text-[8px] text-gray-300">▼</span>
            </div>
          </Link>

          {/* Orders (Desktop Only) */}
          <div className="hidden md:block cursor-pointer hover:border border-transparent hover:border-white p-1 rounded shrink-0">
            <p className="text-xs text-gray-300">Returns</p>
            <p className="text-sm font-bold leading-tight">& Orders</p>
          </div>

          {/* Cart (Desktop Only) */}
          <Link href="/cart" className="hidden md:flex items-end relative cursor-pointer hover:border border-transparent hover:border-white p-1 rounded shrink-0">
            <div className="relative flex items-center justify-center">
              <span className="absolute -top-2 left-[45%] -translate-x-1/2 text-orange-500 font-bold text-base leading-none bg-[#131921] px-0.5 rounded-full">0</span>
              <ShoppingCart size={32} />
            </div>
            <span className="text-sm font-bold ml-1 mb-1">Cart</span>
          </Link>
        </div>

        {/* Mobile-only Location Banner */}
        <div className="flex md:hidden items-center gap-1.5 px-4 py-2 bg-[#2f3b4c] text-xs cursor-pointer border-t border-[#1e2733] hover:bg-[#374558] transition-colors">
          <MapPin size={14} className="text-gray-300" />
          <span className="text-white">Delivering to Madurai 625009 - Update location</span>
        </div>

        {/* Bottom Navbar (with scrollbar hidden for touch devices) */}
        <div className="bg-[#232f3e] px-4 py-1.5 text-white">
          <ul className="flex items-center gap-5 text-sm font-medium overflow-x-auto whitespace-nowrap select-none no-scrollbar">
            <li className="flex items-center gap-1 font-bold cursor-pointer hover:border border-transparent hover:border-white px-2 py-1 rounded">
              <span>☰</span> All
            </li>
            <li className="cursor-pointer hover:border border-transparent hover:border-white px-2 py-1 rounded">MX Player</li>
            <li className="cursor-pointer hover:border border-transparent hover:border-white px-2 py-1 rounded">Sell</li>
            <li className="cursor-pointer hover:border border-transparent hover:border-white px-2 py-1 rounded">Bestsellers</li>
            <li className="cursor-pointer hover:border border-transparent hover:border-white px-2 py-1 rounded">Today&apos;s Deals</li>
            <li className="cursor-pointer hover:border border-transparent hover:border-white px-2 py-1 rounded">Mobiles</li>
            <li className="flex items-center gap-0.5 cursor-pointer hover:border border-transparent hover:border-white px-2 py-1 rounded">
              Prime <span className="text-[8px] text-gray-300">▼</span>
            </li>
            <li className="cursor-pointer hover:border border-transparent hover:border-white px-2 py-1 rounded">New Releases</li>
            <li className="cursor-pointer hover:border border-transparent hover:border-white px-2 py-1 rounded">Customer Service</li>
            <li className="cursor-pointer hover:border border-transparent hover:border-white px-2 py-1 rounded">Electronics</li>
            <li className="cursor-pointer hover:border border-transparent hover:border-white px-2 py-1 rounded">Amazon Pay</li>
            <li className="cursor-pointer hover:border border-transparent hover:border-white px-2 py-1 rounded">Fashion</li>
            <li className="cursor-pointer hover:border border-transparent hover:border-white px-2 py-1 rounded">Home & Kitchen</li>
          </ul>
        </div>
      </nav>
    </>
  );
}