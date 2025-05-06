// FeaturesTabIcon.js
// Unified 24×24 icons for the feature tabs

import React from 'react';

const ACCENT   = '#0056F3';
const INACTIVE = '#D1D5DB';

export default function FeaturesTabIcon({ type, active = false, className = '' }) {
  const stroke = active ? '#FFFFFF' : ACCENT;
  const fillBg = active ? '#FFFFFF' : 'none';

  switch (type) {
    /* ── AI Insights ── */
    case 'AI Insights':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" className={className}>
          <circle cx="12" cy="12" r="9" stroke={stroke} strokeWidth="2" fill="none" />
          <circle cx="12" cy="12" r="4" stroke={stroke} strokeWidth="2" fill="none" />
          <circle cx="12" cy="4" r="1.5" fill={stroke} />
        </svg>
      );

    /* ── Integrations ── */
    case 'Integrations':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" className={className}>
          <path
            d="M8.5 15.5 6 18a4 4 0 0 0 5.7 5.6l3-3"
            fill="none"
            stroke={stroke}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.5 8.5 18 6a4 4 0 0 0-5.7-5.6l-3 3"
            fill="none"
            stroke={stroke}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    /* ── Signal Quality ── */
    case 'Signal Quality':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" className={className}>
          <path
            d="M12 2 4 5v6.8c0 3.9 2.8 7.9 8 10.2 5.2-2.3 8-6.3 8-10.2V5l-8-3z"
            fill={fillBg}
            stroke={stroke}
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <polyline
            points="9 12.5 11.5 15 15 10.5"
            fill="none"
            stroke={stroke}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    default:
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" className={className}>
          <circle cx="12" cy="12" r="3" fill={INACTIVE} />
        </svg>
      );
  }
}