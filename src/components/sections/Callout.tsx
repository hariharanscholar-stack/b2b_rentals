"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ProductItem from "@/components/ui/ProductItem";

export default function Callout() {
  const products = [
    { id: "01", name: "Diesel Forklift" },
    { id: "02", name: "Electric CB Forklift" },
    { id: "03", name: "Reach Truck" },
    { id: "04", name: "Floor scrubber" },
  ];

  const [activeProductId, setActiveProductId] = useState<string>("01");

  return (
    <section className="relative bg-cream overflow-hidden">
      <div className="container mx-auto px-6 py-11">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-gray-900 leading-normal tracking-tight">
              Simplifying <br />
              Industrial Rentals
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed max-w-md">
              Rent and manage all your equipment in one platform - saving time,
              cutting costs, and boosting efficiency.
            </p>

            {/* Customer Avatars */}
            <div className="flex items-center gap-4 bg-white px-5 py-4 rounded-4xl shadow-sm w-fit">
              <div className="flex -space-x-3">
                <div className="w-9 h-9 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
                  <div className="w-full h-full bg-linear-to-br from-blue-400 to-blue-600" />
                </div>
                <div className="w-9 h-9 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
                  <div className="w-full h-full bg-linear-to-br from-orange-400 to-orange-600" />
                </div>
                <div className="w-9 h-9 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
                  <div className="w-full h-full bg-linear-to-br from-green-400 to-green-600" />
                </div>
                <div className="w-9 h-9 rounded-full bg-gray-900 border-2 border-white flex items-center justify-center text-white text-lg font-medium">
                  +
                </div>
              </div>
              <div className="text-base font-medium text-gray-900">
                1k+ Happy <br />
                Customers
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="/request-quote" className="bg-primary px-6 py-3 rounded-xl text-gray-900 text-base font-semibold hover:bg-primary/90 transition-colors">
                Request a Quote
              </Link>
              <Link href="/join-fleet" className="border border-gray-900 px-6 py-3 rounded-xl text-gray-900 text-base font-semibold hover:bg-gray-100 transition-colors">
                Join our Rental Fleet
              </Link>
            </div>
          </div>

          {/* Right Content - Forklift Image & Product List */}
          <div className="relative">
            {/* Forklift Image */}
            <div className="relative w-full aspect-[590/434] rounded-2xl overflow-hidden">
              <Image
                src="/assets/fork_lift_1.png"
                alt="Godrej Electric Forklift"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Product List - hidden on mobile, absolute on desktop */}
            <div className="hidden md:block absolute right-0 top-12">
              {products.map((product) => (
                <ProductItem
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  isActive={activeProductId === product.id}
                  onClick={() => setActiveProductId(product.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Bottom Right */}
      <div className="absolute bottom-12 right-12">
        <div className="w-12 h-12 rounded-full border-2 border-gray-900 flex items-center justify-center cursor-pointer hover:bg-gray-900 hover:text-white transition-colors group">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
