
import React from 'react';
import { motion } from 'motion/react';

const Mission: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-12 tracking-tight leading-tight">
              The Way Customers Find Businesses Has Changed. <span className="text-indigo-600 italic">Have You?</span>
            </h1>
            
            <div className="prose prose-xl text-slate-600 max-w-none space-y-8 leading-relaxed">
              <p className="text-xl md:text-2xl text-slate-800 font-medium">
                Not long ago, getting found meant ranking on Google. You built a website, collected some reviews, maybe ran some ads — and customers found you in the search results.
              </p>
              
              <p>
                That world still exists. But it's no longer the only world that matters.
              </p>
              
              <p>
                Today, millions of people skip the search results entirely. They open ChatGPT, Claude, Gemini, or Perplexity and ask a direct question:
              </p>
              
              <div className="bg-slate-50 border-l-4 border-indigo-600 p-8 rounded-r-2xl my-12 space-y-4">
                <p className="italic text-slate-700 text-lg">"Who's the best HVAC company near me?"</p>
                <p className="italic text-slate-700 text-lg">"Which mortgage broker should I use?"</p>
                <p className="italic text-slate-700 text-lg">"What's the top-rated contractor in my area?"</p>
              </div>
              
              <p>
                And AI gives them <span className="text-slate-900 font-bold underline decoration-indigo-500 decoration-4 underline-offset-4">one answer</span>. Not ten links. One recommendation.
              </p>
              
              <p>
                Most businesses don't appear in that answer. Not because they aren't good — but because they aren't structured for how AI systems evaluate credibility.
              </p>
              
              <p className="text-2xl text-indigo-600 font-bold">
                That's what Promptila fixes.
              </p>
              
              <p>
                We build AI visibility infrastructure for businesses that want to be found, trusted, and recommended in the new search economy. Through authoritative content architecture, structured data, entity alignment, and topical authority — we make your business the answer AI systems give when your customers ask.
              </p>
              
              <p className="text-xl font-semibold text-slate-900">
                This isn't SEO. It's what comes next.
              </p>
              
              <div className="pt-12 border-t border-slate-100">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Our mission is simple:</h2>
                <p className="text-4xl md:text-5xl font-black text-indigo-600 tracking-tighter">
                  When AI speaks, our clients get mentioned.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Mission;
