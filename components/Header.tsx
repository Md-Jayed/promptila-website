import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Mission', path: '/mission' },
    { name: 'About', path: '/about' },
  ];

  const caseStudies = [
    { name: 'Big Lake Candy Company (Owosso, MI)', path: '/case-study/big-lake-candy' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-slate-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                src="https://i.ibb.co/GBsQfJL/promptila-logo-removebg-preview.png" 
                alt="Promptila" 
                className="h-10 w-auto object-contain"
              />
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path) ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-600'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Case Studies Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center text-sm font-medium transition-colors ${
                  location.pathname.startsWith('/case-study') ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-600'
                }`}
              >
                Case Studies
                <svg className={`ml-1 h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  {caseStudies.map((cs) => (
                    <Link
                      key={cs.path}
                      to={cs.path}
                      onClick={() => setIsDropdownOpen(false)}
                      className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-indigo-600 transition-colors"
                    >
                      {cs.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors ${
                isActive('/contact') ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-600'
              }`}
            >
              Contact Us
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center px-5 py-2.5 border border-transparent text-sm font-semibold rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-all active:scale-95"
            >
              Get Your Free AI Report
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-indigo-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 text-base font-medium ${
                  isActive(link.path) ? 'text-indigo-600 bg-slate-50' : 'text-slate-600 hover:text-indigo-600'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Case Studies */}
            <div className="space-y-1">
              <div className="px-3 py-2 text-base font-bold text-slate-900 border-t border-slate-100 mt-2 pt-4">
                Case Studies
              </div>
              {caseStudies.map((cs) => (
                <Link
                  key={cs.path}
                  to={cs.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-6 py-2 text-sm font-medium ${
                    isActive(cs.path) ? 'text-indigo-600 bg-slate-50' : 'text-slate-600 hover:text-indigo-600'
                  }`}
                >
                  {cs.name}
                </Link>
              ))}
            </div>

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 text-base font-medium border-t border-slate-100 mt-2 pt-4 ${
                isActive('/contact') ? 'text-indigo-600 bg-slate-50' : 'text-slate-600 hover:text-indigo-600'
              }`}
            >
              Contact Us
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-bold text-indigo-600"
            >
              Get Your Free AI Report
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;