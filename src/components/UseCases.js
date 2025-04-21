import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const personas = [
  {
    role: 'RevOps',
    color: 'bg-[#0052cc]',
    headline: 'Align Revenue Strategy with Live Market Signals',
    bullets: [
      'Orchestrate GTM plans around emerging competitive moves.',
      'Uncover churn, upsell, and expansion triggers before they surface.',
      'Feed real‑time benchmarks into forecasting and capacity models.',
    ],
    img: '/illustrations/revops.png',
  },
  {
    role: 'Sales',
    color: 'bg-[#10b981]',
    headline: 'Close Deals Faster with Contextual Competitive Intel',
    bullets: [
      'Instant battlecards that update when competitors shift pricing or features.',
      'Timely buyer‑intent alerts delivered natively inside CRM & Slack.',
      'Position value with talk tracks proven to win head‑to‑head deals.',
    ],
    img: '/illustrations/sales.png',
  },
  {
    role: 'Account Executives',
    color: 'bg-[#f59e0b]',
    headline: 'Win Every Call with Real‑Time Account Insights',
    bullets: [
      'Surface exec moves, funding rounds, and tech‑stack changes minutes after they happen.',
      'Tailor messaging to each stakeholder’s pain using live persona briefs.',
      'Eliminate dead time with automated next‑best‑action recommendations.',
    ],
    img: '/illustrations/ae.png',
  },
  {
    role: 'Customer Success',
    color: 'bg-[#8b5cf6]',
    headline: 'Protect NRR with Proactive Account Intelligence',
    bullets: [
      'Predict churn risk 90 days out using competitive foothold signals.',
      'Discover expansion moments when champions change roles or budgets appear.',
      'Deliver board‑ready QBR decks built on live market benchmarks.',
    ],
    img: '/illustrations/cs.png',
  },
  {
    role: 'Product Marketing',
    color: 'bg-[#ec4899]',
    headline: 'Iterate Messaging at the Speed of the Market',
    bullets: [
      'Auto‑refresh battlecards whenever a competitor ships or raises.',
      'Quantify positioning gaps with live sentiment from the field.',
      'Deliver one‑click enablement packages to every GTM team.',
    ],
    img: '/illustrations/pm.png',
  },
  {
    role: 'CXOs',
    color: 'bg-[#111827]',
    headline: 'Make Board‑Level Decisions with Live Market Intelligence',
    bullets: [
      'Track competitive funding, leadership moves, and launches in real time.',
      'Identify whitespace & acquisition targets before the market reacts.',
      'Align org strategy with live revenue and market‑dynamics dashboards.',
    ],
    img: '/illustrations/cxo.png',
  },
];

const fadeSlide = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function UseCases() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = personas[activeIndex];

  return (
    <section id="usecases" className="relative py-28 bg-slate-50 dark:bg-slate-900">
      {/* Section header */}
      <div className="max-w-5xl mx-auto text-center mb-16 px-6">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
          Built for Every Revenue‑Driving Team
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Live competitive and market intelligence tailored to every role—from rep to boardroom.
        </p>
      </div>

      {/* Tabs */}
      <div className="overflow-x-auto whitespace-nowrap px-4 flex justify-center gap-4 mb-12 scrollbar-hide">
        {personas.map((p, i) => (
          <button
            key={p.role}
            onClick={() => setActiveIndex(i)}
            className={`px-6 py-2 rounded-full border font-semibold transition-all ${
              i === activeIndex
                ? `${p.color} text-white`
                : 'border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-slate-800'
            }`}
          >
            {p.role}
          </button>
        ))}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.role}
          variants={fadeSlide}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto grid lg:grid-cols-2 items-center gap-12 px-6"
        >
          {/* Text */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {active.headline}
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
              {active.bullets.map((b) => (
                <li key={b} className="hover:translate-x-1 transition">
                  {b}
                </li>
              ))}
            </ul>
            <button className="mt-10 inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
              Book a Demo
            </button>
          </div>

          {/* Image */}
          <div className="flex justify-center relative">
            <motion.img
              key={active.img}
              src={active.img}
              alt={`${active.role} illustration`}
              className="w-full max-w-md drop-shadow-xl rounded-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
