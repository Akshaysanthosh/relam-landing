import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import confetti from 'canvas-confetti';
import marketingContent from '../marketingContent';
import { validateEmail, submitEmailToWaitlist } from '../utils/emailSubmission';

function Hero() {
  const rotatingWords = marketingContent.hero.rotatingWords;

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);



  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    setLoading(true);

    if (!validateEmail(email)) {
      setError(marketingContent.hero.invalidEmailMsg);
      setLoading(false);
      return;
    }

    try {
      await submitEmailToWaitlist(email);
      setSuccess(true);
      setEmail('');

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch (err) {
      console.error('Error saving to Firestore:', err);
      if (err && err.message) {
        setError(`${marketingContent.hero.errorMsg} (${err.message})`);
      } else {
        setError(marketingContent.hero.errorMsg);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 pt-40 pb-32 px-6 text-center">
      {/* Floating Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute animate-floatSlow top-[-100px] left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-blue-500 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute animate-floatSlower bottom-[-150px] right-[-100px] w-[500px] h-[500px] bg-blue-500 opacity-20 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tight mb-4">
          {marketingContent.hero.title}
        </h1>
        <div className="text-lg md:text-xl text-[#6b7280] mb-2">{marketingContent.hero.subheadline}</div>
        <div className="mt-2 text-lg md:text-xl text-[#6b7280] leading-relaxed max-w-2xl mx-auto mb-10 h-10 relative overflow-hidden">
          <div key={rotatingWords[currentWordIndex].text} className="absolute inset-0 transition-all duration-700 ease-in-out transform animate-slideUp">
            <span className={`${rotatingWords[currentWordIndex].color} font-semibold`}>
              Intelligence on your {rotatingWords[currentWordIndex].text}.
            </span>
          </div>
        </div>

        {success ? (
          <p className="text-green-600 font-semibold text-lg">{marketingContent.hero.successMsg}</p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={marketingContent.hero.emailPlaceholder}
              required
              className="px-6 py-4 rounded-full text-black border border-gray-300 w-full sm:w-auto flex-grow focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button 
              type="submit"
              disabled={loading}
              className={`flex items-center justify-center bg-[#0052cc] hover:bg-[#003d99] text-white font-semibold py-4 px-8 rounded-full text-lg transition transform hover:scale-105 shadow-md ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {loading ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                </svg>
              ) : (
                'Join Waitlist'
              )}
            </button>
          </form>
        )}

        {error && (
          <p className="mt-4 text-red-600 font-medium">{error}</p>
        )}

        <p className="mt-4 text-sm text-gray-400">
          Get early access to Relam.ai — launching soon 🚀
        </p>
      </div>

      {/* Tailwind Custom Animations */}
      <style>
        {`
          @keyframes floatSlow {
            0% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-20px) scale(1.05); }
            100% { transform: translateY(0) scale(1); }
          }
          .animate-floatSlow {
            animation: floatSlow 8s ease-in-out infinite;
          }
          @keyframes floatSlower {
            0% { transform: translateY(0) scale(1); }
            50% { transform: translateY(20px) scale(1.05); }
            100% { transform: translateY(0) scale(1); }
          }
          .animate-floatSlower {
            animation: floatSlower 12s ease-in-out infinite;
          }
          @keyframes slideUp {
            0% { transform: translateY(100%); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          .animate-slideUp {
            animation: slideUp 0.7s ease forwards;
          }
        `}
      </style>
    </section>
  );
}

export default Hero;