import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Hero() {
  return (
    <div className="bg-[#FCFAF2] min-h-[90vh] pt-12 overflow-hidden relative border-t-2 border-white flex flex-col justify-center">
      
      {/* Absolute Giant Watermark Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 mt-20 opacity-[0.6]">
        <div 
          aria-hidden="true"
          className="font-black text-[#EFEAD4] leading-none tracking-tighter"
          style={{ fontSize: "clamp(120px, 22vw, 400px)" }}
        >
          FORKLIFT
        </div>
      </div>

      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 flex-grow pt-8 lg:pt-0">
        
        {/* Left Column: Headings & Buttons */}
        <div className="lg:col-span-4 flex flex-col gap-5 pt-10">
          <h1 className="text-5xl md:text-6xl lg:text-[64px] font-medium tracking-tight text-[#1A1F2B] leading-[1.05]">
            Simplifying<br />Industrial Rentals
          </h1>
          
          <p className="text-gray-600 font-medium leading-relaxed max-w-[340px] text-[15px] mt-2">
            Rent and manage all your equipment in one platform - saving time, cutting costs, and boosting efficiency.
          </p>

          {/* Happy Customers Badge */}
          <div className="bg-white rounded-full py-2.5 px-4 flex items-center gap-3 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] w-max my-3 border border-gray-100">
            <div className="flex -space-x-2">
               {/* Note: Dummy avatars replaced by colored circles */}
               <div className="w-8 h-8 rounded-full bg-orange-300 border-2 border-white overflow-hidden shadow-sm"></div>
               <div className="w-8 h-8 rounded-full bg-blue-300 border-2 border-white overflow-hidden shadow-sm"></div>
               <div className="w-8 h-8 rounded-full bg-black border-2 border-white overflow-hidden shadow-sm flex items-center justify-center relative z-10">
                 <span className="text-white text-[10px] font-bold">+</span>
               </div>
            </div>
            <div className="flex flex-col">
               <span className="text-[11px] font-extrabold text-gray-900 leading-tight">1k+ Happy</span>
               <span className="text-[11px] font-medium text-gray-500 leading-tight">Customers</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-2">
             <Link 
               href="/request-quote"
               className="bg-[#F8BC45] hover:bg-[#EFAF32] transition-colors text-black font-semibold text-[13px] tracking-wide py-3.5 px-8 rounded-xl shadow-[0_4px_10px_-2px_rgba(248,188,69,0.3)]"
             >
                Request a Quote
             </Link>
             <Link href="/join-fleet" className="bg-white hover:bg-gray-50 border border-gray-300 text-gray-900 font-bold text-[13px] tracking-wide py-3.5 px-8 rounded-xl shadow-sm transition-colors">
                 Join our Rental Fleet
              </Link>
          </div>
        </div>

        {/* Center: Hero Image */}
        <div className="lg:col-span-5 relative mt-16 lg:mt-0 flex justify-center items-end lg:-translate-x-8 z-20 lg:-mr-12">
          <div className="relative w-[340px] h-[340px] md:w-[500px] md:h-[500px] lg:w-[680px] lg:h-[680px]">
            {/* The provided design features the Godrej forklift. using fork_lift_1.png as the stand-in */}
            <Image 
              src="/assets/fork_lift_1.png" 
              fill 
              alt="Godrej Electric Forklift available for rent at B2B Rentals" 
              className="object-contain drop-shadow-2xl scale-[1.25] lg:scale-[1.1] origin-bottom hover:scale-[1.12] transition-transform duration-700 ease-out" 
              priority 
            />
          </div>
        </div>

        {/* Right Column: Menu List */}
        <div className="lg:col-span-3 flex justify-start lg:justify-end mt-12 lg:mt-0 z-30 lg:-translate-y-12">
          <ul className="flex flex-col gap-[22px] text-[13px] font-bold w-48">
             <li className="flex items-center gap-4 text-gray-900 leading-none relative group cursor-pointer">
               {/* Active indicator line */}
               <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-[3px] h-[24px] bg-[#F8BC45] rounded-full"></div>
               <span className="text-gray-400 font-medium">01</span> Diesel Forklift
             </li>
             <li className="flex items-center gap-4 text-gray-800 leading-none relative group cursor-pointer hover:text-black transition-colors pl-[3px]">
               <span className="text-gray-400 font-medium">02</span> Electric CB Forklift
             </li>
             <li className="flex items-center gap-4 text-gray-800 leading-none relative group cursor-pointer hover:text-black transition-colors pl-[3px]">
               <span className="text-gray-400 font-medium">03</span> Reach Truck
             </li>
             <li className="flex items-center gap-4 text-gray-800 leading-none relative group cursor-pointer hover:text-black transition-colors pl-[3px]">
               <span className="text-gray-400 font-medium">04</span> Floor scrubber
             </li>
          </ul>
        </div>
        
      </div>

      {/* Up Arrow Bottom Right */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative pb-8 mt-auto flex justify-end">
          <button className="w-10 h-10 rounded-full bg-[#EEF2F9] hover:bg-[#E2E8F0] shadow-[0_2px_10px_rgba(0,0,0,0.03)] flex items-center justify-center text-gray-600 transition-colors">
            <ArrowUp className="w-4 h-4" />
          </button>
      </div>
    </div>
  );
}
