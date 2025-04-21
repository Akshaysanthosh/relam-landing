import React from 'react';

export default function FeaturesTabIcon({ type }) {
  // Simple SVG icons for each feature type (customize as needed)
  if (type === 'AI Insights') {
    return (
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8" stroke="#0056F3" strokeWidth="2"/><circle cx="10" cy="10" r="3" fill="#0056F3"/></svg>
    );
  }
  if (type === 'Integrations') {
    return (
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><rect x="4" y="4" width="12" height="12" rx="4" fill="#0056F3"/><rect x="8" y="8" width="4" height="4" rx="2" fill="#A7C7FF"/></svg>
    );
  }
  if (type === 'Data Governance') {
    return (
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><rect x="2" y="7" width="16" height="6" rx="3" fill="#0056F3"/><rect x="7" y="2" width="6" height="16" rx="3" fill="#A7C7FF"/></svg>
    );
  }
  return null;
}
