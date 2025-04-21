import React from 'react';

export default function DataOverviewTabIcon({ type }) {
  // Simple SVG icons for each tab type
  if (type === 'Product Analytics') {
    return (
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><rect x="2" y="7" width="3" height="11" rx="1.5" fill="#0056F3"/><rect x="8.5" y="2" width="3" height="16" rx="1.5" fill="#A7C7FF"/><rect x="15" y="11" width="3" height="7" rx="1.5" fill="#0056F3"/></svg>
    );
  }
  if (type === 'Web Analytics') {
    return (
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8" stroke="#0056F3" strokeWidth="2"/><path d="M10 10 L10 3" stroke="#0056F3" strokeWidth="2"/><path d="M10 10 L17 10" stroke="#0056F3" strokeWidth="2"/></svg>
    );
  }
  if (type === 'Session Replay') {
    return (
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><rect x="3" y="5" width="14" height="10" rx="2" fill="#0056F3"/><path d="M10 8v4" stroke="#fff" strokeWidth="2"/><circle cx="10" cy="10" r="1.5" fill="#fff"/></svg>
    );
  }
  return null;
}
