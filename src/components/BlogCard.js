import React from 'react';
import { motion } from 'framer-motion';

function BlogCard({ title, date, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-transform p-6 flex flex-col h-full"
    >
      <p className="text-xs text-[#888888] mb-2">{date}</p>
      <h4 className="text-lg font-bold text-[#222222] mb-3">{title}</h4>
      <p className="text-sm text-[#555555] flex-grow">{description}</p>
      <a href="#" className="text-[#0052cc] text-sm font-semibold mt-4 hover:underline">Read More →</a>
    </motion.div>
  );
}

export default BlogCard;