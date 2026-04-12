"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown, Search, X, ArrowUpRight } from "lucide-react";
import { products } from "../../data/products";

// Mega menu data
const rentalCategories = [
  {
    title: "Counter Balance Trucks",
    items: ["Electric Forklifts", "Diesel Engine Forklifts"]
  },
  {
    title: "Warehousing Equipments",
    items: ["Powered Pallet Truck", "Reach Trucks", "Articulated Forklift", "Electric Stackers", "Towing Trucks"]
  },
  {
    title: "Cleaning Equipments",
    items: ["Sweeper", "Scrubber", "Mopping Scooty", "High Pressure Washer", "Industrial Vacuum"]
  },
  {
    title: "Power Tools",
    items: [
      "Angle Grinder", "Rotary Hammer", "Chipping hammer", 
      "Demolition hammer", "Drill Driver", "Construction screwdriver", 
      "Cordless impact driver", "Mid torque wrench", "Diamond coring Tool"
    ]
  }
];

const Navigation: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const popularSearches = [
    "Diesel Forklift",
    "Electric Stacker",
    "Reach Truck",
    "Floor Scrubber"
  ];

  // Derive simple suggestions matching products by name or category
  const suggestions = searchTerm.trim().length > 0 
      ? Array.from(new Set(products
          .filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.category.toLowerCase().includes(searchTerm.toLowerCase()))
          .map(p => p.name)))
          .slice(0, 5)
      : [];

  const handleSearch = (e: React.FormEvent | React.MouseEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setIsSearchOpen(false);
      router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <>
    <nav
      className="bg-primary h-20 w-full px-12 flex items-center justify-between relative z-40"
      data-name="Menu Navigation"
    >
      {/* Logo */}
      <div className="flex items-center">
        <div className="relative w-48 h-12">
          <Image
            src="/assets/logo-1.svg"
            alt="B2B Rentals"
            width={185}
            height={48}
            priority
          />
        </div>
      </div>

      {/* Navigation Items & CTA */}
      <div className="flex items-center gap-8">
        {/* Menu Items */}
        <div className="flex items-center gap-8">
          <div className="group">
            <button className={`flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity h-full py-6 ${pathname.startsWith('/rental') ? 'text-gray-900 border-b-2 border-primary' : 'text-gray-900'}`}>
              <Link href="/rental">Rental</Link>
              <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute top-[80px] left-0 w-full bg-[#fdfdfd] shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border-t border-gray-100 pt-10 pb-12">
              <div className="max-w-[1440px] px-12 mx-auto grid grid-cols-4 gap-8">
                {rentalCategories.map((category, idx) => (
                  <div key={idx} className="flex flex-col">
                    <h4 className="text-[13px] font-medium text-[#937ada] mb-6">{category.title}</h4>
                    <ul className="flex flex-col gap-5">
                      {category.items.map((item, idxi) => (
                        <li key={idxi} className="group/item relative w-fit">
                          <Link href={`/rental`} className="text-[14px] font-medium text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-1.5 hover:font-bold">
                            {item}
                            <ArrowUpRight strokeWidth={2.5} className="w-[14px] h-[14px] text-[#fbc247] opacity-0 -ml-1 translate-y-[2px] group-hover/item:opacity-100 transition-all duration-200" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/about"
            className={`text-sm font-medium hover:opacity-80 transition-opacity ${pathname === '/about' ? 'text-gray-900 border-b-2 border-gray-900 pb-1' : 'text-gray-900'}`}
          >
            About
          </Link>

          <Link
            href="/contact"
            className={`text-sm font-medium hover:opacity-80 transition-opacity ${pathname === '/contact' ? 'text-gray-900 border-b-2 border-gray-900 pb-1' : 'text-gray-900'}`}
          >
            Contact
          </Link>

          <button 
            onClick={() => setIsSearchOpen(true)}
            className="flex items-center gap-2 text-gray-900 text-sm font-medium hover:opacity-80 transition-opacity"
          >
            <Search className="w-5 h-5" />
            <span>Search</span>
          </button>

          <div className="relative group">
            <button className="flex items-center gap-2 text-gray-900 text-sm font-medium hover:opacity-80 transition-opacity h-full py-6">
              <span>Account</span>
              <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute top-full right-0 w-48 bg-white shadow-lg rounded-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-2 -mt-2">
              <Link href="#" className="block px-5 py-2.5 hover:bg-gray-50 text-sm font-medium text-gray-700 hover:text-gray-900">Profile</Link>
              <Link href="#" className="block px-5 py-2.5 hover:bg-gray-50 text-sm font-medium text-gray-700 hover:text-gray-900">My Orders</Link>
              <Link href="#" className="block px-5 py-2.5 hover:bg-gray-50 text-sm font-medium text-gray-700 hover:text-gray-900">Settings</Link>
              <hr className="my-1 border-gray-100" />
              <Link href="#" className="block px-5 py-2.5 hover:bg-gray-50 text-sm font-medium text-red-600 hover:bg-red-50">Logout</Link>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <Link href="/contact" className="bg-gray-900 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-opacity-90 transition-all">
          Enquiry Now
        </Link>
      </div>
    </nav>

    {/* Search Overlay */}
    {isSearchOpen && (
      <div className="absolute top-full left-0 w-full bg-white min-h-[500px] shadow-xl border-t border-gray-100 z-50 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-8 py-12">
          <div className="flex justify-between items-center mb-8">
            <span className="text-sm font-medium text-blue-600 underline">Search</span>
            <button 
              onClick={() => setIsSearchOpen(false)} 
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              Close
            </button>
          </div>
          
          <form onSubmit={handleSearch} className="relative mb-12">
            <input 
              autoFocus
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Enter your search term"
              className="w-full text-[40px] font-normal text-gray-900 placeholder-gray-300 border-b border-gray-400 pb-4 focus:outline-none focus:border-gray-900 pr-16 bg-transparent"
            />
            <div className="absolute right-0 bottom-6 flex gap-4 text-gray-900">
               {searchTerm && (
                 <button type="button" onClick={() => setSearchTerm('')} className="hover:opacity-70 transition-opacity">
                   <X className="w-6 h-6" />
                 </button>
               )}
               <button type="submit" className="hover:opacity-70 transition-opacity">
                 <Search className="w-6 h-6" />
               </button>
            </div>
          </form>

          {searchTerm.trim() === "" ? (
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-4">Popular Searches</h3>
              <div className="flex flex-wrap gap-3 mb-8">
                {popularSearches.map((term, i) => (
                  <button 
                    key={i}
                    onClick={() => {
                        setSearchTerm(term);
                    }}
                    className="px-5 py-2.5 rounded-full border border-gray-200 text-[13px] text-gray-700 hover:border-gray-400 transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
              <button 
                className="text-[11px] font-bold text-[#ff6b62] uppercase tracking-wider"
              >
                RESET ALL
              </button>
            </div>
          ) : (
            <div>
              <h3 className="text-sm font-bold text-gray-500 mb-4">Suggestion</h3>
              <div className="flex flex-col gap-4">
                {suggestions.length > 0 ? (
                  suggestions.map((sugg, i) => {
                    // highlight matching part if possible
                    const matchIndex = sugg.toLowerCase().indexOf(searchTerm.toLowerCase());
                    if (matchIndex >= 0) {
                      const before = sugg.slice(0, matchIndex);
                      const match = sugg.slice(matchIndex, matchIndex + searchTerm.length);
                      const after = sugg.slice(matchIndex + searchTerm.length);
                      return (
                        <button 
                          key={i} 
                          className="text-left text-[14px] text-gray-800 hover:text-black"
                          onClick={() => {
                            setSearchTerm(sugg);
                          }}
                        >
                          {before}<span className="font-bold">{match}</span>{after}
                        </button>
                      );
                    }
                    return (
                      <button 
                        key={i} 
                        className="text-left text-[14px] text-gray-800 font-bold hover:text-black"
                        onClick={() => {
                          setSearchTerm(sugg);
                        }}
                      >
                        {sugg}
                      </button>
                    )
                  })
                ) : (
                  <div className="flex flex-col items-center justify-center py-12">
                    <div className="relative w-48 h-48 mb-6">
                       <Image src="/assets/no_search_results.png" alt="No results" fill className="object-contain mix-blend-multiply drop-shadow-sm" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Oops!</h3>
                    <p className="text-[13px] text-gray-800">We found 0 results for your search "{searchTerm}".</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    )}
    </>
  );
};

export default Navigation;
