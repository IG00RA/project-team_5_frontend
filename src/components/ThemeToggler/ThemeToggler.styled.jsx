import styled from 'styled-components';
import { ReactComponent as Moon } from '../../images/svg/moon.svg';
import { ReactComponent as Sun } from '../../images/svg/sun.svg';

export const MoonSVG = styled(Moon)`
  width: 24px;
  height: 24px;

  @media screen and (min-width: ${props => props.theme.media.m}) {
    height: 32px;
    width: 32px;
  }
`;
export const SunSVG = styled(Sun)`
  width: 24px;
  height: 24px;

  @media screen and (min-width: ${props => props.theme.media.m}) {
    height: 32px;
    width: 32px;
  }
`;
export const ButtonToggle = styled.button`
  outline: none;
  border: 0;
  background-color: inherit;
  cursor: pointer;

  transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    scale: 1.1;
  }
`;
