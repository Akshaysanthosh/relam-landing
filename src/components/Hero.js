import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import confetti from 'canvas-confetti';
import marketingContent from '../marketingContent';
import { validateEmail, submitEmailToWaitlist } from '../utils/emailSubmission';
import { motion } from 'framer-motion';

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
    <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-[#0B0E1C] via-[#101322] to-[#15192f] pt-36 pb-32 px-6 text-center text-white">
      {/* Floating Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute animate-floatSlow top-[-150px] left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-blue-600 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute animate-floatSlower bottom-[-150px] right-[-100px] w-[500px] h-[500px] bg-purple-500 opacity-20 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6"
        >
          {marketingContent.hero.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          className="text-lg md:text-xl text-gray-300 mb-6"
        >
          {marketingContent.hero.subheadline}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-2 text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto mb-10 h-10 relative overflow-hidden"
        >
          <div key={rotatingWords[currentWordIndex].text} className="absolute inset-0 transition-all duration-700 ease-in-out transform animate-slideUp">
            <span className={`${rotatingWords[currentWordIndex].color} font-semibold`}>
              Intelligence on your {rotatingWords[currentWordIndex].text}.
            </span>
          </div>
        </motion.div>

        {success ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-400 font-semibold text-lg"
          >
            {marketingContent.hero.successMsg}
          </motion.p>
        ) : (
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            onSubmit={handleSubmit}
            className="mt-6 flex flex-col sm:flex-row gap-4 justify-center w-full max-w-2xl"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={marketingContent.hero.emailPlaceholder}
              required
              className="px-6 py-4 rounded-full text-black border border-gray-300 w-full sm:w-auto flex-grow focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              disabled={loading}
              className={`flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-8 rounded-full text-lg transition transform hover:scale-105 shadow-md ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
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
          </motion.form>
        )}

        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-red-400 font-medium"
          >
            {error}
          </motion.p>
        )}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 text-sm text-gray-400"
        >
          Get early access to Relam.ai — launching soon 🚀
        </motion.p>
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