import React from 'react';
import BlogCard from './BlogCard';
import marketingContent from '../marketingContent';

function RecentInsights() {
  return (
    <section id="recent-insights" className="px-6 py-20 bg-[#f1f5fb] text-center" data-animate>
      <h2 className="text-3xl font-bold text-[#222222] mb-6">Recent Insights</h2>
      <p className="max-w-2xl mx-auto text-[#555555] mb-12">
        Explore our research on market dynamics, competitive trends, and GTM excellence.
      </p>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
        {marketingContent.recentInsights.map((insight, idx) => (
          <BlogCard key={insight.title} title={insight.title} date={insight.date} description={insight.description} />
        ))}
      </div>
    </section>
  );
}

export default RecentInsights;