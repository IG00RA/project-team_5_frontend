import styled from 'styled-components';

export const LogoutBtn = styled.button`
  width: 131px;
  height: 46px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  background-color: ${props => props.theme.colors.button.mainBg};
  box-shadow: 4px 2px 16px 0px ${props => props.theme.colors.button.shadow};

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.button.hoverBg};
    box-shadow: 4px 2px 16px 0px ${props => props.theme.colors.button.shadow};
  }

  @media screen and (min-width: 768px) {
    width: 141px;
    height: 56px;
    gap: 11px;
  }
`;

export const LogoutBtnText = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;
  color: ${props => props.theme.colors.button.text};

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const LogoutIcon = styled.svg`
  width: 18px;
  height: 18px;
  stroke: ${props => props.theme.colors.button.text};
  fill: transparent;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
