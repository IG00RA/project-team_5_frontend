import sprite from '../../../images/svg-sprite/symbol-defs.svg';
import { LogoutBtn, LogoutBtnText, LogoutIcon } from './Logout.styled';
import { useTranslation } from 'react-i18next';

const LogoutButton = ({ onClick }) => {
  const { t } = useTranslation();
  return (
    <LogoutBtn type="button" onClick={onClick}>
      <LogoutBtnText>{t('auth.logOut')}</LogoutBtnText>
      <div>
        <LogoutIcon>
          <use href={sprite + '#icon-log-out'} />
        </LogoutIcon>
      </div>
    </LogoutBtn>
  );
};

export default LogoutButton;
