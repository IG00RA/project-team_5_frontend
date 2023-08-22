import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-family: Inter;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;

  color: ${props => props.theme.colors.calendarPage.day.taskCardTitle};
`;

export const IconBtn = styled.button`
  color: ${props => props.theme.colors.calendarPage.day.taskCardTitle};

  transition: color 250ms linear;

  &:hover {
    color: ${props => props.theme.colors.calendarPage.todayBg};
  }
`;

export const Icon = styled.svg`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 24px;
  width: 24px;

  stroke: currentColor;
  fill: transparent;
`;
