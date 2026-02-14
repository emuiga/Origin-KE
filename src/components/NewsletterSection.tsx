 'use client';

import { useState } from 'react';
import NewsletterForm from './NewsletterForm';

export default function NewsletterSection() {
  const [showNewsletterForm, setShowNewsletterForm] = useState(false);

  const handleNewsletterClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowNewsletterForm(!showNewsletterForm);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex space-x-4 mb-8">
        <a href="https://origintech.substack.com/" className="px-6 py-2 border border-white rounded-md hover:bg-white hover:text-black transition">substack</a>
        <a
  href="https://origintech.substack.com/subscribe"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-2 border border-white rounded-md hover:bg-white hover:text-black transition"
>
          newsletter
        </a>
      </div>
      {showNewsletterForm && <NewsletterForm />}
    </div>
  );
} 