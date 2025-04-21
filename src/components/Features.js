import React, { useState, useEffect } from 'react';
import FeaturesTabIcon from './FeaturesTabIcon';
import marketingContent from '../marketingContent';

function Features() {
  const features = [
    {
      title: "AI Insights",
      subtitle: "Unlock actionable intelligence with AI-powered analytics.",
      dashboard: (
        <svg width="420" height="300" viewBox="0 0 420 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="420" height="300" rx="20" fill="#fff" />
          <text x="30" y="50" fontFamily="Inter, sans-serif" fontWeight="bold" fontSize="22" fill="#111827">AI Score</text>
          <rect x="30" y="60" width="70" height="40" rx="8" fill="#F3F4F6" />
          <text x="40" y="88" fontFamily="Inter, sans-serif" fontWeight="bold" fontSize="18" fill="#0056F3">98%</text>
          <text x="120" y="50" fontFamily="Inter, sans-serif" fontWeight="bold" fontSize="22" fill="#111827">Trends</text>
          <rect x="120" y="60" width="70" height="40" rx="8" fill="#F3F4F6" />
          <text x="130" y="88" fontFamily="Inter, sans-serif" fontWeight="bold" fontSize="18" fill="#0056F3">Up</text>
          <polyline points="30,180 80,160 130,200 180,170 230,210 280,150 330,200 380,160" stroke="#0056F3" strokeWidth="3" fill="none" />
          <circle cx="380" cy="160" r="8" fill="#0056F3" opacity="0.15" />
        </svg>
      ),
    },
    {
      title: "Integrations",
      subtitle: "Connect Relam.ai to Slack, CRM, dashboards, and more—insights where your team works.",
      dashboard: (
        <svg width="420" height="300" viewBox="0 0 420 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="420" height="300" rx="20" fill="#fff" />
          <text x="30" y="50" fontFamily="Inter, sans-serif" fontWeight="bold" fontSize="22" fill="#111827">Slack</text>
          <rect x="30" y="60" width="70" height="40" rx="8" fill="#F3F4F6" />
          <text x="40" y="88" fontFamily="Inter, sans-serif" fontWeight="bold" fontSize="18" fill="#0056F3">Connected</text>
          <text x="120" y="50" fontFamily="Inter, sans-serif" fontWeight="bold" fontSize="22" fill="#111827">CRM</text>
          <rect x="120" y="60" width="70" height="40" rx="8" fill="#F3F4F6" />
          <text x="130" y="88" fontFamily="Inter, sans-serif" fontWeight="bold" fontSize="18" fill="#0056F3">Active</text>
          <polyline points="30,180 80,170 130,190 180,160 230,200 280,140 330,180 380,150" stroke="#0056F3" strokeWidth="3" fill="none" />
          <circle cx="230" cy="200" r="8" fill="#0056F3" opacity="0.15" />
        </svg>
      ),
    },
    {
      title: "Data Governance",
      subtitle: "Ensure data quality and compliance across your organization.",
      dashboard: (
        <svg width="420" height="300" viewBox="0 0 420 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="420" height="300" rx="20" fill="#fff" />
          <text x="30" y="50" fontFamily="Inter, sans-serif" fontWeight="bold" fontSize="22" fill="#111827">Compliance</text>
          <rect x="30" y="60" width="70" height="40" rx="8" fill="#F3F4F6" />
          <text x="40" y="88" fontFamily="Inter, sans-serif" fontWeight="bold" fontSize="18" fill="#0056F3">100%</text>
          <text x="120" y="50" fontFamily="Inter, sans-serif" fontWeight="bold" fontSize="22" fill="#111827">Quality</text>
          <rect x="120" y="60" width="70" height="40" rx="8" fill="#F3F4F6" />
          <text x="130" y="88" fontFamily="Inter, sans-serif" fontWeight="bold" fontSize="18" fill="#0056F3">A+</text>
          <polyline points="30,180 80,180 130,170 180,190 230,170 280,200 330,190 380,180" stroke="#0056F3" strokeWidth="3" fill="none" />
          <circle cx="330" cy="190" r="8" fill="#0056F3" opacity="0.15" />
        </svg>
      ),
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setActiveIndex(prev => (prev + 1) % features.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [features.length, isHovered]);

  return (
    <section id="features" className="px-8 md:px-16 py-[104px] bg-[#FAFAFA]">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-[88px] items-center">
        {/* Left: Tabs and Text */}
        <div>
          {/* Tabs */}
          <div className="flex space-x-4 mb-10">
            {features.map((feature, idx) => (
              <button
                key={feature.title}
                onClick={() => setActiveIndex(idx)}
                className={`flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-xl focus:outline-none transition-transform duration-200 ${activeIndex === idx ? 'bg-[#0056F3] text-white shadow-lg scale-105' : 'bg-white text-[#111827] shadow hover:scale-105'}`}
                style={{ boxShadow: activeIndex === idx ? '0 4px 16px 0 rgba(0,86,243,0.10)' : '0 2px 8px 0 rgba(16,30,54,0.06)' }}
              >
                <span className="w-6 h-6 flex items-center justify-center">
                  <FeaturesTabIcon type={feature.title} />
                </span>
                {feature.title}
              </button>
            ))}
          </div>
          <span className="text-base font-semibold text-blue-500 mb-4 inline-block tracking-wide">FEATURES</span>
          <h2 className="text-[56px] leading-[64px] font-extrabold text-[#111827] mb-8">What Makes Relam.ai Different</h2>
          <p className="text-xl text-[#6b7280] mb-10 max-w-[540px]">The only platform delivering contextual, actionable revenue intelligence — in real time.</p>
          <a href="#learn-more" className="text-[#0056F3] font-semibold hover:underline text-xl inline-flex items-center gap-1">Learn more <span className="ml-1">→</span></a>
        </div>
        {/* Right: Feature Carousel */}
        <div className="relative flex items-center justify-center min-h-[340px]" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <div className="w-full flex items-center justify-center">
            {features[activeIndex].dashboard}
          </div>
          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {features.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-3 h-3 rounded-full ${activeIndex === idx ? 'bg-[#0056F3]' : 'bg-gray-300'} transition`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;