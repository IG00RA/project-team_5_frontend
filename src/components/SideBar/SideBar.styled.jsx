import styled from 'styled-components';

export const SideBarWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 2;
  box-sizing: border-box;
  height: 100vh;
  width: 225px;
  padding: 24px 20px;
  background-color: #ffffff;
  border-right: 1px solid;
  box-shadow: 0px 0px 7px 1px;

  @media screen and (min-width: 768px) {
    width: 289px;
    padding: 32px;
  }

  @media screen and (max-width: 1440px) {
    left: 0;
    transform: translateX(-100%);
    transition: transform 350ms ease-in-out;
    &.openModalMenu {
      display: block;
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
  align-items: center;
  justify-content: center;
  margin-right: 39px;
}
`;

export const StyledLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 64px;
  
  @media (min-width: 768px) {
    margin-bottom: 32px;
}
`;

export const SideBarImg = styled.picture`
  margin-right: 6px;
  width: 36px;
  height: 35px;

  @media screen and (min-width: 768px) {
    margin-right: 10px;
    width: 60px;
    height: 58px;
  }

  @media screen and (min-width: 1440px) {
    margin-right: 10px;
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
