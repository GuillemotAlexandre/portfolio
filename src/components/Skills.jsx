import { useTranslation } from 'react-i18next';
import FadeUp from '../Animations/FadeUp';

const Skills = () => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      title: t('skills.categories.front'),
      skills: [
        { name: "React.js", level: t('skills.levels.mastered'), percentage: 85 },
        { name: "Vue.js", level: t('skills.levels.inter'), percentage: 60 },
        { name: "Three.js", level: t('skills.levels.notions'), percentage: 45 },
        { name: "A-Frame", level: t('skills.levels.inter'), percentage: 55 },
        { name: "JavaScript", level: t('skills.levels.advanced'), percentage: 80 },
        { name: "HTML5", level: t('skills.levels.expert'), percentage: 95 },
        { name: "CSS3", level: t('skills.levels.expert'), percentage: 95 }
      ]
    },
    {
      title: t('skills.categories.back'),
      skills: [
        { name: "Symfony 6", level: t('skills.levels.mastered'), percentage: 85 },
        { name: "Laravel", level: t('skills.levels.inter'), percentage: 75 },
        { name: "PHP 8", level: t('skills.levels.advanced'), percentage: 80 },
        { name: "SQL / MySQL", level: t('skills.levels.mastered'), percentage: 85 },
        { name: "API Platform", level: t('skills.levels.inter'), percentage: 75 }
      ]
    },
    {
      title: t('skills.categories.tools'),
      skills: [
        { name: "Photoshop", level: t('skills.levels.notions'), percentage: 40 },
        { name: "Illustrator", level: t('skills.levels.notions'), percentage: 40 },
        { name: "Premiere Pro", level: t('skills.levels.notions'), percentage: 40 },
        { name: "Figma", level: t('skills.levels.advanced'), percentage: 80 },
        { name: "MindView", level: t('skills.levels.mastered'), percentage: 85 },
        { name: "Trello", level: t('skills.levels.inter'), percentage: 65 },
        { name: "Tailwind CSS", level: t('skills.levels.inter'), percentage: 70 },
        { name: "Bootstrap", level: t('skills.levels.inter'), percentage: 65 },
        { name: "Git / GitHub", level: t('skills.levels.inter'), percentage: 75 },
        { name: "Excel", level: t('skills.levels.inter'), percentage: 70 }
      ]
    }
  ];

  const softSkills = [
    { title: t('skills.soft.rigor.title'), desc: t('skills.soft.rigor.desc'), icon: "📅" },
    { title: t('skills.soft.adapt.title'), desc: t('skills.soft.adapt.desc'), icon: "🔄" },
    { title: t('skills.soft.team.title'), desc: t('skills.soft.team.desc'), icon: "🤝" },
    { title: t('skills.soft.curiosity.title'), desc: t('skills.soft.curiosity.desc'), icon: "🧠" },
    { title: t('skills.soft.proposal.title'), desc: t('skills.soft.proposal.desc'), icon: "💡" },
    { title: t('skills.soft.empathy.title'), desc: t('skills.soft.empathy.desc'), icon: "👤" },
    { title: t('skills.soft.solving.title'), desc: t('skills.soft.solving.desc'), icon: "🛠️" },
    { title: t('skills.soft.versatility.title'), desc: t('skills.soft.versatility.desc'), icon: "🔧" }
  ];

  return (
    <section id="skills" className="py-20 border-t border-gray-200 dark:border-white/5 transition-colors duration-500">
      <FadeUp>
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 italic tracking-tight">
            {t('skills.title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">{t('skills.subtitle')}</p>
        </div>
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <FadeUp key={index} delay={index * 100}>
            <div className="bg-white dark:bg-[#1a1a1a] p-6 rounded-3xl border border-gray-200 dark:border-white/5 hover:border-brand/40 transition-all h-full group shadow-sm dark:shadow-none">
              <h3 className="text-brand font-bold mb-8 flex items-center gap-2">
                <span className="w-2 h-2 bg-brand rounded-full"></span>
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-end">
                      <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">{skill.name}</span>
                      <span className="text-[10px] text-gray-400 dark:text-gray-500 uppercase font-bold tracking-widest italic">
                        {skill.level}
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-brand rounded-full transition-all duration-1000 ease-out"
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

      <FadeUp delay={400}>
        <div className="mt-20">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-10 text-center italic tracking-wide">
            {t('skills.human_title')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, i) => (
              <div key={i} className="p-6 bg-white dark:bg-white/5 rounded-2xl border border-gray-200 dark:border-white/5 hover:border-brand/30 transition-all text-center group shadow-sm dark:shadow-none">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {skill.icon}
                </div>
                <h4 className="text-gray-900 dark:text-white font-bold mb-2 text-sm">{skill.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-[11px] leading-relaxed">
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