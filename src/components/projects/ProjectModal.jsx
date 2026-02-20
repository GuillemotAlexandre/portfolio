import { X } from 'lucide-react';
import NeurosciencesJapon from './NeurosciencesJapon';
import RidersOfBerk from './RidersOfBerk';
import TendanceOrNot from './TendanceOrNot';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  const renderProjectContent = () => {
    switch (project.title) {
      case "Stage NIT Sendai (Japon)":
        return <NeurosciencesJapon />;
      case "Riders of Berk":
        return <RidersOfBerk />;
      case "Tendance or Not":
        return <TendanceOrNot />;
      default:
        return (
          <p className="text-gray-500 dark:text-gray-400 text-center py-10 transition-colors">
            Détails bientôt disponibles...
          </p>
        );
    }
  };

  return (
    /* L'overlay reste sombre (bg-black/90) pour le focus, peu importe le thème */
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm transition-all">
      
      <div className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl relative shadow-2xl transition-colors duration-500">
        
        {/* Bouton Fermer adaptatif */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 rounded-full text-gray-900 dark:text-white transition-all z-10"
        >
          <X size={24} />
        </button>

        <div className="p-8">
          <span className="text-brand text-[10px] uppercase font-bold tracking-widest">{project.category}</span>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-2 mb-8 italic transition-colors">
            {project.title}
          </h2>
          
          {/* Conteneur du contenu spécifique au projet */}
          <div className="mt-6 text-gray-700 dark:text-gray-300 transition-colors">
            {renderProjectContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;