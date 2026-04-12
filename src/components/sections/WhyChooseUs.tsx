import React from "react";
import { Award, ShieldCheck, Users } from "lucide-react";

const reasons = [
  {
    title: "OEM Dealer",
    description: "Authorized OEM dealer, offering branded equipment rentals backed by trust, service, and OEM credibility. (Godrej, Toyota, IPC, Tennant)",
    color: "bg-[#F7845E]", // Coral Orange
    icon: Award,
  },
  {
    title: "Aggregator",
    description: "Our digital platform connects businesses with multiple verified rental vendors, offering choice, convenience, and transparency",
    color: "bg-[#3B8BE3]", // Blue
    icon: ShieldCheck,
  },
  {
    title: "Own Fleet",
    description: "We invest and maintain our own fleet of industrial equipment, ensuring quality control and reliable rental availability",
    color: "bg-[#A6C45E]", // Greenish
    icon: Users,
  }
];

export default function WhyChooseUs() {
  return (
    <div className="w-full bg-white py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-3 h-4 bg-[#F8BC45] rounded-tl-md rounded-br-md block border-[1px] border-[#F8BC45]"></span>
          <span className="text-[12px] font-extrabold tracking-[0.15em] text-gray-500 uppercase">
            Why Rent With B2BRentals
          </span>
        </div>
        <h2 className="text-3xl lg:text-[40px] font-extrabold text-[#1A1F2B] tracking-tight mb-16">
          Powering Your Work – Anytime, Anywhere.
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div 
                key={index}
                className={`${reason.color} p-10 md:p-12 text-white flex flex-col min-h-[420px] transition-transform hover:scale-[1.02] duration-300`}
                style={{ 
                  borderRadius: "20px 80px 20px 80px" 
                }}
              >
                <div className="mb-8 p-3 w-fit rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                  <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-2xl font-bold mb-6">
                  {reason.title}
                </h3>
                
                <p className="text-white/90 leading-relaxed text-[15px] font-medium">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
