import FadeUp from '../Animations/FadeUp';

const Services = () => {
  const servicesData = [
    {
      title: "Développement Fullstack",
      description: "Conception d'applications web complètes et performantes. Je maîtrise l'ensemble de la chaîne de production, du Front-end dynamique (React, Vue.js) au Back-end structuré (Symfony, Laravel).",
      icon: "⚡",
      techs: "React • Vue.js • Symfony • Laravel • MySQL"
    },
    {
      title: "Expériences Immersives & 3D Web",
      description: "Création d'interfaces innovantes intégrant des éléments 3D interactifs. Utilisation de Three.js et A-Frame pour proposer des expériences utilisateur uniques directement dans le navigateur.",
      icon: "🥽",
      techs: "Three.js • A-Frame • WebGL • WebVR"
    },
    {
      title: "UI/UX Design & Prototypage",
      description: "Conception d'interfaces centrées sur l'utilisateur. Réalisation de wireframes et de prototypes interactifs haute fidélité sur Figma pour valider l'ergonomie avant le développement.",
      icon: "🎨",
      techs: "Figma • Design System • Prototypage • Ergonomie"
    },
    {
      title: "Gestion de Projet & Méthodes Agiles",
      description: "Organisation et suivi rigoureux des cycles de développement. Utilisation des méthodes Agiles (Scrum) et d'outils de planification pour garantir le respect des objectifs et des délais.",
      icon: "📊",
      techs: "Scrum • Trello • MindView • Git"
    }
  ];

  return (
    <section id="services" className="py-20 border-t border-white/5">
      <FadeUp>
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-2 italic tracking-tight">
            Mes Services
          </h2>
          <p className="text-gray-400">Des solutions techniques et créatives adaptées à vos besoins numériques.</p>
        </div>
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {servicesData.map((service, index) => (
          <FadeUp key={index} delay={index * 150}>
            <div className="p-10 bg-[#1a1a1a] rounded-3xl border border-white/5 hover:border-brand/40 transition-all group h-full flex flex-col justify-between">
              <div>
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform inline-block">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 text-base leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>
              <div className="text-xs text-brand/70 font-mono tracking-widest uppercase border-t border-white/5 pt-6">
                {service.techs}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
};

export default Services;