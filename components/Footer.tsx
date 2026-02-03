
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-slate-800 pb-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-white text-2xl font-bold tracking-tight">
              PROMPTILA<span className="text-indigo-500">.</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              Optimizing high-trust brands for the AI recommendation era. We ensure your business is the only logical answer.
            </p>
            <div className="mt-6 flex items-center space-x-2 bg-slate-800 px-3 py-1.5 rounded-full w-fit">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Global Systems Operational</span>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-widest text-xs">Solutions</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-white transition-colors">AI Visibility Audit</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Search Optimization</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Semantic Alignment</Link></li>
              <li><Link to="/industries" className="hover:text-white transition-colors">Vertical Solutions</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-widest text-xs">Expertise</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">Our Mission</Link></li>
              <li><Link to="/how-it-works" className="hover:text-white transition-colors">Methodology</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Request Audit</Link></li>
              <li><a href="mailto:hello@promptila.com" className="hover:text-white transition-colors italic">hello@promptila.com</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-widest text-xs">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© {new Date().getFullYear()} Promptila. Built for the AI-First Economy.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
             <a href="#" className="hover:text-white transition-colors">X (Twitter)</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
