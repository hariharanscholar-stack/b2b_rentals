"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, CheckCircle2, ChevronDown, ChevronUp, ArrowUpRight, X, Check } from "lucide-react";
import { products, allProducts } from "@/data/products";

export default function ProductDetails({ id }: { id: string }) {
  const productId = parseInt(id, 10);
  const product = allProducts.find(p => p.id === productId) || products.find(p => p.id === productId);

  const [activeTonnage, setActiveTonnage] = useState<number | undefined>(product?.tonnages?.[0]);
  const [activePower, setActivePower] = useState<string | undefined>(product?.powers?.[0]);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  const handleQuoteSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!product) return;
    
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      productName: product.name,
      tonnage: activeTonnage,
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      mobile: formData.get('mobile'),
      email: formData.get('email'),
      city: formData.get('city'),
      pinCode: formData.get('pinCode'),
      organisation: formData.get('organisation'),
      jobFunction: formData.get('jobFunction'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        alert("Something went wrong requesting quote.");
      }
    } catch (error) {
      console.error(error);
      alert("Error requesting quote.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const [expandedSections, setExpandedSections] = useState({
    features: true,
    additional: false
  });

  const carouselRef = useRef<HTMLDivElement>(null);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <Link href="/rental" className="mt-4 text-blue-600 hover:underline">Back to Rentals</Link>
      </div>
    );
  }

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 200;
      carouselRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const toggleSection = (section: 'features' | 'additional') => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="min-h-screen bg-[#f9fafb] pb-24">
      
      {/* Top Carousel section */}
      <section className="bg-white border-b border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Select your rental equipment</h2>
          
          <div className="relative flex items-center justify-center group">
            <button 
              onClick={() => scrollCarousel('left')}
              className="absolute left-0 z-10 p-2 rounded-full border border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center w-10 h-10 -ml-4 shadow-sm"
            >
              <ChevronLeft className="w-5 h-5 text-gray-400" />
            </button>
            
            <div 
              ref={carouselRef}
              className="flex overflow-x-auto gap-4 py-2 px-8 scrollbar-hide max-w-5xl"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {allProducts.map((p) => (
                <Link href={`/rental/${p.id}`} key={p.id} className="flex-shrink-0 flex flex-col items-center gap-3">
                  <div className={`w-24 h-24 rounded-2xl p-4 flex items-center justify-center transition-all bg-white shadow-[0_2px_10px_rgba(0,0,0,0.03)] ${
                    p.id === productId ? 'border-2 border-[#ffcd00] shadow-[0_4px_12px_rgba(255,205,0,0.15)] scale-105' : 'border border-gray-100 hover:border-gray-300'
                  }`}>
                    <div className="relative w-full h-full">
                      <Image src={p.image} alt={p.name} fill className="object-contain" />
                    </div>
                  </div>
                  <span className={`text-[11px] font-semibold text-center w-20 leading-tight ${p.id === productId ? 'text-gray-900' : 'text-gray-500'}`}>
                    {p.name}
                  </span>
                </Link>
              ))}
            </div>

            <button 
              onClick={() => scrollCarousel('right')}
              className="absolute right-0 z-10 p-2 rounded-full border border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center w-10 h-10 -mr-4 shadow-sm"
            >
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>
      </section>

      {/* Main Product Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          
          {/* Left: Product Image */}
          <div className="lg:w-3/5 flex-shrink-0">
            <div className="bg-[#f0f1f2] rounded-3xl w-full aspect-square flex items-center justify-center p-6 md:p-12">
              <div className="relative w-full h-full transform hover:scale-105 transition-transform duration-500">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain mix-blend-multiply drop-shadow-xl"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="lg:w-2/5 flex flex-col">
            <span className="text-gray-500 text-[13px] font-semibold tracking-wide mb-2 uppercase">
              {product.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              {product.name}
            </h1>
            
            {product.availability === "In stock" && (
              <div className="flex items-center gap-2 mb-6">
                <CheckCircle2 className="w-5 h-5 text-green-600 fill-green-100" />
                <span className="text-green-700 font-semibold text-sm">In stock</span>
              </div>
            )}

            <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
              {product.description} <button className="text-gray-900 font-bold underline decoration-2 underline-offset-4 hover:text-gray-700">More...</button>
            </p>

            <h3 className="font-bold text-gray-900 mb-6 text-lg">Available Options</h3>

            {/* Tonnage Options */}
            {product.tonnages && product.tonnages.length > 0 && (
              <div className="mb-6">
                <span className="block text-gray-800 font-bold text-sm mb-3">Tonnage:</span>
                <div className="flex flex-wrap gap-2.5">
                  {product.tonnages.map(t => (
                    <button
                      key={t}
                      onClick={() => setActiveTonnage(t)}
                      className={`px-5 py-2.5 rounded-[10px] text-[13px] font-semibold transition-all duration-200 border ${
                        activeTonnage === t 
                          ? 'border-gray-900 bg-white text-gray-900 shadow-sm ring-1 ring-gray-900' 
                          : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Power Options */}
            {product.powers && product.powers.length > 0 && (
              <div className="mb-8">
                <span className="block text-gray-800 font-bold text-sm mb-3">Power:</span>
                <div className="flex flex-wrap gap-2.5">
                  {product.powers.map(p => (
                    <button
                      key={p}
                      onClick={() => setActivePower(p)}
                      className={`px-6 py-2.5 rounded-[10px] text-[13px] font-semibold transition-all duration-200 border ${
                        activePower === p 
                          ? 'border-gray-900 bg-white text-gray-900 shadow-sm ring-1 ring-gray-900' 
                          : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Button */}
            <Link 
              href="/request-quote"
              className="w-full bg-[#ffcd00] hover:bg-[#e6b900] text-gray-900 font-bold py-4 rounded-xl text-[16px] transition-colors shadow-sm mb-10 block text-center"
            >
              Request Quote
            </Link>

            {/* Accordions */}
            <div className="border-t border-gray-200">
              <button 
                onClick={() => toggleSection('features')}
                className="flex items-center justify-between w-full py-5 group"
              >
                <span className="font-bold text-gray-900">Features</span>
                {expandedSections.features ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 group-hover:text-gray-900" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-gray-900" />
                )}
              </button>
              {expandedSections.features && (
                <div className="pb-5">
                  <ol className="space-y-2.5 pl-4 list-decimal marker:text-gray-900 marker:font-medium">
                    {product.features?.map((feature, i) => (
                      <li key={i} className="text-[14px] text-[#2d2d2d] leading-relaxed pl-1">
                        {feature}
                      </li>
                    ))}
                    {(!product.features || product.features.length === 0) && (
                      <li className="text-[14px] text-gray-500 list-none -ml-4">No specific features listed.</li>
                    )}
                  </ol>
                </div>
              )}
            </div>

            <div className="border-t border-gray-200 border-b">
              <button 
                onClick={() => toggleSection('additional')}
                className="flex items-center justify-between w-full py-5 group"
              >
                <span className="font-bold text-gray-900">Additional Information</span>
                {expandedSections.additional ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 group-hover:text-gray-900" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-gray-900" />
                )}
              </button>
              {expandedSections.additional && (
                <div className="pb-5">
                  {product.additionalInfo ? (
                    <div className="flex flex-col text-[13.5px]">
                      {Object.entries(product.additionalInfo).map(([key, value], index) => (
                        <div key={key} className={`flex items-start justify-between px-4 py-3.5 ${index % 2 === 0 ? 'bg-[#f8f8f8]' : 'bg-white'}`}>
                          <span className="font-bold text-[#2d2d2d] w-1/2">{key}</span>
                          <span className="text-[#4a4a4a] w-1/2 font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-[15px] text-gray-600 leading-relaxed px-1">
                      Contact our sales team for detailed specifications, maintenance logs, and customized rental plans tailored to your specific application needs.
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Similar Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12 md:py-16">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-[28px] font-bold text-gray-900">Similar Products</h2>
          <div className="flex items-center gap-3">
            <button className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-gray-400 transition-colors">
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button className="w-11 h-11 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition-colors shadow-md">
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((p, index) => (
             <Link href={`/rental/${p.id}`} key={p.id + "-" + index} className="group cursor-pointer flex flex-col">
              <div className="relative aspect-square bg-[#f5f5f5] rounded-[24px] mb-4 flex items-center justify-center p-6 transition-transform duration-300 hover:-translate-y-1">
                {p.isNew && (
                  <span className="absolute top-4 left-4 bg-[#84cc44] text-white text-[11px] font-bold px-3 py-1 rounded-md z-10">
                    New
                  </span>
                )}
                <div className="relative w-[88%] h-[88%] transform transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.05)]"
                  />
                </div>
                <button className="absolute -bottom-1 -right-1 bg-[#ffcd00] w-[46px] h-[46px] rounded-full flex items-center justify-center shadow-sm z-20 text-gray-900 border-[6px] border-white group-hover:scale-110 transition-transform">
                  <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                </button>
              </div>

              <div className="px-1 flex flex-col gap-1 items-start">
                <span className="text-[10px] text-gray-500/80 font-bold tracking-wider uppercase">
                  {p.category}
                </span>
                <h3 className="text-[16px] font-bold text-gray-900 leading-snug">
                  {p.name}
                </h3>
                <button 
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); router.push('/request-quote'); }}
                  className="mt-2 w-max border border-gray-400 text-gray-700 bg-transparent group-hover:bg-gray-800 group-hover:text-white group-hover:border-gray-800 px-5 py-2 rounded-[12px] text-[13px] font-semibold transition-all duration-300"
                >
                  Request Quote
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>
      
      {/* Quote Modal */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" onClick={() => setIsQuoteModalOpen(false)}></div>
          <div className="relative bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col border-[3px] border-[#2995f5]">
            {isSuccess ? (
              <div className="relative p-12 py-16 flex flex-col items-center justify-center text-center">
                <button 
                  onClick={() => setIsQuoteModalOpen(false)}
                  className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <div className="w-24 h-24 bg-[#69c735] rounded-full flex items-center justify-center mb-8 shadow-sm">
                  <Check className="w-12 h-12 text-white stroke-[3.5]" />
                </div>
                
                <h2 className="text-[32px] font-bold text-gray-900 mb-6 tracking-tight">Thank you!</h2>
                
                <p className="text-[16px] text-gray-700 max-w-sm mb-12 leading-relaxed">
                  Your quote for <span className="font-bold text-gray-900">{product.name} {activeTonnage ? `${activeTonnage} tonne` : ''}</span> will be sent shortly.
                </p>
                
                <button 
                  onClick={() => {
                    setIsQuoteModalOpen(false);
                    router.push('/');
                  }}
                  className="bg-[#ffcd00] hover:bg-[#e6b900] text-gray-900 font-bold py-3.5 px-10 rounded-lg text-[15px] transition-colors shadow-sm"
                >
                  Go to Home
                </button>
              </div>
            ) : (
              <>
                {/* Header */}
                <div className="sticky top-0 bg-white px-8 py-6 flex items-center justify-between z-10 border-b border-white">
                  <h2 className="text-[20px] font-bold text-gray-900">Request an Equipment Quote</h2>
                  <button 
                    onClick={() => setIsQuoteModalOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors -mr-2 text-gray-500"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="px-8 pb-8">
                  {/* Product Info */}
                  <div className="mb-6 border-b border-gray-100 pb-6">
                    <span className="block text-[14px] font-bold text-gray-900 mb-4 tracking-wide">Product</span>
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 bg-[#f4f5f7] rounded-xl flex items-center justify-center p-3 border border-gray-100">
                        <div className="relative w-full h-full">
                          <Image src={product.image} alt={product.name} fill className="object-contain" />
                        </div>
                      </div>
                      <span className="text-[15px] font-medium text-gray-800">
                        {product.name} {activeTonnage ? `${activeTonnage} tonne` : ''}
                      </span>
                    </div>
                  </div>

                  {/* Form Details */}
                  <form onSubmit={handleQuoteSubmit}>
                    <span className="block text-[14px] font-bold text-gray-900 mb-5 tracking-wide">Details</span>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5 mb-5">
                      <div>
                        <label className="block text-[13px] font-semibold text-gray-800 mb-2 mt-1">First name <span className="text-red-500">*</span></label>
                        <input name="firstName" required type="text" placeholder="enter your first name" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[14px] focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 placeholder:text-gray-400" />
                      </div>
                      <div>
                        <label className="block text-[13px] font-semibold text-gray-800 mb-2 mt-1">Last name <span className="text-red-500">*</span></label>
                        <input name="lastName" required type="text" placeholder="enter your last name" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[14px] focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 placeholder:text-gray-400" />
                      </div>
                      
                      <div>
                        <label className="block text-[13px] font-semibold text-gray-800 mb-2 mt-1">Mobile number <span className="text-red-500">*</span></label>
                        <input name="mobile" required type="tel" placeholder="enter your mobile number" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[14px] focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 placeholder:text-gray-400" />
                      </div>
                      <div className="relative">
                        <label className="block text-[13px] font-semibold text-gray-800 mb-2 mt-1">Email <span className="text-red-500">*</span></label>
                        <input name="email" required type="email" placeholder="enter your email address" className="w-full border border-gray-200 rounded-lg pl-4 pr-10 py-3 text-[14px] focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 placeholder:text-gray-400 appearance-none bg-white" />
                        <ChevronDown className="absolute right-3 top-[38px] w-4 h-4 text-gray-400 pointer-events-none" />
                      </div>

                      <div>
                        <label className="block text-[13px] font-semibold text-gray-800 mb-2 mt-1">City <span className="text-red-500">*</span></label>
                        <input name="city" required type="text" placeholder="enter your city" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[14px] focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 placeholder:text-gray-400" />
                      </div>
                      <div>
                        <label className="block text-[13px] font-semibold text-gray-800 mb-2 mt-1">Pin Code <span className="text-red-500">*</span></label>
                        <input name="pinCode" required type="text" placeholder="enter your pin code" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[14px] focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 placeholder:text-gray-400" />
                      </div>

                      <div>
                        <label className="block text-[13px] font-semibold text-gray-800 mb-2 mt-1">Organisation <span className="text-red-500">*</span></label>
                        <input name="organisation" required type="text" placeholder="enter your organisation name" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[14px] focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 placeholder:text-gray-400" />
                      </div>
                      <div>
                        <label className="block text-[13px] font-semibold text-gray-800 mb-2 mt-1">Job Function <span className="text-red-500">*</span></label>
                        <input name="jobFunction" required type="text" placeholder="enter your job function" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[14px] focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 placeholder:text-gray-400" />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="block text-[13px] font-semibold text-gray-800 mb-2">Add Message</label>
                      <textarea 
                        name="message"
                        placeholder="add your message" 
                        rows={4} 
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[14px] focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 placeholder:text-gray-400 resize-none"
                      ></textarea>
                    </div>

                    <button disabled={isSubmitting} type="submit" className="w-full bg-[#ffcd00] hover:bg-[#e6b900] text-gray-900 font-bold py-3.5 rounded-lg text-[15px] transition-colors shadow-sm flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
                      {isSubmitting ? 'Submitting...' : (
                        <>Get Quote <ChevronRight className="w-4 h-4 stroke-[3]" /></>
                      )}
                    </button>
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
