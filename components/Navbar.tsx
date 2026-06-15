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
          <Link href="/" className="text-3xl font-bold">
            amazon<span className="text-sm">.in</span>
          </Link>

          {/* Location */}
          <div className="hidden md:flex items-center gap-1 cursor-pointer">
            <MapPin size={18} />
            <div>
              <p className="text-xs text-gray-300">Delivering to Madurai</p>
              <p className="text-sm font-semibold">625018</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex flex-1">
            <select className="bg-gray-200 text-black px-2 rounded-l-md outline-none">
              <option>All</option>
            </select>

            <input
              type="text"
              placeholder="Search Amazon.in"
              className="bg-white flex-1 px-4 py-2 text-black outline-none"
            />

            <button className="bg-yellow-400 px-4 rounded-r-md">
              <Search className="text-black" size={22} />
            </button>
          </div>

          {/* Account */}
          <Link href="/login" className="hidden md:block cursor-pointer">
            <p className="text-xs">Hello, sign in</p>
            <p className="font-semibold">Account & Lists</p>
          </Link>

          {/* Orders */}
          <div className="hidden md:block cursor-pointer">
            <p className="text-xs">Returns</p>
            <p className="font-semibold">& Orders</p>
          </div>

          {/* Cart */}
          <Link href="/cart" className="flex items-center">
            <ShoppingCart size={32} />
            <span className="font-bold ml-1">Cart</span>
          </Link>
        </div>

        {/* Bottom Navbar */}
        <div className="bg-[#232f3e] px-4 py-2">
          <ul className="flex items-center gap-6 text-sm overflow-x-auto whitespace-nowrap">
            <li>☰ All</li>
            <li>MX Player</li>
            <li>Sell</li>
            <li>Bestsellers</li>
            <li>Today's Deals</li>
            <li>Mobiles</li>
            <li>Prime</li>
            <li>New Releases</li>
            <li>Customer Service</li>
            <li>Electronics</li>
            <li>Fashion</li>
            <li>Home & Kitchen</li>
            <li>Amazon Pay</li>
            <li>Computers</li>
            <li>Toys & Games</li>
            <li>Car & Motorbike</li>
          </ul>
        </div>
      </nav>
    </>
  );
}