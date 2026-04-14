"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { Filter, ChevronDown, ChevronUp, ArrowUpRight, ArrowUp, X, Check, Search } from "lucide-react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";

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

function SearchResultsContent({ allProducts = [] }: { allProducts?: any[] }) {
  const products = allProducts;
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQuery = searchParams.get('q') || '';
  
  const [searchTerm, setSearchTerm] = useState(initialQuery);
  const [showScroll, setShowScroll] = useState(false);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    availability: true,
    brands: true,
    capacity: true,
    power: true,
    maxForkHeight: true,
  });

  const [selectedFilters, setSelectedFilters] = useState<{title: string, value: string}[]>([]);
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const [sortBy, setSortBy] = useState("Best Selling");

  useEffect(() => {
    setSearchTerm(searchParams.get('q') || '');
  }, [searchParams]);

  const sortOptions = [
    "Best Selling",
    "Alphabetically, A-Z",
    "Alphabetically, Z-A",
    "Price, low to high",
    "Price, high to low",
    "Date, new to old",
    "Date, old to new"
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

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
    // 1. Check Search Query
    const query = (searchParams.get('q') || '').toLowerCase();
    const searchMatch = query === '' || 
        product.name.toLowerCase().includes(query) || 
        product.category.toLowerCase().includes(query) || 
        (product.brand && product.brand.toLowerCase().includes(query));

    if (!searchMatch) return false;

    // 2. Check Filters
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
    <div className="min-h-screen bg-[#f9f9f9]">
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-10 relative">
        <div className="flex items-center gap-2 text-gray-500 text-[13px] font-medium mb-10">
          <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <span>›</span>
          <span className="text-gray-400">Search Results for "{searchParams.get('q')}"</span>
        </div>

        <form onSubmit={handleSearchSubmit} className="relative mb-12">
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Enter your search term"
              className="w-full text-2xl md:text-[40px] font-normal text-gray-900 border-b border-gray-400 pb-4 focus:outline-none focus:border-gray-900 pr-16 bg-transparent"
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

        <h2 className="text-[13px] font-semibold text-gray-800 mb-8 tracking-wide">Products {filteredProducts.length} results</h2>

        {filteredProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 mt-4">
            <div className="relative w-[320px] h-[320px] mb-6">
               <Image src="/assets/no_search_results.png" alt="No results" fill className="object-contain mix-blend-multiply drop-shadow-sm" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Oops!</h3>
            <p className="text-[15px] text-gray-800">We found 0 results for your search "{searchParams.get('q') || searchTerm}".</p>
          </div>
        ) : (
          <>
            {/* Top Bar: Filters and Sort */}
            <div className="flex flex-col sm:flex-row items-center justify-between mb-8 pb-6 gap-4">
              <div className="flex items-center gap-6">
                <button 
                  onClick={() => setIsFiltersVisible(!isFiltersVisible)}
                  className="flex items-center gap-2 bg-[#e8e8e8] text-gray-800 px-5 py-2.5 rounded-full font-medium hover:bg-gray-300 transition-colors"
                >
                  <Filter className="w-4 h-4" />
                  <span className="text-sm font-semibold">{isFiltersVisible ? 'Filters' : 'Show Filters'}</span>
                </button>
                <span className="text-gray-700 font-semibold text-[14px]">Showing 1–{Math.min(filteredProducts.length, 16)} of {filteredProducts.length} results</span>
              </div>
              
              <div className="flex items-center gap-3 relative">
                <span className="text-gray-700 font-semibold text-sm">Sort by:</span>
                <button 
                  onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
                  className="flex items-center gap-2 bg-[#e8e8e8] text-gray-800 px-5 py-2.5 rounded-full font-medium hover:bg-gray-300 transition-colors"
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
                      <div key={`${filter.title}-${filter.value}-${index}`} className="flex items-center gap-2 bg-white shadow-sm text-[#2c3e50] px-3 py-1.5 rounded-full text-[13px] font-medium border border-gray-200">
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
                    <Link href={`/rental/${product.id}`} key={product.id + "-" + index} className="group cursor-pointer flex flex-col bg-transparent">
                      {/* Image Container */}
                      <div className="relative aspect-square bg-white rounded-[24px] mb-4 flex items-center justify-center p-6 transition-transform duration-300 hover:-translate-y-1 shadow-sm">
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
          </>
        )}

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
    </div>
  );
}

export default function SearchResults({ allProducts = [] }: { allProducts?: any[] }) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f9f9f9] flex items-center justify-center">Loading...</div>}>
      <SearchResultsContent allProducts={allProducts} />
    </Suspense>
  );
}
