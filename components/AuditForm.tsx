
import React, { useState } from 'react';
import { AuditRequest } from '../types.ts';

const AuditForm: React.FC = () => {
  const [formData, setFormData] = useState<AuditRequest>({
    name: '',
    businessName: '',
    website: '',
    email: '',
    phone: '',
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
    <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-slate-100 relative">
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
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
            placeholder="+1 (555) 000-0000"
            value={formData.phone}
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
        <div className="md:col-span-2">
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
            <span>Free AI report</span>
          )}
        </button>
        <div className="mt-6 flex items-center justify-center space-x-4 opacity-50 grayscale">
           <div className="flex items-center space-x-1">
             <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
             <span className="text-xs font-bold text-slate-900">SECURE SSL</span>
           </div>
           <div className="flex items-center space-x-1 border-l border-slate-300 pl-4">
             <span className="text-xs font-bold text-slate-900">PRIVACY PROTECTED</span>
           </div>
        </div>
        <p className="text-center text-slate-400 text-[10px] mt-4 uppercase tracking-tighter">
          By submitting you agree to our professional confidentiality agreement.
        </p>
      </div>
    </form>
  );
};

export default AuditForm;
