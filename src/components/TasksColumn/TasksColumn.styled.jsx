import { styled } from 'styled-components';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 32px;

  padding: 20px;

  width: 344px;
  min-height: 165px;
  max-height: 568px;
  height: 100%;

  background-color: ${props => props.theme.colors.calendarPage.mainBg};
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.calendarPage.border};
`;
