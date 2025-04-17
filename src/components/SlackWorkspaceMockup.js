import React from 'react';
import { motion } from 'framer-motion';

// Random pastel color set for avatars
const avatarColors = [
  "bg-blue-400",
  "bg-green-400",
  "bg-purple-400",
  "bg-pink-400",
  "bg-yellow-400",
  "bg-red-400",
];

// Helper function to get avatar color based on username
function getAvatarColor(name) {
  let sum = 0;
  for (let i = 0; i < name.length; i++) {
    sum += name.charCodeAt(i);
  }
  return avatarColors[sum % avatarColors.length];
}

// List of active (online) users
const activeUsers = ["Matt Brewer", "Emily Anderson"];

// Single Message Component
const Message = ({ time, title, bullets }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    className="flex items-start gap-3 bg-white p-4 rounded-lg shadow transition-all w-full"
  >
    <div className="flex-shrink-0">
      <div className="w-8 h-8 rounded-full bg-[#0052cc] flex items-center justify-center text-white font-bold text-sm">R</div>
    </div>
    <div className="text-left flex-1">
      <div className="flex items-center gap-2 mb-1">
        <p className="font-bold text-[#111827] text-sm">Relam Insights</p>
        <span className="text-xs text-gray-400">{time}</span>
      </div>
      <div className="text-[#374151] text-sm leading-relaxed">
        <p className="font-semibold mb-1">{title}</p>
        <ul className="list-disc list-inside space-y-1 text-[13px]">
          {bullets.map((bullet, idx) => (
            <li key={idx}>{bullet}</li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
);

function SlackWorkspaceMockup() {
  const messages = [
    {
      time: "9:34 AM",
      title: "New Competitor Alert",
      bullets: [
        "Acme Corp launched a new product line.",
        "Pricing changes detected on BetaCorp's website."
      ]
    },
    {
      time: "9:37 AM",
      title: "Customer Churn Risk Detected",
      bullets: [
        "2 strategic accounts showed decreased engagement last week.",
        "Recommended proactive retention outreach."
      ]
    },
    {
      time: "9:41 AM",
      title: "Expansion Opportunity",
      bullets: [
        "GammaCorp added 3 new regions in their CRM.",
        "Potential upsell detected in enterprise segment."
      ]
    }
  ];

  const sidebarSections = [
    { title: "Starred", items: ["# announcements", "# product-updates"], type: "channel" },
    { title: "Channels", items: ["# general", "# sales", "# product-marketing", "# customer-success", "# competitive-intelligence"], type: "channel" },
    { title: "Direct Messages", items: ["Slackbot", "Matt Brewer", "Emily Anderson"], type: "dm" },
  ];

  const activeChannel = "# competitive-intelligence";

  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl mx-auto max-w-7xl border border-gray-200 bg-gray-100">
      {/* MacOS Window Buttons */}
      <div className="flex items-center gap-2 p-2 bg-[#f5f5f5] border-b border-gray-300">
        <div className="w-3 h-3 rounded-full bg-red-400"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
        <div className="w-3 h-3 rounded-full bg-green-400"></div>
      </div>

      <div className="flex h-[600px]">
        {/* Sidebar */}
        <div className="bg-[#350D36] w-64 flex flex-col text-white text-[13px]">
          {/* Workspace Name + Search */}
          <div className="flex flex-col px-4 py-4 border-b border-[#52244a]">
            <div className="text-lg font-bold">GTM Signals</div>
            <div className="mt-3 bg-[#421f44] p-2 rounded text-gray-300 text-xs">Search...</div>
          </div>

          {/* Sections */}
          <div className="flex-1 overflow-y-auto px-4 py-2 space-y-6">
            {sidebarSections.map((section, idx) => (
              <div key={idx} className="flex flex-col space-y-1">
                <p className="uppercase text-xs text-gray-400 mb-2">{section.title}</p>
                {section.items.map((item, idx2) => (
                  <div
                    key={idx2}
                    className={`flex items-center gap-2 p-2 rounded cursor-pointer ${
                      item === activeChannel ? 'bg-[#1264A3] font-bold' : 'hover:bg-[#421f44]'
                    }`}
                  >
                    {/* If DM, show avatar, else # */}
                    {section.type === "dm" ? (
                      <div className="relative">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white ${getAvatarColor(item)}`}>
                          {item.split(' ').map(word => word[0]).join('')}
                        </div>
                        {activeUsers.includes(item) && (
                          <div className="absolute bottom-0 right-0 w-2 h-2 bg-green-400 rounded-full border-2 border-[#350D36]"></div>
                        )}
                      </div>
                    ) : (
                      <span className="text-lg">#</span>
                    )}
                    <span className="truncate">{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col bg-white">
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <p className="font-semibold text-[#111827]"># competitive-intelligence</p>
                <span className="text-xs text-gray-400">21 members</span>
              </div>
              <p className="text-xs text-gray-400">Track and monitor competitive intelligence.</p>
            </div>
            <div className="bg-gray-100 px-3 py-2 rounded text-gray-400 text-sm w-48 text-left">Search...</div>
          </div>

          {/* Messages */}
          <div className="flex flex-col gap-4 p-6 overflow-y-auto">
            {messages.map((msg, idx) => (
              <Message key={idx} {...msg} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlackWorkspaceMockup;