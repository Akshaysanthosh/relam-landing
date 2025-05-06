/* /src/components/Features.js */
import React, { useState, useEffect } from 'react';
import FeaturesTabIcon from './FeaturesTabIcon';

function Features() {
  /* ───────── Tab Data ───────── */
  const features = [
    {
      title: 'AI Insights',
      subtitle:
        'Surface revenue opportunities with AI-powered signal detection and trend forecasting—before competitors react.',
      dashboard: (
        <svg width="420" height="300" viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg">
          <title>AI Insights Illustration</title>
          <defs>
            <filter id="shadowAI" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#000" floodOpacity="0.08" />
            </filter>
          </defs>

          {/* cards */}
          <rect x="32" y="36" width="165" height="90" rx="10" fill="#F3F4F6" filter="url(#shadowAI)" />
          <rect x="223" y="36" width="165" height="90" rx="10" fill="#F3F4F6" filter="url(#shadowAI)" />

          {/* AI score gauge */}
          <text x="48" y="62" fontFamily="Inter,system-ui" fontSize="22" fontWeight="700" fill="#111827">
            AI Score
          </text>
          <circle
            cx="82"
            cy="96"
            r="25"
            fill="none"
            stroke="#0056F3"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray="157 157"
            strokeDashoffset="30"
          />
          <circle cx="82" cy="96" r="25" fill="none" stroke="#0056F3" strokeWidth="6" strokeOpacity=".15" />
          <text x="66" y="102" fontFamily="Inter,system-ui" fontSize="18" fontWeight="700" fill="#0056F3">
            98%
          </text>

          {/* trends */}
          <text x="239" y="62" fontFamily="Inter,system-ui" fontSize="22" fontWeight="700" fill="#111827">
            Trends
          </text>
          <polyline
            points="239,96 255,86 271,90 287,76 303,80 319,66 335,70 351,56"
            fill="none"
            stroke="#0056F3"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="351" cy="56" r="4" fill="#0056F3" />

          {/* big trend line */}
          <polyline
            points="32,210 92,180 152,200 212,170 272,210 332,150 392,188"
            fill="none"
            stroke="#0056F3"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="392" cy="188" r="8" fill="#0056F3" opacity="0.15" />
        </svg>
      ),
    },
    {
      title: 'Integrations',
      subtitle:
        'Deliver insights directly into Slack, your CRM, and dashboards—so every team acts in context.',
      dashboard: (
        <svg width="420" height="300" viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg">
          <title>Integrations Illustration</title>
          <defs>
            <filter id="shadowInt" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#000" floodOpacity="0.08" />
            </filter>
          </defs>

          {/* tiles */}
          <rect x="65" y="44" width="110" height="110" rx="10" fill="#F3F4F6" filter="url(#shadowInt)" />
          <rect x="245" y="44" width="110" height="110" rx="10" fill="#F3F4F6" filter="url(#shadowInt)" />

          {/* Slack hash */}
          <g stroke="#0056F3" strokeWidth="8" strokeLinecap="round">
            <line x1="105" y1="78" x2="105" y2="120" />
            <line x1="125" y1="78" x2="125" y2="120" />
            <line x1="85" y1="98" x2="145" y2="98" />
            <line x1="85" y1="118" x2="145" y2="118" />
          </g>

          {/* CRM bars */}
          <g fill="#0056F3">
            <rect x="275" y="106" width="16" height="32" rx="3" />
            <rect x="297" y="90" width="16" height="48" rx="3" />
            <rect x="319" y="74" width="16" height="64" rx="3" />
          </g>

          {/* connector */}
          <path
            d="M175 99 C205 60 275 60 305 99"
            fill="none"
            stroke="#0056F3"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <polygon points="305,99 298,94 298,104" fill="#0056F3" />

          {/* mini-timeline */}
          <polyline
            points="40,218 90,208 140,220 190,198 240,222 290,192 340,210 380,195"
            fill="none"
            stroke="#0056F3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="240" cy="222" r="6" fill="#0056F3" opacity="0.15" />
        </svg>
      ),
    },
    {
      title: 'Signal Quality',
      subtitle:
        'Drive confident growth decisions with trusted, revenue-ready market signals.',
      dashboard: (
        <svg width="420" height="300" viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg">
          <title>Signal Quality Illustration</title>
          <defs>
            <filter id="shadowQual" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#000" floodOpacity="0.08" />
            </filter>
          </defs>

          {/* cards */}
          <rect x="32" y="36" width="165" height="90" rx="10" fill="#F3F4F6" filter="url(#shadowQual)" />
          <rect x="223" y="36" width="165" height="90" rx="10" fill="#F3F4F6" filter="url(#shadowQual)" />

          {/* shield / quality */}
          <polygon
            points="70,70 94,56 118,70 118,96 94,110 70,96"
            fill="none"
            stroke="#0056F3"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <text x="130" y="87" fontFamily="Inter,system-ui" fontSize="18" fontWeight="700" fill="#0056F3">
            A+
          </text>
          <text x="60" y="60" fontFamily="Inter,system-ui" fontSize="22" fontWeight="700" fill="#111827">
            Quality
          </text>

          {/* compliance */}
          <text x="239" y="60" fontFamily="Inter,system-ui" fontSize="22" fontWeight="700" fill="#111827">
            Compliance
          </text>
          <circle cx="260" cy="90" r="18" fill="none" stroke="#0056F3" strokeWidth="3" />
          <polyline
            points="253,89 258,94 268,82"
            fill="none"
            stroke="#0056F3"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text x="287" y="97" fontFamily="Inter,system-ui" fontSize="18" fontWeight="700" fill="#0056F3">
            100%
          </text>

          {/* bars */}
          <rect x="110" y="200" width="30" height="60" rx="4" fill="#0056F3" opacity="0.2" />
          <rect x="170" y="180" width="30" height="80" rx="4" fill="#0056F3" opacity="0.4" />
          <rect x="230" y="160" width="30" height="100" rx="4" fill="#0056F3" />
        </svg>
      ),
    },
  ];

  /* ───────── Carousel Logic ───────── */
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const id = setInterval(() => setActiveIndex((i) => (i + 1) % features.length), 5000);
      return () => clearInterval(id);
    }
  }, [isHovered, features.length]);

  /* ───────── Render ───────── */
  return (
    <section id="features" className="px-8 md:px-16 py-[104px] bg-[#FAFAFA]">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-[88px] items-center">
        {/* Left column */}
        <div>
          <div className="flex space-x-4 mb-10">
            {features.map((f, idx) => (
              <button
                key={f.title}
                onClick={() => setActiveIndex(idx)}
                className={`flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-xl focus:outline-none transition-transform duration-200 ${
                  activeIndex === idx
                    ? 'bg-[#0056F3] text-white shadow-lg scale-105'
                    : 'bg-white text-[#111827] shadow hover:scale-105'
                }`}
              >
                <FeaturesTabIcon type={f.title} active={activeIndex === idx} className="shrink-0" />
                {f.title}
              </button>
            ))}
          </div>

          <span className="text-base font-semibold text-blue-500 mb-4 inline-block tracking-wide">
            FEATURES
          </span>
          <h2 className="text-[56px] leading-[64px] font-extrabold text-[#111827] mb-8">
            What Makes Relam.ai Different
          </h2>
          <p className="text-xl text-[#6b7280] mb-10 max-w-[540px]">
            The only GTM intelligence platform that turns market noise into real-time, revenue-ready
            signals.
          </p>
          <a
            href="#learn-more"
            className="text-[#0056F3] font-semibold hover:underline text-xl inline-flex items-center gap-1"
          >
            Learn more →
          </a>
        </div>

        {/* Right column */}
        <div
          className="relative flex items-center justify-center min-h-[340px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {features[activeIndex].dashboard}

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {features.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-3 h-3 rounded-full ${
                  activeIndex === idx ? 'bg-[#0056F3]' : 'bg-gray-300'
                } transition`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;