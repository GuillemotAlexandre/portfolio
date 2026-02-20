import { useState, useEffect } from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';

const ThemeToggle = () => {
  // On vérifie s'il y a un thème enregistré, sinon on met "dark" par défaut
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Ajoute une classe temporaire pour la transition douce définie dans ton HTML
    root.classList.add('transition');
    
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }

    // On retire la classe de transition après un court délai
    const timeout = setTimeout(() => {
      root.classList.remove('transition');
    }, 400);

    return () => clearTimeout(timeout);
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-brand hover:bg-white/10 hover:border-brand/40 transition-all duration-300 flex items-center justify-center group"
      aria-label="Changer le thème"
    >
      {isDark ? (
        <HiSun 
          size={20} 
          className="transition-transform duration-500 group-hover:rotate-90 text-yellow-400" 
        />
      ) : (
        <HiMoon 
          size={20} 
          className="transition-transform duration-500 group-hover:-rotate-12 text-indigo-500" 
        />
      )}
    </button>
  );
};

export default ThemeToggle;