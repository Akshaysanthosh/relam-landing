import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import DataOverview from './components/DataOverview';
import HowRelamWorks from './components/HowRelamWorks';
import UseCases from './components/UseCases';
import DetailedAnalysisCTA from './components/DetailedAnalysisCTA';
import RecentInsights from './components/RecentInsights';
import GrowYourBusinessCTA from './components/GrowYourBusinessCTA';
import WaitlistForm from './components/WaitlistForm';
import Footer from './components/Footer';
import TransitionBanner from './components/TransitionBanner';
import Usecase from './components/Usecase';
import Solutions from './components/Solutions';




function App() {
  return (
    <div className="relative bg-[#ffffff] min-h-screen text-black font-sans overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <TransitionBanner/>
        <Features />
        <Usecase />
        <HowRelamWorks />
        < Solutions />
        <DetailedAnalysisCTA />
        <RecentInsights />
        <GrowYourBusinessCTA />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;