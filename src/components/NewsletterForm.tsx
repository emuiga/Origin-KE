'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage('Please enter a valid email address.');
      setIsSubmitting(false);
      return;
    }

    try {
      // TODO: Replace with your actual newsletter signup logic
      // Example: Send to your API endpoint or email service
      console.log('Newsletter signup:', email);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setMessage('Thank you for subscribing! You\'ll be notified when we post new content.');
      setEmail('');
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto px-4">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold mb-2">Stay Updated</h2>
        <p className="text-white/80">Get notified when we publish new articles</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/60 focus:outline-none focus:border-white/40 focus:bg-white/20 transition"
            disabled={isSubmitting}
            required
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-3 bg-white text-[#84a98c] font-medium rounded-md hover:bg-white/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe to Newsletter'}
        </button>
        
        {message && (
          <div className={`text-center text-sm ${message.includes('Thank you') ? 'text-green-300' : 'text-red-300'}`}>
            {message}
          </div>
        )}
      </form>
    </div>
  );
} 