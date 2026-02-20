import FadeUp from '../Animations/FadeUp';

const Skills = () => {
  const skillCategories = [
    {
      title: "Développement Front-end",
      skills: [
        { name: "React.js", level: "Maîtrisé", percentage: 85 },
        { name: "Vue.js", level: "Intermédiaire", percentage: 60 },
        { name: "Three.js", level: "Notions", percentage: 45 },
        { name: "A-Frame", level: "Intermédiaire", percentage: 55 },
        { name: "JavaScript", level: "Avancé", percentage: 80 },
        { name: "HTML5", level: "Expert", percentage: 95 },
        { name: "CSS3", level: "Expert", percentage: 95 }
      ]
    },
    {
      title: "Architecture Back-end",
      skills: [
        { name: "Symfony 6", level: "Maîtrisé", percentage: 85 },
        { name: "Laravel", level: "Intermédiaire", percentage: 75 },
        { name: "PHP 8", level: "Avancé", percentage: 80 },
        { name: "SQL / MySQL", level: "Maîtrisé", percentage: 85 },
        { name: "API Platform", level: "Intermédiaire", percentage: 75 }
      ]
    },
    {
      title: "Outils & Design",
      skills: [
        { name: "Photoshop", level: "Notions", percentage: 40 },
        { name: "Illustrator", level: "Notions", percentage: 40 },
        { name: "Premiere Pro", level: "Notions", percentage: 40 },
        { name: "Figma", level: "Avancé", percentage: 80 },
        { name: "MindView", level: "Maîtrisé", percentage: 85 },
        { name: "Trello", level: "Intermédiaire", percentage: 65 },
        { name: "Tailwind CSS", level: "Intermédiaire", percentage: 70 },
        { name: "Bootstrap", level: "Intermédiaire", percentage: 65 },
        { name: "Git / GitHub", level: "Intermédiaire", percentage: 75 },
        { name: "Excel", level: "Intermédiaire", percentage: 70 }
      ]
    }
  ];

  const softSkills = [
    { 
      title: "Rigueur & Organisation", 
      desc: "Gestion structurée des projets via Trello et MindView pour garantir le respect des deadlines.", 
      icon: "📅" 
    },
    { 
      title: "Adaptabilité", 
      desc: "Capacité à monter rapidement en compétence sur de nouveaux environnements technologiques.", 
      icon: "🔄" 
    },
    { 
      title: "Esprit d'équipe", 
      desc: "Collaborateur actif en mode Agile, favorisant la communication et l'entraide technique.", 
      icon: "🤝" 
    },
    { 
      title: "Curiosité Technique", 
      desc: "Veille constante sur l'innovation web et les nouvelles interactions numériques.", 
      icon: "🧠" 
    },
    { 
      title: "Force de proposition", 
      desc: "Capacité à suggérer des améliorations créatives et techniques pour optimiser les projets.", 
      icon: "💡" 
    },
    { 
      title: "Empathie Utilisateur", 
      desc: "Approche centrée sur l'humain pour concevoir des interfaces intuitives et accessibles.", 
      icon: "👤" 
    },
    { 
      title: "Résolution de problèmes", 
      desc: "Approche méthodique et calme face aux défis techniques et aux bugs complexes.", 
      icon: "🛠️" 
    },
    { 
      title: "Polyvalence", 
      desc: "Aisance à naviguer entre le design graphique, le développement front et le back-end.", 
      icon: "🔧" 
    }
  ];

  return (
    <section id="skills" className="py-20 border-t border-white/5">
      <FadeUp>
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-2 italic tracking-tight">
            Compétences Techniques
          </h2>
          <p className="text-gray-400">Mon arsenal technologique pour le développement web.</p>
        </div>
      </FadeUp>

      {/* Grille des compétences techniques */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <FadeUp key={index} delay={index * 100}>
            <div className="bg-[#1a1a1a] p-6 rounded-3xl border border-white/5 hover:border-brand/20 transition-all h-full group">
              <h3 className="text-brand font-bold mb-8 flex items-center gap-2">
                <span className="w-2 h-2 bg-brand rounded-full"></span>
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-end">
                      <span className="text-gray-300 font-medium text-sm">{skill.name}</span>
                      <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest italic">
                        {skill.level}
                      </span>
                    </div>
                    
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-brand rounded-full transition-all duration-1000 ease-out group-hover:bg-brand/80"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>

      {/* Section Soft Skills étendue */}
      <FadeUp delay={400}>
        <div className="mt-20">
          <h3 className="text-xl font-bold text-white mb-10 text-center italic tracking-wide">
            Compétences Humaines
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, i) => (
              <div key={i} className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-brand/30 transition-all text-center group">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {skill.icon}
                </div>
                <h4 className="text-white font-bold mb-2 text-sm">{skill.title}</h4>
                <p className="text-gray-400 text-[11px] leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </FadeUp>
    </section>
  );
};

export default Skills;