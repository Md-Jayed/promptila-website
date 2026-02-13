import React from 'react';
import { Link } from 'react-router-dom';

const HowItWorks: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="bg-slate-50 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-6">The Science of Being Recommended</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            AI models like GPT-4, Gemini, and Claude don't "search" the web in the traditional sense. 
            They synthesize information based on clusters of trust, authority, and context.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-16 items-start">
              <div className="w-full md:w-1/3">
                <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 font-bold rounded-full text-xs uppercase tracking-widest mb-4">Step One</span>
                <h2 className="text-3xl font-bold text-slate-900">The AI Visibility Audit</h2>
              </div>
              <div className="w-full md:w-2/3">
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  First, we establish a baseline. We run dozens of specialized prompts through top LLMs to see how they categorize your business. 
                </p>
                <div className="bg-slate-50 border border-slate-100 p-6 rounded-xl">
                  <h4 className="font-bold text-slate-900 mb-4">What we measure:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3 text-slate-600">
                      <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                      <span>Semantic Association (What topics is your brand linked to?)</span>
                    </li>
                    <li className="flex items-center space-x-3 text-slate-600">
                      <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                      <span>Model Hallucination Risk (Is AI getting facts wrong about you?)</span>
                    </li>
                    <li className="flex items-center space-x-3 text-slate-600">
                      <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                      <span>Citation Share vs Competitors</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row gap-16 items-start">
              <div className="w-full md:w-1/3">
                <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 font-bold rounded-full text-xs uppercase tracking-widest mb-4">Step Two</span>
                <h2 className="text-3xl font-bold text-slate-900">Optimization Framework</h2>
              </div>
              <div className="w-full md:w-2/3">
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Once we know the gaps, we fix them. This isn't just about keywords; it's about structured data and digital footprinting.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  We modify your website’s technical metadata and craft authoritative content pieces that act as primary sources for LLM training data and real-time retrieval plugins.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-16 items-start">
              <div className="w-full md:w-1/3">
                <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 font-bold rounded-full text-xs uppercase tracking-widest mb-4">Step Three</span>
                <h2 className="text-3xl font-bold text-slate-900">Monitoring & Refinement</h2>
              </div>
              <div className="w-full md:w-2/3">
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  The AI landscape shifts weekly. A new model version can change how your business is perceived overnight.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Promptila provides ongoing monitoring. If a model starts favoring a competitor or misinterpreting your services, we adjust our framework to correct the course immediately.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-32 text-center bg-indigo-600 rounded-3xl p-12 text-white shadow-2xl">
            <h2 className="text-3xl font-bold mb-6">Ready to lead the AI answer era?</h2>
            <Link
              to="/contact"
              className="inline-block px-10 py-5 bg-white text-indigo-600 font-bold rounded-xl shadow-lg hover:bg-slate-50 transition-all active:scale-95 text-lg"
            >
              Get Your Free AI Report
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;