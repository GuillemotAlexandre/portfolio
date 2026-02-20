const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-10 py-5 bg-black/80 backdrop-blur-md border-b border-white/10">
      <h1 className="text-xl font-bold text-white tracking-tighter">
        AG <span className="text-brand">.</span>
      </h1>
      
      <nav>
        <ul className="flex gap-8 list-none font-medium text-gray-300">
          <li><a href="#about" className="hover:text-brand transition-colors">À propos</a></li>
          <li><a href="#projects" className="hover:text-brand transition-colors">Projets</a></li>
          <li><a href="#contact" className="hover:text-brand transition-colors">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;