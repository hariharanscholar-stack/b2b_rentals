"use client";

import React, { useState } from "react";
import Image from "next/image";

const tabs = [
  {
    id: "owned_fleet",
    title: "Owned Fleet Rentals",
    description: "We provide ready-to-rent forklifts, stackers, and cleaning machines with 24-hour delivery, transparent pricing, and maintenance included — ideal for urgent or short-term needs.",
    image: "/assets/fork_lift_1.png" // Fallback since they didn't specify exactly what image mapping owned fleet
  },
  {
    id: "godrej",
    title: "Godrej Rentrust Dealership Rentals",
    description: "As an authorized OEM partner, we offer Godrej-branded equipment with assured performance, factory service, flexible rentals, and SLA-driven uptime — ideal for long-term projects with end-to-end support and delivery.",
    image: "/assets/core_off_img.png"
  },
  {
    id: "aggregator",
    title: "Aggregator Platform",
    description: "We unify the fragmented B2B rental market by bringing local vendors and SMEs onto a tech-enabled marketplace — enabling them to monetize idle equipment and connect with verified demand through listings, search, booking, and ratings.",
    image: "/assets/U_O_A_IMG.png"
  }
];

export default function RentalCoreOfferings() {
  const [activeTabId, setActiveTabId] = useState(tabs[1].id);

  const activeTab = tabs.find(t => t.id === activeTabId) || tabs[0];

  return (
    <section className="bg-[#fcfaf4] py-24 pb-32">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 flex flex-col gap-12">
        
        {/* Header */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="w-3.5 h-3.5 bg-[#ffd371] rounded-sm shrink-0" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-600">
              FEATURES
            </span>
          </div>
          <h2 className="text-[32px] md:text-[38px] font-bold text-gray-900 leading-tight">
            Core Offerings
          </h2>
        </div>

        {/* Content Array */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-24 items-center">
          
          {/* Left - Tabs List */}
          <div className="flex flex-col gap-4">
            {tabs.map((tab) => {
              const isActive = activeTabId === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`text-left p-8 rounded-[20px] transition-all duration-300 w-full ${
                    isActive 
                      ? "bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] scale-100" 
                      : "bg-transparent scale-[0.98] opacity-80 hover:opacity-100 hover:bg-white/50"
                  }`}
                >
                  <h3 className="text-xl md:text-[22px] font-semibold text-gray-900 mb-4 tracking-tight">
                    {tab.title}
                  </h3>
                  <p className="text-[14px] leading-[1.8] text-[#555] max-w-[480px]">
                    {tab.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right - Image display */}
          <div className="w-full relative aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl transition-all duration-500 transform lg:translate-x-4">
            <Image
              src={activeTab.image}
              alt={activeTab.title}
              fill
              className="object-cover transition-opacity duration-500"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}
