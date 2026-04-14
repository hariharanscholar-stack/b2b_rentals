"use client";

import React, { useState } from "react";
import Image from "next/image";

const tabs = [
  {
    id: "01",
    label: "Diesel Forklift",
    image: "/assets/Diesel_forklift.png",
    bgText: "DIESEL",
  },
  {
    id: "02",
    label: "Electric CB Forklift",
    image: "/assets/fork_lift_1.png",
    bgText: "ELECTR",
  },
  {
    id: "03",
    label: "Reach Truck",
    image: "/assets/HL_Reach_truck.png",
    bgText: "REACH",
  },
  {
    id: "04",
    label: "Floor scrubber",
    image: "/assets/facility_management.png",
    bgText: "SCRUBE",
  },
];

export default function RentalPoweringBusiness() {
  const [activeTab, setActiveTab] = useState(tabs[1]); // Default to second item as per screenshot

  return (
    <section className="bg-[#fdfcf6] py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Content */}
        <div className="max-w-[500px]">
          <h2 className="text-[36px] sm:text-[44px] md:text-[56px] font-medium leading-[1.1] text-[#1a1a1a] mb-6">
            EaaS: Powering Your Business Needs
          </h2>
          <p className="text-[15px] md:text-[17px] text-[#4d5666] leading-[1.6] mb-12 max-w-[420px]">
            Rent and manage all your equipment in one platform - saving time, cutting costs, and boosting efficiency.
          </p>

          <div className="flex items-center gap-6">
            {/* Faces Badge */}
            <div className="flex items-center bg-white rounded-full py-2.5 px-3 pr-6 shadow-sm border border-gray-100/60">
              <div className="flex -space-x-3 mr-4">
                {/* Mock circles for avatars */}
                <div className="w-9 h-9 rounded-full bg-gray-800 border-2 border-white flex items-center justify-center overflow-hidden">
                  <Image src="/assets/about_hero.jpg" alt="A" width={36} height={36} className="object-cover" />
                </div>
                <div className="w-9 h-9 rounded-full bg-orange-800 border-2 border-white flex items-center justify-center overflow-hidden">
                  <Image src="/assets/categories_hero.png" alt="B" width={36} height={36} className="object-cover" />
                </div>
                <div className="w-9 h-9 rounded-full bg-blue-800 border-2 border-white flex items-center justify-center overflow-hidden">
                  <Image src="/assets/earth.png" alt="C" width={36} height={36} className="object-cover" />
                </div>
                <div className="w-9 h-9 rounded-full bg-black border-2 border-white flex items-center justify-center text-white text-[12px] font-bold">
                  +
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[14px] font-bold text-gray-900 leading-tight">1k+ Happy</span>
                <span className="text-[14px] font-bold text-gray-900 leading-tight">Customers</span>
              </div>
            </div>

            <button className="bg-[#ffd966] text-[#1a1a1a] px-8 py-3.5 rounded-2xl text-[15px] font-semibold hover:bg-[#ebd05e] transition-colors shadow-sm">
              Discover More
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative w-full h-[350px] sm:h-[450px] md:h-[500px] flex flex-col items-center justify-center lg:justify-end">
          
          {/* Background Text */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 -z-10 w-full overflow-hidden flex items-center">
             <span className="text-[70px] sm:text-[120px] md:text-[140px] lg:text-[220px] font-black text-[#f1edd9] leading-none tracking-tighter w-full text-center lg:text-left select-none uppercase">
               {activeTab.bgText}
             </span>
          </div>

          {/* Active Image */}
          <div className="relative w-full max-w-[450px] aspect-square z-10 transition-all duration-500 mr-auto lg:mr-24 lg:ml-0 mt-8 lg:-translate-y-8">
            <Image
              src={activeTab.image}
              alt={activeTab.label}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Navigation Tabs - below image on mobile, absolute on desktop */}
          <div className="flex flex-row flex-wrap justify-center gap-2 mt-auto pb-4 lg:hidden z-20">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-[13px] font-semibold border transition-all ${
                  activeTab.id === tab.id
                    ? "bg-[#1a1a1a] text-white border-[#1a1a1a]"
                    : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex flex-col gap-6 absolute right-0 top-1/2 -translate-y-1/2 z-20">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab)}
                className="flex items-center gap-4 group transition-all duration-300 text-left"
              >
                <div className="flex items-center w-8">
                  <span className={`text-[13px] font-medium transition-colors ${activeTab.id === tab.id ? "text-gray-400" : "text-gray-400"}`}>
                    {tab.id}
                  </span>
                </div>
                <div className="relative flex items-center">
                  {activeTab.id === tab.id && (
                    <span className="absolute -left-6 w-1 h-6 bg-[#ffd966] rounded-full transition-all duration-300" />
                  )}
                  <span className={`text-[15px] font-bold transition-all duration-300 whitespace-nowrap ${activeTab.id === tab.id ? "text-[#1a1a1a]" : "text-[#1a1a1a]"}`}>
                    {tab.label}
                  </span>
                </div>
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
