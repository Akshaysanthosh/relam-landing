import React, { useState } from 'react';
import marketingContent from '../marketingContent';
import { validateEmail, submitEmailToWaitlist } from '../utils/emailSubmission';

function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');



  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!validateEmail(email)) {
      setError(marketingContent.waitlistForm.invalidEmailMsg);
      return;
    }

    try {
      await submitEmailToWaitlist(email);
      setSuccess(true);
      setEmail('');
    } catch (err) {
      console.error('Error saving to Firestore:', err);
      if (err && err.message) {
        setError(`${marketingContent.waitlistForm.errorMsg} (${err.message})`);
      } else {
        setError(marketingContent.waitlistForm.errorMsg);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="get-started" className="text-center py-24 bg-black text-white" data-animate>
      <h2 className="text-4xl font-bold">{marketingContent.waitlistForm.title}</h2>
      <p className="mt-4 text-xl">{marketingContent.waitlistForm.subtitle}</p>
      <form onSubmit={handleSubmit} className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={marketingContent.waitlistForm.emailPlaceholder}
          className="px-4 py-3 rounded-lg text-black w-80"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
        >
          {marketingContent.waitlistForm.cta}
        </button>
      </form>

      {error && <p className="text-red-500 mt-4">{error}</p>}
      {success && <p className="text-green-500 mt-4">{marketingContent.waitlistForm.successMsg}</p>}
    </section>
  );
}

export default WaitlistForm;