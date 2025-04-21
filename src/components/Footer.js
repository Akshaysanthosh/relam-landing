import React from 'react';
import { motion } from 'framer-motion';
import marketingContent from '../marketingContent';

function Footer() {
  return (
    <motion.footer
      className="bg-[#f9fbfd] text-[#6b7280] pt-12 pb-6 px-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-sm">
        {/* Company Info */}
        <div>
          <div className="text-[#111827] font-bold text-3xl mb-6">Relam.ai</div>
          <p>{marketingContent.footer.companyTagline}</p>
          <p className="mt-4">{marketingContent.footer.copyright}</p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          <h4 className="text-[#111827] font-semibold mb-2">Company</h4>
          <a href="#features" className="hover:text-[#0052cc] transition">Features</a>
          <a href="#usecases" className="hover:text-[#0052cc] transition">Use Cases</a>
          <a href="#recent-insights" className="hover:text-[#0052cc] transition">Blog</a>
          <a href="#get-started" className="hover:text-[#0052cc] transition">Join Waitlist</a>
        </div>

        {/* Socials */}
        <div className="flex flex-col gap-2">
          <h4 className="text-[#111827] font-semibold mb-2">Connect</h4>
          {marketingContent.footer.connect.map((item, idx) => {
            if (item === 'Email Us') {
              return <a key={item} href="mailto:contact@relam.ai" className="hover:text-[#0052cc] transition">{item}</a>;
            }
            // Replace with actual URLs for LinkedIn/Twitter if available
            return <a key={item} href="#" className="hover:text-[#0052cc] transition">{item}</a>;
          })}
        </div>
      </div>

      {/* Tagline */}
      <div className="mt-8 text-center text-xs text-gray-400">
        {marketingContent.footer.madeWithLove}
      </div>
    </motion.footer>
  );
}

export default Footer;