import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const CaseStudyBigLake: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* SECTION 1 – The Hook (Above the Fold) */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 font-bold rounded-full text-xs uppercase tracking-widest mb-4">Case Study</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
              How a Local Michigan Candy Shop Went From Invisible to #1 on ChatGPT, Gemini & Perplexity in 30 Days
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-medium mb-12">
              A documented AI Visibility Optimization case study.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">ChatGPT #1</p>
                <img src="https://promptila.com/assets/Chatgpt.png" alt="ChatGPT #1 Ranking" className="w-full rounded-lg border border-slate-100 shadow-inner" referrerPolicy="no-referrer" />
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Perplexity #1</p>
                <img src="https://promptila.com/assets/Perplexity.png" alt="Perplexity #1 Ranking" className="w-full rounded-lg border border-slate-100 shadow-inner" referrerPolicy="no-referrer" />
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Gemini #1</p>
                <img src="https://promptila.com/assets/Gemini.png" alt="Gemini #1 Ranking" className="w-full rounded-lg border border-slate-100 shadow-inner" referrerPolicy="no-referrer" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 – The Problem (Baseline) */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">The Problem (Baseline)</h2>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-8">
                <p className="text-sm font-bold text-red-700 uppercase tracking-widest mb-1">Baseline Score</p>
                <p className="text-5xl font-black text-red-600 tracking-tighter">18/100</p>
                <p className="text-red-700 font-medium mt-2 italic">Invisible across all platforms.</p>
              </div>
              <a 
                href="https://promptila.com/assets/BIGLAKE1.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-indigo-600 font-bold hover:underline mb-8"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"/></svg>
                View Report 1 PDF
              </a>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h4 className="text-lg font-bold text-slate-900 mb-6">This is the pain:</h4>
              <ul className="space-y-4">
                {[
                  { label: "Geographic identity", status: "Absent" },
                  { label: "Conversational authority", status: "Not established" },
                  { label: "Machine-readable signals", status: "Not present" },
                  { label: "External validation", status: "Not established" }
                ].map((item, idx) => (
                  <li key={idx} className="flex justify-between items-center border-b border-slate-200 pb-2">
                    <span className="text-slate-600 font-medium">{item.label}</span>
                    <span className="text-red-600 font-bold text-sm uppercase">{item.status}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 – The Midpoint (After One Week) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="text-lg font-bold text-slate-900 mb-4">This proves:</h4>
              <p className="text-slate-600 leading-relaxed mb-6">
                Content alone didn’t trigger AI citation. Even with improved signals, the "completeness" wasn't there yet.
              </p>
              <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
                <p className="text-indigo-900 font-bold text-sm mb-2 uppercase tracking-tight">Educating Prospects:</p>
                <p className="text-indigo-800 italic">"AI visibility requires signal completeness, not just more content."</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">The Midpoint (After One Week)</h2>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-8">
                <p className="text-sm font-bold text-amber-700 uppercase tracking-widest mb-1">Report 2 Score</p>
                <p className="text-5xl font-black text-amber-600 tracking-tighter">42/100</p>
                <p className="text-amber-700 font-medium mt-2 italic">+24 improvement — Still not cited</p>
              </div>
              <a 
                href="https://promptila.com/assets/BIGLAKE2.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-indigo-600 font-bold hover:underline"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"/></svg>
                View Report 2 PDF
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 – The Breakthrough (Report 3) */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">The Breakthrough (Report 3)</h2>
            <div className="inline-block bg-emerald-50 border-l-4 border-emerald-500 p-8 rounded-r-2xl mb-8 text-left">
              <p className="text-sm font-bold text-emerald-700 uppercase tracking-widest mb-1">Final Report Score</p>
              <p className="text-6xl font-black text-emerald-600 tracking-tighter">67/100</p>
              <p className="text-emerald-700 font-medium mt-2 text-xl">All three signal categories established. Cited across all three major platforms.</p>
            </div>
            <div className="mt-4">
              <a 
                href="https://promptila.com/assets/BIGLAKE3.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-indigo-600 font-bold hover:underline text-lg"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"/></svg>
                Download Full AI Visibility Case Study
              </a>
            </div>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl overflow-hidden relative">
            <div className="relative z-10">
              <h4 className="text-indigo-400 font-bold uppercase tracking-widest text-sm mb-8">This is your mic-drop moment:</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="py-4 font-bold text-slate-400 uppercase text-xs tracking-widest">Query</th>
                      <th className="py-4 font-bold text-slate-400 uppercase text-xs tracking-widest">Ranking</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-800">
                      <td className="py-6 font-medium text-lg">“Freeze-dried candy in Owosso Michigan”</td>
                      <td className="py-6"><span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full font-bold text-sm">Cited #1</span></td>
                    </tr>
                    <tr>
                      <td className="py-6 font-medium text-lg">“Best freeze-dried candy shop near Owosso MI”</td>
                      <td className="py-6"><span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full font-bold text-sm">Cited #1</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-[100px] -mr-32 -mt-32"></div>
          </div>
        </div>
      </section>

      {/* SECTION 5 – Visual Timeline Graphic */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-16">The Path to Visibility</h2>
          <div className="relative flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Connector Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 z-0"></div>
            
            {[
              { score: "18", label: "Invisible", color: "bg-red-500" },
              { score: "42", label: "Optimized", color: "bg-amber-500" },
              { score: "67", label: "Cited", color: "bg-emerald-500" }
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center">
                <div className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center text-white text-2xl font-black shadow-xl mb-4 border-4 border-white`}>
                  {step.score}
                </div>
                <p className="font-bold text-slate-900 uppercase tracking-widest text-sm">{step.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-slate-500 font-medium">Progress tracked over 30 days of signal architecture implementation.</p>
        </div>
      </section>

      {/* SECTION 6 – The Takeaway (Authority Builder) */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-900 rounded-3xl p-12 text-white mb-16">
            <h2 className="text-3xl font-bold mb-8">Why This Matters for Local Businesses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <p className="text-indigo-100 leading-relaxed">
                  AI visibility isn't a guessing game. It's a structured system of signals that can be measured, repeated, and scaled.
                </p>
                <p className="text-indigo-100 leading-relaxed">
                  For Big Lake Candy Company, this meant moving from being a "hidden gem" to being the authoritative answer for an entire region.
                </p>
              </div>
              <ul className="space-y-4">
                {[
                  "AI visibility is structured",
                  "It is measurable",
                  "It is repeatable",
                  "It does NOT require massive content production",
                  "It requires signal architecture"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <div className="h-2 w-2 bg-indigo-400 rounded-full"></div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12 pt-8 border-t border-indigo-800 text-center">
              <p className="text-indigo-300 italic">Promptila is a system, not just another marketing agency.</p>
            </div>
          </div>

          {/* Download PDF Section */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Download Full AI Visibility Case Study</h3>
            <p className="text-slate-600 mb-8 max-w-md mx-auto">Get the complete technical breakdown and all three reports in one PDF.</p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your work email" 
                required 
                className="flex-grow px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
              <button 
                type="submit" 
                className="px-6 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-black transition-all"
              >
                Download Now
              </button>
            </form>
            <p className="text-[10px] text-slate-400 mt-4 uppercase tracking-widest">Your privacy is guaranteed. No spam, ever.</p>
          </div>
        </div>
      </section>

      {/* SECTION 7 – Strong CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready to See Where Your Business Stands?</h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Get your documented AI Visibility Audit and start your path from invisible to cited.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-5 bg-indigo-600 text-white font-bold rounded-xl shadow-xl hover:bg-indigo-700 transition-all active:scale-95 text-lg"
          >
            Get Your Free AI Visibility Audit
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyBigLake;

