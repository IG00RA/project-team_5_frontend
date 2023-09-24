import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  margin-bottom: 64px;
  align-items: center;
  width: 100%;

  @media (min-width: 375px) {
    justify-content: space-between;
  }

  @media (min-width: 1440px) {
    margin-bottom: 32px;
  }
`;

export const UserWrap = styled.div`
  display: flex;
  margin-left: 4px;
  align-items: center;

  @media (min-width: 375px) {
    margin-left: auto;
    gap: 18px;
  }

  @media (min-width: 768px) {
    gap: 24px;
  }
`;

export const MenuIcon = styled.svg`
  display: ${({ open }) => (open ? 'none' : 'flex')};
  fill: transparent;
  stroke: ${props => props.theme.colors.header.titleText};
  height: 22px;
  width: 22px;
  cursor: pointer;
  transition: all 250ms ease;
  &:hover,
  &:focus {
    stroke: ${props => props.theme.colors.button.hoverBg};
    transform: rotate(180deg);
  }

  @media (min-width: 375px) {
    height: 24px;
    width: 24px;
  }

  @media (min-width: 765px) {
    height: 34px;
    width: 34px;
  }

  @media (min-width: 1440px) {
    display: none;
  }
`;

export const Title = styled.h2`
  color: ${props => props.theme.colors.header.titleText};
  display: none;
  @media (min-width: 1440px) {
    display: block;
    color: ${props => props.theme.colors.header.titleText};
    font-weight: 700;
    font-size: 32px;
    text-shadow:
      0px 47px 355px rgba(0, 0, 0, 0.07),
      0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
  }
`;

export const MotivationText = styled.p`
  display: none;
  @media (min-width: 1440px) {
    display: block;
    font-family: 'Inter';
    color: ${props => props.theme.colors.header.userText};
    font-weight: 600;
    font-size: 14px;
    line-height: 1.3;
  }
`;

export const AccentText = styled.span`
  color: ${props => props.theme.colors.header.accent};
`;

export const MotivationImg = styled.img`
  display: none;

  @media (min-width: 1440px) {
    weight: 64px;
    display: block;
    margin-right: 8px;
  }
`;
