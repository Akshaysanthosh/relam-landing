import React, { useState } from "react";

const personas = [
  {
    label: "RevOps",
    description: [
      "Orchestrate GTM plans around emerging competitive moves.",
      "Uncover churn, upsell, and expansion triggers before they surface.",
      "Feed real-time benchmarks into forecasting and capacity models.",
    ],
    illustration: "/illustrations/revops.png",
  },
  {
    label: "Sales",
    description: [
      "Identify accounts in active buying mode.",
      "Use live intel to personalize outreach and win deals faster.",
      "Beat competitors to the conversation.",
    ],
    illustration: "/illustrations/sales.png",
  },
  {
    label: "Account Executives",
    description: [
      "Prioritize deals with expansion potential.",
      "Surface budget shifts, team changes, and new pain points.",
      "Own the strategic narrative with contextual insights.",
    ],
    illustration: "/illustrations/aes.png",
  },
  {
    label: "Customer Success",
    description: [
      "Identify at-risk accounts before they churn.",
      "Reinforce value with relevant wins and competitor gaps.",
      "Support QBRs with market-backed insights.",
    ],
    illustration: "/illustrations/cs.png",
  },
  {
    label: "Product Marketing",
    description: [
      "Track messaging shifts across your category.",
      "Enable sales with real-time battlecards.",
      "Pinpoint what differentiates your story, today.",
    ],
    illustration: "/illustrations/product-marketing.png",
  },
  {
    label: "CXOs",
    description: [
      "Understand how your narrative lands in-market.",
      "React to competitor pivots with precision.",
      "Align teams on growth, not guesswork.",
    ],
    illustration: "/illustrations/cxos.png",
  },
];

export default function Solutions() {
  const [active, setActive] = useState(0);
  const current = personas[active];

  return (
    <section className="py-24 bg-[#0B0E1C] text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Tailored Intelligence for Every GTM Leader
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Relam delivers live market signals purpose-built for Sales, Marketing, RevOps, and Customer teams.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {personas.map((p, i) => (
            <button
              key={p.label}
              onClick={() => setActive(i)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition ${
                i === active
                  ? "border-blue-500 text-white bg-blue-600/90"
                  : "border-blue-500 text-blue-300 hover:bg-blue-800/20"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 items-center gap-10 max-w-5xl mx-auto text-left">
          {/* Text */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Align Revenue Strategy with Live Market Signals
            </h3>
            <ul className="space-y-3 text-gray-300 text-base leading-relaxed">
              {current.description.map((d, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-blue-400">•</span> {d}
                </li>
              ))}
            </ul>
            <button className="mt-8 bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
              Book a Demo
            </button>
          </div>

          {/* Illustration */}
          <div className="flex justify-center md:justify-end">
            <img
              src={current.illustration}
              alt={`${current.label} illustration`}
              className="w-full max-w-sm rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}