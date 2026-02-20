import { useState, useEffect } from 'react';

const TypingEffect = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  // --- AJOUT : Réinitialisation quand le texte change ---
  useEffect(() => {
    setDisplayedText('');
    setIndex(0);
  }, [text]);
  // ------------------------------------------------------

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <span className="text-brand font-medium">
      {displayedText}
      <span className="animate-pulse ml-1">|</span>
    </span>
  );
};

export default TypingEffect;