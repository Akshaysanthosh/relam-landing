import React from 'react';
import { motion } from 'framer-motion';
import marketingContent from '../marketingContent';

function DetailedAnalysisCTA() {
  return (
    <section id="detailed-analysis" className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-32 px-6 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img src="/analysis-placeholder.png" alt="Custom Report" className="w-full max-w-md rounded-2xl shadow-lg" />
        </motion.div>

        {/* Text Content */}
        <div className="text-left">
          <motion.p className="uppercase text-sm tracking-wider text-indigo-600 mb-4 animate-fadeInUp" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.1 }}>
            {marketingContent.detailedAnalysisCTA.label}
          </motion.p>
          <motion.h2 className="text-4xl font-bold text-indigo-900 mb-6 leading-tight animate-fadeInUp" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
            {marketingContent.detailedAnalysisCTA.title}
          </motion.h2>
          <motion.p className="text-lg text-indigo-600 mb-8 animate-fadeInUp" style={{ animationDelay: "0.2s" }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
            {marketingContent.detailedAnalysisCTA.description}
          </motion.p>
          <a 
            href="#schedule-call" 
            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 duration-300 ease-out shadow-md"
          >
            {marketingContent.detailedAnalysisCTA.button}
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default DetailedAnalysisCTA;