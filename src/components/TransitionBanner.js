import React, { useState, useEffect } from "react";

const rotatingWords = [
  { text: "Competitors", color: "text-blue-600" },
  { text: "Clients", color: "text-green-600" },
  { text: "Markets", color: "text-purple-600" },
  { text: "Revenue Opportunities", color: "text-yellow-500" },
  { text: "Portfolio Companies", color: "text-pink-500" },
  { text: "Partners", color: "text-indigo-500" },
  { text: "Prospects", color: "text-rose-500" },
];

export default function FeatureBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-gradient-to-r from-blue-50 via-white to-pink-50 py-20 rounded-b-3xl">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h1 className="whitespace-nowrap overflow-hidden text-3xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Intelligence on your{" "} 
          <span className="inline-block relative w-[420px] h-[1em] align-middle">
            {rotatingWords.map((word, index) => (
              <span
                key={word.text}
                className={`absolute top-0 left-0 transition-opacity duration-500 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                } ${word.color}`}
              >
                {word.text}
              </span>
            ))}
          </span>
        </h1>
      </div>
    </section>
  );
}