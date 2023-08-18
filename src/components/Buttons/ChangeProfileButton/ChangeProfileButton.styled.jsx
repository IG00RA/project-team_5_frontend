import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  width: 195px;
  height: 46px;
  margin-top: 22px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.button.mainBg};

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.button.hoverBg};
  }

  &:disabled {
    background-color: ${props => props.theme.colors.button.bgDisabled};
    box-shadow: none;

    p {
      color: ${props => props.theme.colors.button.textDisabled};
    }
  }

  @media screen and (min-width: 768px) {
    width: 262px;
    height: 48px;
  }
`;

export const Text = styled.p`
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

export const CastomLoader = styled.div`
  position: relative;
  bottom: 20px;
  transform: scale(0.4);
`;
