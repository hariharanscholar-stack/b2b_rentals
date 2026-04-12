"use client";

import React, { useState, useRef } from 'react';
import { BadgeCheck, FolderUp } from 'lucide-react';

export default function CareersForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    region: '',
  });

  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const submitData = new FormData();
    submitData.append('fullName', formData.fullName);
    submitData.append('email', formData.email);
    submitData.append('phone', formData.phone);
    submitData.append('region', formData.region);
    
    if (file) {
      submitData.append('file', file);
    }

    try {
      const res = await fetch('/api/careers', {
        method: 'POST',
        body: submitData,
      });

      const result = await res.json();

      if (res.ok) {
        setSubmitStatus({ type: 'success', message: 'Your application has been submitted successfully.' });
        setFormData({ fullName: '', email: '', phone: '', region: '' });
        setFile(null);
      } else {
        setSubmitStatus({ type: 'error', message: result.error || 'Failed to submit application.' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'An unexpected error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-[32px] md:text-[40px] font-bold text-gray-900 text-center mb-12">
          Join our Team
        </h2>

        {submitStatus?.type === 'success' ? (
          <div className="bg-green-50 text-green-800 p-8 rounded-2xl text-center border border-green-100">
            <BadgeCheck className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Application Received!</h3>
            <p>{submitStatus.message}</p>
            <button 
              onClick={() => setSubmitStatus(null)}
              className="mt-6 text-green-600 font-semibold hover:underline"
            >
              Submit another application
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-800">Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="Enter your full name" 
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-colors bg-white text-gray-900 placeholder:text-gray-400"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-800">Email</label>
                <input 
                  type="email" 
                  required
                  placeholder="Enter your email" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-colors bg-white text-gray-900 placeholder:text-gray-400"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-800">Phone Number</label>
                <input 
                  type="tel" 
                  required
                  placeholder="Enter your phone number" 
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-colors bg-white text-gray-900 placeholder:text-gray-400"
                />
              </div>

              {/* Region */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-800">Region</label>
                <div className="relative">
                  <select 
                    required
                    value={formData.region}
                    onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-colors bg-white appearance-none ${formData.region ? 'text-gray-900' : 'text-gray-400'}`}
                  >
                    <option value="" disabled>Select region</option>
                    <option value="North India" className="text-gray-900">North India</option>
                    <option value="South India" className="text-gray-900">South India</option>
                    <option value="East India" className="text-gray-900">East India</option>
                    <option value="West India" className="text-gray-900">West India</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-500">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Document Upload */}
            <div className="flex flex-col gap-2 mt-2">
              <label className="text-sm font-semibold text-gray-800">Document Upload</label>
              
              <div 
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`w-full border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center min-h-[160px] transition-colors ${
                  isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-white hover:bg-gray-50'
                }`}
              >
                <div className="bg-blue-600 w-12 h-10 rounded-lg flex items-center justify-center mb-4 relative drop-shadow-sm">
                  {/* Simple CSS folder up icon matching design approximately */}
                  <div className="absolute -top-1 left-0 right-2 h-2 bg-blue-600 rounded-t-lg" style={{clipPath: 'polygon(0 0, 50% 0, 60% 100%, 0 100%)'}}></div>
                  <FolderUp className="w-5 h-5 text-white z-10" />
                </div>
                
                <p className="text-gray-700 text-sm">
                  Drag your file(s) or{' '}
                  <label className="text-blue-600 font-bold cursor-pointer hover:underline">
                    browse
                    <input 
                      type="file" 
                      className="hidden" 
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                    />
                  </label>
                </p>
              </div>

              {/* Uploaded File Pill */}
              {file && (
                <div className="flex items-center gap-3 mt-3 ml-2">
                  <div className="bg-green-400 p-1 rounded-md text-white flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-gray-900">{file.name}</span>
                  <button 
                    type="button" 
                    onClick={() => setFile(null)}
                    className="text-sm text-red-500 font-medium ml-2 hover:text-red-700 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>

            {submitStatus?.type === 'error' && (
              <div className="text-red-600 text-sm bg-red-50 p-4 rounded-xl border border-red-100">
                {submitStatus.message}
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-center mt-6">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-[#fbc247] w-full md:w-auto md:px-32 text-gray-900 py-3.5 rounded-xl font-bold hover:bg-[#ebbd59] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Details'}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
