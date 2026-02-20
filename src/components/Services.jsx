import { useTranslation } from 'react-i18next';
import FadeUp from '../Animations/FadeUp';

const Services = () => {
  const { t } = useTranslation();

  const servicesData = [
    {
      title: t('services.items.fullstack.title'),
      description: t('services.items.fullstack.desc'),
      icon: "⚡",
      techs: "React • Vue.js • Symfony • Laravel • MySQL"
    },
    {
      title: t('services.items.immersive.title'),
      description: t('services.items.immersive.desc'),
      icon: "🥽",
      techs: "Three.js • A-Frame • WebGL • WebVR"
    },
    {
      title: t('services.items.design.title'),
      description: t('services.items.design.desc'),
      icon: "🎨",
      techs: "Figma • Design System • Prototypage"
    },
    {
      title: t('services.items.management.title'),
      description: t('services.items.management.desc'),
      icon: "📊",
      techs: "Scrum • Trello • MindView • Git"
    }
  ];

  return (
    <section id="services" className="py-20 border-t border-gray-200 dark:border-white/5 transition-colors duration-500">
      <FadeUp>
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 italic tracking-tight">
            {t('services.title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {t('services.subtitle')}
          </p>
        </div>
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {servicesData.map((service, index) => (
          <FadeUp key={index} delay={index * 150}>
            <div className="p-10 bg-white dark:bg-[#1a1a1a] rounded-3xl border border-gray-200 dark:border-white/5 hover:border-brand/40 transition-all group h-full flex flex-col justify-between shadow-sm dark:shadow-none">
              <div>
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform inline-block">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>
              <div className="text-xs text-brand/70 font-mono tracking-widest uppercase border-t border-gray-100 dark:border-white/5 pt-6">
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