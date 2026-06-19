// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { ShoppingCart, MapPin, Search, X, ChevronRight } from "lucide-react";
// import { useAuth } from "@/hooks/useAuth";

// const sidebarSections = [
//   {
//     heading: "Trending",
//     links: [
//       { label: "Bestsellers", href: "/products" },
//       { label: "New Releases", href: "#" },
//     ],
//   },
//   {
//     heading: "Digital Content and Devices",
//     links: [
//       { label: "Echo & Alexa", href: "#", arrow: true },
//       { label: "Fire TV", href: "#", arrow: true },
//       { label: "Kindle E-Readers & eBooks", href: "#", arrow: true },
//       { label: "Audible Audiobooks", href: "#", arrow: true },
//       { label: "Amazon Prime Video", href: "#", arrow: true },
//       { label: "Amazon Music", href: "#", arrow: true },
//     ],
//   },
//   {
//     heading: "Shop by Category",
//     links: [
//       { label: "Mobiles, Computers", href: "#", arrow: true },
//       { label: "TV, Appliances, Electronics", href: "#", arrow: true },
//       { label: "Men's Fashion", href: "#", arrow: true },
//       { label: "Women's Fashion", href: "#", arrow: true },
//       { label: "Beauty, Health & Grocery", href: "#", arrow: true },
//       { label: "Home, Kitchen & Pets", href: "#", arrow: true },
//       { label: "Sports, Fitness & Outdoors", href: "#", arrow: true },
//       { label: "Toys, Kids & Baby", href: "#", arrow: true },
//       { label: "Car, Motorbike & Industrial", href: "#", arrow: true },
//       { label: "See all", href: "#" },
//     ],
//   },
//   {
//     heading: "Programs & Features",
//     links: [
//       { label: "Gift Cards & Mobile Recharges", href: "#", arrow: true },
//       { label: "Amazon Launchpad", href: "#", arrow: true },
//       { label: "Amazon Business", href: "#", arrow: true },
//       { label: "Handloom and Handicrafts", href: "#", arrow: true },
//       { label: "Prime membership", href: "#", arrow: true },
//       { label: "Amazon Pay", href: "#", arrow: true },
//       { label: "See all", href: "#" },
//     ],
//   },
//   {
//     heading: "Help & Settings",
//     links: [
//       { label: "Your Account", href: "#" },
//       { label: "Customer Service", href: "#" },
//     ],
//   },
// ];

// export default function Navbar() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const { user, logout } = useAuth();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   return (
//     <>
//       {/* Sidebar Overlay */}
//       {sidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black/60 z-40 transition-opacity duration-300"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}

//       {/* Slide-out Sidebar */}
//       <div
//         className={`fixed top-0 left-0 h-full w-[320px] max-w-[85vw] bg-white z-50 shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out ${
//           sidebarOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         {/* Sidebar Header */}
//         <div className="flex items-center gap-3 bg-[#232F3E] text-white px-4 py-3.5">
//           <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center shrink-0">
//             <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
//               <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
//             </svg>
//           </div>
//           <span className="text-base font-bold">
//             {mounted && user ? `Hello, ${user.email || user.phone}` : "Hello, sign in"}
//           </span>
//           <button
//             onClick={() => setSidebarOpen(false)}
//             className="ml-auto p-1 hover:bg-white/10 rounded transition-colors"
//             aria-label="Close menu"
//           >
//             <X size={20} />
//           </button>
//         </div>

//         {/* Sidebar Scrollable Content */}
//         <div className="flex-1 overflow-y-auto">
//           {sidebarSections.map((section, si) => (
//             <div key={si}>
//               {/* Section Heading */}
//               <div className="px-4 pt-5 pb-1">
//                 <h3 className="text-base font-bold text-black">{section.heading}</h3>
//               </div>

//               {/* Section Links */}
//               <ul>
//                 {section.links.map((link, li) => (
//                   <li key={li}>
//                     <Link
//                       href={link.href}
//                       onClick={() => setSidebarOpen(false)}
//                       className="flex items-center justify-between px-4 py-2.5 text-sm text-gray-800 hover:bg-gray-100 transition-colors"
//                     >
//                       <span>{link.label}</span>
//                       {link.arrow && (
//                         <ChevronRight size={16} className="text-gray-400 shrink-0" />
//                       )}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>

//               {/* Divider between sections */}
//               {si < sidebarSections.length - 1 && (
//                 <div className="border-t border-gray-200 mt-2" />
//               )}
//             </div>
//           ))}

//           {/* Sign In link at bottom of Help & Settings */}
//           <div className="px-4 py-2.5">
//             {mounted && user ? (
//               <button
//                 onClick={() => {
//                   logout();
//                   setSidebarOpen(false);
//                 }}
//                 className="text-sm text-gray-800 hover:bg-gray-100 block py-1 text-left w-full cursor-pointer bg-transparent border-none outline-none font-medium"
//               >
//                 Sign out
//               </button>
//             ) : (
//               <Link
//                 href="/login"
//                 onClick={() => setSidebarOpen(false)}
//                 className="text-sm text-gray-800 hover:bg-gray-100 block py-1"
//               >
//                 Sign in
//               </Link>
//             )}
//           </div>

//           <div className="h-8" />
//         </div>
//       </div>

//       {/* Top Navbar */}
//       <nav className="bg-[#131921] text-white">
//         {/* Main Nav Container */}
//         <div className="flex flex-col md:flex-row md:items-center px-4 py-2 gap-2 md:gap-4">

//           {/* Top Row for Mobile: Hamburger + Logo + Account + Cart */}
//           <div className="flex items-center justify-between w-full md:w-auto gap-2">
//             <div className="flex items-center gap-2">
//               {/* Mobile Hamburger — opens sidebar */}
//               <button
//                 onClick={() => setSidebarOpen(true)}
//                 className="md:hidden text-white hover:border border-transparent hover:border-white p-1.5 rounded cursor-pointer transition-colors"
//               >
//                 <span className="text-2xl leading-none">☰</span>
//               </button>

//               {/* Logo */}
//               <Link href="/" className="text-2xl md:text-3xl font-bold flex items-center hover:border border-transparent hover:border-white p-1 rounded shrink-0">
//                 amazon<span className="text-xs md:text-sm pt-2">.in</span>
//               </Link>
//             </div>

//             {/* Mobile Actions: Sign-in & Cart */}
//             <div className="flex items-center gap-1.5 md:hidden">
//               {mounted && user ? (
//                 <button onClick={logout} className="cursor-pointer hover:border border-transparent hover:border-white p-1.5 rounded text-xs flex items-center gap-0.5 bg-transparent text-white font-semibold outline-none border-none">
//                   <span className="font-semibold text-gray-200">Sign out</span>
//                 </button>
//               ) : (
//                 <Link href="/login" className="cursor-pointer hover:border border-transparent hover:border-white p-1.5 rounded text-xs flex items-center gap-0.5">
//                   <span className="font-semibold text-gray-200">Sign in</span>
//                   <span className="text-[8px] text-gray-400">▼</span>
//                 </Link>
//               )}
//               <Link href="/cart" className="flex items-end relative cursor-pointer hover:border border-transparent hover:border-white p-1.5 rounded">
//                 <div className="relative flex items-center justify-center">
//                   <span className="absolute -top-1.5 left-[50%] -translate-x-1/2 text-orange-500 font-bold text-sm leading-none bg-[#131921] px-0.5 rounded-full">0</span>
//                   <ShoppingCart size={24} />
//                 </div>
//               </Link>
//             </div>
//           </div>

//           {/* Location (Desktop Only) */}
//           <div className="hidden md:flex items-center gap-1 cursor-pointer hover:border border-transparent hover:border-white p-1 rounded shrink-0">
//             <MapPin size={18} className="mt-2" />
//             <div>
//               <p className="text-xs text-gray-300">Delivering to Madurai 625009</p>
//               <p className="text-sm font-bold text-white leading-tight">Update location</p>
//             </div>
//           </div>

//           {/* Search Bar */}
//           <div className="flex flex-1 items-stretch h-10 w-full rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-orange-500">
//             <select className="bg-gray-200 text-black px-2 md:px-3 rounded-l-md outline-none text-xs border-r border-gray-300 cursor-pointer hover:bg-gray-300">
//               <option>All</option>
//             </select>
//             <input
//               type="text"
//               placeholder="Search Amazon.in"
//               className="bg-white flex-1 px-3 md:px-4 text-black outline-none text-sm w-full"
//             />
//             <button className="bg-amber-500 hover:bg-amber-600 px-4 md:px-6 rounded-r-md flex items-center justify-center cursor-pointer transition-colors shrink-0">
//               <Search className="text-black" size={20} />
//             </button>
//           </div>

//           {/* Language Selector (Desktop Only) */}
//           <div className="hidden lg:flex items-center gap-1 cursor-pointer hover:border border-transparent hover:border-white p-1 rounded shrink-0">
//             <span className="text-lg">🇮🇳</span>
//             <span className="text-sm font-bold text-white flex items-center gap-0.5">
//               EN <span className="text-[8px] text-gray-300">▼</span>
//             </span>
//           </div>

//           {/* Account (Desktop Only) */}
//           {mounted && user ? (
//             <div onClick={logout} className="hidden md:block cursor-pointer hover:border border-transparent hover:border-white p-1 rounded shrink-0">
//               <p className="text-xs text-gray-300">Hello, {user.email || user.phone}</p>
//               <div className="flex items-center gap-0.5">
//                 <span className="text-sm font-bold">Sign out</span>
//                 <span className="text-[8px] text-gray-300">▼</span>
//               </div>
//             </div>
//           ) : (
//             <Link href="/login" className="hidden md:block cursor-pointer hover:border border-transparent hover:border-white p-1 rounded shrink-0">
//               <p className="text-xs text-gray-300">Hello, sign in</p>
//               <div className="flex items-center gap-0.5">
//                 <span className="text-sm font-bold">Account & Lists</span>
//                 <span className="text-[8px] text-gray-300">▼</span>
//               </div>
//             </Link>
//           )}

//           {/* Orders (Desktop Only) */}
//           <div className="hidden md:block cursor-pointer hover:border border-transparent hover:border-white p-1 rounded shrink-0">
//             <p className="text-xs text-gray-300">Returns</p>
//             <p className="text-sm font-bold leading-tight">& Orders</p>
//           </div>

//           {/* Cart (Desktop Only) */}
//           <Link href="/cart" className="hidden md:flex items-end relative cursor-pointer hover:border border-transparent hover:border-white p-1 rounded shrink-0">
//             <div className="relative flex items-center justify-center">
//               <span className="absolute -top-2 left-[45%] -translate-x-1/2 text-orange-500 font-bold text-base leading-none bg-[#131921] px-0.5 rounded-full">0</span>
//               <ShoppingCart size={32} />
//             </div>
//             <span className="text-sm font-bold ml-1 mb-1">Cart</span>
//           </Link>
//         </div>

//         {/* Mobile-only Location Banner */}
//         <div className="flex md:hidden items-center gap-1.5 px-4 py-2 bg-[#2f3b4c] text-xs cursor-pointer border-t border-[#1e2733] hover:bg-[#374558] transition-colors">
//           <MapPin size={14} className="text-gray-300" />
//           <span className="text-white">Delivering to Madurai 625009 - Update location</span>
//         </div>

//         {/* Bottom Navbar */}
//         <div className="bg-[#232f3e] px-4 py-1.5 text-white">
//           <ul className="flex items-center gap-5 text-sm font-medium overflow-x-auto whitespace-nowrap select-none no-scrollbar">
//             {/* ☰ All — opens sidebar on desktop too */}
//             <li
//               onClick={() => setSidebarOpen(true)}
//               className="flex items-center gap-1 font-bold cursor-pointer hover:border border-transparent hover:border-white px-2 py-1 rounded"
//             >
//               <span>☰</span> All
//             </li>
//             <li className="cursor-pointer hover:border border-transparent hover:border-white px-2 py-1 rounded">MX Player</li>
//             <li className="cursor-pointer hover:border border-transparent hover:border-white px-2 py-1 rounded">Sell</li>
//             <li className="cursor-pointer hover:border border-transparent hover:border-white px-2 py-1 rounded">
//               <Link href="/products">Bestsellers</Link>
//             </li>
//             <li className="cursor-pointer hover:border border-transparent hover:border-white px-2 py-1 rounded">Today&apos;s Deals</li>
//             <li className="cursor-pointer hover:border border-transparent hover:border-white px-2 py-1 rounded">Mobiles</li>
//             <li className="flex items-center gap-0.5 cursor-pointer hover:border border-transparent hover:border-white px-2 py-1 rounded">
//               Prime <span className="text-[8px] text-gray-300">▼</span>
//             </li>
//             <li className="cursor-pointer hover:border border-transparent hover:border-white px-2 py-1 rounded">New Releases</li>
//             <li className="cursor-pointer hover:border border-transparent hover:border-white px-2 py-1 rounded">Customer Service</li>
//             <li className="cursor-pointer hover:border border-transparent hover:border-white px-2 py-1 rounded">Electronics</li>
//             <li className="cursor-pointer hover:border border-transparent hover:border-white px-2 py-1 rounded">Amazon Pay</li>
//             <li className="cursor-pointer hover:border border-transparent hover:border-white px-2 py-1 rounded">Fashion</li>
//             <li className="cursor-pointer hover:border border-transparent hover:border-white px-2 py-1 rounded">Home & Kitchen</li>
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { ShoppingCart, MapPin, Search, X, ChevronRight } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

const departments = [
  "Amazon Launchpad",
  "Amazon Renewed",
  "Apps & Games",
  "Baby Products",
  "Bags, Wallets and Luggage",
  "Beauty",
  "Books",
  "Car & Motorbike",
  "Clothing & Accessories",
  "Computers & Accessories",
  "Electronics",
  "Garden & Outdoors",
  "Gift Cards",
  "Grocery & Gourmet Foods",
  "Health & Personal Care",
  "Home & Kitchen",
  "Home Improvement",
  "Industrial & Scientific",
  "Jewellery",
];

const sidebarSections = [
  {
    heading: "Trending",
    links: [
      { label: "Bestsellers", href: "/bestsellers" },
      { label: "New Releases", href: "#" },
    ],
  },
  {
    heading: "Digital Content and Devices",
    links: [
      { label: "Echo & Alexa", href: "#", arrow: true },
      { label: "Fire TV", href: "#", arrow: true },
      { label: "Kindle E-Readers & eBooks", href: "#", arrow: true },
      { label: "Audible Audiobooks", href: "#", arrow: true },
      { label: "Amazon Prime Video", href: "#", arrow: true },
      { label: "Amazon Music", href: "#", arrow: true },
    ],
  },
  {
    heading: "Shop by Category",
    links: [
      { label: "Mobiles, Computers", href: "#", arrow: true, category: "Computers & Accessories" },
      { label: "TV, Appliances, Electronics", href: "#", arrow: true, category: "Electronics" },
      { label: "Men's Fashion", href: "#", arrow: true, category: "Clothing & Accessories" },
      { label: "Women's Fashion", href: "#", arrow: true, category: "Clothing & Accessories" },
      { label: "Beauty, Health & Grocery", href: "#", arrow: true, category: "Beauty" },
      { label: "Home, Kitchen & Pets", href: "#", arrow: true, category: "Home & Kitchen" },
      { label: "Sports, Fitness & Outdoors", href: "#", arrow: true, category: "Garden & Outdoors" },
      { label: "Toys, Kids & Baby", href: "#", arrow: true, category: "Baby Products" },
      { label: "Car, Motorbike & Industrial", href: "#", arrow: true, category: "Car & Motorbike" },
      { label: "See all", href: "#" },
    ],
  },
  {
    heading: "Programs & Features",
    links: [
      { label: "Gift Cards & Mobile Recharges", href: "#", arrow: true },
      { label: "Amazon Launchpad", href: "#", arrow: true },
      { label: "Amazon Business", href: "#", arrow: true },
      { label: "Handloom and Handicrafts", href: "#", arrow: true },
      { label: "Prime membership", href: "#", arrow: true },
      { label: "Amazon Pay", href: "#", arrow: true },
      { label: "See all", href: "#" },
    ],
  },
  {
    heading: "Help & Settings",
    links: [
      { label: "Your Account", href: "#" },
      { label: "Customer Service", href: "#" },
    ],
  },
];

const navItems = [
  { label: "MX Player", category: null },
  { label: "Sell", category: null },
  { label: "Bestsellers", href: "/bestsellers", category: null },
  { label: "Today's Deals", category: "Gift Cards" },
  { label: "Mobiles", category: "Computers & Accessories" },
  { label: "Prime", category: null, hasArrow: true },
  { label: "New Releases", category: "Amazon Renewed" },
  { label: "Customer Service", category: null },
  { label: "Electronics", category: "Electronics" },
  { label: "Amazon Pay", category: "Gift Cards" },
  { label: "Fashion", category: "Clothing & Accessories" },
  { label: "Home & Kitchen", category: "Home & Kitchen" },
];

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, logout } = useAuth();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Search Bar States
  const [searchQuery, setSearchQuery] = useState("");
  const [searchCategory, setSearchCategory] = useState("All Departments");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const q = params.get("search") || "";
      const cat = params.get("category") || "All Departments";
      setSearchQuery(q);
      setSearchCategory(cat);
    }
  }, [pathname]);

  const handleNavItemClick = (category: string | null) => {
    if (!category) return;
    router.push(`/products?category=${encodeURIComponent(category)}`);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery.trim()) {
      params.set("search", searchQuery.trim());
    }
    if (searchCategory !== "All Departments") {
      params.set("category", searchCategory);
    }
    router.push(`/products?${params.toString()}`);
  };

  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 transition-opacity duration-300"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-[320px] max-w-[85vw] bg-white z-50 shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center gap-3 bg-[#232F3E] text-white px-4 py-3.5">
          <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center shrink-0">
            <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
            </svg>
          </div>
          <span className="text-base font-bold">
            {mounted && user ? `Hello, ${user.email || user.phone}` : "Hello, sign in"}
          </span>
          <button
            onClick={() => setSidebarOpen(false)}
            className="ml-auto p-1 hover:bg-white/10 rounded transition-colors"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {sidebarSections.map((section, si) => (
            <div key={si}>
              <div className="px-4 pt-5 pb-1">
                <h3 className="text-base font-bold text-black">{section.heading}</h3>
              </div>
              <ul>
                {section.links.map((link, li) => (
                  <li key={li}>
                    <Link
                      href={link.href}
                      onClick={() => {
                        setSidebarOpen(false);
                        if ((link as any).category) handleNavItemClick((link as any).category);
                      }}
                      className="flex items-center justify-between px-4 py-2.5 text-sm text-gray-800 hover:bg-gray-100 transition-colors"
                    >
                      <span>{link.label}</span>
                      {link.arrow && <ChevronRight size={16} className="text-gray-400 shrink-0" />}
                    </Link>
                  </li>
                ))}
              </ul>
              {si < sidebarSections.length - 1 && <div className="border-t border-gray-200 mt-2" />}
            </div>
          ))}

          <div className="px-4 py-2.5">
            {mounted && user ? (
              <button
                onClick={() => { logout(); setSidebarOpen(false); }}
                className="text-sm text-gray-800 hover:bg-gray-100 block py-1 text-left w-full cursor-pointer bg-transparent border-none outline-none font-medium"
              >
                Sign out
              </button>
            ) : (
              <Link href="/login" onClick={() => setSidebarOpen(false)} className="text-sm text-gray-800 hover:bg-gray-100 block py-1">
                Sign in
              </Link>
            )}
          </div>
          <div className="h-8" />
        </div>
      </div>

      <nav className="bg-[#131921] text-white">
        <div className="flex flex-col md:flex-row md:items-center px-4 py-2 gap-2 md:gap-4">
          <div className="flex items-center justify-between w-full md:w-auto gap-2">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSidebarOpen(true)}
                className="md:hidden text-white hover:border border-transparent hover:border-white p-1.5 rounded cursor-pointer transition-colors"
              >
                <span className="text-2xl leading-none">☰</span>
              </button>
              <Link href="/" className="text-2xl md:text-3xl font-bold flex items-center hover:border border-transparent hover:border-white p-1 rounded shrink-0">
                amazon<span className="text-xs md:text-sm pt-2">.in</span>
              </Link>
            </div>
            <div className="flex items-center gap-1.5 md:hidden">
              {mounted && user ? (
                <button onClick={logout} className="cursor-pointer hover:border border-transparent hover:border-white p-1.5 rounded text-xs flex items-center gap-0.5 bg-transparent text-white font-semibold outline-none border-none">
                  <span className="font-semibold text-gray-200">Sign out</span>
                </button>
              ) : (
                <Link href="/login" className="cursor-pointer hover:border border-transparent hover:border-white p-1.5 rounded text-xs flex items-center gap-0.5">
                  <span className="font-semibold text-gray-200">Sign in</span>
                  <span className="text-[8px] text-gray-400">▼</span>
                </Link>
              )}
              <Link href="/cart" className="flex items-end relative cursor-pointer hover:border border-transparent hover:border-white p-1.5 rounded">
                <div className="relative flex items-center justify-center">
                  <span className="absolute -top-1.5 left-[50%] -translate-x-1/2 text-orange-500 font-bold text-sm leading-none bg-[#131921] px-0.5 rounded-full">0</span>
                  <ShoppingCart size={24} />
                </div>
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-1 cursor-pointer hover:border border-transparent hover:border-white p-1 rounded shrink-0">
            <MapPin size={18} className="mt-2" />
            <div>
              <p className="text-xs text-gray-300">Delivering to Madurai 625009</p>
              <p className="text-sm font-bold text-white leading-tight">Update location</p>
            </div>
          </div>

          <form onSubmit={handleSearchSubmit} className="flex flex-1 items-stretch h-10 w-full rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-orange-500">
            <select
              value={searchCategory}
              onChange={(e) => setSearchCategory(e.target.value)}
              className="bg-gray-200 text-black px-2 md:px-3 rounded-l-md outline-none text-xs border-r border-gray-300 cursor-pointer hover:bg-gray-300 max-w-[120px] md:max-w-none font-semibold"
            >
              <option value="All Departments">All</option>
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Amazon.in"
              className="bg-white flex-1 px-3 md:px-4 text-black outline-none text-sm w-full"
            />
            <button type="submit" className="bg-amber-500 hover:bg-amber-600 px-4 md:px-6 rounded-r-md flex items-center justify-center cursor-pointer transition-colors shrink-0 border-none outline-none">
              <Search className="text-black" size={20} />
            </button>
          </form>

          <div className="hidden lg:flex items-center gap-1 cursor-pointer hover:border border-transparent hover:border-white p-1 rounded shrink-0">
            <span className="text-lg">🇮🇳</span>
            <span className="text-sm font-bold text-white flex items-center gap-0.5">EN <span className="text-[8px] text-gray-300">▼</span></span>
          </div>

          {mounted && user ? (
            <div onClick={logout} className="hidden md:block cursor-pointer hover:border border-transparent hover:border-white p-1 rounded shrink-0">
              <p className="text-xs text-gray-300">Hello, {user.email || user.phone}</p>
              <div className="flex items-center gap-0.5">
                <span className="text-sm font-bold">Sign out</span>
                <span className="text-[8px] text-gray-300">▼</span>
              </div>
            </div>
          ) : (
            <Link href="/login" className="hidden md:block cursor-pointer hover:border border-transparent hover:border-white p-1 rounded shrink-0">
              <p className="text-xs text-gray-300">Hello, sign in</p>
              <div className="flex items-center gap-0.5">
                <span className="text-sm font-bold">Account & Lists</span>
                <span className="text-[8px] text-gray-300">▼</span>
              </div>
            </Link>
          )}

          <div className="hidden md:block cursor-pointer hover:border border-transparent hover:border-white p-1 rounded shrink-0">
            <p className="text-xs text-gray-300">Returns</p>
            <p className="text-sm font-bold leading-tight">& Orders</p>
          </div>

          <Link href="/cart" className="hidden md:flex items-end relative cursor-pointer hover:border border-transparent hover:border-white p-1 rounded shrink-0">
            <div className="relative flex items-center justify-center">
              <span className="absolute -top-2 left-[45%] -translate-x-1/2 text-orange-500 font-bold text-base leading-none bg-[#131921] px-0.5 rounded-full">0</span>
              <ShoppingCart size={32} />
            </div>
            <span className="text-sm font-bold ml-1 mb-1">Cart</span>
          </Link>
        </div>

        <div className="flex md:hidden items-center gap-1.5 px-4 py-2 bg-[#2f3b4c] text-xs cursor-pointer border-t border-[#1e2733] hover:bg-[#374558] transition-colors">
          <MapPin size={14} className="text-gray-300" />
          <span className="text-white">Delivering to Madurai 625009 - Update location</span>
        </div>

        <div className="bg-[#232f3e] px-4 py-1.5 text-white">
          <ul className="flex items-center gap-5 text-sm font-medium overflow-x-auto whitespace-nowrap select-none no-scrollbar">
            <li
              onClick={() => setSidebarOpen(true)}
              className="flex items-center gap-1 font-bold cursor-pointer hover:border border-transparent hover:border-white px-2 py-1 rounded"
            >
              <span>☰</span> All
            </li>
            {navItems.map((item) => (
              <li key={item.label}>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="flex items-center gap-0.5 cursor-pointer hover:border border-transparent hover:border-white px-2 py-1 rounded text-white text-sm font-medium text-decoration-none"
                  >
                    {item.label}
                    {item.hasArrow && <span className="text-[8px] text-gray-300">▼</span>}
                  </Link>
                ) : item.category ? (
                  <button
                    onClick={() => handleNavItemClick(item.category)}
                    className="flex items-center gap-0.5 cursor-pointer hover:border border-transparent hover:border-white px-2 py-1 rounded bg-transparent text-white text-sm font-medium border-none outline-none"
                  >
                    {item.label}
                    {item.hasArrow && <span className="text-[8px] text-gray-300">▼</span>}
                  </button>
                ) : (
                  <span className="flex items-center gap-0.5 cursor-pointer hover:border border-transparent hover:border-white px-2 py-1 rounded">
                    {item.label}
                    {item.hasArrow && <span className="text-[8px] text-gray-300">▼</span>}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}