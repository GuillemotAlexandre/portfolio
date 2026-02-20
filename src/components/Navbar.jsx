import ThemeToggle from '../Animations/ThemeToggle';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-10 py-5 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
      <h1 className="text-xl font-bold text-gray-900 dark:text-white tracking-tighter">
        AG <span className="text-brand">.</span>
      </h1>
      
      <nav className="flex items-center gap-10">
        <ul className="flex gap-8 list-none font-medium text-gray-600 dark:text-gray-300">
          <li>
            <a href="#about" className="hover:text-brand transition-colors">À propos</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-brand transition-colors">Projets</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-brand transition-colors">Contact</a>
          </li>
        </ul>

        {/* Intégration du bouton de changement de thème */}
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Navbar;