import { X } from 'lucide-react';
import NeurosciencesJapon from './NeurosciencesJapon';
import RidersOfBerk from './RidersOfBerk';
import TendanceOrNot from './TendanceOrNot';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  // Logique pour choisir quel composant afficher
  const renderProjectContent = () => {
    switch (project.title) {
      case "Stage NIT Sendai (Japon)":
        return <NeurosciencesJapon />;
      case "Riders of Berk":
        return <RidersOfBerk />;
      case "Tendance or Not":
        return <TendanceOrNot />;
      default:
        return <p className="text-gray-400 text-center py-10">Détails bientôt disponibles...</p>;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
      <div className="bg-[#1a1a1a] border border-white/10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl relative">
        {/* Bouton Fermer */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-white/5 hover:bg-white/10 rounded-full text-white transition-colors z-10"
        >
          <X size={24} />
        </button>

        <div className="p-8">
          <span className="text-brand text-[10px] uppercase font-bold tracking-widest">{project.category}</span>
          <h2 className="text-3xl font-bold text-white mt-2 mb-8 italic">{project.title}</h2>
          
          <div className="mt-6 text-gray-300">
            {renderProjectContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;