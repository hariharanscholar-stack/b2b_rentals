"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ChevronDown, Loader2, CheckCircle2 } from "lucide-react";

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
];

const equipmentCategories = [
  "Diesel Forklift",
  "Electric Forklift",
  "Reach Truck",
  "Electric Stacker",
  "Powered Pallet Truck",
  "Articulated Forklift",
  "Towing Truck",
  "Sweeper",
  "Scrubber",
  "Floor Scrubber",
  "High Pressure Washer",
  "Industrial Vacuum",
  "Power Tools",
];

export default function RequestQuotePage() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    phoneNumber: "",
    emailId: "",
    siteAddress: "",
    city: "",
    state: "",
    postalCode: "",
    country: "India",
    equipmentCategory: "",
    operatorRequired: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productName: formData.equipmentCategory || "General Inquiry",
          firstName: formData.contactPerson,
          email: formData.emailId,
          mobile: formData.phoneNumber,
          city: formData.city,
          organisation: formData.companyName,
          message: `Site Address: ${formData.siteAddress}\nState: ${formData.state}\nPostal Code: ${formData.postalCode}\nCountry: ${formData.country}\nOperator Required: ${formData.operatorRequired}`,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          companyName: "",
          contactPerson: "",
          phoneNumber: "",
          emailId: "",
          siteAddress: "",
          city: "",
          state: "",
          postalCode: "",
          country: "India",
          equipmentCategory: "",
          operatorRequired: "",
        });
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        alert("Failed to submit. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-4">
        <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
          <Link
            href="/"
            className="hover:text-gray-900 transition-colors text-gray-900"
          >
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span>Request a Quote</span>
        </div>
      </div>

      {/* Page Title */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
          Request a Quote
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit}>
              {/* Company Information */}
              <div className="mb-8">
                <h2 className="text-[11px] font-bold tracking-[0.15em] text-gray-500 uppercase mb-6">
                  Company Information
                </h2>

                <div className="space-y-5">
                  {/* Company Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Company name{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      required
                      placeholder="enter your company name"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3.5 text-[15px] focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 placeholder:text-gray-400 bg-white font-medium transition-all"
                    />
                  </div>

                  {/* Contact Person Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Contact person Name{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="contactPerson"
                      required
                      placeholder="enter your mobile number"
                      value={formData.contactPerson}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3.5 text-[15px] focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 placeholder:text-gray-400 bg-white font-medium transition-all"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Phone number{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      required
                      placeholder="enter your phone number"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3.5 text-[15px] focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 placeholder:text-gray-400 bg-white font-medium transition-all"
                    />
                  </div>

                  {/* Email ID */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Email ID{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="emailId"
                      required
                      placeholder="enter your email id"
                      value={formData.emailId}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3.5 text-[15px] focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 placeholder:text-gray-400 bg-white font-medium transition-all"
                    />
                  </div>

                  {/* Site Address */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Site Address{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="siteAddress"
                      required
                      placeholder="enter your site address"
                      value={formData.siteAddress}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3.5 text-[15px] focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 placeholder:text-gray-400 bg-white font-medium transition-all"
                    />
                  </div>

                  {/* City + State */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        City{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="city"
                        required
                        placeholder="enter your city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-lg px-4 py-3.5 text-[15px] focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 placeholder:text-gray-400 bg-white font-medium transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        State{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          name="state"
                          required
                          value={formData.state}
                          onChange={handleChange}
                          className="w-full appearance-none border border-gray-200 rounded-lg px-4 py-3.5 text-[15px] focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 bg-white font-medium transition-all cursor-pointer text-gray-700"
                        >
                          <option value="" disabled className="text-gray-400">
                            Select your state
                          </option>
                          {indianStates.map((state) => (
                            <option key={state} value={state}>
                              {state}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Postal Code */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      placeholder="enter your postal code"
                      value={formData.postalCode}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3.5 text-[15px] focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 placeholder:text-gray-400 bg-white font-medium transition-all"
                    />
                  </div>

                  {/* Country */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Country{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="country"
                        required
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full appearance-none border border-gray-200 rounded-lg px-4 py-3.5 text-[15px] focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 bg-white font-medium transition-all cursor-pointer text-gray-700"
                      >
                        <option value="India">India</option>
                        <option value="Other">Other</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Equipment Requirement */}
              <div className="mb-10">
                <h2 className="text-[11px] font-bold tracking-[0.15em] text-gray-500 uppercase mb-6">
                  Equipment Requirement
                </h2>

                <div className="space-y-5">
                  {/* Equipment Category */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Equipment Category{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="equipmentCategory"
                        required
                        value={formData.equipmentCategory}
                        onChange={handleChange}
                        className="w-full appearance-none border border-gray-200 rounded-lg px-4 py-3.5 text-[15px] focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 bg-white font-medium transition-all cursor-pointer text-gray-700"
                      >
                        <option value="" disabled className="text-gray-400">
                          select equipment category
                        </option>
                        {equipmentCategories.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Operator Required */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Operator Required{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="operatorRequired"
                        required
                        value={formData.operatorRequired}
                        onChange={handleChange}
                        className="w-full appearance-none border border-gray-200 rounded-lg px-4 py-3.5 text-[15px] focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 bg-white font-medium transition-all cursor-pointer text-gray-700"
                      >
                        <option value="" disabled className="text-gray-400">
                          select the option
                        </option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className={`w-full transition-colors text-gray-900 font-bold py-4 rounded-xl text-[15px] flex items-center justify-center gap-2 shadow-sm ${
                  isSuccess
                    ? "bg-[#F8BC45]"
                    : "bg-[#F8BC45] hover:bg-[#EFAF32] disabled:opacity-70 disabled:cursor-not-allowed"
                }`}
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : isSuccess ? (
                  <>
                    <CheckCircle2
                      className="w-5 h-5 fill-current"
                      strokeWidth={1.5}
                    />
                    <span>Thank you! We&apos;ll be in touch.</span>
                  </>
                ) : (
                  <>
                    Submit Details
                    <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right: Image */}
          <div className="lg:col-span-5 hidden lg:block sticky top-32">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/assets/R_A_Q.png"
                alt="Request a Quote - Industrial worker"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
