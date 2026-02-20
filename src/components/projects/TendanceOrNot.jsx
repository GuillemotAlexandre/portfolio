import ProjectCard from '../../Animations/ProjectCard';
import { Database, Code2, BarChart3, Globe } from 'lucide-react';

const TendanceOrNot = ({ index }) => {
  return (
    <ProjectCard delay={index * 200}>
      <article className="group bg-[#1a1a1a] p-8 rounded-3xl border border-white/5 hover:border-brand/40 transition-all duration-500 h-full flex flex-col">
        
        {/* Header : Titre et Type de projet */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-2xl font-bold text-white group-hover:text-brand transition-colors italic uppercase tracking-tighter">
              Tendance or Not
            </h3>
            <p className="text-brand font-medium text-sm">Application Web de Sondages</p>
          </div>
          <span className="text-[9px] bg-white/5 text-gray-400 border border-white/10 px-3 py-1 rounded font-bold uppercase tracking-widest">
            SAE 301
          </span>
        </div>
        
        {/* Section Contexte & Utilité (Texte fluide) */}
        <div className="text-gray-400 mb-8 space-y-4">
          <p className="text-sm leading-relaxed">
            "Tendance or Not" est une plateforme sociale interactive conçue pour permettre aux utilisateurs de créer, partager et voter sur des sondages d'actualité. L'objectif principal était de développer un outil communautaire où l'opinion des utilisateurs est transformée en données exploitables.
          </p>
          <p className="text-sm leading-relaxed">
            Le site fonctionne grâce à un système de gestion de profils personnalisés, permettant de suivre l'historique de ses propres publications et de visualiser l'évolution des tendances en temps réel grâce à une interface de vote dynamique.
          </p>
        </div>

        {/* Section Compétences (Format Blocs de la 2ème image) */}
        <div className="space-y-4 flex-grow">
          <div className="flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 group-hover:border-brand/10 transition-colors">
            <Code2 className="text-brand shrink-0" size={20} />
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-1 italic">Architecture MVC</h4>
              <p className="text-[11px] leading-snug">
                Développement structuré en <strong>PHP natif</strong> respectant le pattern Modèle-Vue-Contrôleur pour assurer une séparation claire entre la logique métier et l'interface.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 group-hover:border-brand/10 transition-colors">
            <Database className="text-brand shrink-0" size={20} />
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-1 italic">Gestion des Données</h4>
              <p className="text-[11px] leading-snug">
                Modélisation d'une base de données <strong>SQL</strong> optimisée pour la gestion des relations utilisateurs, des sessions et de l'intégrité des votes.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 group-hover:border-brand/10 transition-colors">
            <BarChart3 className="text-brand shrink-0" size={20} />
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-1 italic">Dynamisme & Logique</h4>
              <p className="text-[11px] leading-snug">
                Implémentation de scripts pour le calcul automatique des résultats et l'affichage des sondages les plus populaires de la plateforme.
              </p>
            </div>
          </div>
        </div>

        {/* Tags de stack */}
        <div className="flex flex-wrap gap-2 my-8">
          {["PHP 8", "SQL", "Architecture MVC", "CSS3"].map((tag) => (
            <span key={tag} className="text-[9px] uppercase tracking-widest bg-white/5 border border-white/10 px-2 py-1 rounded text-gray-500 font-bold">
              {tag}
            </span>
          ))}
        </div>

        {/* Footer avec ton nouveau lien Alwaysdata */}
        <div className="flex justify-between items-center pt-6 border-t border-white/5">
          <div className="text-[10px] text-gray-600 font-mono italic uppercase">
            Projet Universitaire • 2023
          </div>
          
          <a 
            href="https://alexandre-guillemot.alwaysdata.net/sae_301/connexion_user.php" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-bold text-white bg-white/10 hover:bg-brand/20 hover:text-brand px-5 py-2 rounded-full transition-all group/link border border-white/10 hover:border-brand/30 shadow-lg"
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