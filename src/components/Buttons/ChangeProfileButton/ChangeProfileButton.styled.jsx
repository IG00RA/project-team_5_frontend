import styled from 'styled-components';

export const Button = styled.button`
  width: 195px;
  height: 46px;
  margin-top: 40px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--blue);
  box-shadow: 4px 2px 16px 0px #88a5bf7a;

  &:hover,
  &:focus {
    background-color: #2b78ef;
    box-shadow: 4px 2px 16px 0px #88a5bf7a;
  }

  &:disabled {
    background-color: var(--greyElements);
    box-shadow: none;

    p {
      color: var(--blackText);
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
  color: var(--white);

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;
