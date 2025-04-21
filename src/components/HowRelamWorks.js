import React from 'react';
import { motion } from 'framer-motion';
import {
  MapIcon,
  LockClosedIcon,
  CubeTransparentIcon,
  ServerStackIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

export default function HowRelamWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-white dark:bg-gray-900 py-24 px-4 sm:px-6 lg:px-8"
    >
      {/* ─────────────  Section Title  ───────────── */}
      <motion.div
        className="text-center mb-20 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          Powerful Insights
          <br />
          Built on Reliable Data
        </h2>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {/* ─────────────  Data You Can Trust  ───────────── */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center space-y-8 sm:space-y-0 sm:space-x-16 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex flex-col items-center space-y-2">
            <MapIcon className="w-16 h-16 text-blue-600" />
            <span className="text-gray-700 dark:text-gray-300">
              Property‑level polygons
            </span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <LockClosedIcon className="w-16 h-16 text-purple-600" />
            <span className="text-gray-700 dark:text-gray-300">
              Unique & accurate panel
            </span>
          </div>
        </motion.div>

        {/* Connector */}
        <motion.div
          className="w-1/2 mx-auto border-l-2 border-dashed border-gray-200 dark:border-gray-700 h-16"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ transformOrigin: 'top' }}
        />

        {/* ─────────────  Best‑in‑class Data Science  ───────────── */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center space-y-8 sm:space-y-0 sm:space-x-12 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
            <CubeTransparentIcon className="w-20 h-20 text-yellow-500 mb-4" />
            <span className="block font-semibold text-gray-900 dark:text-white mb-2">
              +92% accuracy
            </span>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              High cardinality categorization
            </p>
          </div>

          <div className="relative bg-gray-50 dark:bg-gray-800 p-8 rounded-3xl shadow-xl">
            <ServerStackIcon className="w-24 h-24 text-blue-600 mb-4 mx-auto" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-2">
              Powerful insights into places, chains, and markets
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm text-center max-w-md mx-auto">
              Sales estimation, demographics, business counts, planned
              development, psychographics, social media traffic, audience
              expenditures, climate data, and more.
            </p>
            <div className="mt-4 text-center">
              <a
                href="#"
                className="inline-flex items-center text-blue-600 hover:underline text-sm font-semibold"
              >
                Learn more <ArrowRightIcon className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Connector */}
        <motion.div
          className="w-1/2 mx-auto border-l-2 border-dashed border-gray-200 dark:border-gray-700 h-16"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{ transformOrigin: 'top' }}
        />

        {/* ─────────────  Seamless Business Integration  ───────────── */}
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          {/* Placeholder illustration */}
          <div className="flex-1">
            <div className="w-full h-64 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg" />
          </div>

          {/* Three integration cards */}
          <div className="flex-1 space-y-8">
            {[
              {
                title: 'Platform',
                text:
                  'Explore dashboards, exports and create custom reports directly on our platform.',
              },
              {
                title: 'API',
                text:
                  'Query PAPI, Relam’s robust API to programmatically ingest our data into your own tech stack.',
              },
              {
                title: 'Feeds',
                text: 'Export Relam’s proprietary data automatically.',
              },
            ].map(({ title, text }) => (
              <div key={title} className="space-y-2">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {text}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 hover:underline text-sm font-semibold"
                >
                  Learn more <ArrowRightIcon className="w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}