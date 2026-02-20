import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importation de tes futurs fichiers de texte
import translationFR from './fr.json';
import translationEN from './en.json';

i18n
  // Détecte automatiquement la langue de l'utilisateur
  .use(LanguageDetector)
  // Connecte i18next à React
  .use(initReactI18next)
  .init({
    resources: {
      fr: {
        translation: translationFR,
      },
      en: {
        translation: translationEN,
      },
    },
    // Langue par défaut si la détection échoue
    fallbackLng: 'fr',
    // Pas besoin d'échapper le contenu (React le fait déjà)
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;