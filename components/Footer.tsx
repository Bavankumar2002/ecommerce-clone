"use client";

import Link from "next/link";

const footerColumns = [
  {
    heading: "Get to Know Us",
    links: ["About Amazon", "Careers", "Press Releases", "Amazon Science"],
  },
  {
    heading: "Connect with Us",
    links: ["Facebook", "Twitter", "Instagram"],
  },
  {
    heading: "Make Money with Us",
    links: [
      "Sell on Amazon",
      "Sell under Amazon Accelerator",
      "Protect and Build Your Brand",
      "Amazon Global Selling",
      "Supply to Amazon",
      "Become an Affiliate",
      "Fulfilment by Amazon",
      "Advertise Your Products",
      "Amazon Pay on Merchants",
    ],
  },
  {
    heading: "Let Us Help You",
    links: [
      "Your Account",
      "Returns Centre",
      "Recalls and Product Safety Alerts",
      "100% Purchase Protection",
      "Amazon App Download",
      "Help",
    ],
  },
];

const affiliateLinks = [
  { name: "AbeBooks", sub: "Books, art & collectibles" },
  { name: "Amazon Web Services", sub: "Scalable Cloud Computing Services" },
  { name: "Audible", sub: "Download Audio Books" },
  { name: "IMDb", sub: "Movies, TV & Celebrities" },
  { name: "Shopbop", sub: "Designer Everything For Fashion Brands" },
  { name: "Amazon Business", sub: "Everything For Your Business" },
  { name: "Amazon Music", sub: "Stream millions of songs" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="w-full">
      {/* Sign-in Banner */}
      <div className="bg-white border-t border-gray-200 py-8 flex flex-col items-center justify-center gap-3">
        <p className="text-lg font-semibold text-gray-900">
          See personalized recommendations
        </p>
        <Link
          href="/login"
          className="bg-[#FFD814] hover:bg-[#F7CA00] text-black text-sm font-medium px-6 py-2 rounded-full w-[220px] text-center transition-colors"
        >
          Sign in
        </Link>
        <p className="text-xs text-gray-600">
          New customer?{" "}
          <Link href="/login" className="text-[#007185] hover:text-[#c45500] hover:underline">
            Start here.
          </Link>
        </p>
      </div>

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className="w-full bg-[#37475A] hover:bg-[#485769] text-white text-sm py-3 text-center transition-colors cursor-pointer"
      >
        Back to top
      </button>

      {/* Main Footer Links */}
      <div className="bg-[#232F3E] text-white py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-sm font-bold mb-3 text-white">{col.heading}</h3>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-[#DDDDDD] text-xs hover:text-white transition-colors leading-snug"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="bg-[#37475A] h-px w-full" />

      {/* Logo + Language + Country */}
      <div className="bg-[#232F3E] py-6 flex flex-col items-center gap-4">
        {/* Amazon Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-white text-2xl font-bold tracking-tight">
            amazon
          </span>
          <span className="text-[#FF9900] text-2xl font-bold">.in</span>
        </Link>

        {/* Language & Country Selectors */}
        <div className="flex items-center gap-3 flex-wrap justify-center">
          <button className="flex items-center gap-2 border border-gray-500 text-white text-xs px-3 py-1.5 rounded hover:border-white transition-colors">
            <span>🌐</span>
            <span>English</span>
            <span className="text-gray-400 text-[10px]">▼</span>
          </button>
          <button className="flex items-center gap-2 border border-gray-500 text-white text-xs px-3 py-1.5 rounded hover:border-white transition-colors">
            <span>🇮🇳</span>
            <span>India</span>
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="bg-[#37475A] h-px w-full" />

      {/* Affiliate / Sub-brand Links */}
      <div className="bg-[#131A22] py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-x-8 gap-y-4">
          {affiliateLinks.map((brand) => (
            <Link
              href="#"
              key={brand.name}
              className="flex flex-col items-start hover:text-white group"
            >
              <span className="text-[#DDDDDD] text-xs font-bold group-hover:text-white transition-colors">
                {brand.name}
              </span>
              <span className="text-[#999999] text-[10px] leading-snug max-w-[120px]">
                {brand.sub}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#131A22] border-t border-[#3a4553] py-5 flex flex-col items-center gap-2">
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
          <Link href="#" className="text-[#DDDDDD] text-xs hover:text-white hover:underline">
            Conditions of Use &amp; Sale
          </Link>
          <Link href="#" className="text-[#DDDDDD] text-xs hover:text-white hover:underline">
            Privacy Notice
          </Link>
          <Link href="#" className="text-[#DDDDDD] text-xs hover:text-white hover:underline">
            Interest-Based Ads
          </Link>
        </div>
        <p className="text-[#999999] text-xs">
          © 1996-2026, Amazon.com, Inc. or its affiliates
        </p>
      </div>
    </footer>
  );
}