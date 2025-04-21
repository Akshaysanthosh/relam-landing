import React, { useState, useEffect } from 'react';
import marketingContent from '../marketingContent';

function Header() {
  const [showBanner, setShowBanner] = useState(true);
  const [shrink, setShrink] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setShowBanner(false);
        setShrink(true);
      } else {
        setShowBanner(true);
        setShrink(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Banner */}
      {showBanner && (
        <div className="bg-[#f9fafb] text-gray-700 text-center py-2 px-4 text-sm fixed top-0 left-0 w-full z-50">
          {marketingContent.header.banner}
          <a href="#" className="underline text-blue-600 hover:text-gray-700">{marketingContent.header.bannerLink}</a>
        </div>
      )}

      {/* Main Header */}
      <header className={`fixed top-0 left-0 w-full bg-white shadow-sm z-40 transition-all duration-300 ${showBanner ? 'mt-[48px]' : ''} ${shrink ? 'h-[70px]' : 'h-[90px]'} flex items-center justify-between px-8`}>
        
        {/* Logo */}
        <div className="text-2xl font-extrabold text-[#0052cc] tracking-tight">{marketingContent.header.logo}</div>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-10 text-sm font-medium text-gray-700">
          <a href="#features" className="hover:text-[#0052cc] transition-all duration-200">{marketingContent.header.nav[0]}</a>
          <a href="#how-it-works" className="hover:text-[#0052cc] transition-all duration-200">{marketingContent.header.nav[1]}</a>
          <a href="#usecases" className="hover:text-[#0052cc] transition-all duration-200">{marketingContent.header.nav[2]}</a>
          <a href="#recent-insights" className="hover:text-[#0052cc] transition-all duration-200">{marketingContent.header.nav[3]}</a>
        </nav>

        {/* Single CTA Button */}
        <div className="hidden md:flex items-center">
          <a href="#get-started" className="bg-[#0052cc] hover:bg-[#003d99] text-white px-6 py-3 rounded-full text-sm font-semibold transition transform hover:scale-105 shadow-md">
            {marketingContent.header.cta}
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu" className="text-[#0052cc]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

      </header>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden fixed top-[80px] left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 z-30">
          <a href="#features" className="text-gray-700 hover:text-[#0052cc]">{marketingContent.header.nav[0]}</a>
          <a href="#how-it-works" className="text-gray-700 hover:text-[#0052cc]">{marketingContent.header.nav[1]}</a>
          <a href="#usecases" className="text-gray-700 hover:text-[#0052cc]">{marketingContent.header.nav[2]}</a>
          <a href="#recent-insights" className="text-gray-700 hover:text-[#0052cc]">{marketingContent.header.nav[3]}</a>
          <a href="#get-started" className="bg-[#0052cc] hover:bg-[#003d99] text-white px-6 py-3 rounded-full text-sm font-semibold">
            {marketingContent.header.cta}
          </a>
        </div>
      )}
    </>
  );
}

export default Header;