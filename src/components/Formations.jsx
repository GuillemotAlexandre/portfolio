import { useTranslation } from 'react-i18next';
import FadeUp from '../Animations/FadeUp';
import { 
  SiReact, SiPhp, SiSymfony, SiJavascript, SiMysql, SiFigma, 
  SiTailwindcss, SiBootstrap, SiLaravel, SiCss3, SiVuedotjs, SiThreedotjs,
  SiAdobephotoshop, SiAdobeillustrator, SiAdobepremierepro, SiTrello
} from 'react-icons/si';
import { DiHtml5 } from 'react-icons/di';
import { RiFileExcel2Fill, RiMindMap } from 'react-icons/ri';
import { TbCube } from 'react-icons/tb'; 

const Formations = () => {
  const { t } = useTranslation();

  const formationData = [
    {
      year: "2023 - 2026",
      degree: t('formations.mmi.degree'),
      institution: "IUT de Blois, Université de Tours",
      specialty: t('formations.mmi.specialty'),
      details: t('formations.mmi.details'),
      poles: [
        t('formations.mmi.pole1'),
        t('formations.mmi.pole2'),
        t('formations.mmi.pole3')
      ],
      technos: [
        { icon: <DiHtml5 className="text-orange-500" />, name: "HTML5" },
        { icon: <SiCss3 className="text-blue-500" />, name: "CSS3" },
        { icon: <SiJavascript className="text-yellow-400" />, name: "JS" },
        { icon: <SiReact className="text-blue-400" />, name: "React" },
        { icon: <SiVuedotjs className="text-green-500" />, name: "Vue.js" },
        { icon: <SiThreedotjs className="text-gray-900 dark:text-white" />, name: "Three.js" },
        { icon: <TbCube className="text-pink-400" />, name: "A-Frame" },
        { icon: <SiPhp className="text-indigo-400" />, name: "PHP" },
        { icon: <SiLaravel className="text-red-500" />, name: "Laravel" },
        { icon: <SiSymfony className="text-gray-900 dark:text-white" />, name: "Symfony" },
        { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind" },
        { icon: <SiBootstrap className="text-purple-500" />, name: "Bootstrap" },
        { icon: <SiMysql className="text-blue-500" />, name: "SQL" },
        { icon: <SiFigma className="text-pink-500" />, name: "Figma" },
        { icon: <SiAdobephotoshop className="text-blue-600" />, name: "Photoshop" },
        { icon: <SiAdobeillustrator className="text-orange-600" />, name: "Illustrator" },
        { icon: <SiAdobepremierepro className="text-purple-800" />, name: "Premiere" },
        { icon: <SiTrello className="text-blue-400" />, name: "Trello" },
        { icon: <RiMindMap className="text-green-400" />, name: "MindView" },
        { icon: <RiFileExcel2Fill className="text-green-600" />, name: "Excel" }
      ]
    },
    {
      year: "2020 - 2023",
      degree: t('formations.bac.degree'),
      institution: t('formations.bac.institution'),
      specialty: t('formations.bac.specialty'),
      details: t('formations.bac.details')
    }
  ];

  return (
    <section id="formations" className="py-20 border-t border-gray-200 dark:border-white/5 transition-colors duration-500">
      <FadeUp>
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 italic tracking-tight">
            {t('formations.section_title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">{t('formations.section_subtitle')}</p>
        </div>
      </FadeUp>

      <div className="space-y-12">
        {formationData.map((form, index) => (
          <FadeUp key={index} delay={index * 150}>
            <div className="relative pl-8 border-l-2 border-brand/20 hover:border-brand transition-all py-2">
              <div className="absolute w-4 h-4 bg-brand rounded-full -left-[9px] top-4 shadow-[0_0_10px_rgba(var(--brand-rgb),0.5)]"></div>
              
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
                <div className="flex-1">
                  <span className="text-brand font-mono text-sm font-bold">{form.year}</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1 transition-colors">{form.degree}</h3>
                  <p className="text-gray-700 dark:text-gray-300 font-medium transition-colors">{form.institution}</p>
                  <p className="text-brand/80 text-sm mt-2 font-semibold italic">{form.specialty}</p>
                  
                  <div className="text-gray-600 dark:text-gray-400 mt-4 text-sm leading-relaxed max-w-2xl transition-colors">
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

                {form.technos && (
                  <div className="grid grid-cols-5 sm:grid-cols-7 lg:grid-cols-4 xl:grid-cols-5 gap-3 bg-white dark:bg-white/5 p-4 rounded-2xl border border-gray-200 dark:border-white/5 h-fit self-start min-w-[220px] shadow-sm dark:shadow-none transition-all">
                    {form.technos.map((tech, i) => (
                      <div key={i} className="group relative flex justify-center">
                        <div className="text-2xl hover:scale-120 transition-transform cursor-help">
                          {tech.icon}
                        </div>
                        <span className="absolute -top-9 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 bg-gray-900 dark:bg-gray-800 text-white text-[10px] px-2 py-1 rounded transition-all whitespace-nowrap z-10 border border-white/10">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
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