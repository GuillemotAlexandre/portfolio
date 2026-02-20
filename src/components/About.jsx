import { useTranslation } from 'react-i18next'; // Importation
import TypingEffect from '../Animations/TypingEffect';
import profilePic from '../images/profile.jpg'; 

const About = () => {
  const { t } = useTranslation(); // Initialisation

  return (
    <section id="about" className="py-20 md:py-32 flex flex-col md:flex-row items-center gap-12 border-b border-gray-200 dark:border-white/5 transition-colors duration-500">
      <div className="relative group">
        <div className="absolute -inset-1 bg-brand rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
        <img 
          src={profilePic} 
          alt={t('about.name')} 
          className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-gray-50 dark:border-[#111] shadow-2xl transition-colors duration-500"
        />
      </div>
      
      <div className="text-center md:text-left">
        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight transition-colors duration-500">
          {t('about.name')}
        </h2>
        
        <div className="text-xl md:text-2xl mb-6 min-h-[1.5em] text-brand font-medium">
          {/* Note: Pour TypingEffect, on passe la traduction directe */}
          <TypingEffect text={t('about.job')} speed={100} />
        </div>

        <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-2xl transition-colors duration-500">
          <p>{t('about.p1')}</p>
          <p>{t('about.p2')}</p>
          <p>{t('about.p3')}</p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-3 items-center">
          <span className="px-4 py-1 bg-brand/10 border border-brand/20 rounded-full text-brand text-sm font-medium">{t('about.skills.organized')}</span>
          <span className="px-4 py-1 bg-brand/10 border border-brand/20 rounded-full text-brand text-sm font-medium">{t('about.skills.agile')}</span>
          <span className="px-4 py-1 bg-brand/10 border border-brand/20 rounded-full text-brand text-sm font-medium">{t('about.skills.punctual')}</span>
          <span className="px-4 py-1 bg-brand/10 border border-brand/20 rounded-full text-brand text-sm font-medium">{t('about.skills.adaptation')}</span>
          
          <a 
            href="/CV_Alexandre_Guillemot.pdf" 
            download="CV_Alexandre_Guillemot.pdf"
            className="ml-2 px-6 py-2 bg-brand hover:bg-brand/80 text-white rounded-full text-sm font-bold transition-all shadow-lg hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <span>{t('about.cv_button')}</span>
            <span className="text-xs">📥</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;