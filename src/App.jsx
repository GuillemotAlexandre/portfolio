// src/App.jsx
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Formations from './components/Formations';
import Skills from './components/Skills';
import Services from './components/Services';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';

function App() {
  return (
    /* On remplace bg-[#111] par bg-gray-50 (clair) et dark:bg-[#111] (sombre) */
    <div className="min-h-screen w-full bg-gray-50 dark:bg-[#111] text-gray-900 dark:text-gray-200 font-sans selection:bg-brand selection:text-white overflow-x-hidden transition-colors duration-500">
      <Navbar />
      
      <main className="max-w-5xl mx-auto px-6 w-full">
        {/* Présentation principale avec bouton CV et photo */}
        <About />

        {/* Tes réalisations (Japon, Riders of Berk, etc.) */}
        <Projects />

        {/* Parcours académique (BUT MMI, Bac STI2D) */}
        <Formations />

        {/* Compétences techniques (Symfony, React, SQL...) */}
        <Skills />

        {/* Ce que tu peux apporter à l'entreprise (Services) */}
        <Services />

        {/* Ta personnalité (Volley-ball, Culture Japonaise) */}
        <Hobbies />

        {/* Coordonnées et appel à l'action */}
        <Contact />
      </main>

      <footer className="py-12 text-center text-gray-500 dark:text-gray-600 text-sm border-t border-gray-200 dark:border-white/5 transition-colors duration-500">
        <p>© 2026 – Portfolio Alexandre Guillemot</p>
      </footer>
    </div>
  );
}

export default App;