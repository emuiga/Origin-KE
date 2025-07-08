'use client';

import { useState } from 'react';

interface NewsletterButtonProps {
  onToggle: (show: boolean) => void;
}

export default function NewsletterButton({ onToggle }: NewsletterButtonProps) {
  const [showNewsletterForm, setShowNewsletterForm] = useState(false);

  const handleNewsletterClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const newState = !showNewsletterForm;
    setShowNewsletterForm(newState);
    onToggle(newState);
  };

  return (
    <button 
      onClick={handleNewsletterClick}
      className="px-6 py-2 border border-white rounded-md hover:bg-white hover:text-black transition"
    >
      newsletter
    </button>
  );
} 