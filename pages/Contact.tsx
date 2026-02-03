
import React from 'react';
import AuditForm from '../components/AuditForm';

const Contact: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h1 className="text-5xl font-extrabold text-slate-900 mb-6">Request Your AI Visibility Audit</h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-10">
                Stop guessing how AI models view your brand. Get a professional diagnostic report and a clear roadmap for optimization.
              </p>
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-2">What happens next?</h4>
                  <p className="text-slate-600">Once you submit, an AI analyst will manually review your brand's digital footprint across GPT-4, Gemini, and AI Overviews.</p>
                </div>
                <div className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-sm border border-slate-200">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">48-Hour Response Time</p>
                    <p className="text-sm text-slate-500">We respond to all qualified audit requests within 2 business days.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <AuditForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
