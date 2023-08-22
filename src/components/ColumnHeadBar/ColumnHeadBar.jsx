import sprite from '../../images/svg-sprite/symbol-defs.svg';
import { Icon, IconBtn, Title, Wrapper } from './ColumnHeadBar.styled';

export const ColumnHeadBar = ({ ColumnTitle, openModal }) => {
  return (
    <Wrapper>
      <Title>{ColumnTitle}</Title>
      <IconBtn type="button" onClick={openModal}>
        <Icon>
          <use href={sprite + '#icon-icon-plus'}></use>
        </Icon>
      </IconBtn>
    </Wrapper>
  );
};
