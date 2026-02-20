import ProjectCard from '../../Animations/ProjectCard';
import { Database, Code2, BarChart3, Globe } from 'lucide-react';

const TendanceOrNot = ({ index }) => {
  return (
    <ProjectCard delay={index * 200}>
      <article className="group bg-white dark:bg-[#1a1a1a] p-8 rounded-3xl border border-gray-200 dark:border-white/5 hover:border-brand/40 transition-all duration-500 h-full flex flex-col shadow-sm dark:shadow-none">
        
        {/* Header : Titre et Type de projet */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-brand transition-colors italic uppercase tracking-tighter">
              Tendance or Not
            </h3>
            <p className="text-brand font-medium text-sm transition-colors">Application Web de Sondages</p>
          </div>
          <span className="text-[9px] bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 px-3 py-1 rounded font-bold uppercase tracking-widest transition-colors">
            SAE 301
          </span>
        </div>
        
        {/* Section Contexte & Utilité */}
        <div className="text-gray-600 dark:text-gray-400 mb-8 space-y-4 transition-colors">
          <p className="text-sm leading-relaxed">
            "Tendance or Not" est une plateforme sociale interactive conçue pour permettre aux utilisateurs de créer, partager et voter sur des sondages d'actualité. 
          </p>
          <p className="text-sm leading-relaxed">
            Le site repose sur un système de gestion de profils personnalisés et une interface de vote dynamique pour visualiser les tendances en temps réel.
          </p>
        </div>

        {/* Section Compétences */}
        <div className="space-y-4 flex-grow">
          <div className="flex gap-4 p-4 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/5 group-hover:border-brand/10 transition-colors">
            <Code2 className="text-brand shrink-0" size={20} />
            <div>
              <h4 className="text-gray-900 dark:text-white text-xs font-bold uppercase tracking-wider mb-1 italic">Architecture MVC</h4>
              <p className="text-gray-600 dark:text-gray-400 text-[11px] leading-snug transition-colors">
                Développement en <strong className="text-gray-900 dark:text-gray-200">PHP natif</strong> respectant le pattern MVC pour une séparation nette de la logique métier.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-4 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/5 group-hover:border-brand/10 transition-colors">
            <Database className="text-brand shrink-0" size={20} />
            <div>
              <h4 className="text-gray-900 dark:text-white text-xs font-bold uppercase tracking-wider mb-1 italic">Gestion des Données</h4>
              <p className="text-gray-600 dark:text-gray-400 text-[11px] leading-snug transition-colors">
                Modélisation d'une base <strong className="text-gray-900 dark:text-gray-200">SQL</strong> optimisée pour les relations utilisateurs et l'intégrité des votes.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-4 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/5 group-hover:border-brand/10 transition-colors">
            <BarChart3 className="text-brand shrink-0" size={20} />
            <div>
              <h4 className="text-gray-900 dark:text-white text-xs font-bold uppercase tracking-wider mb-1 italic">Dynamisme & Logique</h4>
              <p className="text-gray-600 dark:text-gray-400 text-[11px] leading-snug transition-colors">
                Implémentation de scripts de calcul pour les résultats et l'affichage des sondages populaires.
              </p>
            </div>
          </div>
        </div>

        {/* Tags de stack */}
        <div className="flex flex-wrap gap-2 my-8">
          {["PHP 8", "SQL", "Architecture MVC", "CSS3"].map((tag) => (
            <span key={tag} className="text-[9px] uppercase tracking-widest bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 px-2 py-1 rounded text-gray-500 dark:text-gray-400 font-bold transition-colors">
              {tag}
            </span>
          ))}
        </div>

        {/* Footer avec lien Alwaysdata */}
        <div className="flex justify-between items-center pt-6 border-t border-gray-100 dark:border-white/5 transition-colors">
          <div className="text-[10px] text-gray-500 dark:text-gray-600 font-mono italic uppercase">
            Projet Universitaire • 2024
          </div>
          
          <a 
            href="https://alexandre-guillemot.alwaysdata.net/sae_301/connexion_user.php" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-bold text-gray-900 dark:text-white bg-gray-100 dark:bg-white/10 hover:bg-brand/20 hover:text-brand px-5 py-2 rounded-full transition-all group/link border border-gray-200 dark:border-white/10 hover:border-brand/30 shadow-md dark:shadow-none"
          >
            Tester l'application
            <Globe size={14} className="group-hover:rotate-12 transition-transform" />
          </a>
        </div>
      </article>
    </ProjectCard>
  );
};

export default TendanceOrNot;