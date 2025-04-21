import React from 'react';

// This is a pixel-perfect SVG-based dashboard mockup inspired by Amplitude
export default function DataOverviewDashboardMockup({ activeIndex }) {
  // You can expand this with more complex SVGs or images per tab
  const dashboards = [
    // Product Analytics
    (
      <svg width="420" height="300" viewBox="0 0 420 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="420" height="300" rx="20" fill="#fff" />
        <text x="30" y="50" fontFamily="Inter, sans-serif" fontWeight="bold" fontSize="22" fill="#111827">Visitors</text>
        <rect x="30" y="60" width="70" height="40" rx="8" fill="#F3F4F6" />
        <text x="40" y="88" fontFamily="Inter, sans-serif" fontWeight="bold" fontSize="18" fill="#0056F3">9.4K</text>
        <text x="120" y="50" fontFamily="Inter, sans-serif" fontWeight="bold" fontSize="22" fill="#111827">Event Totals</text>
        <rect x="120" y="60" width="70" height="40" rx="8" fill="#F3F4F6" />
        <text x="130" y="88" fontFamily="Inter, sans-serif" fontWeight="bold" fontSize="18" fill="#0056F3">862k</text>
        <polyline points="30,180 80,160 130,200 180,170 230,210 280,150 330,200 380,160" stroke="#0056F3" strokeWidth="3" fill="none" />
        <circle cx="380" cy="160" r="8" fill="#0056F3" opacity="0.15" />
        <text x="30" y="250" fontFamily="Inter, sans-serif" fontSize="14" fill="#6b7280">Top Pages</text>
        <rect x="30" y="260" width="100" height="20" rx="6" fill="#F3F4F6" />
        <text x="38" y="275" fontFamily="Inter, sans-serif" fontSize="13" fill="#111827">Home</text>
      </svg>
    ),
    // Web Analytics
    (
      <svg width="420" height="300" viewBox="0 0 420 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="420" height="300" rx="20" fill="#fff" />
        <text x="30" y="50" fontFamily="Inter, sans-serif" fontWeight="bold" fontSize="22" fill="#111827">Bounce Rate</text>
        <rect x="30" y="60" width="70" height="40" rx="8" fill="#F3F4F6" />
        <text x="40" y="88" fontFamily="Inter, sans-serif" fontWeight="bold" fontSize="18" fill="#0056F3">16%</text>
        <text x="120" y="50" fontFamily="Inter, sans-serif" fontWeight="bold" fontSize="22" fill="#111827">Top Countries</text>
        <rect x="120" y="60" width="70" height="40" rx="8" fill="#F3F4F6" />
        <text x="130" y="88" fontFamily="Inter, sans-serif" fontWeight="bold" fontSize="18" fill="#0056F3">USA</text>
        <polyline points="30,180 80,170 130,190 180,160 230,200 280,140 330,180 380,150" stroke="#0056F3" strokeWidth="3" fill="none" />
        <circle cx="230" cy="200" r="8" fill="#0056F3" opacity="0.15" />
        <text x="30" y="250" fontFamily="Inter, sans-serif" fontSize="14" fill="#6b7280">Top Pages</text>
        <rect x="30" y="260" width="100" height="20" rx="6" fill="#F3F4F6" />
        <text x="38" y="275" fontFamily="Inter, sans-serif" fontSize="13" fill="#111827">Pricing</text>
      </svg>
    ),
    // Session Replay
    (
      <svg width="420" height="300" viewBox="0 0 420 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="420" height="300" rx="20" fill="#fff" />
        <text x="30" y="50" fontFamily="Inter, sans-serif" fontWeight="bold" fontSize="22" fill="#111827">Live Users</text>
        <rect x="30" y="60" width="70" height="40" rx="8" fill="#F3F4F6" />
        <text x="40" y="88" fontFamily="Inter, sans-serif" fontWeight="bold" fontSize="18" fill="#0056F3">302</text>
        <text x="120" y="50" fontFamily="Inter, sans-serif" fontWeight="bold" fontSize="22" fill="#111827">Replay Events</text>
        <rect x="120" y="60" width="70" height="40" rx="8" fill="#F3F4F6" />
        <text x="130" y="88" fontFamily="Inter, sans-serif" fontWeight="bold" fontSize="18" fill="#0056F3">4.2k</text>
        <polyline points="30,180 80,180 130,170 180,190 230,170 280,200 330,190 380,180" stroke="#0056F3" strokeWidth="3" fill="none" />
        <circle cx="330" cy="190" r="8" fill="#0056F3" opacity="0.15" />
        <text x="30" y="250" fontFamily="Inter, sans-serif" fontSize="14" fill="#6b7280">Top Pages</text>
        <rect x="30" y="260" width="100" height="20" rx="6" fill="#F3F4F6" />
        <text x="38" y="275" fontFamily="Inter, sans-serif" fontSize="13" fill="#111827">Features</text>
      </svg>
    ),
  ];
  return (
    <div className="flex items-center justify-center w-full h-full">
      {dashboards[activeIndex]}
    </div>
  );
}
