import React from "react";
import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";

const steps = [
  {
    step: "STEP 1",
    title: "Enquiry",
    description: "contact on phone, mail or place enquiry online",
  },
  {
    step: "STEP 2",
    title: "Our Expert Consulting",
    description: "our experts visit, discuss and provide solution",
  },
  {
    step: "STEP 3",
    title: "Truck Delivered",
    description: "",
  },
  {
    step: "STEP 4",
    title: "Equipment commissioning and commencement of Operations",
    description: "",
  }
];

export default function ProcessApproach() {
  return (
    <div className="w-full bg-white py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Top Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 md:mb-24">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-3 h-4 bg-[#F8BC45] rounded-tl-md rounded-br-md block border-[1px] border-[#F8BC45]"></span>
              <span className="text-[12px] font-extrabold tracking-[0.15em] text-gray-500 uppercase">
                How It Works
              </span>
            </div>
            <h2 className="text-3xl lg:text-[40px] font-extrabold text-[#1A1F2B] tracking-tight mb-8">
              Understanding our Approach
            </h2>
            <p className="text-gray-500 text-[15px] leading-relaxed font-medium">
              Get instant access to top equipment from trusted brands such as Godrej, Toyota, Tennant, IPC, Hilti, and more — available through our rental partners in just a few clicks.
            </p>
          </div>

          <div className="relative w-full aspect-[16/9] rounded-[40px] overflow-hidden shadow-2xl">
            <Image 
              src="/assets/U_O_A_IMG.png"
              alt="Understanding our Approach"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Steps Section */}
        <div className="flex flex-col md:flex-row items-baseline justify-between gap-8 md:gap-4 relative">
          {steps.map((item, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center text-center flex-1 max-w-[240px] mx-auto">
                <div className="w-16 h-16 rounded-full bg-[#F7845E] flex items-center justify-center mb-6 shadow-lg shadow-orange-200">
                  <Sparkles className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                
                <span className="text-[11px] font-bold text-gray-400 tracking-widest uppercase mb-4">
                  {item.step}
                </span>
                
                <div className="flex flex-col gap-2 px-2">
                  <h4 className="text-[16px] font-bold text-gray-900 leading-tight">
                    {item.title}
                  </h4>
                  {item.description && (
                    <p className="text-[13px] text-gray-500 font-medium leading-snug">
                       {item.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Arrow spacer (hidden on mobile, last item hidden) */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center pt-8">
                  <ArrowRight className="w-6 h-6 text-gray-300" strokeWidth={1} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
