import { styled } from 'styled-components';
import { lightColors } from 'utils/theme';

export const GoogleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
  width: 100%;
  margin-top: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: ${lightColors.blackText};
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.29;
  letter-spacing: -0.28px;
  cursor: pointer;

  background-color: ${lightColors.white};
  outline: none;
  border: 1px solid #dce3e5;
  border-radius: 18px;

  @media screen and (min-width: ${props => props.theme.media.m}) {
    font-size: 18px;
    line-height: 1.33;
    padding-top: 14px;
    padding-bottom: 14px;
  }

  &:hover,
  &:focus {
    box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
  }
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const GoogleIcon = styled.svg`
  stroke: ${lightColors.white};
  height: 24px;
  width: 24px;
  fill: transparent;

  @media screen and (min-width: ${props => props.theme.media.m}) {
    height: 26px;
    width: 26px;
  }
`;
