import React from 'react';
import marketingContent from '../marketingContent';

function GrowYourBusinessCTA() {
  return (
    <section id="grow-your-business" className="bg-[#f1f5fb] py-20 px-6" data-animate>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10 bg-white rounded-2xl shadow-md p-10">
        <div>
          <h2 className="text-4xl font-bold text-[#222222] mb-4 leading-tight">
            {marketingContent.growCTA.title}
          </h2>
          <p className="text-[#555555] mb-8">
            {marketingContent.growCTA.description}
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <a href="#get-started" className="bg-[#0052cc] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#003d99] transition text-center">
              {marketingContent.growCTA.buttons.demo}
            </a>
            <a href="#get-started" className="border border-[#0052cc] text-[#0052cc] px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition text-center">
              {marketingContent.growCTA.buttons.signup}
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <rect x="40" y="200" width="40" height="60" fill="#3B82F6" rx="6" />
            <rect x="110" y="160" width="40" height="100" fill="#6366F1" rx="6" />
            <rect x="180" y="120" width="40" height="140" fill="#60A5FA" rx="6" />
            <path d="M40 200 C100 100, 200 80, 300 120" stroke="#6366F1" strokeWidth="4" fill="none" />
            <polygon points="295,115 305,125 295,125" fill="#6366F1" />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default GrowYourBusinessCTA;