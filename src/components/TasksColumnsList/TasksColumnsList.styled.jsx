import { styled } from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 16px;
  flex-basis: calc((100% - 16px) / 3);
  width: 100%;

  margin-top: 16px;
  padding-bottom: 34px;

  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;

  @media (min-width: 768px) {
    overflow: auto;
    white-space: nowrap;
  }
`;
