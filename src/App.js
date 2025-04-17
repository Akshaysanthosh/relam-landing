
import React, { useEffect } from 'react';
import './index.css';

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="bg-gradient-to-b from-white via-blue-50 to-white min-h-screen text-black font-sans">
      <header className="py-4 px-6 bg-white shadow sticky top-0 z-50">
        <nav className="flex gap-6 text-sm font-medium text-gray-700 justify-center">
          <a href="#features">Features</a>
          <a href="#usecases">Use Cases</a>
          <a href="#get-started" className="bg-blue-600 text-white px-4 py-2 rounded-lg">Get a Demo</a>
        </nav>
      </header>

      <main className="text-center px-6 py-24 max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-blue-700">
          Cut through market noise.<br />Deliver competitive insight, instantly.
        </h1>
        <p className="mt-6 text-lg text-gray-700">
          Relam monitors the market and your competitors, learns from your sales decks, and delivers contextual updates where your team already works — in Slack.
        </p>
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <a href="#get-started" className="bg-blue-600 text-white px-6 py-3 rounded-xl">Try It Free</a>
          <a href="#" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl">See It in Action →</a>
        </div>
      </main>

      <section id="features" className="px-6 py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 text-blue-700">What Makes Relam Different</h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <FeatureCard title="Slack-First Delivery" description="Your GTM team stays in Slack — so do your insights. No new tabs or dashboards." />
          <FeatureCard title="Learns From Internal Docs" description="Relam understands your sales language, competitive slides, and product priorities." />
          <FeatureCard title="Contextual Summarization" description="We don’t just tell you what happened. We explain why it matters for *your* deals." />
        </div>
      </section>

      <section id="usecases" className="bg-blue-50 px-6 py-20">
        <h2 className="text-2xl font-bold text-center mb-10 text-blue-700">Built for Revenue Teams</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <UseCaseCard title="CXOs, RevOps & CI Leads" description="Stay ahead of market shifts, key competitor updates, and strategic signals that drive smarter decisions." />
          <UseCaseCard title="Sales, CS & Product Marketing" description="Get contextual insights, tailored battlecards, and alerts that drive conversions, retention, and growth." />
        </div>
      </section>

      <section id="get-started" className="text-center py-24 bg-black text-white">
        <h2 className="text-4xl font-bold">Stop collecting info. Start delivering action.</h2>
        <p className="mt-4 text-xl">Relam gives your team a second brain for competitive intel — already trained on what matters.</p>
        <a href="#" className="mt-8 inline-block bg-white text-black px-8 py-4 rounded-2xl">Join Waitlist</a>
      </section>

      <footer className="text-center text-sm text-gray-500 py-6 bg-gray-100">
        © 2025 Relam.ai — Built with AI for GTM teams
      </footer>
    </div>
  );
}

function FeatureCard({ title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border text-left">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

function UseCaseCard({ title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border text-left">
      <h4 className="text-md font-medium mb-1">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

export default App;
