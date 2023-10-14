import sprite from '../../images/svg-sprite/symbol-defs.svg';
import { ButtonToggle } from 'components/ThemeToggler/ThemeToggler.styled';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LangIcon } from './LanguageToggler.styled';

export const LanguageToggler = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const toggleLanguage = () => {
    const changeLanguage = currentLanguage === 'en' ? 'uk' : 'en';
    setCurrentLanguage(changeLanguage);
    i18n.changeLanguage(changeLanguage);
  };

  return (
    <ButtonToggle onClick={toggleLanguage}>
      {currentLanguage === 'uk' ? (
        <LangIcon>
          <use href={sprite + '#icon-united-kingdom'}></use>
        </LangIcon>
      ) : (
        <LangIcon>
          <use href={sprite + '#icon-ukraine'}></use>
        </LangIcon>
      )}
    </ButtonToggle>
  );
};
