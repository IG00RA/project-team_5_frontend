import styled from 'styled-components';

export const LogoutBtn = styled.button`
  width: 131px;
  height: 46px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  background-color: var(--blue);
  box-shadow: 4px 2px 16px 0px #88a5bf7a;

  &:hover,
  &:focus {
    background-color: #2b78ef;
    box-shadow: 4px 2px 16px 0px #88a5bf7a;
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
  color: var(--white);

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const LogoutIcon = styled.svg`
  width: 18px;
  height: 18px;
  stroke: var(--white);
  fill: transparent;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
