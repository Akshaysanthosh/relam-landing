import React, { useEffect, useState } from 'react';
import './index.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';

    const elements = document.querySelectorAll('[data-animate]');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      });
    });

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-white via-blue-50 to-white min-h-screen text-black font-sans overflow-x-hidden">
      {/* Floating Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute w-64 h-64 bg-blue-300 opacity-20 rounded-full blur-3xl top-[-100px] left-[-100px] animate-pulse" />
        <div className="absolute w-80 h-80 bg-indigo-400 opacity-10 rounded-full blur-3xl bottom-[-100px] right-[-150px] animate-pulse" />
      </div>

      {/* Top CTA Bar */}
      <div className="bg-blue-600 text-white text-center py-2 px-4 text-sm relative z-10">
        🚀 Early Access Now Open — <a href="#get-started" className="underline font-semibold hover:text-blue-200">Join the Waitlist</a>
      </div>

      {/* Header */}
      <header className="py-4 px-8 flex items-center justify-between bg-white/80 backdrop-blur-md shadow sticky top-8 md:top-0 z-20">
        <div className="text-2xl font-bold text-blue-700">Relam.ai</div>
        <nav className={`flex-col md:flex-row md:flex gap-8 text-sm font-medium text-gray-700 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent transition-all duration-300 ease-in-out ${menuOpen ? 'flex' : 'hidden'}`}>
          <a href="#features" className="hover:text-blue-600 transition">Features</a>
          <a href="#market-intelligence" className="hover:text-blue-600 transition">Market Intelligence</a>
          <a href="#how-it-works" className="hover:text-blue-600 transition">How It Works</a>
          <a href="#usecases" className="hover:text-blue-600 transition">Use Cases</a>
          <a href="#get-started" className="hover:text-blue-600 transition">Join Waitlist</a>
        </nav>
        <div className="hidden md:flex gap-4">
          <a href="#get-started" className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition">Join Waitlist</a>
        </div>
        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} id="menu-button" aria-label="Toggle Menu" className="text-blue-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="text-center px-6 py-24 max-w-4xl mx-auto" data-animate>
        <h1 className="text-5xl font-bold text-blue-700">
          Cut through market noise.<br />Deliver competitive insight, instantly.
        </h1>
        <p className="mt-6 text-lg text-gray-700">
          Relam monitors the market and your competitors, learns from your internal decks, and delivers contextual updates inside Slack.
        </p>
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <a href="#get-started" className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-transform transform hover:scale-105">
            Join Waitlist
          </a>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="px-6 py-20 max-w-5xl mx-auto opacity-0 translate-y-10 transition-all duration-1000 ease-in-out" data-animate>
        <h2 className="text-3xl font-bold text-center mb-16 text-blue-700">What Makes Relam Different</h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <FeatureCard title="Slack-First Delivery" description="Insights delivered inside your workflows." />
          <FeatureCard title="Learns From Internal Docs" description="Tailored intelligence based on your real sales materials." />
          <FeatureCard title="Contextual Summarization" description="Only what matters — no noise." />
        </div>
      </section>

      {/* Market Intelligence Section */}
      <section id="market-intelligence" className="px-6 py-20 bg-gradient-to-r from-blue-100 to-blue-50" data-animate>
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-700">Market Intelligence for Your Industry</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
          <VerticalCard title="SaaS & Tech" description="Track competitor launches and moves." />
          <VerticalCard title="Real Estate & CRE" description="Surface tenant and market shifts." />
          <VerticalCard title="Healthcare & Biotech" description="Monitor innovation, M&A, and news." />
        </div>
      </section>

      {/* How Relam Works */}
      <section id="how-it-works" className="px-6 py-20 bg-white text-center" data-animate>
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Reliable Intelligence Built on Real Context</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-12">
          Relam combines your internal sales knowledge, proprietary datasets, and live market monitoring — delivering insights that drive revenue growth.
        </p>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-left">
          <HowItWorksCard icon="📄" title="Ingest Your Internal Docs" description="Relam learns from your decks, battlecards, and playbooks." />
          <HowItWorksCard icon="🔒" title="Tap Proprietary Data Sources" description="Exclusive datasets Relam aggregates from trusted partners." />
          <HowItWorksCard icon="🌐" title="Monitor the Market" description="Live scanning of public sources, competitors, news." />
          <HowItWorksCard icon="🚀" title="Deliver Contextual Insights" description="Insights matched to your deals, delivered inside Slack." />
        </div>
      </section>

      {/* Use Cases */}
      <section id="usecases" className="bg-blue-50 px-6 py-20" data-animate>
        <h2 className="text-2xl font-bold text-center mb-10 text-blue-700">Built for Revenue Teams</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <UseCaseCard title="CXOs, RevOps, CI Leads" description="Strategic signals delivered automatically." />
          <UseCaseCard title="Sales, CS, Marketing" description="Contextual alerts and insights to close more deals." />
        </div>
      </section>

    {/* Recent Insights Section */}
<section id="recent-insights" className="px-6 py-20 bg-gray-100 text-center" data-animate>
  <h2 className="text-3xl font-bold text-blue-700 mb-6">Recent Insights</h2>
  <p className="max-w-2xl mx-auto text-gray-600 mb-12">
    Explore our latest research on market trends, competitive dynamics, and revenue growth.
  </p>
  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
    <BlogCard
      title="How AI is Reshaping Competitive Intelligence"
      date="April 2025"
      description="Discover how AI-driven insights are transforming modern go-to-market strategies."
    />
    <BlogCard
      title="The Future of Revenue Enablement"
      date="March 2025"
      description="Competitive signals are becoming the new edge. Here's why they matter more than ever."
    />
    <BlogCard
      title="Why Contextual Signals Drive Conversions"
      date="February 2025"
      description="Context matters more than data. Learn how GTM teams are leveraging real context."
    />
  </div>
</section>
{/* Grow Your Business With Relam.ai */}
<section id="grow-your-business" className="bg-gray-100 py-20 px-6" data-animate>
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
    
    {/* Text Side */}
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Grow Your Business<br />With Relam.ai
      </h2>
      <p className="text-gray-600 mb-8">
        Try our platform for free — Early Access Program now open.
      </p>
      <div className="flex flex-col md:flex-row gap-4">
        <a href="#get-started" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-center">
          Get a Demo
        </a>
        <a href="#get-started" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition text-center">
          Sign Up Free
        </a>
      </div>
    </div>

    {/* SVG Image Side */}
    <div className="flex justify-center">
      <div className="w-full max-w-md transition-transform transform hover:-translate-y-2">
        <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <rect x="40" y="200" width="40" height="60" fill="#3B82F6" rx="6" />
          <rect x="110" y="160" width="40" height="100" fill="#6366F1" rx="6" />
          <rect x="180" y="120" width="40" height="140" fill="#60A5FA" rx="6" />
          <path d="M40 200 C100 100, 200 80, 300 120" stroke="#6366F1" strokeWidth="4" fill="none" />
          <polygon points="295,115 305,125 295,125" fill="#6366F1" />
        </svg>
      </div>
    </div>

  </div>
</section>

      {/* Get Started Form */}
      <section id="get-started" className="text-center py-24 bg-black text-white" data-animate>
        <h2 className="text-4xl font-bold">Join the Relam.ai Early Access Program</h2>
        <p className="mt-4 text-xl">Be the first to experience AI-driven competitive intelligence tailored for revenue teams.</p>
        <form className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
          <input type="email" required placeholder="Your email address" className="px-4 py-3 rounded-lg text-black w-80" />
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold">
            Join Waitlist
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-6 bg-gray-100">
        © 2025 Relam.ai — Built with AI for GTM teams
      </footer>
    </div>
  );
}

// Components
function FeatureCard({ title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md text-left hover:shadow-lg transition-transform transform hover:scale-105">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

function UseCaseCard({ title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md text-left hover:shadow-lg transition-transform transform hover:scale-105">
      <h4 className="text-md font-medium mb-1">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

function VerticalCard({ title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md text-left hover:shadow-lg transition-transform transform hover:scale-105">
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

function HowItWorksCard({ icon, title, description }) {
  return (
    <div className="bg-blue-50 p-6 rounded-xl shadow-sm hover:shadow-lg transition-transform transform hover:scale-105 text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

function BlogCard({ title, date, description }) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-transform transform hover:-translate-y-1 p-6 flex flex-col h-full">
      <p className="text-xs text-gray-400 mb-2">{date}</p>
      <h4 className="text-lg font-bold mb-3 text-gray-900">{title}</h4>
      <p className="text-sm text-gray-600 flex-grow">{description}</p>
      <a href="#" className="text-blue-600 text-sm font-semibold mt-6 hover:underline">
        Read More →
      </a>
    </div>
  );
}


function FeatureCard({ title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 text-left">
      <h3 className="text-lg font-semibold mb-2 text-[#222222]">{title}</h3>
      <p className="text-sm text-[#555555]">{description}</p>
    </div>
  );
}

function VerticalCard({ title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 text-left">
      <h4 className="text-lg font-semibold mb-2 text-[#222222]">{title}</h4>
      <p className="text-sm text-[#555555]">{description}</p>
    </div>
  );
}

function HowItWorksCard({ icon, title, description }) {
  return (
    <div className="bg-[#f1f5fb] p-6 rounded-xl shadow-sm hover:shadow-md transition-transform transform hover:-translate-y-1 text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h4 className="text-lg font-semibold mb-2 text-[#222222]">{title}</h4>
      <p className="text-sm text-[#555555]">{description}</p>
    </div>
  );
}

function UseCaseCard({ title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 text-left">
      <h4 className="text-md font-medium mb-1 text-[#222222]">{title}</h4>
      <p className="text-sm text-[#555555]">{description}</p>
    </div>
  );
}

function BlogCard({ title, date, description }) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-transform transform hover:-translate-y-1 p-6 flex flex-col h-full">
      <p className="text-xs text-[#888888] mb-2">{date}</p>
      <h4 className="text-lg font-semibold mb-3 text-[#222222]">{title}</h4>
      <p className="text-sm text-[#555555] flex-grow">{description}</p>
      <a href="#" className="text-[#0052cc] text-sm font-medium mt-6 hover:underline">
        Read More →
      </a>
    </div>
  );
}

export default App;