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
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const submissionData = {
      ...formData,
      access_key: 'bb9cea90-7aae-41fb-ba0d-600abb37adce',
      subject: `New AI Visibility Audit Request from ${formData.businessName}`,
      from_name: 'Promptila Website',
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(submissionData)
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          businessName: '',
          website: '',
          email: '',
          phone: '',
          industry: '',
          location: '',
        });
      } else {
        setError(result.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Failed to connect to the server. Please check your internet connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-slate-100 text-center animate-in fade-in zoom-in duration-300">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Request Received</h3>
        <p className="text-slate-600 mb-8 max-w-md mx-auto">
          Thank you for your interest. Our AI analysts are preparing your preliminary report. We'll be in touch at <strong>hello@promptila.com</strong> within 24-48 hours.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="text-indigo-600 font-semibold hover:text-indigo-700 underline transition-colors"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-slate-100 relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-300"
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
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-300"
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
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-300"
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
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-300"
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
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-300"
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
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all appearance-none bg-no-repeat bg-[right_1rem_center]"
            style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%2364748b\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\' /%3E%3C/svg%3E")', backgroundSize: '1.25rem' }}
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
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-300"
            placeholder="City, State"
            value={formData.location}
            onChange={handleChange}
          />
        </div>
      </div>

      {error && (
        <div className="mt-6 p-4 bg-red-50 border border-red-100 rounded-lg text-red-600 text-sm flex items-center space-x-2 animate-shake">
          <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{error}</span>
        </div>
      )}

      <div className="mt-10">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-indigo-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-indigo-700 transition-all active:scale-[0.98] disabled:opacity-70 flex items-center justify-center space-x-2 group"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-5 w-5 mr-3 border-t-2 border-white rounded-full" viewBox="0 0 24 24"></svg>
              <span>Analyzing Digital Footprint...</span>
            </>
          ) : (
            <>
              <span>Get Your Free AI Report</span>
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </>
          )}
        </button>
        
        <div className="mt-6 flex items-center justify-center space-x-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
           <div className="flex items-center space-x-1">
             <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
             <span className="text-xs font-bold text-slate-900 tracking-wider">SECURE SUBMISSION</span>
           </div>
           <div className="flex items-center space-x-1 border-l border-slate-300 pl-4">
             <span className="text-xs font-bold text-slate-900 tracking-wider uppercase">Privacy Guaranteed</span>
           </div>
        </div>
        <p className="text-center text-slate-400 text-[10px] mt-4 uppercase tracking-tighter">
          Analysis powered by Promptila Proprietary AI Evaluation Engines.
        </p>
      </div>
    </form>
  );
};

export default AuditForm;