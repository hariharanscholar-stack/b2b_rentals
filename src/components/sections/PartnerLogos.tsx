import React from "react";

const logos = [
  "TOYOTA",
  "Godrej",
  "JUNGHEINRICH",
  "TENNANT",
  "IPC",
  "ROOTS",
  "HILTI"
];

export default function PartnerLogos() {
  return (
    <div className="w-full bg-white py-12 md:py-20 border-b border-gray-50 border-t mt-4">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-8 md:gap-4 opacity-30 grayscale saturate-0 hover:grayscale-0 transition-all duration-300">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="font-extrabold text-2xl tracking-tighter text-gray-400 select-none flex items-center justify-center whitespace-nowrap"
            >
              {logo.toUpperCase()}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
