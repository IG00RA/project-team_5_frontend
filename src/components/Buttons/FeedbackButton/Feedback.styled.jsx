import styled from 'styled-components';

export const FeedbackBtn = styled.button`
  width: 97px;
  height: 32px;
  padding: 8px 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--blue);
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.33;
  color: var(--white);

  &:hover,
  &:focus {
    background-color: #2b78ef;
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
