import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 1.2px;

  border-radius: 8px;
  overflow: hidden;
  text-align: center;

  min-width: 270px;
  height: 380px;
  width: 100%;

  background-color: ${props => props.theme.colors.calendarPage.border};
  border: 1px solid ${props => props.theme.colors.calendarPage.border};

  @media screen and (min-width: 375px) {
    min-width: 335px;
    min-height: 470px;
  }

  @media screen and (min-width: 768px) {
    min-width: 704px;
    min-height: 720px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 1067px;
    min-height: 625px;
  }
`;

export const Cell = styled(Link)`
  background-color: ${props => props.theme.colors.calendarPage.mainBg};
  min-width: 100%;
  min-height: 100%;

  transition: box-shadow 250ms linear;

  &:hover {
    box-shadow: 5px 5px 15px 5px
      ${props => props.theme.colors.calendarPage.hoverCell};
  }

  overflow: hidden;
  overflow-y: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export const RowInCell = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const ShowDay = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 4px;
  margin-right: 2px;
  margin-bottom: 14px;

  @media screen and (min-width: 375px) {
    margin-top: 8px;
    margin-right: 4px;
    margin-bottom: 18px;
  }

  @media screen and (min-width: 768px) {
    margin-top: 14px;
    margin-right: 14px;
  }
`;

export const Day = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: ${p => (p.$isNotCurrentDay ? '22px' : '0')};
  width: ${p => (p.$isNotCurrentDay ? '20px' : '0')};

  font-size: 12px;
  font-weight: 700;
  line-height: calc(14 / 12);

  color: ${props =>
    props.$isSelectedMonth
      ? props.theme.colors.calendarPage.iconFocus
      : props.theme.colors.calendarPage.notCurrentMonthDate};

  @media screen and (min-width: 768px) {
    height: ${p => (p.$isNotCurrentDay ? '26px' : '0')};
    width: ${p => (p.$isNotCurrentDay ? '27px' : '0')};

    font-size: 16px;
    line-height: calc(18 / 16);
  }
`;

export const CurrentDay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 22px;
  width: 20px;
  padding: 4px 6px;
  border-radius: 6px;

  background-color: ${props => props.theme.colors.calendarPage.todayBg};
  color: ${props => props.theme.colors.calendarPage.todayText};

  @media screen and (min-width: 768px) {
    height: 26px;
    width: 27px;
    padding: 4px 8px;
    border-radius: 8px;
  }
`;

export const TasksList = styled.ul`
  margin: 0;
  text-align: center;
  list-style-position: inside;
  padding-left: 2px;
  padding-right: 2px;

  @media screen and (min-width: 768px) {
    padding-left: 4px;
    padding-right: 4px;
  }
`;

export const TaskItem = styled.button`
  position: relative;
  margin: 0;
  margin-bottom: 1px;
  padding: 4px 2px 4px 8px;
  width: 100%;
  height: 22px;

  text-overflow: ellipsis;
  text-align: left;
  font-size: 10px;
  font-weight: 700;
  line-height: calc(14 / 10);

  overflow: hidden;
  white-space: nowrap;
  border: none;
  border-radius: 8px;

  background-color: ${props => {
    switch (props.$priority) {
      case 'high':
        return props.theme.colors.calendarPage.month.hightTaskBg;
      case 'medium':
        return props.theme.colors.calendarPage.month.mediumTaskBg;
      case 'low':
        return props.theme.colors.calendarPage.month.lowTaskBg;
      default:
        return;
    }
  }};
  color: ${props => {
    switch (props.$priority) {
      case 'high':
        return props.theme.colors.calendarPage.month.hightTaskText;
      case 'medium':
        return props.theme.colors.calendarPage.month.mediumTaskText;
      case 'low':
        return props.theme.colors.calendarPage.month.lowTaskText;
      default:
        return;
    }
  }};

  @media screen and (min-width: 768px) {
    padding: 4px 4px 4px 10px;
    font-size: 14px;
    line-height: calc(18 / 14);
    height: 26px;
  }
`;
