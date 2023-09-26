import styled from 'styled-components';

export const LangIcon = styled.svg`
  width: 21px;
  height: 21px;

  @media screen and (min-width: ${props => props.theme.media.m}) {
    height: 28px;
    width: 28px;
  }
`;
