import React, { useState, useEffect } from "react";
import { EnvelopeIcon, PhoneIcon, LinkIcon } from "@heroicons/react/24/outline"; // Corrected import for Heroicons v2

const tabs = ["Sales Development", "Account Executive", "Account Management", "RevOps", "Demand Generation"];

const useCases = [
  {
    title: "12 Whitespace Suggested Companies",
    subtitle: "Explore potential in your broader target market",
    learnMoreUrl: "#",
    suggestions: [
      {
        company: "Smartsheet",
        logo: "/logos/smartsheet.png",
        fitStatus: ["Great Account Fit", "Not in CRM"],
        timing: "Now is a good time to reach out",
        signals: [
          "Actively Researched: Security, Penetration Testing, and +1 more",
          "Maria Purcell promoted to International Sales Head",
        ],
      },
    ],
    recommendedPlay: {
      action: "Engage Prospect with C-level Buying Group Member",
      cta: "Add buyers to CRM",
      introduce: "Introduce yourself to Maria Purcell",
    },
  },
];

export default function Usecase() {
  const [activeTab, setActiveTab] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const useCase = useCases[0]; // Static for now.

  const handleTabChange = (index) => {
    setIsLoading(true);
    setTimeout(() => {
      setActiveTab(index);
      setIsLoading(false);
    }, 600);
  };

  return (
    <section className="w-full py-20 bg-gradient-to-r from-blue-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-b-3xl">
      <div className="max-w-7xl mx-auto px-6">

        {/* Tabs */}
        <div className="flex overflow-x-auto justify-center gap-4 mb-10 scrollbar-hide">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              onClick={() => handleTabChange(index)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition whitespace-nowrap ${
                activeTab === index
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 dark:bg-gray-700 dark:text-gray-300 text-gray-800 hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Card */}
        <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8 min-h-[400px] transition-all duration-500 ease-in-out">

          {isLoading ? (
            // Loading shimmer skeleton
            <div className="animate-pulse space-y-6">
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
              <div className="space-y-3 mt-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                ))}
              </div>
              <div className="h-10 w-40 bg-gray-200 dark:bg-gray-700 rounded-full mt-6"></div>
            </div>
          ) : (
            <div className="flex flex-col gap-6 transition-all duration-700 delay-150">
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{useCase.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">{useCase.subtitle}</p>
                </div>
                <a href={useCase.learnMoreUrl} className="text-blue-600 text-sm font-semibold hover:underline">
                  Learn More
                </a>
              </div>

              {/* Company Block */}
              {useCase.suggestions.map((sugg) => (
                <div key={sugg.company} className="flex flex-col gap-2">
                  <div className="flex items-center gap-4">
                    <img src={sugg.logo} alt={sugg.company} className="w-12 h-12 rounded-full bg-gray-100" />
                    <div>
                      <h4 className="text-lg font-semibold text-blue-700">{sugg.company}</h4>
                      <div className="flex gap-2 mt-1">
                        {sugg.fitStatus.map((status) => (
                          <span key={status} className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full">
                            {status}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-green-600 dark:text-green-400 font-medium">{sugg.timing}</p>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 list-disc list-inside">
                    {sugg.signals.map((signal, idx) => (
                      <li key={idx}>{signal}</li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Recommended Play */}
              <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl">
                <h5 className="text-md font-semibold mb-2 dark:text-white">{useCase.recommendedPlay.action}</h5>
                <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                  {useCase.recommendedPlay.cta}
                </button>
                <div className="mt-6 flex items-center justify-between bg-white dark:bg-gray-900 p-4 rounded-full shadow-md">
                  <span className="text-gray-700 dark:text-gray-300 text-sm">{useCase.recommendedPlay.introduce}</span>
                  <div className="flex gap-2">
                    <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                      <EnvelopeIcon className="w-5 h-5 text-purple-600" />
                    </button>
                    <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                      <PhoneIcon className="w-5 h-5 text-blue-600" />
                    </button>
                    <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                      <LinkIcon className="w-5 h-5 text-pink-600" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          )}
        </div>

      </div>
    </section>
  );
}