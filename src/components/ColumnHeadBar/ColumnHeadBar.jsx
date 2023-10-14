import PropTypes from 'prop-types';
import sprite from '../../images/svg-sprite/symbol-defs.svg';
import { Icon, IconBtn, Title, Wrapper } from './ColumnHeadBar.styled';
import { useTranslation } from 'react-i18next';

export const ColumnHeadBar = ({ ColumnTitle, openModal }) => {
  const { t } = useTranslation();
  const translateColumnTitle = title => {
    switch (title) {
      case 'To do':
        return t('To_do');
      case 'In progress':
        return t('In_progress');
      case 'Done':
        return t('Done');
      default:
        return 'To do';
    }
  };
  return (
    <Wrapper>
      <Title>{translateColumnTitle(ColumnTitle)}</Title>
      <IconBtn type="button" onClick={openModal}>
        <Icon>
          <use href={sprite + '#icon-icon-plus'}></use>
        </Icon>
      </IconBtn>
    </Wrapper>
  );
};

ColumnHeadBar.propTypes = {
  ColumnTitle: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};
