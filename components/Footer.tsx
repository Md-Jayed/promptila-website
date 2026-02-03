
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-slate-800 pb-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-white text-2xl font-bold tracking-tight">
              PROMPTILA<span className="text-indigo-500">.</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed">
              We help businesses get chosen by AI — not buried by it. Professional AI Visibility Optimization for the next era of search.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-widest text-xs">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-white transition-colors">AI Visibility Audit</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Search Optimization</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Monitoring</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-widest text-xs">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">Our Mission</Link></li>
              <li><Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-widest text-xs">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© {new Date().getFullYear()} Promptila. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Built for the AI-first world.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
