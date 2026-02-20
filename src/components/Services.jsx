import FadeUp from '../Animations/FadeUp';

const Services = () => {
  const servicesData = [
    {
      title: "Développement Front-end",
      description: "Conception d'interfaces modernes, réactives et performantes avec React.js et Tailwind CSS.",
      icon: "💻"
    },
    {
      title: "Architecture Back-end",
      description: "Développement d'API robustes et gestion de bases de données avec Symfony 6 et PHP.",
      icon: "💾"
    },
    {
      title: "Gestion de Projet Agile",
      description: "Organisation et suivi de projet via la méthode Scrum pour garantir le respect des délais.",
      icon: "⚙️"
    }
  ];

  return (
    <section id="services" className="py-20 border-t border-white/5">
      <FadeUp>
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-2 italic tracking-tight">
            Mes Services
          </h2>
          <p className="text-gray-400">Comment je peux accompagner votre équipe durant mon stage.</p>
        </div>
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <FadeUp key={index} delay={index * 150}>
            <div className="p-8 bg-[#1a1a1a] rounded-3xl border border-white/5 hover:border-brand/40 transition-all group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
};

export default Services;