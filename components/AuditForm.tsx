
import React, { useState } from 'react';
import { AuditRequest } from '../types';

const AuditForm: React.FC = () => {
  const [formData, setFormData] = useState<AuditRequest>({
    name: '',
    businessName: '',
    website: '',
    email: '',
    industry: '',
    location: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-slate-100 text-center">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Request Received</h3>
        <p className="text-slate-600 mb-8 max-w-md mx-auto">
          Thank you for your interest. Our AI analysts are preparing your preliminary report. We'll be in touch within 24-48 hours.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="text-indigo-600 font-semibold hover:text-indigo-700 underline"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-slate-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
            placeholder="Jane Doe"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Work Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
            placeholder="jane@company.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="businessName" className="block text-sm font-medium text-slate-700 mb-1">Business Name</label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
            placeholder="Acme Corp"
            value={formData.businessName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="website" className="block text-sm font-medium text-slate-700 mb-1">Company Website</label>
          <input
            type="url"
            id="website"
            name="website"
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
            placeholder="https://company.com"
            value={formData.website}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="industry" className="block text-sm font-medium text-slate-700 mb-1">Industry</label>
          <select
            id="industry"
            name="industry"
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
            value={formData.industry}
            onChange={handleChange}
          >
            <option value="">Select industry...</option>
            <option value="HVAC">HVAC & Home Services</option>
            <option value="Medical">Medical & Wellness</option>
            <option value="Legal">Legal & Professional</option>
            <option value="Retail">Retail & Consumer Goods</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-slate-700 mb-1">Primary Location</label>
          <input
            type="text"
            id="location"
            name="location"
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
            placeholder="City, State"
            value={formData.location}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="mt-10">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-indigo-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-indigo-700 transition-all active:scale-[0.98] disabled:opacity-70 flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-5 w-5 mr-3 border-t-2 border-white rounded-full" viewBox="0 0 24 24"></svg>
              <span>Processing...</span>
            </>
          ) : (
            <span>Request Your AI Visibility Audit</span>
          )}
        </button>
        <p className="text-center text-slate-500 text-xs mt-4 italic">
          No obligation. Your data is treated with professional confidentiality.
        </p>
      </div>
    </form>
  );
};

export default AuditForm;
