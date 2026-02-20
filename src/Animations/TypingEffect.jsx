import { useState, useEffect } from 'react';

const TypingEffect = ({ text, speed = 100, eraseSpeed = 50, pause = 2000 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        // Mode écriture
        if (charIndex < text.length) {
          setDisplayedText((prev) => prev + text.charAt(charIndex));
          setCharIndex((prev) => prev + 1);
        } else {
          // Pause une fois le texte fini
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        // Mode effacement
        if (charIndex > 0) {
          setDisplayedText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          // On repart pour un tour
          setIsDeleting(false);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? eraseSpeed : speed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, text, speed, eraseSpeed, pause]);

  return (
    <span className="text-brand font-medium">
      {displayedText}
      <span className="animate-pulse ml-1">|</span>
    </span>
  );
};

export default TypingEffect;