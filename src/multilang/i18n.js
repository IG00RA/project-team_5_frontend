import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
// import Backend from 'i18next-http-backend';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    lng: localStorage.getItem('i18nextLng') || 'en',
    resources: {
      en: {
        translation: require('./locales/en/translation.json'),
      },
      uk: {
        translation: require('./locales/uk/translation.json'),
      },
    },
  });

export default i18n;
