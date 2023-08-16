import { Icon, Title, Wrapper } from "./ColumnHeadBar.styled";

export const ColumnHeadBar = ({title}) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Icon>+</Icon>
    </Wrapper>
  );
};