// filepath: src/components/RecentInsights.js
import React from 'react';
import marketingContent from '../marketingContent';

export default function RecentInsights() {
  return (
    <section
      id="recent-insights"
      className="bg-[#f1f5fb] px-6 py-20"
      data-animate
    >
      <h2 className="mb-6 text-center text-3xl font-bold text-ink">
        Recent Insights
      </h2>
      <p className="mx-auto mb-14 max-w-2xl text-center text-bodyGrey">
        Explore our research on market dynamics, competitive trends, and GTM
        excellence.
      </p>

      <div className="mx-auto grid max-w-6xl gap-x-10 gap-y-14 md:[grid-template-columns:repeat(auto-fit,minmax(280px,1fr))] xl:grid-cols-3">
        {marketingContent.recentInsights.map((item) => (
          <a
            key={item.title}
            href={item.href || '#'}
            className="group relative flex max-w-[428px] flex-col rounded-[12px] bg-white shadow-[0_2px_6px_rgba(0,0,0,0.06)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_2px_6px_rgba(0,0,0,0.10)]"
          >
            {/* Hero band */}
            <div className="relative h-[45%] overflow-hidden rounded-t-[12px] bg-gradient-to-br from-gradientStart to-gradientEnd">
              <img
                src={item.image}
                alt={item.title}
                width={176}
                height={176}
                loading="lazy"
                className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 object-cover"
              />
            </div>

            {/* Text block */}
            <div className="flex flex-col gap-4 px-6 pb-8 pt-6">
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-labelGrey">
                {item.type}
              </p>

              <h3 className="font-bold leading-[1.2] tracking-[-0.02em] text-ink text-[clamp(1.25rem,3vw,1.75rem)]">
                {item.title}
              </h3>

              <p className="line-clamp-2 text-[16px] leading-[26px] text-bodyGrey">
                {item.description}
              </p>

              <span className="mt-2 font-semibold text-primary underline decoration-1 underline-offset-4 group-hover:no-underline">
                {item.cta}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}