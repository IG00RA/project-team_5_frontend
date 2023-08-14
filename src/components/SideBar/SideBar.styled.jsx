import styled from 'styled-components';
import gooseLogoMobile from '../../images/goose-logo/goose-logo-mobile.webp';

export const GooseLogoImg = styled.img`                                                                                                            
background-image: url(${gooseLogoMobile});`;

export const SideBarWrap = styled.div`
  position: fixed;
  z-index: 999;
  box-sizing: border-box;
  height: 100vh;
  padding: 24px 20px;
  background-color: #ffffff;
  border-right: 1px solid;
  transform: translateX(-100%);
  box-shadow: 0px 0px 7px 1px;

  @media screen and (min-width: 375px) {
    width: 225px;
  }
  @media screen and (min-width: 768px) {
    width: 289px;
    padding: 24px 32px;
  }

  @media screen and (max-width: 1440px) {
    transition: transform 350ms ease-in-out;
    &.openModalMenu {
      transform: translateX(0px);
    }
  }

  @media screen and (min-width: 1440px) {
    position: relative;
    transform: translateX(0px);
    padding: 32px 24px;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  z-index: 1;
`;

export const StyledTitle = styled.span`
  color: #3e85f3;
  margin: 0;
  font-family: 'Coolvetica';
  font-size: 16px;
  line-height: 1.375;
  font-weight: 400;
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }

  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: 1;
  }
`;
export const TopWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const SideBarImg = styled.picture`
  width: 36px;
  height: 35px;

  @media screen and (min-width: 768px) {
    width: 60px;
    height: 58px;
  }

  @media screen and (min-width: 1440px) {
    width: 71px;
    height: 68px;
  }
`;

export const StyledCloseButton = styled.button`
  display: block;
  width: 33px;
  height: 33px;
  transition: all 250ms;
  stroke: #343434;

  @media screen and (min-width: 1440px) {
    display: none;
  }

  &:hover,
  &:focus {
    stroke: #3e85f3;
    transform: rotate(180deg);
  }
`;
