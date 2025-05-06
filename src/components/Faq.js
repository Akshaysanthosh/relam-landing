import React from 'react';
import {
  RocketLaunchIcon,
  LinkIcon,
  ServerIcon,
  CurrencyDollarIcon,
  ClockIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

/* ────────────────────────────────────────────────────────────
   FAQ data — trimmed to 6 entries (copy unchanged)
   ──────────────────────────────────────────────────────────── */
const faqs = [
  {
    id: 'faq-1',
    icon: RocketLaunchIcon,
    question: 'How fast is setup?',
    answer: 'Less than 15 minutes. Connect via OAuth—no code, no IT handoffs.',
  },
  {
    id: 'faq-2',
    icon: LinkIcon,
    question: 'Which tools can I connect?',
    answer:
      'CRM, Slack, Notion, Drive, LinkedIn, and public websites. More coming soon.',
  },
  {
    id: 'faq-3',
    icon: ServerIcon,
    question: 'Do I need engineers to deploy?',
    answer: 'No. SignalLake runs fully hosted—no agents, no SDKs, no scripts.',
  },
  {
    id: 'faq-4',
    icon: CurrencyDollarIcon,
    question: 'Is there a free trial?',
    answer: 'Yes. Start with a free pilot, then scale on usage-based pricing.',
  },
  {
    id: 'faq-5',
    icon: ClockIcon,
    question: 'How often do you track updates?',
    answer: 'Hourly. We diff-check and enrich every tracked source automatically.',
  },
  {
    id: 'faq-6',
    icon: ChartBarIcon,
    question: 'How many companies can I track?',
    answer: 'Up to 100 on the Starter plan. Need more? Just ask.',
  },
];

/* ──────────────────────────────────────────────────────────── */

export default function Faq() {
  const heading = 'Frequently Asked Questions';

  return (
    <section id="faq" className="bg-[#EEF0FF] dark:bg-[#0B0E1C] py-28 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* ─────────────  Heading  ───────────── */}
        <h2
          id="faq-heading"
          className="relative block text-4xl md:text-5xl font-extrabold text-[#0B0E1C] dark:text-[#EAEAF4] text-center mb-16 before:absolute before:inset-x-0 before:bottom-1 before:h-4 before:bg-[#3736FF]/80 before:-skew-x-6 before:z-0"
        >
          <span className="relative z-10">{heading}</span>
        </h2>

        {/* ─────────────  FAQ Grid  ───────────── */}
        <section
          aria-labelledby="faq-heading"
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 [&>*]:h-full"
        >
          {faqs.map(({ id, icon: Icon, question, answer }) => (
            <div
              key={id}
              className="flex flex-col gap-4 bg-white dark:bg-[#0B0E1C] rounded-2xl p-8 border border-[#EAEAF4] dark:border-[#2B2E47] shadow-sm hover:shadow-md dark:hover:shadow-[#0000004d] transition"
            >
              <span
                role="img"
                aria-hidden="true"
                className="w-11 h-11 grid place-content-center rounded-xl bg-[#EEF0FF] dark:bg-white/10 text-[#3736FF] dark:text-white"
              >
                <Icon className="w-6 h-6" />
              </span>

              <h3 className="text-lg font-semibold tracking-tight text-[#0B0E1C] dark:text-[#EAEAF4]">
                {question}
              </h3>
              <p className="text-sm leading-relaxed text-[#474C62] dark:text-[#B9BCD7]">
                {answer}
              </p>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
}