"use client";

import Link from "next/link";
import { ShoppingCart, MapPin, Search } from "lucide-react";

export default function Navbar() {
  return (
    <>
      {/* Top Navbar */}
      <nav className="bg-[#131921] text-white">
        <div className="flex items-center px-4 py-2 gap-4">

          {/* Logo */}
          <Link href="/" className="text-3xl font-bold flex items-center hover:border border-transparent hover:border-white p-1 rounded">
            amazon<span className="text-sm pt-2">.in</span>
          </Link>

          {/* Location */}
          <div className="hidden md:flex items-center gap-1 cursor-pointer hover:border border-transparent hover:border-white p-1 rounded">
            <MapPin size={18} className="mt-2" />
            <div>
              <p className="text-xs text-gray-300">Delivering to Madurai 625009</p>
              <p className="text-sm font-bold text-white leading-tight">Update location</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex flex-1 items-stretch h-10">
            <select className="bg-gray-200 text-black px-3 rounded-l-md outline-none text-xs border-r border-gray-300 cursor-pointer">
              <option>All</option>
            </select>

            <input
              type="text"
              placeholder="Search Amazon.in"
              className="bg-white flex-1 px-4 text-black outline-none text-sm"
            />

            <button className="bg-amber-500 hover:bg-amber-600 px-6 rounded-r-md flex items-center justify-center cursor-pointer">
              <Search className="text-black" size={20} />
            </button>
          </div>

          {/* Language Selector */}
          <div className="hidden lg:flex items-center gap-1 cursor-pointer hover:border border-transparent hover:border-white p-1 rounded">
            <span className="text-lg">🇮🇳</span>
            <span className="text-sm font-bold text-white flex items-center gap-0.5">
              EN <span className="text-[8px] text-gray-300">▼</span>
            </span>
          </div>

          {/* Account */}
          <Link href="/login" className="hidden md:block cursor-pointer hover:border border-transparent hover:border-white p-1 rounded">
            <p className="text-xs text-gray-300">Hello, sign in</p>
            <div className="flex items-center gap-0.5">
              <span className="text-sm font-bold">Account & Lists</span>
              <span className="text-[8px] text-gray-300">▼</span>
            </div>
          </Link>

          {/* Orders */}
          <div className="hidden md:block cursor-pointer hover:border border-transparent hover:border-white p-1 rounded">
            <p className="text-xs text-gray-300">Returns</p>
            <p className="text-sm font-bold leading-tight">& Orders</p>
          </div>

          {/* Cart */}
          <Link href="/cart" className="flex items-end relative cursor-pointer hover:border border-transparent hover:border-white p-1 rounded">
            <div className="relative flex items-center justify-center">
              <span className="absolute -top-2 left-[45%] -translate-x-1/2 text-orange-500 font-bold text-base leading-none">0</span>
              <ShoppingCart size={32} />
            </div>
            <span className="text-sm font-bold ml-1 mb-1">Cart</span>
          </Link>
        </div>

        {/* Bottom Navbar */}
        <div className="bg-[#232f3e] px-4 py-1.5 text-white">
          <ul className="flex items-center gap-5 text-sm font-medium overflow-x-auto whitespace-nowrap select-none">
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