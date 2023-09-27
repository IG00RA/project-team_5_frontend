import PropTypes from 'prop-types';
import sprite from '../../images/svg-sprite/symbol-defs.svg';
import { Btn, Icon } from './AddTaskBtn.styled';
import { useTranslation } from 'react-i18next';

export const AddTaskBtn = ({ openModal }) => {
  const { t } = useTranslation();
  return (
    <Btn type="button" onClick={openModal}>
      <Icon>
        <use href={sprite + '#icon-plus'}></use>
      </Icon>
      {t('tasks.addTask')}
    </Btn>
  );
};

AddTaskBtn.propTypes = {
  openModal: PropTypes.func.isRequired,
};
