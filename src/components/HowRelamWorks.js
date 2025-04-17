import React from 'react';
import { motion } from 'framer-motion';
import SlackWorkspaceMockup from './SlackWorkspaceMockup'; // Import Slack Component

function HowRelamWorks() {
  const sources = [
    { icon: '📊', label: 'Property Data' },
    { icon: '🌐', label: 'Web Signals' },
    { icon: '🧑‍💼', label: 'Customer Lists' },
    { icon: '📄', label: 'Internal Docs' },
  ];

  return (
    <section id="how-it-works" className="py-32 px-6 relative bg-white overflow-hidden">
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-7xl mx-auto text-center relative"
      >

        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-20 text-[#111827]">How Relam.ai Works</h2>

        {/* Source Icons */}
        <div className="relative flex flex-wrap justify-center gap-16 mb-24">
          {sources.map((source, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center relative"
            >
              <div className="text-4xl bg-[#f1f5fb] w-14 h-14 flex items-center justify-center rounded-full shadow-md mb-2 hover:shadow-lg hover:bg-[#eef2ff] transition-all text-3xl">
                {source.icon}
              </div>
              <p className="text-[#4b5563] text-sm font-semibold">{source.label}</p>
            </motion.div>
          ))}

          {/* Colored Curved Connectors */}
          <div className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 1000 600" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Property Data */}
              <path d="M200 100 C 400 200, 400 200, 500 300" stroke="#93c5fd" strokeWidth="3" fill="none" strokeLinecap="round" />
              {/* Web Signals */}
              <path d="M350 100 C 450 200, 450 200, 500 300" stroke="#f9a8d4" strokeWidth="3" fill="none" strokeLinecap="round" />
              {/* Customer Lists */}
              <path d="M650 100 C 550 200, 550 200, 500 300" stroke="#c4b5fd" strokeWidth="3" fill="none" strokeLinecap="round" />
              {/* Internal Docs */}
              <path d="M800 100 C 600 200, 600 200, 500 300" stroke="#facc15" strokeWidth="3" fill="none" strokeLinecap="round" />
              {/* Best-in-Class to Slack */}
              <path d="M500 300 C 500 400, 500 400, 500 500" stroke="#6ee7b7" strokeWidth="4" fill="none" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Best-in-Class AI Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="bg-white p-10 rounded-2xl shadow-xl border border-[#e0e7ff] max-w-4xl mx-auto mb-24"
        >
          <h3 className="text-2xl font-bold text-[#111827] mb-6">
            Best-in-class AI and Computational Frameworks
          </h3>
          <hr className="border-[#e0e7ff] my-6" />

          <div className="flex flex-col gap-8 text-left">
            {/* Signal Accuracy */}
            <div className="flex items-center gap-5">
              <div className="bg-[#f1f5fb] p-3 rounded-full">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a8 8 0 00-8 8v4.586l-1.707 1.707a1 1 0 001.414 1.414l2.121-2.121A8.001 8.001 0 0010 18a8 8 0 000-16zM9 10V4h2v6H9zm1 8a6 6 0 110-12 6 6 0 010 12z" />
                </svg>
              </div>
              <div>
                <p className="text-lg font-bold text-[#111827]">96% Signal Accuracy</p>
                <p className="text-sm text-[#6b7280]">Validated across diverse proprietary datasets</p>
              </div>
            </div>

            {/* Noise Reduction */}
            <div className="flex items-center gap-5">
              <div className="bg-[#f1f5fb] p-3 rounded-full">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-lg font-bold text-[#111827]">90% Noise Reduction</p>
                <p className="text-sm text-[#6b7280]">Using proprietary computational frameworks</p>
              </div>
            </div>

            {/* Scalability */}
            <div className="flex items-center gap-5">
              <div className="bg-[#f1f5fb] p-3 rounded-full">
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a8 8 0 018 8v6a2 2 0 01-2 2h-2v-2h2V10a6 6 0 00-12 0v6h2v2H4a2 2 0 01-2-2v-6a8 8 0 018-8z" />
                </svg>
              </div>
              <div>
                <p className="text-lg font-bold text-[#111827]">Enterprise-Grade Scalability</p>
                <p className="text-sm text-[#6b7280]">Designed for Fortune 500 operational environments</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Slack Insights Title */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold text-[#111827] mb-10"
        >
          Contextual Insights Delivered to Slack
        </motion.h3>

        {/* Slack Mockup */}
        <SlackWorkspaceMockup />

      </motion.div>

    </section>
  );
}

export default HowRelamWorks;