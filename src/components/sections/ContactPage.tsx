"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight, Loader2, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    region: "",
    company: "",
    industry: "",
    enquiry: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ fullName: "", email: "", phone: "", region: "", company: "", industry: "", enquiry: "" });
        
        // Revert success state after 5 seconds to allow sending another message
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gray-50/30 min-h-screen pb-20">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 pt-10 pb-12 flex flex-col items-center justify-center">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-gray-900 font-medium text-gray-900">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span>Contact us</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Contact us</h1>
        <p className="text-gray-600 font-medium">Fill out the form below and we will reply within 24 hours</p>
      </div>

      {/* Map Section */}
      <div className="relative w-full h-[300px] md:h-[500px] bg-gray-100">
        <iframe
          src="https://maps.google.com/maps?q=12.924268,80.141696&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "brightness(0.95)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        ></iframe>

        {/* Floating Info Card – desktop only */}
        <div className="hidden md:block absolute left-6 md:left-12 lg:left-32 top-1/2 -translate-y-1/2 bg-[#1A1F2B] text-white p-8 rounded-xl w-80 shadow-2xl z-10">
          <div className="flex flex-col gap-6">
            <p className="text-[13px] leading-relaxed text-gray-300 font-medium">
              <span className="text-white block mb-0.5 text-[15px]">Kamatchi Nagar, Madambakkam</span>
              Chennai 600126
            </p>
            <p className="text-[15px] font-medium tracking-wide">
              +91 99445 66447
            </p>
            <p className="text-[15px] font-medium tracking-wide">
              sales@b2brentals.in
            </p>
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=12.924268,80.141696"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 border border-gray-600 hover:border-gray-400 hover:bg-gray-800 transition-colors w-full py-3.5 text-xs font-semibold tracking-wide rounded-lg text-center block"
            >
              GET DIRECTION
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Info Card – shown below map on small screens */}
      <div className="md:hidden bg-[#1A1F2B] text-white px-6 py-8 flex flex-col gap-4">
        <p className="text-[14px] leading-relaxed text-gray-300">
          <span className="text-white block mb-0.5 text-[15px] font-semibold">Kamatchi Nagar, Madambakkam</span>
          Chennai 600126
        </p>
        <p className="text-[15px] font-medium">+91 99445 66447</p>
        <p className="text-[15px] font-medium">sales@b2brentals.in</p>
        <a 
          href="https://www.google.com/maps/dir/?api=1&destination=12.924268,80.141696"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-gray-600 hover:border-gray-400 py-3 text-xs font-semibold tracking-wide rounded-lg text-center block"
        >
          GET DIRECTION
        </a>
      </div>

      {/* Form Section */}
      <div className="max-w-3xl mx-auto px-4 pt-24">
        <h2 className="text-3xl font-bold text-center mb-14 text-gray-900">Send Us an Email</h2>
        
        <form onSubmit={handleSubmit} className="space-y-7">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-7">
            {/* Full Name */}
            <div className="flex flex-col gap-2.5">
              <label className="text-sm font-semibold text-gray-800">Full Name</label>
              <input
                type="text"
                name="fullName"
                required
                placeholder="Enter your full name"
                className="border border-gray-200 bg-white rounded-lg p-3.5 text-[15px] focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary placeholder:text-gray-400 transition-all font-medium"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2.5">
              <label className="text-sm font-semibold text-gray-800">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="border border-gray-200 bg-white rounded-lg p-3.5 text-[15px] focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary placeholder:text-gray-400 transition-all font-medium"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col gap-2.5">
              <label className="text-sm font-semibold text-gray-800">Phone Number</label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="Enter your phone number"
                className="border border-gray-200 bg-white rounded-lg p-3.5 text-[15px] focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary placeholder:text-gray-400 transition-all font-medium"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            {/* Region */}
            <div className="flex flex-col gap-2.5">
              <label className="text-sm font-semibold text-gray-800">Region</label>
              <div className="relative">
                <select
                  name="region"
                  className="w-full appearance-none border border-gray-200 bg-white rounded-lg p-3.5 text-[15px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all cursor-pointer font-medium"
                  value={formData.region}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled className="text-gray-400">Select region</option>
                  <option value="north">North India</option>
                  <option value="south">South India</option>
                  <option value="east">East India</option>
                  <option value="west">West India</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                  <ChevronRight className="w-5 h-5 rotate-90" />
                </div>
              </div>
            </div>

            {/* Company */}
            <div className="flex flex-col gap-2.5">
              <label className="text-sm font-semibold text-gray-800">Company</label>
              <input
                type="text"
                name="company"
                required
                placeholder="Enter the name of your company"
                className="border border-gray-200 bg-white rounded-lg p-3.5 text-[15px] focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary placeholder:text-gray-400 transition-all font-medium"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            {/* Industry */}
            <div className="flex flex-col gap-2.5">
              <label className="text-sm font-semibold text-gray-800">Industry</label>
              <div className="relative">
                <select
                  name="industry"
                  className="w-full appearance-none border border-gray-200 bg-white rounded-lg p-3.5 text-[15px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all cursor-pointer font-medium"
                  value={formData.industry}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled className="text-gray-400">Select your industry</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="logistics">Logistics</option>
                  <option value="construction">Construction</option>
                  <option value="retail">Retail</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                  <ChevronRight className="w-5 h-5 rotate-90" />
                </div>
              </div>
            </div>
          </div>

          {/* Enquiry */}
          <div className="flex flex-col gap-2.5 pt-2">
            <label className="text-sm font-semibold text-gray-800">Enquiry</label>
            <textarea
              name="enquiry"
              required
              rows={4}
              placeholder="Tell us about your project and requirements"
              className="border border-gray-200 bg-white rounded-lg p-3.5 text-[15px] focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary placeholder:text-gray-400 transition-all font-medium resize-none shadow-sm"
              value={formData.enquiry}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="pt-8 flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting || isSuccess}
              className={`transition-colors text-gray-900 font-bold py-3.5 px-12 rounded-lg w-full md:w-auto min-w-[320px] shadow-sm text-[15px] flex items-center justify-center gap-2 ${
                isSuccess 
                  ? 'bg-[#F8BC45] hover:bg-[#F8BC45]' 
                  : 'bg-[#F8BC45] hover:bg-[#EFAF32] disabled:opacity-70'
              }`}
            >
              {isSubmitting ? (
                <Loader2 className="w-5 h-5 text-white animate-spin" />
              ) : isSuccess ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-white fill-current" strokeWidth={1.5} color="#F8BC45" />
                  <span>Thank you for your interest!</span>
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
