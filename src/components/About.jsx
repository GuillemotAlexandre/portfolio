import TypingEffect from '../Animations/TypingEffect';
import profilePic from '../images/profile.jpg'; 

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 flex flex-col md:flex-row items-center gap-12 border-b border-white/5">
      {/* Photo avec effet de halo */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-brand rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
        <img 
          src={profilePic} 
          alt="Alexandre Guillemot" 
          className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-[#111] shadow-2xl"
        />
      </div>
      
      <div className="text-center md:text-left">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
          Alexandre Guillemot
        </h2>
        
        <div className="text-xl md:text-2xl mb-6 min-h-[1.5em] text-brand font-medium">
          <TypingEffect text="Développeur Web & Gestion de Projet" speed={100} />
        </div>

        {/* Texte issu directement du CV */}
        <div className="space-y-4 text-gray-400 text-lg leading-relaxed max-w-2xl">
          <p>
            Étudiant de 20 ans en deuxième année de BUT Métiers du Multimédia et de l'Internet à l'IUT de Blois. 
            Je suis actuellement à la recherche d'un stage en développement web d'une durée de 15 semaines, 
            du 16 mars au 26 juin 2026.
          </p>
          <p className="text-base italic">
            "Passionné par la création d'interfaces attractives et la mise en place de solutions back-end solides, 
            mon expérience au Japon a renforcé mon autonomie et ma capacité d'adaptation en milieu professionnel international."
          </p>
        </div>

        {/* Atouts / Soft Skills du CV */}
        <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-3 items-center">
          <span className="px-4 py-1 bg-brand/10 border border-brand/20 rounded-full text-brand text-sm font-medium">Organisé</span>
          <span className="px-4 py-1 bg-brand/10 border border-brand/20 rounded-full text-brand text-sm font-medium">Agile (Scrum)</span>
          <span className="px-4 py-1 bg-brand/10 border border-brand/20 rounded-full text-brand text-sm font-medium">Ponctuel</span>
          <span className="px-4 py-1 bg-brand/10 border border-brand/20 rounded-full text-brand text-sm font-medium">Capacité d'adaptation</span>
          
          <a 
            href="/CV_Alexandre_Guillemot.pdf" 
            download="CV_Alexandre_Guillemot.pdf"
            className="ml-2 px-6 py-2 bg-brand hover:bg-brand/80 text-white rounded-full text-sm font-bold transition-all shadow-lg hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <span>Télécharger mon CV</span>
            <span className="text-xs">📥</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;