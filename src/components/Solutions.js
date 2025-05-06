import React, { useState } from "react";
/* Optional – already in project */
import { AnimatePresence, motion } from "framer-motion";

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
      "Understand how your narrative lands in‑market.",
      "React to competitor pivots with precision.",
      "Align teams on growth, not guesswork.",
    ],
    illustration: "/illustrations/cxos.png",
  },
];

export default function Solutions() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-28 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B0E1C] mb-4 leading-tight">
          Tailored Intelligence for Every GTM Leader
        </h2>
        <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-16">
          Relam delivers live market signals purpose-built for Sales, Marketing, RevOps, and Customer teams.
        </p>

        {/* Tab Navigation */}
        <div className="flex flex-nowrap justify-center gap-3 mb-16 overflow-x-auto md:overflow-visible hide-scrollbar">
          {personas.map((p, i) => (
            <button
              type="button"
              key={p.label}
              onClick={() => setActive(i)}
              className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-semibold transition ${
                i === active
                  ? "bg-[#3736FF] text-white shadow-sm"
                  : "border border-[#3736FF] text-[#3736FF] hover:bg-[#3736FF]/10"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Content Card */}
        <div className="w-full md:w-[90%] lg:w-[80%] mx-auto">
          <AnimatePresence mode="wait">
            {personas.map(
              (persona, i) =>
                i === active && (
                  <motion.div
                    key={persona.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="relative grid md:grid-cols-2 items-center gap-10 bg-[#F7F8FC] border border-gray-200 rounded-2xl p-8 md:p-12 shadow-lg overflow-hidden"
                  >
                    {/* Text Block */}
                    <div className="order-2 md:order-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-[#0B0E1C] mb-4">
                        Align Revenue Strategy with Live Market Signals
                      </h3>
                      <ul className="space-y-4 text-gray-600 leading-relaxed">
                        {persona.description.map((d, idx) => (
                          <li
                            key={idx}
                            className="relative pl-6 text-sm md:text-base"
                          >
                            <span className="absolute left-0 top-2.5 inline-block w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                            {d}
                          </li>
                        ))}
                      </ul>
                      <button
                        type="button"
                        className="mt-10 inline-flex items-center gap-1 bg-[#0B0E1C] hover:bg-[#3736FF] text-white text-sm font-semibold py-3 px-6 rounded-full transition"
                      >
                        Book a Demo <span>→</span>
                      </button>
                    </div>

                    {/* Illustration */}
                    <div className="order-1 md:order-2 flex justify-center md:justify-end">
                      <div className="relative">
                        <img
                          src={persona.illustration}
                          alt={`Illustration of ${persona.label} persona`}
                          className="w-full max-w-sm rounded-md shadow-lg transition-transform duration-200 transform-gpu hover:scale-105 dark:invert"
                        />
                        {/* Floating Badges */}
                        <img
                          src="/logos/slack.svg"
                          alt=""
                          aria-hidden="true"
                          className="absolute -top-6 -left-6 w-16 h-16 rotate-[4deg] shadow-md rounded-xl dark:invert"
                        />
                        <img
                          src="/logos/hubspot.svg"
                          alt=""
                          aria-hidden="true"
                          className="absolute -bottom-6 -right-6 w-16 h-16 -rotate-[4deg] shadow-md rounded-xl dark:invert"
                        />
                      </div>
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}