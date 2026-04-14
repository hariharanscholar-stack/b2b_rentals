import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import prisma from '@/lib/prisma';

export default async function PopularEquipment() {
  const trendingProducts = await prisma.product.findMany({
    take: 4,
    orderBy: {
      productId: 'asc'
    }
  });

  return (
    <div className="w-full bg-white py-12 md:py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-3 h-4 bg-[#F8BC45] rounded-tl-md rounded-br-md block border-[1px] border-[#F8BC45]"></span>
              <span className="text-[11px] font-extrabold tracking-[0.15em] text-gray-500 uppercase">
                Trending
              </span>
            </div>
            <h2 className="text-3xl lg:text-[32px] font-extrabold text-gray-900 tracking-tight mt-1">
              Popular Equipment's
            </h2>
          </div>
          
          <div className="flex gap-3">
             <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
               <ArrowLeft className="w-5 h-5 text-gray-400" strokeWidth={2} />
             </button>
             <button className="w-12 h-12 rounded-full bg-[#1A1F2B] flex items-center justify-center hover:bg-black transition-colors shadow-xl shadow-gray-900/10">
               <ArrowRight className="w-5 h-5 text-white" strokeWidth={2} />
             </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {trendingProducts.map((product) => (
            <div key={product.id} className="group flex flex-col">
              
              {/* Image Container with the Cutout Style */}
              <div className="relative w-full aspect-[4/4.5] bg-[#F4F4F4] rounded-2xl mb-6 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="relative w-full h-full">
                    <Image 
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>
                
                {/* Visual Cutout Mask (White Background corner) */}
                <div className="absolute -bottom-1 -right-1 w-20 h-20 bg-white rounded-tl-[32px] z-10 flex items-end justify-end p-2">
                   {/* Yellow Navigation Button nested precisely inside the mask */}
                   <Link 
                     href={`/rental/${product.id}`}
                     className="w-[42px] h-[42px] rounded-full bg-[#F8BC45] hover:bg-[#EFAF32] transition-colors flex items-center justify-center shadow-[0_4px_12px_rgba(248,188,69,0.35)]"
                   >
                     <ArrowUpRight className="w-5 h-5 text-gray-900" strokeWidth={2.5} />
                   </Link>
                </div>
              </div>

              {/* Text Info */}
              <div className="flex flex-col pr-6">
                <p className="text-[10px] font-extrabold text-[#A0AEC0] uppercase tracking-wider mb-2">
                  {product.category}
                </p>
                <h3 className="text-[15px] font-black text-gray-900 mb-5 leading-tight">
                  {product.name}
                </h3>
                
                <Link 
                  href="/request-quote" 
                  className="w-max px-6 py-2.5 rounded-xl border border-gray-200 text-[12px] font-bold text-gray-600 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-300 transition-all text-center"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
