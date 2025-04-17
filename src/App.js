import React, { useEffect, useState } from 'react';
import './index.css';
import HowRelamWorks from './components/HowRelamWorks';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('RevOps');

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
    
    <div className="relative bg-[#ffffff] min-h-screen text-black font-sans overflow-x-hidden">

      {/* Floating Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute w-64 h-64 bg-[#f1f5fb] opacity-30 rounded-full blur-3xl top-[-100px] left-[-100px] animate-pulse" />
        <div className="absolute w-80 h-80 bg-[#f1f5fb] opacity-20 rounded-full blur-3xl bottom-[-100px] right-[-150px] animate-pulse" />
      </div>

      {/* Top CTA */}
      <div className="bg-[#0052cc] text-white text-center py-2 px-4 text-sm relative z-10">
        🚀 Early Access Now Open — <a href="#get-started" className="underline font-semibold hover:text-blue-200">Join the Waitlist</a>
      </div>

      {/* Header */}
      <header className="py-4 px-8 flex items-center justify-between bg-white/80 backdrop-blur-md shadow sticky top-8 md:top-0 z-20">
        <div className="text-2xl font-bold text-[#0052cc]">Relam.ai</div>
        <nav className={`flex-col md:flex-row md:flex gap-8 text-sm font-medium text-[#555555] absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent transition-all duration-300 ease-in-out ${menuOpen ? 'flex' : 'hidden'}`}>
          <a href="#features" className="hover:text-[#0052cc] transition">Features</a>
          <a href="#market-intelligence" className="hover:text-[#0052cc] transition">Market Intelligence</a>
          <a href="#how-it-works" className="hover:text-[#0052cc] transition">How It Works</a>
          <a href="#usecases" className="hover:text-[#0052cc] transition">Use Cases</a>
          <a href="#recent-insights" className="hover:text-[#0052cc] transition">Insights</a>
          <a href="#get-started" className="hover:text-[#0052cc] transition">Join Waitlist</a>
        </nav>
        <div className="hidden md:flex gap-4">
          <a href="#get-started" className="bg-[#0052cc] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#003d99] transition">Join Waitlist</a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu" className="text-[#0052cc]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Main Sections Start */}
      <main>

        {/* HERO Section */}
        <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-[#f9fbfd] via-[#f1f5fb] to-white py-36 px-6 text-center">
          {/* Floating Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute top-[-120px] left-[-100px] w-96 h-96 bg-blue-300 opacity-20 rounded-full blur-3xl animate-floatingSlow"></div>
            <div className="absolute bottom-[-120px] right-[-120px] w-80 h-80 bg-indigo-400 opacity-20 rounded-full blur-3xl animate-floatingSlower"></div>
            <div className="absolute top-[35%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md rounded-3xl w-80 h-40 opacity-20 hidden md:block"></div>
          </div>
          {/* Hero Content */}
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-[#111827] leading-tight mb-6">
              Market, Competitors, Customers, Vendors.<br /> Stay Ahead Instantly.
            </h1>
            <p className="mt-4 text-lg md:text-xl text-[#4b5563]">
              Relam delivers contextual revenue intelligence from every corner of your ecosystem — directly into your workflows.
            </p>
            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              <a href="#get-started" className="bg-[#0052cc] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#003d99] transition-transform transform hover:scale-105">
                Join Waitlist
              </a>
            </div>
          </div>
        </section>

                {/* Features Section */}
                <section id="features" className="px-6 py-20 max-w-5xl mx-auto" data-animate>
          <h2 className="text-3xl font-bold text-center mb-16 text-[#222222]">What Makes Relam Different</h2>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <FeatureCard title="Slack-First Delivery" description="Insights delivered inside your workflows." />
            <FeatureCard title="Learns From Internal Docs" description="Tailored intelligence based on your real sales materials." />
            <FeatureCard title="Contextual Summarization" description="Only what matters — no noise." />
          </div>
        </section>

        {/* Built for Revenue Teams */}
        <section id="usecases" className="px-6 py-24 bg-[#f1f5fb]" data-animate>
          <h2 className="text-4xl font-bold text-[#111827] text-center mb-4">
            Built for Revenue Teams
          </h2>
          <p className="text-center text-[#4b5563] max-w-2xl mx-auto mb-16">
            Relam.ai delivers contextual competitive intelligence tailored for every revenue-driving role.
          </p>

          {/* Revenue Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['RevOps', 'Sales', 'Account Executives', 'Customer Success', 'Product Marketing', 'CXOs'].map((tab, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
                  activeTab === tab
                    ? 'bg-[#0052cc] text-white'
                    : 'bg-white text-[#0052cc] border border-[#0052cc]'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Revenue Tabs Content */}
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 items-center gap-12">
            <div className="text-left">
              {activeTab === 'RevOps' && (
                <>
                  <h3 className="text-2xl font-bold mb-4">Predictable, Insight-Driven Revenue Operations</h3>
                  <ul className="list-disc list-inside text-[#4b5563] space-y-2">
                    <li>Align GTM execution with live competitive shifts.</li>
                    <li>Detect revenue risks and expansion signals early.</li>
                    <li>Build dashboards fueled by real-time intelligence.</li>
                  </ul>
                </>
              )}
              {activeTab === 'Sales' && (
                <>
                  <h3 className="text-2xl font-bold mb-4">Close Deals Faster</h3>
                  <ul className="list-disc list-inside text-[#4b5563] space-y-2">
                    <li>Surface key competitor moves into CRM & Slack.</li>
                    <li>Accelerate deal velocity with fresh context.</li>
                    <li>Win more deals with live updated battlecards.</li>
                  </ul>
                </>
              )}
              {/* Add other tabs similarly... */}
            </div>

            {/* Placeholder image */}
            <div className="flex justify-center">
              <img src="/your-image-placeholder.svg" alt="Relam Revenue Teams" className="w-full max-w-md" />
            </div>
          </div>
        </section>
        <HowRelamWorks />



        {/* Detailed Analysis CTA */}
        <section id="detailed-analysis" className="bg-[#f9fbfd] py-24 px-6" data-animate>
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img src="/analysis-placeholder.png" alt="Custom Report" className="w-full max-w-md rounded-xl" />
            </div>
            <div className="text-left">
              <p className="uppercase text-sm text-[#4b5563] mb-2">Detailed Insights</p>
              <h2 className="text-4xl font-bold text-[#111827] mb-6">
                Get a Tailored Competitive Intelligence Report
              </h2>
              <p className="text-lg text-[#4b5563] mb-8">
                Request a personalized Relam analysis based on your market, accounts, and targets.
              </p>
              <a href="#schedule-call" className="inline-block bg-[#0052cc] hover:bg-[#003d99] text-white px-8 py-4 rounded-lg font-semibold transition">
                Schedule a Call
              </a>
            </div>
          </div>
        </section>
        

        {/* Recent Insights */}
        <section id="recent-insights" className="px-6 py-20 bg-[#f1f5fb] text-center" data-animate>
          <h2 className="text-3xl font-bold text-[#222222] mb-6">Recent Insights</h2>
          <p className="max-w-2xl mx-auto text-[#555555] mb-12">
            Explore our research on market dynamics, competitive trends, and GTM excellence.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
            <BlogCard title="How AI Reshapes Revenue" date="April 2025" description="Discover how context-aware signals change GTM strategy." />
            <BlogCard title="Modern Revenue Enablement" date="March 2025" description="Why actionable competitive signals matter more today." />
            <BlogCard title="Turning Intelligence into Action" date="February 2025" description="From insight to impact: Relam's model explained." />
          </div>
        </section>

        {/* Grow Your Business CTA */}
        <section id="grow-your-business" className="bg-[#f1f5fb] py-20 px-6" data-animate>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10 bg-white rounded-2xl shadow-md p-10">
            <div>
              <h2 className="text-4xl font-bold text-[#222222] mb-4 leading-tight">
                Grow Your Business<br />With Relam.ai
              </h2>
              <p className="text-[#555555] mb-8">
                Try our platform for free — join the Early Access waitlist.
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <a href="#get-started" className="bg-[#0052cc] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#003d99] transition text-center">
                  Get a Demo
                </a>
                <a href="#get-started" className="border border-[#0052cc] text-[#0052cc] px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition text-center">
                  Sign Up Free
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              {/* SVG */}
              <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                <rect x="40" y="200" width="40" height="60" fill="#3B82F6" rx="6" />
                <rect x="110" y="160" width="40" height="100" fill="#6366F1" rx="6" />
                <rect x="180" y="120" width="40" height="140" fill="#60A5FA" rx="6" />
                <path d="M40 200 C100 100, 200 80, 300 120" stroke="#6366F1" strokeWidth="4" fill="none" />
                <polygon points="295,115 305,125 295,125" fill="#6366F1" />
              </svg>
            </div>
          </div>
        </section>

        {/* Waitlist Form */}
        <section id="get-started" className="text-center py-24 bg-black text-white" data-animate>
          <h2 className="text-4xl font-bold">Join the Relam.ai Early Access</h2>
          <p className="mt-4 text-xl">Be the first to transform your revenue intelligence.</p>
          <form className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <input type="email" required placeholder="Your email address" className="px-4 py-3 rounded-lg text-black w-80" />
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold">
              Join Waitlist
            </button>
          </form>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 py-6 bg-gray-100">
          © 2025 Relam.ai — Powered by Contextual AI for Revenue Teams
        </footer>

      </main>
    </div>
  );
}

// ---- Components ----

function FeatureCard({ title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 text-left">
      <h3 className="text-lg font-semibold mb-2 text-[#222222]">{title}</h3>
      <p className="text-sm text-[#555555]">{description}</p>
    </div>
  );
}

function HowItWorksCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h4 className="text-lg font-semibold mb-2 text-[#222222]">{title}</h4>
      <p className="text-sm text-[#555555]">{description}</p>
    </div>
  );
}

function BlogCard({ title, date, description }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-transform p-6 flex flex-col h-full">
      <p className="text-xs text-[#888888] mb-2">{date}</p>
      <h4 className="text-lg font-bold text-[#222222] mb-3">{title}</h4>
      <p className="text-sm text-[#555555] flex-grow">{description}</p>
      <a href="#" className="text-[#0052cc] text-sm font-semibold mt-4 hover:underline">Read More →</a>
    </div>
  );
}


export default App;