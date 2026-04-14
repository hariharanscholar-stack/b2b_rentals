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

const equipmentTypes = [
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

type StepKey = 1 | 2 | 3;

export default function JoinFleetPage() {
  const [activeStep, setActiveStep] = useState<StepKey>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    // Step 1: Company Information
    companyName: "",
    contactPerson: "",
    phoneNumber: "",
    emailId: "",
    siteAddress: "",
    city: "",
    state: "",
    postalCode: "",
    country: "India",
    // Step 2: Fleet Details & Commercials
    equipmentType: "",
    numberOfUnits: "",
    equipmentAge: "",
    equipmentCondition: "",
    rentalRateExpected: "",
    availableFrom: "",
    // Step 3: Compliance
    gstNumber: "",
    panNumber: "",
    insuranceCoverage: "",
    additionalNotes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeStep < 3) {
      setActiveStep((activeStep + 1) as StepKey);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.contactPerson,
          email: formData.emailId,
          phone: formData.phoneNumber,
          company: formData.companyName,
          region: formData.state,
          industry: "Fleet Vendor",
          enquiry: `Join Our Rental Fleet Application\n\nCompany: ${formData.companyName}\nSite Address: ${formData.siteAddress}, ${formData.city}, ${formData.state} ${formData.postalCode}\nCountry: ${formData.country}\n\nFleet Details:\nEquipment Type: ${formData.equipmentType}\nNumber of Units: ${formData.numberOfUnits}\nEquipment Age: ${formData.equipmentAge}\nCondition: ${formData.equipmentCondition}\nExpected Rental Rate: ${formData.rentalRateExpected}\nAvailable From: ${formData.availableFrom}\n\nCompliance:\nGST Number: ${formData.gstNumber}\nPAN Number: ${formData.panNumber}\nInsurance Coverage: ${formData.insuranceCoverage}\n\nAdditional Notes: ${formData.additionalNotes}`,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
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

  const inputClass =
    "w-full border border-gray-200 rounded-lg px-4 py-3.5 text-[15px] focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 placeholder:text-gray-400 bg-white font-medium transition-all";
  const selectClass =
    "w-full appearance-none border border-gray-200 rounded-lg px-4 py-3.5 text-[15px] focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 bg-white font-medium transition-all cursor-pointer text-gray-700";
  const labelClass = "block text-sm font-semibold text-gray-900 mb-2";

  const stepItems: { step: StepKey; title: string }[] = [
    { step: 1, title: "Company Information" },
    { step: 2, title: "Fleet Details & Commercials" },
    { step: 3, title: "Compliance" },
  ];

  if (isSuccess) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center pb-20">
        <div className="flex flex-col items-center text-center max-w-md px-6">
          <div className="w-24 h-24 bg-[#69c735] rounded-full flex items-center justify-center mb-8 shadow-sm">
            <CheckCircle2 className="w-12 h-12 text-white" strokeWidth={2.5} />
          </div>
          <h2 className="text-[32px] font-bold text-gray-900 mb-4 tracking-tight">Thank you!</h2>
          <p className="text-[16px] text-gray-700 mb-10 leading-relaxed">
            Your fleet application has been submitted successfully. Our team will review your details and get back to you shortly.
          </p>
          <Link
            href="/"
            className="bg-[#F8BC45] hover:bg-[#EFAF32] text-gray-900 font-bold py-3.5 px-10 rounded-lg text-[15px] transition-colors shadow-sm"
          >
            Go to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-4">
        <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
          <Link href="/" className="hover:text-gray-900 transition-colors text-gray-900">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span>Join Our Rental Fleet</span>
        </div>
      </div>

      {/* Page Title */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
          Join Our Rental Fleet – Vendor Form
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Form */}
          <div className="lg:col-span-7">
            {/* Step 1: Company Information */}
            <div className="mb-8">
              <button
                type="button"
                onClick={() => setActiveStep(1)}
                className="flex items-center gap-4 mb-6 w-full text-left"
              >
                <span
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold ${
                    activeStep >= 1 ? "bg-[#F8BC45] text-gray-900" : "bg-gray-100 text-gray-500"
                  }`}
                >
                  1
                </span>
                <span className="text-lg font-bold text-gray-900">Company Information</span>
              </button>

              {activeStep === 1 && (
                <form onSubmit={handleContinue}>
                  <div className="space-y-5 pl-0 sm:pl-[52px]">
                    <div>
                      <label className={labelClass}>
                        Company name <span className="text-red-500">*</span>
                      </label>
                      <input type="text" name="companyName" required placeholder="enter your company name" value={formData.companyName} onChange={handleChange} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>
                        Contact person Name <span className="text-red-500">*</span>
                      </label>
                      <input type="text" name="contactPerson" required placeholder="enter your mobile number" value={formData.contactPerson} onChange={handleChange} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>
                        Phone number <span className="text-red-500">*</span>
                      </label>
                      <input type="tel" name="phoneNumber" required placeholder="enter your phone number" value={formData.phoneNumber} onChange={handleChange} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>
                        Email ID <span className="text-red-500">*</span>
                      </label>
                      <input type="email" name="emailId" required placeholder="enter your email id" value={formData.emailId} onChange={handleChange} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>
                        Site Address <span className="text-red-500">*</span>
                      </label>
                      <input type="text" name="siteAddress" required placeholder="enter your site address" value={formData.siteAddress} onChange={handleChange} className={inputClass} />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClass}>
                          City <span className="text-red-500">*</span>
                        </label>
                        <input type="text" name="city" required placeholder="enter your city" value={formData.city} onChange={handleChange} className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>
                          State <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <select name="state" required value={formData.state} onChange={handleChange} className={selectClass}>
                            <option value="" disabled>Select your state</option>
                            {indianStates.map((s) => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                            <ChevronDown className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className={labelClass}>Postal Code</label>
                      <input type="text" name="postalCode" placeholder="enter your postal code" value={formData.postalCode} onChange={handleChange} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>
                        Country <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select name="country" required value={formData.country} onChange={handleChange} className={selectClass}>
                          <option value="India">India</option>
                          <option value="Other">Other</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#F8BC45] hover:bg-[#EFAF32] text-gray-900 font-bold py-4 rounded-xl text-[15px] transition-colors shadow-sm flex items-center justify-center gap-2"
                    >
                      Continue <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Step 2: Fleet Details & Commercials */}
            <div className="mb-8">
              <button
                type="button"
                onClick={() => { if (activeStep >= 2) setActiveStep(2); }}
                className="flex items-center gap-4 mb-6 w-full text-left"
              >
                <span
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold ${
                    activeStep >= 2 ? "bg-[#F8BC45] text-gray-900" : "bg-gray-100 text-gray-500"
                  }`}
                >
                  2
                </span>
                <span className={`text-lg font-bold ${activeStep >= 2 ? "text-gray-900" : "text-gray-400"}`}>
                  Fleet Details & Commercials
                </span>
              </button>

              {activeStep === 2 && (
                <form onSubmit={handleContinue}>
                  <div className="space-y-5 pl-0 sm:pl-[52px]">
                    <div>
                      <label className={labelClass}>
                        Equipment Type <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select name="equipmentType" required value={formData.equipmentType} onChange={handleChange} className={selectClass}>
                          <option value="" disabled>Select equipment type</option>
                          {equipmentTypes.map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClass}>
                          Number of Units <span className="text-red-500">*</span>
                        </label>
                        <input type="number" name="numberOfUnits" required placeholder="e.g. 5" value={formData.numberOfUnits} onChange={handleChange} className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>
                          Equipment Age <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <select name="equipmentAge" required value={formData.equipmentAge} onChange={handleChange} className={selectClass}>
                            <option value="" disabled>Select age</option>
                            <option value="Less than 1 year">Less than 1 year</option>
                            <option value="1-3 years">1-3 years</option>
                            <option value="3-5 years">3-5 years</option>
                            <option value="5-10 years">5-10 years</option>
                            <option value="More than 10 years">More than 10 years</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                            <ChevronDown className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className={labelClass}>
                        Equipment Condition <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select name="equipmentCondition" required value={formData.equipmentCondition} onChange={handleChange} className={selectClass}>
                          <option value="" disabled>Select condition</option>
                          <option value="Excellent">Excellent</option>
                          <option value="Good">Good</option>
                          <option value="Fair">Fair</option>
                          <option value="Needs Repair">Needs Repair</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClass}>
                          Expected Rental Rate (₹/month) <span className="text-red-500">*</span>
                        </label>
                        <input type="text" name="rentalRateExpected" required placeholder="e.g. ₹25,000" value={formData.rentalRateExpected} onChange={handleChange} className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>
                          Available From <span className="text-red-500">*</span>
                        </label>
                        <input type="date" name="availableFrom" required value={formData.availableFrom} onChange={handleChange} className={inputClass} />
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => setActiveStep(1)}
                        className="w-full border border-gray-300 text-gray-700 font-bold py-4 rounded-xl text-[15px] transition-colors hover:bg-gray-50"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="w-full bg-[#F8BC45] hover:bg-[#EFAF32] text-gray-900 font-bold py-4 rounded-xl text-[15px] transition-colors shadow-sm flex items-center justify-center gap-2"
                      >
                        Continue <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>

            {/* Step 3: Compliance */}
            <div className="mb-8">
              <button
                type="button"
                onClick={() => { if (activeStep >= 3) setActiveStep(3); }}
                className="flex items-center gap-4 mb-6 w-full text-left"
              >
                <span
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold ${
                    activeStep >= 3 ? "bg-[#F8BC45] text-gray-900" : "bg-gray-100 text-gray-500"
                  }`}
                >
                  3
                </span>
                <span className={`text-lg font-bold ${activeStep >= 3 ? "text-gray-900" : "text-gray-400"}`}>
                  Compliance
                </span>
              </button>

              {activeStep === 3 && (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-5 pl-0 sm:pl-[52px]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClass}>
                          GST Number <span className="text-red-500">*</span>
                        </label>
                        <input type="text" name="gstNumber" required placeholder="enter GST number" value={formData.gstNumber} onChange={handleChange} className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>
                          PAN Number <span className="text-red-500">*</span>
                        </label>
                        <input type="text" name="panNumber" required placeholder="enter PAN number" value={formData.panNumber} onChange={handleChange} className={inputClass} />
                      </div>
                    </div>
                    <div>
                      <label className={labelClass}>
                        Insurance Coverage <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select name="insuranceCoverage" required value={formData.insuranceCoverage} onChange={handleChange} className={selectClass}>
                          <option value="" disabled>Select coverage</option>
                          <option value="Comprehensive">Comprehensive</option>
                          <option value="Third Party">Third Party</option>
                          <option value="None">None</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className={labelClass}>Additional Notes</label>
                      <textarea
                        name="additionalNotes"
                        placeholder="Any additional information about your equipment..."
                        rows={4}
                        value={formData.additionalNotes}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-lg px-4 py-3.5 text-[15px] focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 placeholder:text-gray-400 bg-white font-medium transition-all resize-none"
                      />
                    </div>

                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => setActiveStep(2)}
                        className="w-full border border-gray-300 text-gray-700 font-bold py-4 rounded-xl text-[15px] transition-colors hover:bg-gray-50"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#F8BC45] hover:bg-[#EFAF32] text-gray-900 font-bold py-4 rounded-xl text-[15px] transition-colors shadow-sm flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                          <>Submit Application <ChevronRight className="w-4 h-4 stroke-[2.5]" /></>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right: Image */}
          <div className="lg:col-span-5 hidden lg:block sticky top-32">
            <div className="relative w-full aspect-[4/3.5] rounded-2xl overflow-hidden">
              <Image
                src="/assets/fleet.png"
                alt="Join Our Rental Fleet"
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
