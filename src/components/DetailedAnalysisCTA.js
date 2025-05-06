// filepath: src/components/DetailedAnalysisCTA.js
import React from 'react';
import reportCover from '../assets/report-cover.jpg';

export default function DetailedAnalysisCTA() {
  return (
    <section className="bg-sectionBg py-48">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-6 md:grid-cols-2">
        {/* ───────── Left – Report Card ───────── */}
        <div className="flex justify-center">
          <div className="group relative rounded-[16px] bg-royalBlue shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_40px_80px_rgba(0,0,0,0.12)]">
            {/* Bar backdrop */}
            <div
              aria-hidden
              className="absolute inset-0 flex space-x-1 px-6"
            >
              {Array.from({ length: 12 }).map((_, i) => (
                <span
                  key={i}
                  className="w-2 flex-1 bg-gradient-to-b from-barStart to-barEnd opacity-10"
                  style={{ height: `${40 + (i % 7) * 8}%` }}
                />
              ))}
            </div>

            {/* Report cover */}
            <img
              src={reportCover}
              alt="Harvard Business Review report cover titled ‘Moving Up the Digital Experience Maturity Curve’"
              width={360}
              height={480}
              loading="lazy"
              className="relative z-10 block w-[360px] rounded-[4px]"
            />
          </div>
        </div>

        {/* ───────── Right – Copy block ───────── */}
        <div>
          <p className="mb-4 text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-primary">
            Report
          </p>

          <h2 className="mb-6 font-bold tracking-[-0.04em] text-ink leading-[1.08] text-[clamp(1.5rem,3vw,3rem)]">
            Moving Up the Digital Experience Curve
          </h2>

          <p className="mb-8 max-w-xl text-bodyCopy text-[18px] leading-[30px]">
            Explore exclusive research on what strategies separate digital
            experience leaders from the pack with this Harvard Business Review
            Analytic Services report.
          </p>

          <a
            href="#get-report"
            className="inline-flex font-semibold text-primary transition-all duration-300 hover:-translate-y-1 hover:underline"
          >
            Get the report &gt;
          </a>
        </div>
      </div>
    </section>
  );
}