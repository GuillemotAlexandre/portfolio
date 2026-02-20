import { useTranslation } from 'react-i18next';
import ThemeToggle from '../Animations/ThemeToggle';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-10 py-5 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
      <h1 className="text-xl font-bold text-gray-900 dark:text-white tracking-tighter">
        AG <span className="text-brand">.</span>
      </h1>
      
      <nav className="flex items-center gap-10">
        <ul className="hidden md:flex gap-8 list-none font-medium text-gray-600 dark:text-gray-300">
          <li>
            <a href="#about" className="hover:text-brand transition-colors">{t('nav.about')}</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-brand transition-colors">{t('nav.projects')}</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-brand transition-colors">{t('nav.contact')}</a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          {/* Bouton de changement de langue */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-[10px] font-black hover:border-brand/50 hover:text-brand transition-all uppercase tracking-widest text-gray-600 dark:text-gray-400"
            title="Switch Language"
          >
            {i18n.language === 'fr' ? 'EN' : 'FR'}
          </button>

          {/* Bouton de changement de thème */}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;