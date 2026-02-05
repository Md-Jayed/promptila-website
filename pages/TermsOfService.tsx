
import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-4">Terms of Service</h1>
          <p className="text-slate-500 font-medium mb-12 italic">Last updated: February 2026</p>
          
          <div className="prose prose-slate prose-lg max-w-none space-y-10 text-slate-600">
            <p>
              By accessing or using Promptila’s website or services, you agree to these Terms of Service.
            </p>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 uppercase tracking-tight">1. Services</h2>
              <p>
                Promptila provides AI Visibility analysis, reports, and related consulting services designed to improve business presence in AI-powered search results and platforms.
              </p>
              <p className="mt-4">
                We do not guarantee rankings, traffic increases, revenue, or specific outcomes. Results depend on many external factors beyond our control.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 uppercase tracking-tight">2. User Responsibilities</h2>
              <p>You agree to:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Provide accurate and lawful information</li>
                <li>Use our services for legitimate business purposes</li>
                <li>Not misuse, resell, or misrepresent our reports or tools</li>
              </ul>
              <p className="mt-4">
                You may not attempt to reverse-engineer, scrape, or abuse our systems.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 uppercase tracking-tight">3. Intellectual Property</h2>
              <p>
                All content, reports, branding, text, and materials produced by Promptila are our intellectual property unless otherwise stated.
              </p>
              <p className="mt-4">
                You may use delivered reports for your internal business purposes only unless written permission is granted.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 uppercase tracking-tight">4. Payments and Refunds</h2>
              <p>
                Pricing, billing terms, and refund policies are communicated at the point of sale or service agreement.
              </p>
              <p className="mt-4">
                Unless explicitly stated, all services are non-refundable once delivered.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 uppercase tracking-tight">5. Limitation of Liability</h2>
              <p>Promptila is not liable for:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Business losses</li>
                <li>Lost revenue or profits</li>
                <li>Indirect or consequential damages</li>
                <li>Decisions made based on provided reports or insights</li>
              </ul>
              <p className="mt-4 italic">Our services are informational and advisory in nature.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 uppercase tracking-tight">6. Termination</h2>
              <p>
                We reserve the right to suspend or terminate access if these terms are violated or if misuse is detected.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 uppercase tracking-tight">7. Governing Law</h2>
              <p>
                These Terms are governed by applicable laws in the jurisdiction where Promptila operates.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
