"use client";

import React, { useState } from "react";
import Image from "next/image";

const offerings = [
  {
    id: 1,
    title: "Owned Fleet Rentals",
    description: "We provide ready-to-rent forklifts, stackers, and cleaning machines with 24-hour delivery, transparent pricing, and maintenance included — ideal for urgent or short-term needs.",
    image: "/assets/core_off_img.png"
  },
  {
    id: 2,
    title: "Godrej Rentrust Dealership Rentals",
    description: "As an authorized OEM partner, we offer Godrej-branded equipment with assured performance, factory service, flexible rentals, and SLA-driven uptime — ideal for long-term projects with end-to-end support and delivery.",
    image: "/assets/core_off_img.png"
  },
  {
    id: 3,
    title: "Aggregator Platform",
    description: "We unify the fragmented B2B rental market by bringing local vendors and SMEs onto a tech-enabled marketplace – enabling them to monetize idle equipment and connect with verified demand through listings, search, booking, and ratings.",
    image: "/assets/core_off_img.png"
  }
];

export default function CoreOfferings() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="w-full bg-[#FCFAF2] py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Text and Tabs */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-3 h-4 bg-[#F8BC45] rounded-tl-md rounded-br-md block border-[1px] border-[#F8BC45]"></span>
            <span className="text-[12px] font-extrabold tracking-[0.15em] text-gray-500 uppercase">
              Features
            </span>
          </div>
          <h2 className="text-3xl lg:text-[40px] font-extrabold text-[#1A1F2B] tracking-tight mb-12">
            Core Offerings
          </h2>

          <div className="flex flex-col gap-4 pr-0 lg:pr-8">
            {offerings.map((offering) => {
              const isActive = activeTab === offering.id;
              return (
                <div 
                  key={offering.id}
                  onClick={() => setActiveTab(offering.id)}
                  className={`p-8 rounded-2xl cursor-pointer transition-all duration-300 ${
                    isActive 
                      ? "bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white" 
                      : "hover:bg-black/5 border border-transparent"
                  }`}
                >
                  <h3 className={`text-[19px] mb-3 font-bold ${isActive ? 'text-gray-900' : 'text-gray-700'}`}>
                    {offering.title}
                  </h3>
                  <p className={`text-[13px] leading-relaxed ${isActive ? 'text-gray-600 font-medium' : 'text-gray-500'}`}>
                    {offering.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Dynamic Image */}
        <div className="w-full h-full flex items-center justify-center lg:justify-end">
           <div className="w-full drop-shadow-2xl">
             <div className="w-full rounded-[40px] overflow-hidden bg-[#FCFAF2]">
               <Image 
                 src={offerings.find(o => o.id === activeTab)?.image || offerings[0].image}
                 alt="Core Offering"
                 width={1200}
                 height={1200}
                 quality={100}
                 className="w-full h-auto object-cover scale-[1.05] transition-all duration-700 ease-in-out"
               />
             </div>
           </div>
        </div>

      </div>
    </div>
  );
}
