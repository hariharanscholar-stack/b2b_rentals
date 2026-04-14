import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Clock, MapPin } from 'lucide-react';
import CareersForm from './CareersForm';

const positions = [
  {
    title: "Sales Manager",
    description: "We are seeking a dynamic and results-driven Sales Manager to lead our sales team and drive business growth.",
    type: "Full-time",
    location: "On-site",
    highlight: true,
  },
  {
    title: "Position 2",
    description: "Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel sodales sed nibh ut. Ac fringilla fames eget a aliquet.",
    type: "Full-time",
    location: "On-site",
    highlight: false,
  },
  {
    title: "Position 3",
    description: "Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel sodales sed nibh ut. Ac fringilla fames eget a aliquet.",
    type: "Full-time",
    location: "On-site",
    highlight: false,
  },
  {
    title: "Position 4",
    description: "Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel sodales sed nibh ut. Ac fringilla fames eget a aliquet.",
    type: "Full-time",
    location: "On-site",
    highlight: false,
  }
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[#f9f9f9] pb-24">
      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 py-10 relative">
        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-2 text-gray-500 text-[13px] font-medium mb-10 mt-12">
          <Link href="/" className="hover:text-gray-900 transition-colors tracking-wide">Home</Link>
          <span>›</span>
          <span className="text-gray-700 font-semibold tracking-wide">Careers</span>
        </div>

        {/* Heading & Subtitle */}
        <div className="text-center mb-16">
          <h1 className="text-[36px] sm:text-[40px] md:text-[48px] font-bold text-gray-900 mb-6">Careers</h1>
          <p className="text-[#4d5666] text-[15px] leading-[1.8] max-w-3xl mx-auto">
            Join B2B Rentals to innovate and lead in the sector, where we foster a culture of growth and collaboration, offering cutting-edge projects and comprehensive benefits in a dynamic, inclusive environment
          </p>
        </div>

        {/* Hero Image */}
        <div className="w-full relative overflow-hidden mt-6">
          <Image 
            src="/assets/careers.png" 
            alt="Join Our Team" 
            width={1440}
            height={600}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* Open Position Section */}
        <div className="mt-24 max-w-[1080px] mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-3.5 h-3.5 bg-[#ffd371] rounded shrink-0 leading-none" />
                <span className="text-sm font-bold tracking-[0.15em] uppercase text-gray-600 leading-none mt-[2px]">
                  OPEN POSITION
                </span>
              </div>
              <h2 className="text-[34px] md:text-[42px] font-bold text-gray-900 leading-[1.2]">
                Build Your Career with<br />B2B Rentals
              </h2>
            </div>
            <div className="pt-2">
              <button className="bg-[#ffd371] text-gray-900 px-7 py-3.5 rounded-xl text-[15px] font-semibold hover:bg-[#ebbd59] transition-colors">
                Join Our Team
              </button>
            </div>
          </div>

          {/* Positions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {positions.map((pos, idx) => (
              <div 
                key={idx} 
                className={`relative flex flex-col p-8 md:p-10 rounded-2xl group cursor-pointer transition-shadow hover:shadow-md ${pos.highlight ? 'bg-[#fbfaf4] border border-[#fbfaf4]' : 'bg-white border border-gray-100 shadow-sm'}`}
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-medium text-gray-900">{pos.title}</h3>
                  <button className="text-gray-900 w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors -mr-2 -mt-2">
                    <ArrowUpRight className="w-5 h-5 stroke-[2]" />
                  </button>
                </div>
                
                <p className="text-[15px] text-gray-500 leading-[1.7] mb-8 pr-4">
                  {pos.description}
                </p>

                <div className="flex items-center gap-6 mt-auto">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4 stroke-[1.5]" />
                    <span className="text-[14px]">{pos.type}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4 stroke-[1.5]" />
                    <span className="text-[14px]">{pos.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Benefits Section */}
      <section className="bg-[#fcfaf4] py-20 lg:py-28 border-t border-gray-100">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
          {/* Top part: Image + Text */}
          <div className="grid grid-cols-1 lg:grid-cols-[45%_1fr] gap-12 lg:gap-20 items-center mb-24">
            {/* Left Image */}
            <div className="relative aspect-[16/10] w-full rounded-[24px] overflow-hidden shadow-sm">
              <Image 
                src="/assets/EB.png" 
                alt="Employee Benefits" 
                fill 
                className="object-cover"
              />
            </div>

            {/* Right Text */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-3.5 h-3.5 bg-[#ffd371] rounded-sm shrink-0" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500">
                  BENEFIT
                </span>
              </div>
              <h2 className="text-[32px] md:text-[38px] font-bold text-gray-900 mb-6 leading-tight">
                B2B Rentals Employee<br />Benefits
              </h2>
              <p className="text-[15px] text-gray-500 leading-[1.8]">
                But rentals are not just about affordability — they are about safety and reliability. Every machine in our fleet is maintained to OEM standards, thoroughly inspected, and delivered with a clear uptime and safety commitment. We believe that productivity can never come at the cost of safety, and this principle guides every rental we execute
              </p>
            </div>
          </div>

          {/* Bottom part: 4 stats/features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
            {[
              { num: "01", title: "Competitive\nSalaries" },
              { num: "02", title: "Flexible Work\nArrangements" },
              { num: "03", title: "Professional\nDevelopment" },
              { num: "04", title: "Supportive\nEnvironment" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col gap-5">
                <div className="w-12 h-12 bg-[#181d25] rounded-full flex items-center justify-center text-white text-sm font-semibold tracking-wide">
                  {item.num}
                </div>
                <h3 className="text-lg font-medium text-gray-900 leading-snug whitespace-pre-line">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Form */}
      <CareersForm />
    </div>
  );
}
