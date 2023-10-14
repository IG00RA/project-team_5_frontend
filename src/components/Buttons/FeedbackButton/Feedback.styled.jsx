import styled from 'styled-components';

export const FeedbackBtn = styled.button`
  width: 87px;
  height: 32px;
  padding: 8px 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.button.mainBg};
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.33;
  color: ${props => props.theme.colors.button.text};

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.button.hoverBg};
  }
  @media screen and (min-width: 375px) {
    width: 97px;
    height: 32px;
  }
  @media screen and (min-width: 768px) {
    width: 130px;
    height: 42px;
    padding: 12px 32px;
    border-radius: 14px;
    font-size: 14px;
    line-height: 1.29;
  }
`;
