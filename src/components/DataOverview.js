import React, { useState, useEffect } from 'react';
import DataOverviewTabIcon from './DataOverviewTabIcon';
import DataOverviewDashboardMockup from './DataOverviewDashboardMockup';

function DataOverview() {
  const features = [
    {
      title: "Product Analytics",
      subtitle: "Track every user click, tap, and conversion instantly.",
      image: "/images/analytics.png",
    },
    {
      title: "Web Analytics",
      subtitle: "Get deep insights into your web traffic and behaviors.",
      image: "/images/web-analytics.png",
    },
    {
      title: "Session Replay",
      subtitle: "See exactly how users interact with your product.",
      image: "/images/session-replay.png",
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
    <section className="px-8 md:px-16 py-[104px] bg-[#FAFAFA]">
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
                  <DataOverviewTabIcon type={feature.title} />
                </span>
                {feature.title}
              </button>
            ))}
          </div>
          <span className="text-base font-semibold text-blue-500 mb-4 inline-block tracking-wide">INSIGHTS</span>
          <h2 className="text-[56px] leading-[64px] font-extrabold text-[#111827] mb-8">Ditch the guesswork and zero in on what works</h2>
          <p className="text-xl text-[#6b7280] mb-10 max-w-[540px]">Data shouldn’t be a mystery. Turn every user click, tap, and conversion into instant answers—so you can stop guessing and start growing.</p>
          <a href="#learn-more" className="text-[#0056F3] font-semibold hover:underline text-xl inline-flex items-center gap-1">Learn more <span className="ml-1">→</span></a>
        </div>
        {/* Right: Dashboard Carousel */}
        <div className="relative flex items-center justify-center min-h-[340px]" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <div className="w-full flex items-center justify-center">
            <DataOverviewDashboardMockup activeIndex={activeIndex} />
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

export default DataOverview;
