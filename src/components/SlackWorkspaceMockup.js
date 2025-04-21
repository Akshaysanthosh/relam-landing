import React from 'react';
import { motion } from 'framer-motion';
import marketingContent from '../marketingContent';

function SlackWorkspaceMockup() {
  const messages = [
    {
      user: 'AK',
      color: 'bg-blue-500',
      name: 'Akshay',
      time: '10:23 AM',
      text: 'New competitor launch detected 🚀: "NovaAI" just announced Series B funding!',
    },
    {
      user: 'JP',
      color: 'bg-green-500',
      name: 'Julia Patel',
      time: '10:25 AM',
      text: 'Pricing updates from "VelocityData" — 12% increase across APAC region accounts.',
    },
    {
      user: 'MT',
      color: 'bg-purple-500',
      name: 'Mark T.',
      time: '10:30 AM',
      text: 'Potential upsell detected on "StellarCorp" — multiple expansion signals captured 🔥',
    },
  ];

  return (
    <div className="rounded-2xl shadow-lg overflow-hidden max-w-4xl mx-auto border border-gray-200 bg-white text-left animate-fadeInUp">

      {/* Top Bar */}
      <div className="bg-[#4A154B] text-white px-6 py-4 flex items-center">
        <div className="font-bold text-lg">{marketingContent.slackMockup.workspaceName}</div>
      </div>

      {/* Layout */}
      <div className="flex h-[450px]">

        {/* Sidebar */}
        <div className="w-56 bg-[#f9fafb] border-r border-gray-200 p-4 rounded-l-2xl">
          <div className="text-xs uppercase text-gray-400 mb-4">Channels</div>
          <ul className="space-y-3">
            {marketingContent.slackMockup.channels.map((channel, idx) => (
              <li key={channel} className={idx === 0 ? "text-[#4A154B] font-semibold" : "text-gray-500 hover:text-[#4A154B] cursor-pointer"}>{channel}</li>
            ))}
          </ul>
          <div className="mt-8">
            <div className="text-xs uppercase text-gray-400 mb-2">Direct Messages</div>
            {marketingContent.slackMockup.directMessages.map((dm, idx) => (
              <div key={dm} className={`flex items-center gap-2 text-gray-600 hover:text-[#4A154B] cursor-pointer${idx > 0 ? ' mt-2' : ''}`}>
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                {dm}
              </div>
            ))}
          </div>
        </div>

        {/* Main Chat */}
        <div className="flex-1 flex flex-col bg-white p-6 gap-6 overflow-y-auto">

          {/* Channel Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h4 className="text-lg font-bold text-[#111827]"># gtm-signals</h4>
              <p className="text-sm text-gray-400">Market & revenue alerts delivered live</p>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>3 members</span>
            </div>
          </div>

          {/* Messages */}
          {messages.map((msg, index) => (
            <div className="pb-4 mb-4 border-b border-gray-100 last:border-none" key={index}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                className="flex items-start gap-4"
              >
                {/* User Initials */}
                <div className={`h-10 w-10 ${msg.color} rounded-full flex items-center justify-center text-white font-bold`}>
                  {msg.user}
                </div>

                {/* Message Content */}
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-[#111827]">{msg.name}</span>
                    <span className="text-xs text-gray-400">{msg.time}</span>
                  </div>
                  <p className="text-sm text-[#374151] mt-1">{msg.text}</p>
                </div>
              </motion.div>
            </div>
          ))}

          {/* Typing Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: messages.length * 0.3 }}
            className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg shadow w-full"
          >
            {/* Typing User Icon */}
            <div className="flex-shrink-0">
              <div className="w-8 h-8 rounded-full bg-[#0052cc] flex items-center justify-center text-white font-bold text-sm">R</div>
            </div>

            {/* Typing dots */}
            <div className="flex-1 flex gap-1 items-center">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"></div>
              <span className="text-xs text-gray-400 ml-2">Relam Insights is typing...</span>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

export default SlackWorkspaceMockup;