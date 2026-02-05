
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-4">Privacy Policy</h1>
          <p className="text-slate-500 font-medium mb-12 italic">Last updated: February 2026</p>
          
          <div className="prose prose-slate prose-lg max-w-none space-y-8 text-slate-600">
            <p>
              Promptila (“we,” “our,” or “us”) respects your privacy and is committed to protecting it. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
            </p>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Personal Information</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Business name</li>
                  <li>Website URL</li>
                  <li>Contact details you voluntarily submit through forms, emails, or reports</li>
                </ul>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Non-Personal Information</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>IP address</li>
                  <li>Browser type</li>
                  <li>Device information</li>
                  <li>Pages visited and interaction data</li>
                  <li>Referring URLs</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">How We Use Your Information</h2>
              <p>We use collected information to:</p>
              <ul className="list-disc pl-6 mt-4 space-y-1">
                <li>Provide AI Visibility scans, reports, and services</li>
                <li>Communicate with you about services, updates, or support</li>
                <li>Improve website performance and user experience</li>
                <li>Analyze trends and usage patterns</li>
                <li>Prevent fraud, abuse, or misuse of our services</li>
              </ul>
              <p className="mt-4 font-semibold text-slate-900 italic">We do not sell or rent your personal information.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Cookies and Tracking Technologies</h2>
              <p>Promptila uses cookies and similar technologies to:</p>
              <ul className="list-disc pl-6 mt-4 space-y-1">
                <li>Improve site functionality</li>
                <li>Analyze traffic and usage behavior</li>
                <li>Enhance performance and user experience</li>
              </ul>
              <p className="mt-4">You can disable cookies through your browser settings, though some features may not function properly.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Third-Party Services</h2>
              <p>
                We may use third-party tools (analytics, hosting, email delivery, reporting platforms) to operate our services. These providers only receive information necessary to perform their functions and are required to protect it.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Security</h2>
              <p>
                We take reasonable administrative and technical measures to protect your information. However, no online system is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Rights</h2>
              <p>You may:</p>
              <ul className="list-disc pl-6 mt-4 space-y-1">
                <li>Request access to your personal data</li>
                <li>Request corrections or deletion</li>
                <li>Opt out of non-essential communications</li>
              </ul>
              <p className="mt-4">Requests can be sent to the contact information provided on our website.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Policy Updates</h2>
              <p>
                We may update this Privacy Policy at any time. Changes will be posted on this page with a revised date.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
