import ProjectCard from '../../Animations/ProjectCard';
import { Database, Layout, Lock, Code2, Globe } from 'lucide-react';

const RidersOfBerk = ({ index }) => {
  return (
    <ProjectCard delay={index * 200}>
      <article className="group bg-[#1a1a1a] p-8 rounded-3xl border border-white/5 hover:border-brand/40 transition-all duration-500 h-full flex flex-col">
        
        {/* Header : Titre et Type de projet */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-2xl font-bold text-white group-hover:text-brand transition-colors italic uppercase tracking-tighter">
              Riders of Berk
            </h3>
            <p className="text-brand font-medium text-sm">Application Fullstack & Data Storytelling</p>
          </div>
          <span className="text-[9px] bg-white/5 text-gray-400 border border-white/10 px-3 py-1 rounded font-bold uppercase tracking-widest">
            SAE 501
          </span>
        </div>
        
        {/* Section Contexte & Utilité (Texte fluide) */}
        <div className="text-gray-400 mb-8 space-y-4">
          <p className="text-sm leading-relaxed">
            Ce projet est une plateforme immersive dédiée à l'exploration et à l'analyse des données de l'univers "Dragons". 
            L'enjeu principal était de transformer une base de données complexe en une interface narrative fluide, 
            permettant aux utilisateurs de comparer les espèces et de suivre l'évolution des dresseurs.
          </p>
          <p className="text-sm leading-relaxed">
            Le site fonctionne comme un <strong>CMS dynamique</strong> : il permet aux administrateurs de gérer 
            intégralement le catalogue (CRUD) et d'importer des jeux de données via CSV, tandis que les 
            utilisateurs bénéficient d'une navigation interactive enrichie par des visualisations de statistiques.
          </p>
        </div>

        {/* Section Compétences (Format Blocs de la 2ème image) */}
        <div className="space-y-4 flex-grow">
          <div className="flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 group-hover:border-brand/10 transition-colors">
            <Code2 className="text-brand shrink-0" size={20} />
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-1 italic">Architecture Découplée</h4>
              <p className="text-[11px] leading-snug">
                Mise en place d'une architecture moderne avec <strong>Symfony 6</strong> en mode API et <strong>React</strong> pour une interface utilisateur fluide et réactive.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 group-hover:border-brand/10 transition-colors">
            <Database className="text-brand shrink-0" size={20} />
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-1 italic">Gestion des Données</h4>
              <p className="text-[11px] leading-snug">
                Conception de la base de données relationnelle <strong>MySQL</strong> et implémentation de services pour l'agrégation de données statistiques.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 group-hover:border-brand/10 transition-colors">
            <Lock className="text-brand shrink-0" size={20} />
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-1 italic">Sécurité & Auth</h4>
              <p className="text-[11px] leading-snug">
                Sécurisation des points d'entrée de l'API et gestion de l'authentification des utilisateurs (JWT) pour l'accès au back-office.
              </p>
            </div>
          </div>
        </div>

        {/* Tags de stack */}
        <div className="flex flex-wrap gap-2 my-8">
          {["Symfony 6", "React", "MySQL", "Tailwind CSS", "API REST"].map((tag) => (
            <span key={tag} className="text-[9px] uppercase tracking-widest bg-white/5 border border-white/10 px-2 py-1 rounded text-gray-500 font-bold">
              {tag}
            </span>
          ))}
        </div>

        {/* Footer avec lien GitHub */}
        <div className="flex justify-between items-center pt-6 border-t border-white/5">
          <div className="text-[10px] text-gray-600 font-mono italic uppercase">
            Projet Universitaire • 2024
          </div>
          
          <a 
            href="https://github.com/GuillemotAlexandre/sae5012_dragons" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-bold text-white bg-white/10 hover:bg-white/20 px-5 py-2 rounded-full transition-all group/link border border-white/10"
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