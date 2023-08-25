import styled from 'styled-components';

export const SideBarWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: absolute;
  top: 0;
  z-index: 1;

  padding: 24px 20px;
  
  height: 100vh;
  width: 225px;

  background-color: ${props => props.theme.colors.sideBar.mainBg};

  @media screen and (min-width: 768px) {
    width: 289px;
    padding: 24px 32px;
  }

  @media screen and (min-width: 1440px) {
    position: sticky;
    padding: 32px 24px 24px;
  }

  @media screen and (max-width: 1439px) {
    transform: translateX(-100%);
    transition: transform 350ms ease-in-out;

    &.openModalMenu {
      transform: translateX(0px);
    }
  }
`;

export const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  z-index: 0;
`;

export const StyledTitle = styled.span`
  display: flex;
  flex-direction: row;
  color: ${props => props.theme.colors.sideBar.logoText};
  font-family: 'Coolvetica';
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  text-shadow:
    0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

  @media screen and (min-width: 768px) {
    line-height: 1.33;
  }

  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: 1;
  }
`;

export const SpanSpec = styled.p`
  font-style: italic;
  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 1440px) {
    font-size: 24px;
  }
`;

export const TopWrap = styled.div`
  margin-bottom: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
  }
  @media screen and (min-width: 1440px) {
    display: block;
    margin-bottom: 32px;
  }
`;

export const StyledLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1440px) {
    justify-content: flex-start;
    margin-bottom: 0px;
  }
`;

export const SideBarImg = styled.img`
  margin-right: 6px;
  width: 36px;
  height: 35px;

  @media screen and (min-width: 768px) {
    width: 60px;
    height: 58px;
  }

  @media screen and (min-width: 1440px) {
    margin-right: 10px;
    width: 71px;
    height: 68px;
  }
`;

export const StyledCloseButton = styled.svg`
  width: 24px;
  height: 24px;
  transition: all 250ms;
  stroke: ${props => props.theme.colors.sideBar.mainText};
  fill: transparent;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 34px;
    height: 34px;
  }
  @media screen and (min-width: 1440px) {
    display: none;
  }

  &:hover,
  &:focus {
    stroke: ${props => props.theme.colors.sideBar.accentBg};
    transform: rotate(180deg);
  }
`;