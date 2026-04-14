"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Filter, ChevronDown, ChevronUp, ArrowUpRight, ArrowUp, X, Check } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import RentalPoweringBusiness from "./RentalPoweringBusiness";
import RentalCoreOfferings from "./RentalCoreOfferings";

const categories = [
  "All",
  "COUNTER BALANCE TRUCKS",
  "WAREHOUSING EQUIPMENTS",
  "CLEANING EQUIPMENTS",
  "POWER TOOLS",
];

import { products } from "../../data/products";

type FilterOption = {
  label: string;
  count?: number;
};

type FilterSection = {
  id: string;
  title: string;
  options: FilterOption[];
};

const filterConfig: FilterSection[] = [
  {
    id: "availability",
    title: "Availability",
    options: [
      { label: "In stock" },
      { label: "Out of Stock" }
    ]
  },
  {
    id: "brands",
    title: "Brands",
    options: [
      { label: "Godrej", count: 24 },
      { label: "Toyota", count: 12 },
      { label: "IPC", count: 85 },
      { label: "Tennant", count: 32 },
      { label: "Hilti", count: 32 }
    ]
  },
  {
    id: "capacity",
    title: "Capacity",
    options: [
      { label: "1 Tonne" },
      { label: "1.2 Tonne" },
      { label: "1.25 Tonne" },
      { label: "1.4 Tonne" },
      { label: "1.5 Tonne" },
      { label: "1.6 Tonne" }
    ]
  },
  {
    id: "power",
    title: "Power",
    options: [
      { label: "Diesel" },
      { label: "Electric" },
      { label: "Manual" },
      { label: "Semi-Electric" }
    ]
  },
  {
    id: "maxForkHeight",
    title: "Max. Fork Height",
    options: [
      { label: "3M" },
      { label: "3.3M" },
      { label: "3.6M" },
      { label: "4M" },
      { label: "4.5M" },
      { label: "5.5M" }
    ]
  }
];

export default function RentalPage() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("All");
  const [showScroll, setShowScroll] = useState(false);
  const [isFiltersVisible, setIsFiltersVisible] = useState(true);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    availability: true,
    brands: true,
    capacity: true,
    power: true,
    maxForkHeight: true,
  });

  const [selectedFilters, setSelectedFilters] = useState<{title: string, value: string}[]>([
    { title: 'Brands', value: 'Godrej' }
  ]);

  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const [sortBy, setSortBy] = useState("Best Selling");

  const sortOptions = [
    "Best Selling",
    "Alphabetically, A-Z",
    "Alphabetically, Z-A",
    "Price, low to high",
    "Price, high to low",
    "Date, new to old",
    "Date, old to new"
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => ({ ...prev, [sectionId]: !prev[sectionId] }));
  };

  const toggleFilter = (title: string, value: string) => {
    setSelectedFilters(prev => {
      const exists = prev.find(f => f.title === title && f.value === value);
      if (exists) {
        return prev.filter(f => !(f.title === title && f.value === value));
      } else {
        return [...prev, { title, value }];
      }
    });
  };

  const removeFilter = (title: string, value: string) => {
    setSelectedFilters(prev => prev.filter(f => !(f.title === title && f.value === value)));
  };

  const clearAllFilters = () => {
    setSelectedFilters([]);
  };

  const filteredProducts = products.filter(product => {
    if (selectedFilters.length === 0) return true;

    const filtersByTitle = selectedFilters.reduce((acc, curr) => {
      if (!acc[curr.title]) acc[curr.title] = [];
      acc[curr.title].push(curr.value);
      return acc;
    }, {} as Record<string, string[]>);

    const matchBrand = !filtersByTitle['Brands'] || (product.brand && filtersByTitle['Brands'].includes(product.brand));
    const matchPower = !filtersByTitle['Power'] || (product.power && filtersByTitle['Power'].includes(product.power));
    const matchCapacity = !filtersByTitle['Capacity'] || (product.capacity && filtersByTitle['Capacity'].includes(product.capacity));
    const matchAvailability = !filtersByTitle['Availability'] || (product.availability && filtersByTitle['Availability'].includes(product.availability));

    return matchBrand && matchPower && matchCapacity && matchAvailability;
  });

  // Handle scroll event for the "scroll to top" button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden pb-12 bg-[#2D6B78]" 
               style={{ 
                 minHeight: "350px"
               }}
      >
        <div className="absolute inset-0 z-0">
           {/* Primary Teal Base */}
           <div className="absolute inset-0 bg-[#2D6B78]"></div>
           
           {/* Blurred Image with Blending */}
           <Image 
              src="/assets/Rental_banner.png"
              alt="Rental Banner" 
              fill 
              className="object-cover opacity-50 mix-blend-luminosity brightness-[0.8] blur-[2px]"
              priority
           />
           
           {/* Darkening Gradient Overlay for text pop */}
           <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/10"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-20 flex flex-col items-center justify-center text-center">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-white/90 text-sm font-medium mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <span>Rental</span>
          </div>

          <h1 className="text-4xl md:text-[44px] font-bold text-white mb-12 tracking-tight">
            Rental Product Range
          </h1>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2.5 max-w-5xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-[12px] font-bold tracking-wide transition-all duration-300 border ${
                  activeCategory === cat
                    ? "bg-white text-gray-900 border-white shadow-md scale-105"
                    : "bg-transparent text-white/90 border-white/30 hover:bg-white/5 hover:border-white/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16 relative">
        {/* Top Bar: Filters and Sort */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 border-b border-gray-100 pb-6 gap-4">
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setIsFiltersVisible(!isFiltersVisible)}
              className="flex items-center gap-2 bg-[#f4f4f4] text-gray-800 px-5 py-2.5 rounded-[20px] font-medium hover:bg-gray-200 transition-colors"
            >
              <Filter className="w-4 h-4" />
              <span className="text-sm font-semibold">{isFiltersVisible ? 'Hide Filters' : 'Show Filters'}</span>
            </button>
            <span className="text-gray-700 font-semibold text-[15px]">Showing 1–{Math.min(filteredProducts.length, 16)} of {filteredProducts.length} results</span>
          </div>
          
          <div className="flex items-center gap-3 relative">
            <span className="text-gray-700 font-medium text-sm">Sort by:</span>
            <button 
              onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
              className="flex items-center gap-2 bg-[#f4f4f4] text-gray-800 px-5 py-2.5 rounded-[20px] font-medium hover:bg-gray-200 transition-colors"
            >
              <span className="text-sm">{sortBy}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isSortDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {isSortDropdownOpen && (
              <div className="absolute top-[110%] right-0 w-48 bg-white border border-gray-100 shadow-xl rounded-xl overflow-hidden z-50 py-2">
                {sortOptions.map(option => (
                  <button
                    key={option}
                    onClick={() => {
                      setSortBy(option);
                      setIsSortDropdownOpen(false);
                    }}
                    className={`w-full text-left px-5 py-2 text-sm hover:bg-gray-50 transition-colors ${sortBy === option ? 'font-semibold text-gray-900 bg-gray-50' : 'text-gray-600'}`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Sidebar Filters */}
          {isFiltersVisible && (
            <div className="w-full lg:w-64 flex-shrink-0 space-y-8 pr-4">
              {filterConfig.map((section) => (
                <div key={section.id}>
                  <button 
                    onClick={() => toggleSection(section.id)}
                    className="flex items-center justify-between w-full mb-4 group"
                  >
                    <h3 className="text-[15px] font-bold text-gray-900">{section.title}</h3>
                    {expandedSections[section.id] ? (
                      <ChevronUp className="w-4 h-4 text-gray-500 group-hover:text-gray-800 transition-colors" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-gray-800 transition-colors" />
                    )}
                  </button>
                  {expandedSections[section.id] && (
                    <div className="flex flex-col gap-3.5 pl-1">
                      {section.options.map((option) => {
                        const isChecked = selectedFilters.some(f => f.title === section.title && f.value === option.label);
                        return (
                          <label key={option.label} className="flex items-center gap-3 cursor-pointer group">
                            <div className={`w-[18px] h-[18px] rounded border flex-shrink-0 flex items-center justify-center transition-all duration-200 ${isChecked ? 'bg-[#1a1a1a] border-[#1a1a1a]' : 'bg-white border-gray-300 group-hover:border-gray-400'}`}>
                              {isChecked && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
                            </div>
                            <span className="text-[14px] text-gray-600 select-none">
                              {option.label}
                              {option.count !== undefined && <span className="text-gray-400 text-[13px] ml-1">({option.count})</span>}
                            </span>
                            <input 
                              type="checkbox" 
                              className="hidden" 
                              checked={isChecked} 
                              onChange={() => toggleFilter(section.title, option.label)} 
                            />
                          </label>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Product Grid Container */}
          <div className="flex-1">
            {/* Selected Filters Chips */}
            {selectedFilters.length > 0 && (
              <div className="flex flex-wrap items-center gap-3 mb-6">
                {selectedFilters.map((filter, index) => (
                  <div key={`${filter.title}-${filter.value}-${index}`} className="flex items-center gap-2 bg-[#f4f7f8] text-[#2c3e50] px-3 py-1.5 rounded-full text-[13px] font-medium border border-gray-100">
                    <span>{filter.title}:{filter.value}</span>
                    <button onClick={() => removeFilter(filter.title, filter.value)} className="text-gray-400 hover:text-gray-800 transition-colors">
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
                <button onClick={clearAllFilters} className="text-[14px] font-bold text-gray-800 hover:text-black ml-2 underline decoration-gray-400 underline-offset-4 decoration-2">
                  Clear all
                </button>
              </div>
            )}

            <div className={`grid grid-cols-1 sm:grid-cols-2 ${isFiltersVisible ? 'lg:grid-cols-3' : 'lg:grid-cols-4'} gap-6`}>
              {filteredProducts.map((product, index) => (
                <Link href={`/rental/${product.id}`} key={product.id + "-" + index} className="group cursor-pointer flex flex-col">
                  {/* Image Container */}
                  <div className="relative aspect-square bg-[#f5f5f5] rounded-[24px] mb-4 flex items-center justify-center p-6 transition-transform duration-300 hover:-translate-y-1">
                    {product.isNew && (
                      <span className="absolute top-4 left-4 bg-[#84cc44] text-white text-[11px] font-bold px-3 py-1 rounded-md z-10 transition-transform">
                        New
                      </span>
                    )}
                    <div className="relative w-[88%] h-[88%] transform transition-transform duration-500 group-hover:scale-105">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.05)]"
                      />
                    </div>
                    {/* Action Button (Cutout Effect) */}
                    <button className="absolute -bottom-1 -right-1 bg-[#1a1a1a] w-[46px] h-[46px] rounded-full flex items-center justify-center shadow-sm z-20 text-white border-[6px] border-white group-hover:bg-[#ffcd00] group-hover:text-gray-900 group-hover:scale-110 transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                    </button>
                  </div>

                  {/* Product Info */}
                  <div className="px-1 flex flex-col gap-1 items-start">
                    <span className="text-[10px] text-gray-500/80 font-bold tracking-wider uppercase">
                      {product.category}
                    </span>
                    <h3 className="text-[16px] font-bold text-gray-900 leading-snug">
                      {product.name}
                    </h3>
                    <button 
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); router.push('/request-quote'); }}
                      className="mt-2 w-max border border-gray-400 text-gray-700 bg-transparent group-hover:bg-gray-800 group-hover:text-white group-hover:border-gray-800 px-5 py-2 rounded-[12px] text-[13px] font-semibold transition-all duration-300"
                    >
                      Request Quote
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Scroll To Top */}
        <button
          onClick={scrollToTop}
          className={`fixed right-8 bottom-12 bg-gray-100 p-3.5 rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.1)] hover:bg-gray-200 hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] transition-all duration-300 z-50 transform ${
            showScroll ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0 pointer-events-none"
          }`}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 text-gray-600" />
        </button>
      </section>

      {/* New Interactive Sections */}
      <RentalPoweringBusiness />
      <RentalCoreOfferings />
    </div>
  );
}
