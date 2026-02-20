import ProjectCard from '../../Animations/ProjectCard';
import { ExternalLink, Brain, Activity, Globe } from 'lucide-react';

const NeurosciencesJapon = ({ index }) => {
  return (
    <ProjectCard delay={index * 200}>
      <article className="group bg-[#1a1a1a] p-8 rounded-3xl border border-white/5 hover:border-brand/40 transition-all duration-500 h-full flex flex-col">
        
        {/* Header : Titre et Localisation + Badge International */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-2xl font-bold text-white group-hover:text-brand transition-colors italic">
              Neurosciences & Engagement Cognitif
            </h3>
            <p className="text-brand font-medium text-sm">NIT Sendai College • Japon</p>
          </div>
          {/* Logo rouge avec texte International à droite */}
          <div className="flex items-center gap-2">
            <Globe className="text-red-500/50" size={24} />
            <span className="text-[10px] text-red-500/70 font-bold uppercase tracking-widest border-l border-red-500/20 pl-2">
              International
            </span>
          </div>
        </div>
        
        {/* Corps du projet */}
        <div className="text-gray-400 mb-8 space-y-6 flex-grow">
          <p className="text-sm leading-relaxed">
            Stage de recherche de 3 mois visant à quantifier l'engagement des étudiants selon le format d'apprentissage (VR, Vidéo, Texte) via des données biométriques en temps réel.
          </p>

          <div className="space-y-4">
            <div className="flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 group-hover:border-brand/10 transition-colors">
              <Brain className="text-brand shrink-0" size={20} />
              <div>
                <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-1">Interprétation EEG</h4>
                <p className="text-xs">
                  Analyse des ondes <strong>Alpha</strong> (calme), <strong>Beta</strong> (concentration) et <strong>Gamma</strong> (engagement profond) pour évaluer la charge cognitive.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 group-hover:border-brand/10 transition-colors">
              <Activity className="text-brand shrink-0" size={20} />
              <div>
                <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-1">Analyse Biométrique & IA</h4>
                <p className="text-xs">
                  Corrélation entre variabilité du rythme cardiaque et stress. Utilisation de l'IA pour transformer les signaux bruts en cartographies cérébrales exploitables.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {["Data Analysis", "Neuroscience Basics", "English Communication", "VR Research"].map((tag) => (
            <span key={tag} className="text-[9px] uppercase tracking-widest bg-brand/5 border border-brand/10 px-2 py-1 rounded text-brand/80">
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center pt-6 border-t border-white/5">
          <span className="text-[10px] text-gray-600 font-mono italic uppercase">Avril — Juin 2025</span>
          
          <a 
            href="https://www.canva.com/design/DAGrhyu0VfI/YHoO-cQko_0VBSsAyuIyKA/view" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-bold text-white bg-brand/20 hover:bg-brand px-4 py-2 rounded-full transition-all group/link"
          >
            Voir le rapport
            <ExternalLink size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </article>
    </ProjectCard>
  );
};

// CETTE LIGNE CORRIGE L'ERREUR D'IMPORT DANS PROJECTMODAL
export default NeurosciencesJapon;