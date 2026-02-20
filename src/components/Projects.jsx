import { useState } from 'react';
import ProjectCard from '../Animations/ProjectCard';
import ProjectModal from './projects/ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      title: "Stage NIT Sendai (Japon)",
      category: "Neurosciences & International",
      desc: "Analyse physiologique de l'engagement cognitif en immersion.",
      fullDesc: "Développement d'une interface d'analyse d'ondes cérébrales (EEG) et biométrie. Ce stage au Japon m'a permis d'évoluer dans un contexte international, m'imposant de communiquer des données techniques complexes exclusivement en anglais.",
      tags: ["Biométrie", "VR", "Data Analysis"],
      softSkills: ["Collaboration internationale", "Autonomie", "Adaptabilité"],
      link: null,
      images: [], 
      video: null
    },
    {
      title: "Riders of Berk",
      category: "CMS de Data Storytelling",
      desc: "Plateforme web immersive de narration de données.",
      fullDesc: "Plateforme web immersive avec gestion multi-utilisateurs. Inclut un module d'import CSV, une sécurité JWT et un ORM Doctrine. Intégration de scènes 3D via Three.js.",
      tags: ["Symfony 6", "React.js", "Three.js", "API Platform"],
      softSkills: ["Architecture technique", "Rigueur"],
      link: "#",
      images: [],
      video: null
    },
    {
      title: "Tendance or Not",
      category: "Projet Agile (Scrum)",
      desc: "Plateforme hybride style Tinder/Pinterest.",
      fullDesc: "Réalisation d'un site avec système de likes, commentaires et gestion de contenus populaires. Focus sur l'UX design et la gestion de projet via la méthodologie agile Scrum.",
      tags: ["PHP", "SQL", "MVC", "Agilité"],
      softSkills: ["Méthodologie Scrum", "Esprit d'équipe", "Ponctualité"],
      link: "https://alexandre-guillemot.alwaysdata.net/sae_301/connexion_user.php",
      images: [],
      video: null
    }
  ];

  return (
    <section id="projects" className="py-20 border-t border-white/5">
      <h2 className="text-3xl font-bold text-white mb-10 italic">Mes Réalisations</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <div key={index} onClick={() => setSelectedProject(project)} className="cursor-pointer">
            <ProjectCard delay={index * 200}>
              <article className="group bg-[#1a1a1a] p-8 rounded-3xl border border-white/5 hover:border-brand/40 transition-all duration-500 h-full flex flex-col">
                <span className="text-brand text-[10px] uppercase font-bold tracking-widest">{project.category}</span>
                <h3 className="text-xl font-bold text-white mt-2 mb-3 group-hover:text-brand transition-colors">{project.title}</h3>
                <p className="text-gray-400 italic mb-6 flex-grow">{project.desc}</p>
                
                {/* Affichage des Badges Soft Skills pour la valorisation */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.softSkills?.map((skill, i) => (
                    <span key={i} className="text-[10px] font-bold uppercase tracking-wider bg-brand/10 text-brand/80 px-2 py-1 rounded border border-brand/20">
                      {skill}
                    </span>
                  ))}
                </div>

                <button className="text-sm font-bold text-white/50 group-hover:text-white transition-colors text-left">
                  Détails du projet +
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