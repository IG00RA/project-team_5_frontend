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
  gap: 18px;

  @media (min-width: 768px) {
    gap: 24px;
  }
`;
export const MenuIcon = styled.svg`
  display: flex;
  fill: transparent;
  stroke: ${props => props.theme.colors.header.titleText};
  height: 24px;
  width: 24px;
  cursor: pointer;

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

    font-weight: 700;
    font-size: 32px;
    text-shadow:
      0px 47px 355px rgba(0, 0, 0, 0.07),
      0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
  }
`;

export const MotivationText = styled.p`
  display: none;
  color: ${props => props.theme.colors.header.userText};

  @media (min-width: 1440px) {
    display: block;
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
