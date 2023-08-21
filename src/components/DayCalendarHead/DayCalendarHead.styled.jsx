import { styled } from 'styled-components';

export const DayCalendarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 14px 18px 14px 18px;

  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.calendarPage.border};
  background-color: ${props => props.theme.colors.calendarPage.mainBg};

  @media screen and (min-width: 768px) {
    padding: 10px 46px 10px 46px;
  }

  @media screen and (min-width: 1440px) {
    padding: 10px 46px 10px 46px;
  }
`;

export const DayCalendarBtn = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  font-family: Inter;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.12;

  text-transform: uppercase;

  color: ${props => props.theme.colors.calendarPage.day.dayName};

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28;
  }
`;

export const NumberDay = styled.div`
  padding: 4px 6px;

  font-size: 12px;
  line-height: calc(14 / 12);
  font-weight: 700;

  border-radius: 8px;
  color: ${props =>
    props.$currentday === props.$day
      ? props.theme.colors.calendarPage.todayText
      : props.theme.colors.calendarPage.iconFocus};
  background-color: ${props =>
    props.$currentday === props.$day &&
    props.theme.colors.calendarPage.todayBg};

  transition: box-shadow 250ms linear;

  &:hover {
    box-shadow: 2px 2px 10px 2px
      ${props => props.theme.colors.calendarPage.hoverCell};
  }

  @media screen and (min-width: 768px) {
    padding: 4px 8px;
    font-size: 16px;
    line-height: 1.12;
  }
`;
