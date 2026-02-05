
import React from 'react';

const CookiePolicy: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-4">Cookie Policy</h1>
          <p className="text-slate-500 font-medium mb-12 italic">Last updated: February 2026</p>
          
          <div className="prose prose-slate prose-lg max-w-none space-y-10 text-slate-600">
            <p className="text-xl text-slate-900 font-medium">
              Promptila uses cookies to improve site performance and analyze traffic.
            </p>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 uppercase tracking-tight">What Are Cookies?</h2>
              <p>
                Cookies are small data files stored on your device that help websites function efficiently and understand user behavior.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 uppercase tracking-tight">How We Use Cookies</h2>
              <p>We use cookies to:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Analyze website traffic and usage</li>
                <li>Improve functionality and performance</li>
                <li>Understand how visitors interact with our site</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Managing Cookies</h2>
              <p>
                You can control or disable cookies through your browser settings. Disabling cookies may impact certain site features.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Consent</h2>
              <p>
                By continuing to use Promptila’s website, you consent to our use of cookies as described in this policy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;
