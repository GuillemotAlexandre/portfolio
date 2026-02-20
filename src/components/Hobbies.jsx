import React from 'react';
import FadeUp from '../Animations/FadeUp';
import { Plane, Map, Volleyball, Gamepad2 } from 'lucide-react';

const Hobbies = () => {
  const hobbies = [
    {
      title: "Volley-ball",
      icon: <Volleyball className="w-8 h-8 text-orange-500 dark:text-orange-400/80" />,
      desc: "Pratiqué en club, ce sport m'a inculqué l'importance de la cohésion d'équipe, de la communication constante et de la réactivité sous pression."
    },
    {
      title: "Culture & Japon",
      icon: <Map className="w-8 h-8 text-emerald-600 dark:text-emerald-400/80" />,
      desc: "Passionné par l'histoire et la culture japonaise. Mon immersion de 3 mois à Sendai a développé ma capacité d'adaptation et mon ouverture d'esprit."
    },
    {
      title: "Ingénierie & Aviation",
      icon: <Plane className="w-8 h-8 text-brand" />,
      desc: "Vif intérêt pour l'ingénierie des véhicules et l'aviation militaire. J'aime analyser la complexité technique et l'évolution de ces systèmes."
    },
    {
      title: "Jeux Vidéo",
      icon: <Gamepad2 className="w-8 h-8 text-purple-600 dark:text-purple-400/80" />,
      desc: "Passionné par les jeux de stratégie et de simulation (War Thunder). Cela me permet d'explorer l'ingénierie et d'aiguiser mon sens tactique."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden transition-colors duration-500" id="hobbies">
      <FadeUp>
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 italic tracking-tighter uppercase transition-colors">
            Hobbies & Passions
          </h2>
          <div className="h-1 w-20 bg-brand rounded-full mb-6 mx-auto md:mx-0" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl italic mx-auto md:mx-0 transition-colors">
            Ce qui nourrit ma curiosité et forge mon esprit d'analyse en dehors du développement web.
          </p>
        </div>
      </FadeUp>

      {/* Grille configurée pour 2 colonnes sur tablette et desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {hobbies.map((hobby, index) => (
          <FadeUp key={hobby.title} delay={index * 100}>
            <div className="group relative bg-white dark:bg-[#1a1a1a] p-10 rounded-[2.5rem] border border-gray-200 dark:border-white/5 hover:border-brand/30 transition-all duration-500 h-full flex flex-col md:flex-row items-center md:items-start gap-6 shadow-sm dark:shadow-none">
              
              {/* Effet de brillance au survol */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem]" />
              
              <div className="relative z-10">
                <div className="mb-2 p-4 bg-gray-100 dark:bg-white/5 rounded-2xl group-hover:scale-110 group-hover:bg-brand/10 transition-all duration-500 inline-block">
                  {hobby.icon}
                </div>
              </div>

              <div className="relative z-10 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 italic group-hover:text-brand transition-colors text-center md:text-left">
                  {hobby.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm text-center md:text-left transition-colors">
                  {hobby.desc}
                </p>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
};

export default Hobbies;