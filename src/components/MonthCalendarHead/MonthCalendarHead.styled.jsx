import styled from 'styled-components';

export const WeekDaysWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1px;
  background-color: ${props => props.theme.colors.calendarPage.mainBg};
  border: 1px solid ${props => props.theme.colors.calendarPage.border};
  border-radius: 8px;
  text-align: center;
  padding: 8px;
  margin-bottom: 14px;

  @media screen and (min-width: 375px) {
    padding: 16px;
  }
  @media screen and (min-width: 768px) {
    padding: 14px;
    margin-bottom: 18px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1067px;
  }
`;

export const WeekDay = styled.p`
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: calc(18 / 16);
  text-transform: uppercase;
  color: ${props =>
    props.$isWeekendDay
      ? props.theme.colors.calendarPage.todayBg
      : props.theme.colors.calendarPage.iconFocus};
`;
