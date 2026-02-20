import ProjectCard from '../../Animations/ProjectCard';
import { Database, Layout, Lock, Code2, Globe } from 'lucide-react';

const RidersOfBerk = ({ index }) => {
  return (
    <ProjectCard delay={index * 200}>
      <article className="group bg-white dark:bg-[#1a1a1a] p-8 rounded-3xl border border-gray-200 dark:border-white/5 hover:border-brand/40 transition-all duration-500 h-full flex flex-col shadow-sm dark:shadow-none">
        
        {/* Header : Titre et Type de projet */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-brand transition-colors italic uppercase tracking-tighter">
              Riders of Berk
            </h3>
            <p className="text-brand font-medium text-sm transition-colors">Application Fullstack & Data Storytelling</p>
          </div>
          <span className="text-[9px] bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 px-3 py-1 rounded font-bold uppercase tracking-widest transition-colors">
            SAE 501
          </span>
        </div>
        
        {/* Section Contexte & Utilité */}
        <div className="text-gray-600 dark:text-gray-400 mb-8 space-y-4 transition-colors">
          <p className="text-sm leading-relaxed">
            Ce projet est une plateforme immersive dédiée à l'exploration et à l'analyse des données de l'univers "Dragons". 
            L'enjeu principal était de transformer une base de données complexe en une interface narrative fluide.
          </p>
          <p className="text-sm leading-relaxed">
            Le site fonctionne comme un <strong className="text-gray-900 dark:text-gray-200">CMS dynamique</strong> : gestion CRUD, import CSV, et visualisations de statistiques interactives.
          </p>
        </div>

        {/* Section Compétences */}
        <div className="space-y-4 flex-grow">
          <div className="flex gap-4 p-4 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/5 group-hover:border-brand/10 transition-colors">
            <Code2 className="text-brand shrink-0" size={20} />
            <div>
              <h4 className="text-gray-900 dark:text-white text-xs font-bold uppercase tracking-wider mb-1 italic">Architecture Découplée</h4>
              <p className="text-gray-600 dark:text-gray-400 text-[11px] leading-snug transition-colors">
                Mise en place d'une architecture moderne avec <strong className="text-gray-900 dark:text-gray-200">Symfony 6</strong> et <strong className="text-gray-900 dark:text-gray-200">React</strong>.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-4 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/5 group-hover:border-brand/10 transition-colors">
            <Database className="text-brand shrink-0" size={20} />
            <div>
              <h4 className="text-gray-900 dark:text-white text-xs font-bold uppercase tracking-wider mb-1 italic">Gestion des Données</h4>
              <p className="text-gray-600 dark:text-gray-400 text-[11px] leading-snug transition-colors">
                Conception de la base <strong className="text-gray-900 dark:text-gray-200">MySQL</strong> et agrégation de données statistiques.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-4 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/5 group-hover:border-brand/10 transition-colors">
            <Lock className="text-brand shrink-0" size={20} />
            <div>
              <h4 className="text-gray-900 dark:text-white text-xs font-bold uppercase tracking-wider mb-1 italic">Sécurité & Auth</h4>
              <p className="text-gray-600 dark:text-gray-400 text-[11px] leading-snug transition-colors">
                Gestion de l'authentification <strong className="text-gray-900 dark:text-gray-200">JWT</strong> pour l'accès sécurisé au back-office.
              </p>
            </div>
          </div>
        </div>

        {/* Tags de stack */}
        <div className="flex flex-wrap gap-2 my-8">
          {["Symfony 6", "React", "MySQL", "Tailwind CSS", "API REST"].map((tag) => (
            <span key={tag} className="text-[9px] uppercase tracking-widest bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 px-2 py-1 rounded text-gray-500 dark:text-gray-400 font-bold transition-colors">
              {tag}
            </span>
          ))}
        </div>

        {/* Footer avec lien GitHub */}
        <div className="flex justify-between items-center pt-6 border-t border-gray-100 dark:border-white/5 transition-colors">
          <div className="text-[10px] text-gray-500 dark:text-gray-600 font-mono italic uppercase">
            Projet Universitaire • 2025/2026
          </div>
          
          <a 
            href="https://github.com/GuillemotAlexandre/sae5012_dragons" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-bold text-gray-900 dark:text-white bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 px-5 py-2 rounded-full transition-all group/link border border-gray-200 dark:border-white/10"
          >
            GitHub Repo
            <Code2 size={14} className="group-hover:scale-110 transition-transform text-brand" />
          </a>
        </div>
      </article>
    </ProjectCard>
  );
};

export default RidersOfBerk;