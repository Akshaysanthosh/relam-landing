import React from 'react';
import { motion } from 'framer-motion';

export default function HowRelamWorks() {
  const steps = [
    {
      num: '01',
      title: 'Connect Your Tools',
      desc:
        'Integrate your CRM and Slack—no engineering work needed. SignalLake starts collecting data instantly.',
      img: '/illustrations/connect-tools.png',
      logos: ['/logos/slack.svg', '/logos/hubspot.svg'],
    },
    {
      num: '02',
      title: 'Define What Matters',
      desc:
        'Add competitors, customers, or partners and pick the signals you care about—funding, tech‑stack changes, product launches, more.',
      img: '/illustrations/define-matters.png',
      logos: ['/logos/notion.svg', '/logos/figma.svg'],
    },
    {
      num: '03',
      title: 'Let the Agents Work',
      desc:
        'Our AI Agents scrape the web and digest your internal docs 24/7, so dashboards are always current—no manual tagging.',
      img: '/illustrations/agents-work.png',
      logos: ['/logos/openai.svg', '/logos/zapier.svg'],
    },
    {
      num: '04',
      title: 'Get Actionable Insights',
      desc:
        'Battlecards, alerts, and summaries flow straight into Slack and email so teams can act without leaving their workflow.',
      img: '/illustrations/actionable-insights.png',
      logos: ['/logos/slack.svg', '/logos/gmail.svg'],
    },
  ];

  return (
    <section id="how-it-works" className="bg-white py-28 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* ─────────────  Section Heading  ───────────── */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#0B0E1C] mb-16 text-center">
          How it Works
        </h1>

        {/* ─────────────  Steps  ───────────── */}
        <div className="space-y-20">
          {steps.map((step, idx) => {
            const flip = idx % 2 !== 0; // alternate image/text on desktop
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <div className="bg-[#0B0E1C] rounded-3xl p-10 md:p-14 shadow-xl grid md:grid-cols-2 items-center gap-10">
                  {/* Text */}
                  <div className={`${flip ? 'md:order-2' : ''}`}>
                    <span className="block text-[#3736FF] text-lg font-semibold mb-3">
                      {step.num}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {step.desc}
                    </p>
                    <div className="flex items-center gap-4">
                      {step.logos.map((logo) => (
                        <img
                          key={logo}
                          src={logo}
                          alt=""
                          aria-hidden="true"
                          className="w-10 h-10 rounded-lg shadow-sm dark:invert"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Illustration */}
                  <div
                    className={`${
                      flip ? 'md:order-1' : ''
                    } flex justify-center md:justify-end`}
                  >
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.25 }}
                      src={step.img}
                      alt={`${step.title} illustration`}
                      className="w-full max-w-sm rounded-lg shadow-lg dark:invert"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}