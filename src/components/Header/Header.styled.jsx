import styled from 'styled-components';
export const Wrap = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 100px;
 @media (min-width: 768px) {
    margin-bottom: 4rem;
  }

  @media (min-width: 1440px) {
    margin-bottom: 32px;
  }

`;
export const UserWrap = styled.div`
display: flex;
align-items: center;
margin-left: auto;
`;
export const MenuIcon = styled.svg`
fill:transparent;
height: 24px;
width: 24px;

 @media (min-width: 765px) {
    height: 34px;
    width: 34px;
  }
  @media (min-width: 1440px) {
    display: none;
  }
`;
export const Title = styled.h2`
display: none;
 @media (min-width: 1440px) {
    display: block;

    font-weight: 700;
    font-size: 32px;
    text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
      0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
  }
`;
export const MotivationImg = styled.img`
 display: none;

  @media (min-width: 1440px) {
    weight: 64px;
    display: block;
    margin-right: 8px;
  }
`;