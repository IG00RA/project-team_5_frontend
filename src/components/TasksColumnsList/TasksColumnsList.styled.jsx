import { styled } from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 16px;

  margin-top: 16px;
  padding-bottom: 34px;

  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;

  @media (min-width: 768px) {
    /* overflow: auto;
    white-space: nowrap; */
  }

  @media screen and (min-width: 1440px) {
  }
`;
