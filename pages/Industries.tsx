
import React from 'react';
import { Link } from 'react-router-dom';

const Industries: React.FC = () => {
  const industries = [
    {
      id: "hvac",
      title: "HVAC & Home Services",
      why: "Local intent is shifting to AI voice and chat prompts. Being listed 'nearby' isn't enough; you must be recommended for reliability.",
      help: "We optimize for local trust factors and review synthesis that modern AI uses to qualify home service providers."
    },
    {
      id: "medical",
      title: "Medical & Wellness",
      why: "AI models are extremely conservative with medical advice. If your practice doesn't meet strict authority signals, it won't be mentioned.",
      help: "We build your clinical authority signals so AI feels safe recommending your specific treatments and locations."
    },
    {
      id: "legal",
      title: "Legal & Professional",
      why: "Clients ask AI complex legal scenarios before choosing a firm. AI filters for specialty expertise and verified case outcomes.",
      help: "We structure your firm's professional entities and success stories into formats AI can parse and cite accurately."
    },
    {
      id: "retail",
      title: "High-Trust Retail",
      why: "For high-ticket purchases, AI serves as a shopping concierge. It recommends brands based on value-to-trust ratios.",
      help: "We ensure your product catalogs and brand reputation are correctly interpreted by AI recommendation engines."
    }
  ];

  return (
    <div className="pt-20">
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-6">Vertical-Specific Expertise</h1>
          <p className="text-xl text-slate-600">AI behaves differently in every industry. We understand the nuances of the models you care about most.</p>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {industries.map((industry) => (
              <div key={industry.id} className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">{industry.title}</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-indigo-600 font-bold text-sm uppercase tracking-widest mb-2">Why AI Matters Here</h4>
                    <p className="text-slate-600 leading-relaxed">{industry.why}</p>
                  </div>
                  <div>
                    <h4 className="text-indigo-600 font-bold text-sm uppercase tracking-widest mb-2">How Promptila Helps</h4>
                    <p className="text-slate-600 leading-relaxed">{industry.help}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Is your industry highly competitive?</h2>
          <p className="text-lg text-slate-600 mb-10">That’s exactly where AI Visibility Optimization provides the greatest competitive moat.</p>
          <Link
            to="/contact"
            className="inline-block px-10 py-5 bg-slate-900 text-white font-bold rounded-xl hover:bg-black transition-all active:scale-95"
          >
            Start Your Industry Audit
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Industries;
