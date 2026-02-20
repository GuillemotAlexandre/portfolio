import FadeUp from '../Animations/FadeUp';

const Formations = () => {
  const formationData = [
    {
      year: "2023 - 2026",
      degree: "BUT Métiers du Multimédia et de l'Internet (MMI)",
      institution: "IUT de Blois, Université de Tours",
      specialty: "Parcours Développement Web et Dispositifs Interactifs",
      details: "Formation pluridisciplinaire structurée autour de 3 pôles majeurs :",
      poles: [
        "Développement : Programmation Fullstack (PHP/Symfony, JS/React), bases de données SQL.",
        "Design : Conception d'interfaces (UI), expérience utilisateur (UX) et prototypage sur Figma.",
        "Gestion & Com : Méthodologies Agiles (Scrum), stratégie de communication et gestion de projet."
      ]
    },
    {
      year: "2020 - 2023",
      degree: "Baccalauréat STI2D",
      institution: "Lycée Claude de France, Romorantin-Lanthenay",
      specialty: "Systèmes d'Information et Numérique (SIN)",
      details: "Diplôme obtenu avec Mention Bien. Bases solides en algorithmique, réseaux et systèmes numériques."
    }
  ];

  return (
    <section id="formations" className="py-20 border-t border-white/5">
      <FadeUp>
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-2 italic tracking-tight">
            Mon Parcours Académique
          </h2>
          <p className="text-gray-400">Une formation technique et créative axée sur le numérique.</p>
        </div>
      </FadeUp>

      <div className="space-y-12">
        {formationData.map((form, index) => (
          <FadeUp key={index} delay={index * 150}>
            <div className="relative pl-8 border-l-2 border-brand/20 hover:border-brand transition-colors py-2">
              <div className="absolute w-4 h-4 bg-brand rounded-full -left-[9px] top-4 shadow-[0_0_10px_rgba(var(--brand-rgb),0.5)]"></div>
              
              <span className="text-brand font-mono text-sm font-bold">{form.year}</span>
              <h3 className="text-xl font-bold text-white mt-1">{form.degree}</h3>
              <p className="text-gray-300 font-medium">{form.institution}</p>
              
              <p className="text-brand/80 text-sm mt-2 font-semibold italic">{form.specialty}</p>
              
              <div className="text-gray-400 mt-4 text-sm leading-relaxed max-w-2xl">
                <p className="mb-2">{form.details}</p>
                {form.poles && (
                  <ul className="list-none space-y-1 ml-2">
                    {form.poles.map((pole, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-brand mr-2">▹</span>
                        {pole}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
};

export default Formations;