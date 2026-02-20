// src/App.jsx
import Navbar from './components/Navbar';
import About from './components/About';
import Formations from './components/Formations';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#111] text-gray-200 font-sans selection:bg-brand selection:text-white overflow-x-hidden">
      <Navbar />
      
      <main className="max-w-5xl mx-auto px-6 w-full">
        {/* Présentation principale avec bouton CV et photo */}
        <About />

        {/* Parcours académique (BUT MMI, Bac STI2D) */}
        <Formations />

        {/* Compétences techniques (Symfony, React, SQL...) */}
        <Skills />

        {/* Ce que tu peux apporter à l'entreprise (Services) */}
        <Services />
        
        {/* Tes réalisations (Japon, Riders of Berk, etc.) */}
        <Projects />

        {/* Ta personnalité (Volley-ball, Culture Japonaise) */}
        <Hobbies />

        {/* Coordonnées et appel à l'action */}
        <Contact />
      </main>

      <footer className="py-12 text-center text-gray-600 text-sm border-t border-white/5">
        <p>© 2026 – Portfolio Alexandre Guillemot</p>
      </footer>
    </div>
  );
}

export default App;