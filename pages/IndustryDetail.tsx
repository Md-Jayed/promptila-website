
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, CheckCircle2, ArrowLeft } from 'lucide-react';

const IndustryDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Format the slug back to a readable title
  const title = slug
    ? slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : 'Industry';

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-white py-16 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/industries" className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-700 mb-6 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Industries
          </Link>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-5">AI Visibility for {title}</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            We help {title} businesses dominate AI search results in ChatGPT, Gemini, and Perplexity. Our specialized optimization ensures your brand is the top recommendation when customers ask for your services.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Why AI Optimization is Critical for {title}</h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="mt-1 bg-indigo-100 p-1 rounded-full">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Capture High-Intent Leads</h3>
                  <p className="text-slate-600">Customers asking AI for "{title} near me" are ready to buy. We ensure your business is the one AI recommends first.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="mt-1 bg-indigo-100 p-1 rounded-full">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Build Authority & Trust</h3>
                  <p className="text-slate-600">AI models prioritize businesses with verified authority signals. We build the digital footprint that models like GPT-4 trust.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="mt-1 bg-indigo-100 p-1 rounded-full">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Future-Proof Your Marketing</h3>
                  <p className="text-slate-600">Traditional SEO is changing. By optimizing for AI today, you're building a competitive moat that will last for years.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-indigo-50 rounded-3xl py-12 border border-indigo-100 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Ready to dominate AI search in the {title} industry?</h2>
          <p className="text-base text-slate-600 mb-8 max-w-2xl mx-auto">
            Get a custom AI visibility audit for your business and see exactly where you stand compared to your competitors.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all active:scale-95 text-base shadow-lg shadow-indigo-200 group"
          >
            Get Your Free AI Report
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default IndustryDetail;
