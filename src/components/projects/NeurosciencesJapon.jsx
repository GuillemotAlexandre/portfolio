import { useTranslation } from 'react-i18next';
import ProjectCard from '../../Animations/ProjectCard';
import { ExternalLink, Brain, Activity, Globe } from 'lucide-react';

const NeurosciencesJapon = ({ index }) => {
  const { t } = useTranslation();

  return (
    <ProjectCard delay={index * 200}>
      <article className="group bg-white dark:bg-[#1a1a1a] p-8 rounded-3xl border border-gray-200 dark:border-white/5 hover:border-brand/40 transition-all duration-500 h-full flex flex-col shadow-sm dark:shadow-none">
        
        {/* Header : Titre et Localisation + Badge International */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-brand transition-colors italic">
              {t('project_japon.title')}
            </h3>
            <p className="text-brand font-medium text-sm">{t('project_japon.location')}</p>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="text-red-500/50" size={24} />
            <span className="text-[10px] text-red-500/70 font-bold uppercase tracking-widest border-l border-red-500/20 pl-2">
              {t('project_japon.badge')}
            </span>
          </div>
        </div>
        
        {/* Corps du projet */}
        <div className="text-gray-600 dark:text-gray-400 mb-8 space-y-6 flex-grow transition-colors">
          <p className="text-sm leading-relaxed">
            {t('project_japon.main_desc')}
          </p>

          <div className="space-y-4">
            <div className="flex gap-4 p-4 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/5 group-hover:border-brand/10 transition-colors">
              <Brain className="text-brand shrink-0" size={20} />
              <div>
                <h4 className="text-gray-900 dark:text-white text-xs font-bold uppercase tracking-wider mb-1">
                  {t('project_japon.eeg_title')}
                </h4>
                <p className="text-xs">
                  {t('project_japon.eeg_desc')}
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/5 group-hover:border-brand/10 transition-colors">
              <Activity className="text-brand shrink-0" size={20} />
              <div>
                <h4 className="text-gray-900 dark:text-white text-xs font-bold uppercase tracking-wider mb-1">
                   {t('project_japon.bio_title')}
                </h4>
                <p className="text-xs">
                  {t('project_japon.bio_desc')}
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
        <div className="flex justify-between items-center pt-6 border-t border-gray-100 dark:border-white/5">
          <span className="text-[10px] text-gray-500 dark:text-gray-600 font-mono italic uppercase">
            {t('project_japon.date')}
          </span>
          
          <a 
            href="https://www.canva.com/design/DAGrhyu0VfI/YHoO-cQko_0VBSsAyuIyKA/view" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-bold text-white bg-gray-900 dark:bg-brand/20 hover:bg-brand px-4 py-2 rounded-full transition-all group/link shadow-md dark:shadow-none"
          >
            {t('project_japon.btn_report')}
            <ExternalLink size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </article>
    </ProjectCard>
  );
};

export default NeurosciencesJapon;