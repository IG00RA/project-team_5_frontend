import sprite from '../../images/svg-sprite/symbol-defs.svg';
import { Icon, Title, Wrapper } from "./ColumnHeadBar.styled";

export const ColumnHeadBar = ({ title }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <button type='button'>
        <Icon>
          <use href={sprite + '#icon-plus'}></use>
        </Icon>
      </button>
    </Wrapper>
  );
};