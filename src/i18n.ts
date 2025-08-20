import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import commonES from './locales/es/common.json';
import commonEN from './locales/en/common.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: commonEN },
      es: { common: commonES }
    },
    fallbackLng: 'es',
    ns: ['common'],
    defaultNS: 'common',
  interpolation: { escapeValue: false },
  detection: { order: ['localStorage','navigator'], caches: ['localStorage'] }
  });

export default i18n;
 