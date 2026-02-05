
import React from 'react';
import { Link } from 'react-router-dom';
import AuditForm from '../components/AuditForm.tsx';

const Home: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-32 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full mb-8">
              <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse"></span>
              <span className="text-indigo-700 text-xs font-bold uppercase tracking-wider">Now optimizing for Gemini & Claude</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              We help businesses <span className="text-indigo-600">get chosen</span> by AI — not buried by it.
            </h1>
            <p className="mt-8 text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Traditional SEO is no longer enough. We optimize your brand for AI search engines like ChatGPT, Gemini, and AI Overviews so you're the first recommendation users see.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl shadow-xl hover:bg-indigo-700 transition-all active:scale-95 text-lg"
              >
                Free AI report
              </Link>
              <Link
                to="/how-it-works"
                className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 font-bold rounded-xl border-2 border-slate-200 hover:border-slate-300 transition-all active:scale-95 text-lg"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
        {/* Background blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-96 h-96 bg-indigo-400 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-[100px]"></div>
        </div>
      </section>

      {/* Trust Section / Logos */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">Helping leaders navigate the AI shift</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-30 grayscale contrast-125">
             <div className="text-2xl font-black italic tracking-tighter">FINTECH+</div>
             <div className="text-2xl font-black italic tracking-tighter">HEALTH.LY</div>
             <div className="text-2xl font-black italic tracking-tighter">LEGALHUB</div>
             <div className="text-2xl font-black italic tracking-tighter">HOMEPRO</div>
             <div className="text-2xl font-black italic tracking-tighter">SaaSFLOW</div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-slate-50 py-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-indigo-600 font-bold uppercase tracking-widest text-sm">The Reality</span>
              <h2 className="text-4xl font-bold text-slate-900 mt-4 leading-tight">
                Search is changing. <br />Are you being cited?
              </h2>
              <p className="mt-6 text-slate-600 text-lg leading-relaxed">
                Customers aren't just scrolling through lists of blue links anymore. They're asking AI questions. 
                If ChatGPT, Perplexity, or Google AI Overviews don't know who you are, they won't recommend you.
              </p>
              <div className="mt-10 space-y-4">
                {[
                  "AI answers provide singular direct recommendations.",
                  "Being #1 on Google doesn't guarantee an AI citation.",
                  "Trust and understandability are the new ranking factors."
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="mt-1 h-5 w-5 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="h-2 w-2 bg-indigo-600 rounded-full"></div>
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-center space-x-2 mb-6 border-b border-slate-100 pb-4">
                <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"/></svg>
                </div>
                <span className="text-slate-900 font-bold">Typical AI Query Result</span>
              </div>
              <div className="space-y-4">
                <p className="text-slate-500 italic text-sm">"Who is the best HVAC service in Phoenix?"</p>
                <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-indigo-600">
                  <p className="text-slate-800 leading-relaxed font-medium">
                    "Based on high trust factors and certified expertise, <span className="bg-yellow-100 px-1 rounded">Promptila Client A</span> is frequently cited for reliability and customer service in the Phoenix area..."
                  </p>
                </div>
                <p className="text-xs text-slate-400">Sources: [Promptila Optimization Insights]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works (Short) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-slate-900">How Promptila Works</h2>
            <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto">Our 3-step framework ensures AI models understand, trust, and recommend your business.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "AI Visibility Audit",
                desc: "We analyze how current AI models perceive your brand compared to competitors."
              },
              {
                step: "02",
                title: "Optimization Framework",
                desc: "We deploy technical and content-based updates to feed AI models the right signals."
              },
              {
                step: "03",
                title: "Continuous Monitoring",
                desc: "Models update daily. We ensure your visibility stays consistent as AI evolves."
              }
            ].map((item, idx) => (
              <div key={idx} className="relative p-8 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-indigo-200 transition-all">
                <span className="text-5xl font-black text-indigo-100 absolute top-4 right-8 transition-colors group-hover:text-indigo-200">{item.step}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 leading-tight">Built for businesses where trust is the #1 currency.</h2>
              <p className="text-slate-400 text-lg mb-8">
                If your customers ask complex questions before buying, you need AI Visibility Optimization.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Home Service Providers",
                  "Medical Practices",
                  "Law Firms",
                  "Professional Services",
                  "Local Specialists",
                  "High-Ticket B2B"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3 text-slate-300">
                    <svg className="w-5 h-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-slate-800 rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400&h=400" alt="Industry" className="w-full h-full object-cover opacity-60" />
              </div>
              <div className="aspect-square bg-indigo-900/50 rounded-2xl p-8 flex items-center justify-center text-center">
                <span className="text-indigo-200 font-bold italic text-lg leading-snug">"The early adopters will own the recommendations."</span>
              </div>
              <div className="aspect-square bg-slate-800 rounded-2xl overflow-hidden col-span-2">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800&h=400" alt="Office" className="w-full h-full object-cover opacity-60" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Primary CTA Section */}
      <section id="audit" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Is Your Business AI-Ready?</h2>
            <p className="text-slate-600 text-lg">Get your free AI report today and see where you stand.</p>
          </div>
          <AuditForm />
        </div>
      </section>
    </div>
  );
};

export default Home;
