import { useState } from 'react';
import { useTranslation } from 'react-i18next'; // 1. Import du hook
import ProjectCard from '../Animations/ProjectCard';
import ProjectModal from './projects/ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const { t } = useTranslation(); // 2. Initialisation

  // 3. Utilisation des clés du JSON au lieu du texte en dur
  const projectsData = [
    {
      id: 'sendai', // Utile pour garder un identifiant fixe
      title: t('projects.items.sendai.title'),
      category: t('projects.items.sendai.category'),
      desc: t('projects.items.sendai.desc'),
      fullDesc: t('projects.items.sendai.fullDesc'),
      tags: ["Biométrie", "VR", "Data Analysis"],
      softSkills: t('projects.items.sendai.soft', { returnObjects: true }) || [], 
      link: null,
      images: [], 
      video: null
    },
    {
      id: 'riders',
      title: t('projects.items.riders.title'),
      category: t('projects.items.riders.category'),
      desc: t('projects.items.riders.desc'),
      fullDesc: t('projects.items.riders.fullDesc'),
      tags: ["Symfony 6", "React.js", "Three.js", "API Platform"],
      softSkills: t('projects.items.riders.soft', { returnObjects: true }) || [],
      link: "#",
      images: [],
      video: null
    },
    {
      id: 'tendance',
      title: t('projects.items.tendance.title'),
      category: t('projects.items.tendance.category'),
      desc: t('projects.items.tendance.desc'),
      fullDesc: t('projects.items.tendance.fullDesc'),
      tags: ["PHP", "SQL", "MVC", "Agilité"],
      softSkills: t('projects.items.tendance.soft', { returnObjects: true }) || [],
      link: "https://alexandre-guillemot.alwaysdata.net/sae_301/connexion_user.php",
      images: [],
      video: null
    }
  ];

  return (
    <section id="projects" className="py-20 border-t border-gray-200 dark:border-white/5 transition-colors duration-500">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 italic transition-colors">
        {t('projects.section_title')}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <div key={index} onClick={() => setSelectedProject(project)} className="cursor-pointer">
            <ProjectCard delay={index * 200}>
              <article className="group bg-white dark:bg-[#1a1a1a] p-8 rounded-3xl border border-gray-200 dark:border-white/5 hover:border-brand/40 transition-all duration-500 h-full flex flex-col shadow-sm dark:shadow-none">
                <span className="text-brand text-[10px] uppercase font-bold tracking-widest">{project.category}</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2 mb-3 group-hover:text-brand transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 italic mb-6 flex-grow transition-colors">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.softSkills?.map((skill, i) => (
                    <span key={i} className="text-[10px] font-bold uppercase tracking-wider bg-brand/5 dark:bg-brand/10 text-brand/80 px-2 py-1 rounded border border-brand/10 dark:border-brand/20">
                      {skill}
                    </span>
                  ))}
                </div>

                <button className="text-sm font-bold text-gray-400 dark:text-white/50 group-hover:text-brand dark:group-hover:text-white transition-colors text-left">
                  {t('projects.details_btn')}
                </button>
              </article>
            </ProjectCard>
          </div>
        ))}
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Projects;