import React from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Material\nHandling",
    image: "/assets/fork_lift_1.png",
  },
  {
    title: "Facility\nManagement",
    image: "/assets/facility_management.png",
  },
  {
    title: "Tools &\nWelding",
    image: "/assets/tools_and_welding.png",
  },
  {
    title: "Power\nSolutions",
    image: "/assets/power_solutions.png",
  },
  {
    title: "Mobility",
    image: "/assets/mobility.png",
  },
  {
    title: "Utilities",
    image: "/assets/utilities.png",
  }
];

export default function Categories() {
  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-3 h-4 bg-[#F8BC45] rounded-tl-md rounded-br-md block"></span>
            <span className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">
              Lets Choose
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Categories
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat, idx) => (
            <Link 
              key={idx} 
              href="/rental"
              className="group flex flex-col items-center justify-between p-4 rounded-2xl hover:bg-gray-50 transition-colors"
            >
              <div className="w-full aspect-square relative mb-6 rounded-xl overflow-hidden flex items-center justify-center">
                {cat.image ? (
                  <Image 
                    src={cat.image}
                    alt={cat.title.replace('\n', ' ')}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-24 h-24 bg-gray-100 rounded-xl flex border border-gray-200 shadow-inner items-center justify-center text-gray-300 text-xs font-medium text-center p-2">
                    [Image Needed]
                  </div>
                )}
              </div>
              <h3 className="text-sm font-semibold text-gray-900 text-center whitespace-pre-line leading-tight">
                {cat.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
